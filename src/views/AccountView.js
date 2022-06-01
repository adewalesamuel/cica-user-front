import { useCallback, useEffect, useMemo, useState } from "react";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Utils } from "../utils";

export function AccountView(props) {
    const abortController = useMemo(() => new AbortController(), []);
    const userId = Utils.Auth.getUser().id ?? null;

    const useUtilisateur = Hooks.useUtilisateur();
    
    const [isProfileDisabled, setIsProfileDisabled] = useState(false);

    const handleProfileSubmit = event => {
        event.preventDefault();

        const {password, confirmer_password} = useUtilisateur;

        if (password !== confirmer_password) 
            return alert("Les mots de passe doivent être identique!");

        if (!useUtilisateur.has_accepted_conditions)
            return alert("Vous devez accepter les conditions d'utilisation");
        
        setIsProfileDisabled(true);

        useUtilisateur.updateUtilisateur(userId, abortController.signal)
        .then(response => {
            setIsProfileDisabled(false);
        })
        .catch(err => {
            console.log(err);
            setIsProfileDisabled(false);
        })
    }

    useEffect(() => {
        useUtilisateur.getUtilisateur(userId, abortController.signal);    
        return () => {
            //
        }
    }, [])
    
    return (
        <>
        <h2>Modifier vos informations</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <Components.UtilisateurForm useUtilisateur={useUtilisateur}
                    isDisabled={isProfileDisabled} handleFormSubmit={handleProfileSubmit}/>
                </div>
            </div>
          </div>
        </div>
    </>
    )
}