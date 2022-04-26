import { Components } from ".";

export function AuthentificationStep(props) {
    return (
        <>
        <div className="row">
            {!props.isLoggedIn ? 
             <>
             {!props.isSignedIn ?
                <div className="col-12">
                    <h5 className="py-50">Inscrivez vous</h5>
                    <Components.UtilisateurForm useUtilisateur={props.useUtilisateur}
                    handleFormSubmit={props.handleInscriptionSubmit ?? null}
                    isDisabled={props.isSignInDisabled}/>
                </div>
            :null}
             
             </>
            : null }
            {!props.isLoggedIn ? 
                <div className="col-6">
                    <h5 className="py-50">Connectez vous</h5>
                    <Components.ConnexionForm setPassword={props.setPassword ?? null}
                    setEmail={props.setEmail ?? null} password={props.password}
                    email={props.email} handleFormSubmit={props.handleConnexionSubmit ?? null}
                    isDisabled={props.isLogInDisabled}/>
                </div>
            :
            <div className="col-12 mt-2">
                <div className="alert alert-success">
                    Vous connecté veuillez cliquer sur suivant !
                </div> 
            </div>
            }
        </div>

        </>
    )
}