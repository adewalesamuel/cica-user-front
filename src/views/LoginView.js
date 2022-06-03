import { useState } from "react";
import { Components } from "../components";
import { Services } from "../services";
import { Utils } from "../utils";
import loginImg from './../app-assets/images/pages/login.png';

export function LoginView(props) {
    const abortController = new AbortController();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");      
    
    const [isLogInDisabled, setIsLogInDisabled] = useState(false);

    const handleConnexionSubmit = event => {
        event.preventDefault();

        const payload = {
            email,
            password
        };

        setIsLogInDisabled(true);
        Services.AuthService.login(JSON.stringify(payload), abortController.signal)
        .then(response => {
            setIsLogInDisabled(false);

            Utils.Auth.setSessionToken(response.utilisateur.api_token);
            Utils.Auth.setUser(response.utilisateur);

            window.location.replace('/front');
        })
        .catch(err => {
            setIsLogInDisabled(false);
        })

    }

    return(
        <section id="auth-login" className="row flexbox-container">
            <div style={{maxWidth: '800px', margin: '10% auto 0',}}>
                <div className="card bg-authentication mb-0">
                    <div className="row m-0">
                        <div className="col-md-6 col-12 px-0">
                            <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                <div className="card-header pb-1">
                                    <div className="card-title">
                                        <h4 className="text-center mb-2">Espace client CICA 2022</h4>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <Components.ConnexionForm email={email} password={password} 
                                        setEmail={setEmail} setPassword={setPassword} isDisabled={isLogInDisabled} 
                                        handleFormSubmit={handleConnexionSubmit}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                            <div className="card-content">
                                <img className="img-fluid" src={loginImg} alt="branding logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}