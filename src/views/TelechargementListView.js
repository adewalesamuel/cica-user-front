import { useEffect, useState } from "react";
import { Components } from "../components";
import { Services } from "../services";
import { Api } from "../services/Api";


export function TelechargementListView(props) {
    const abortController = new AbortController();

    const [telechargements, setTelechargements] = useState([]);
    
    const tableHead = ['id', 'nom', 'description', 'telecharger'];
    
    useEffect(() => {
        Services.TelechargementService.getAll(abortController.signal)
        .then(response => {
            const telechargementCopy = response.telechargements.map(telechargement => {
                return {
                    id: telechargement.id,
                    nom: telechargement.nom,
                    description: telechargement.description,
                    telecharger: (<a className="btn btn-info mdi mdi-arrow-collapse-down" 
                    href={`${Api.URL}/${telechargement.url_fichier}`}>
                        </a>),
                };
            });

            setTelechargements(telechargementCopy);
        });
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des documents</h2>
            <div className="card">
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={telechargements} 
                       tableName="telechargements"/>
                </div>
            </div>
        </>
    )
} 