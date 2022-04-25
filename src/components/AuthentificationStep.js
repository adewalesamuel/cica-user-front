import { Components } from ".";

export function AuthentificationStep(props) {
    return (
        <>
        <div className="row">
            {!props.isSignedIn || props.isLoggedIn ? 
                <div className="col-12 col-lg-6">
                    <h6 className="py-50">Inscrivez vous</h6>
                    <Components.UtilisateurForm useUtilisateur={props.useUtilisateur}
                    handleFormSubmit={props.handleInscriptionSubmit ?? null}
                    isDisabled={props.isSignInDisabled}/>
                </div>
            : null }
            {!props.isLoggedIn ? 
                <div className="col-12 col-lg-6">
                    <h6 className="py-50">Connectez vous</h6>
                    <Components.ConnexionForm setMot_de_passe={props.setMot_de_passe ?? null}
                    setEmail={props.setEmail ?? null} mot_de_passe={props.mot_de_passe}
                    email={props.email} handleFormSubmit={props.handleConnexionSubmit ?? null}
                    isDisabled={props.isLogInDisabled}/>
                </div>
            :
            <div className="alert alert-success">
                Vous êtes déja connecté veuillez cliquer sur suivant !
            </div> 
            }
        </div>

        </>
    )
}