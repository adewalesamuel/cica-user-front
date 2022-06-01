import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/Api";


export function ResumeListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useResume = Hooks.useResume();

    const [resumes, setResumes] = useState([]);
    
    const tableHead = ['id', 'titre', 'mots_cles', 'auteurs', 'abstract', 'status'];
    const tableActions = ['edit', 'delete'];

    const findResumeIndex = data => {
        return resumes.findIndex(resume => parseInt(resume.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/resumes/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const resumeCopy = [...resumes];
        const index = findResumeIndex(data);

        resumeCopy.splice(index, 1);
        setResumes(resumeCopy);
        useResume.deleteResume(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.UtilisateurService.getAllResume(abortController.signal)
        .then(response => {
            const resumeCopy = response.resumes.map(resume => {
                return {
                    id: resume.id,
                    titre: resume.titre,
                    mots_cles: resume.mots_cles,
                    auteurs: resume.auteurs,
                    abstract: (<a className="btn btn-link" href={`${Api.URL}/${resume.fichier_url}`}>
                        Télécharger l'abstract
                        </a>),
                    status: resume.status,
                };
            });

            setResumes(resumeCopy);
        });
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des resumes</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/resumes/creer" className="btn btn-info">Soumettre un abstract</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={resumes} 
                        tableActions={tableActions} tableName="resumes"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 