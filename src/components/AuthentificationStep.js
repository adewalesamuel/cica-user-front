import { Components } from ".";

export function AuthentificationStep(props) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <center>
                    <h6 className="text-warning">Avez vous déjà un compte ?</h6>
                    <fieldset className="d-inline-block">
                        <div className="radio">
                            <input type="radio" name="hasAccount" id="hasAccountTrue" 
                            onChange={e => props.setHasAccount(true) ?? null} checked={props.hasAccount}/>
                            <label htmlFor="hasAccountTrue">
                                Oui
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="d-inline-block ml-4">
                        <div className="radio">
                            <input type="radio" name="hasAccount" id="hasAccountFalse" 
                            onChange={e => props.setHasAccount(false) ?? null} checked={!props.hasAccount}/>
                            <label htmlFor="hasAccountFalse">
                                Non
                            </label>
                        </div>
                    </fieldset>
                </center>
            </div>
            {!props.hasAccount ?
            <>
                {!props.isLoggedIn ? 
                <>
                {!props.isSignedIn ?
                    <div className="col-12">
                        <h5 className="py-50">Inscrivez vous</h5>
                        <Components.UtilisateurForm useUtilisateur={props.useUtilisateur}
                        handleFormSubmit={props.handleInscriptionSubmit ?? null}
                        isDisabled={props.isSignInDisabled}/>
                    </div>
                :
                <div className="col-12 mt-2">
                    <div className="alert alert-success">
                        Vous êtes inscris veuillez cliquer sur suivant !
                    </div> 
                </div>}
                
                </>
                : 
                <div className="col-12 mt-2">
                    <div className="alert alert-success">
                        Vous êtes connecté veuillez cliquer sur suivant !
                    </div> 
                </div> }
            </> :
            <>
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
            </>}
            
        </div>
    )
}