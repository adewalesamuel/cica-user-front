import { useEffect, useState } from "react";
import { Services } from "../services";
import { Components } from "../components";
import { useNavigate } from "react-router-dom";

export function DashboardView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();

    const [inscriptions, setInscriptions] = useState([]);
    
    const tableHead = ['id', 'pack', 'date', 'prix', 'paiement'];
    const tableActions = ['info'];

    const handleInfoClick = (e, inscription) => {
        e.preventDefault();

        navigate('/inscriptions/' + inscription.id ?? '');
    }
    
    useEffect(() => {
        Services.UtilisateurService.getAllInscription(abortController.signal)
        .then(response => {
            const statusClasses = {
                'en-attente': 'badge-warning',
                'paye': 'badge-success',
                'annule': 'badge-secondary'
            }
            const inscriptionsCopy = response.inscriptions.map(inscription => {
                const status = inscription.status_paiement;

                return {
                    id: inscription.id,
                    pack: inscription.pack.qualification,
                    date: new Date(inscription.created_at).toLocaleDateString(
                        'fr', 
                        {'dateStyle': 'full'}),
                    prix: inscription.prix,
                    paiement: <span className={`badge ${statusClasses[status]}`}>
                        {status}
                    </span>
                };
            }) 

            setInscriptions(inscriptionsCopy);
        });
    
      return () => {
        // abortController.abort();
      }
    }, [])
    return (
        <>
        <h2>Liste des inscriptions</h2>
        <div className="card">
            <div className="card-body">
                <Components.Table {...props} tableHead={tableHead} tableData={inscriptions} 
                    tableActions={tableActions} tableName="inscriptions" 
                    handleInfoClick={handleInfoClick}/>
            </div>
        </div>
    </>
    )
} 