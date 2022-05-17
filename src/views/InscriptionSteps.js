import { useState, useEffect } from "react";
import { Components } from "../components";
import { Services } from "../services";
import { Hooks } from "../hooks";
import { Utils } from "../utils";

import heroBgImage from '../app-assets/images/backgrounds/inscription-image-bg.jpg';
import packIcon from '../app-assets/images/icon/packs.svg';
import programmeIcon from '../app-assets/images/icon/programmes.svg';
import authIcon from '../app-assets/images/icon/authentfication.svg';
import resumeIcon from '../app-assets/images/icon/resume.svg';

export function InscriptionSteps(props) {
    const abortController = new AbortController();

    const usePack = Hooks.usePack();
    const useUtilisateur = Hooks.useUtilisateur();
    const usePaiementGateway = Hooks.usePaiementGateway();

    const [packs, setPacks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [paiement_gateways, setPaiement_gateways] = useState([]);
    const [step, setStep] = useState(1);
    const [programmeIds, setProgrammeIds] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(Utils.Auth.isLoggedIn());
    const [isSignInDisabled, setIsSignInDisabled] = useState(false);
    const [isLogInDisabled, setIsLogInDisabled] = useState(false);
    const [hasAccount, setHasAccount] = useState(false);

    const handleNext = event => {
        event.preventDefault();
        setStep(step + 1);
    }
    const handlePrevious =  event => {
        event.preventDefault();

        if (step === 1) return;

        setStep(step - 1);
    }
    const handleCheckbox = (e, programmeId) => {
        const programmeIdsCopy = [...programmeIds];

        if (programmeIdsCopy.includes(programmeId)) {
            programmeIdsCopy.splice(programmeIdsCopy.indexOf(programmeId), 1);
        }else {
            programmeIdsCopy.push(programmeId);
        }

        setProgrammeIds(programmeIdsCopy);
    }
    const handleInscriptionSubmit = event => {
        event.preventDefault();

        const {password, confirmer_password} = useUtilisateur;

        if (password !== confirmer_password) 
            return alert("Les mots de passe doivent être identique!");

        if (!useUtilisateur.has_accepted_conditions)
            return alert("Vous devez accepter les conditions d'utilisation")
        
        setIsSignInDisabled(true);

        useUtilisateur.setHas_accepted_conditions(true);
        useUtilisateur.createUtilisateur(abortController.signal)
        .then(response => {
            setIsSignedIn(true);
            setIsSignInDisabled(false);

            useUtilisateur.setId(response.utilisateur.id);
            setStep(4)
        })
        .catch(err => {
            console.log(err);
            setIsSignInDisabled(false);
        })
    }
    const handleConnexionSubmit = event => {
        event.preventDefault();

        const payload = {
            email,
            password
        };

        setIsLogInDisabled(true);
        Services.AuthService.login(JSON.stringify(payload), abortController.signal)
        .then(response => {
            setIsLoggedIn(true);
            setIsLogInDisabled(false);

            useUtilisateur.setId(response.utilisateur.id);

            Utils.Auth.setSessionToken(response.utilisateur.api_token);
            Utils.Auth.setUser(response.utilisateur);

            setStep(4)
        })
        .catch(err => {
            setIsLogInDisabled(false);
        })

    }

    const handlePaiementSubmit = event => {
        event.preventDefault();

        const payload = {
            utilisateur_id: useUtilisateur.id,
            pack_id: usePack.id,
        }
    }

    useEffect(() => {
        (async function(){
            try {
                let response = null;
                response = await Services.PackService.getAll(abortController.signal);

                setPacks(response.packs);

                response = await Services.CategorieService.getAll(abortController.signal);

                setCategories(response.categories);

                response = await Services.PaiementGatewayService.getAll(abortController.signal);

                setPaiement_gateways(response.paiement_gateways)
            } catch (error) {
                console.log(error)   
            }
        })()
      return () => {
        //
      }
    }, [])
    return (
        <>
            <section className="text-center hero" style={{backgroundImage: `url(${heroBgImage})`}}>
                <h1 className="text-white">Reservation</h1>
            </section>
            <section id="icon-tabs" className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="card-title">Etapes de réservation</h1>
                            </div>
                            <div className="card-content mt-2">
                                <div className="card-body">
                                <form action="#" className="wizard-horizontal wizard clearfix" 
                                onSubmit={e => e.preventDefault()}>
                                <Components.Steps>
                                    <Components.StepItem isFirst={true} title="Packs" icon={packIcon} isCurrent={step === 1}/>
                                    <Components.StepItem title="Programmes" icon={programmeIcon} isCurrent={step === 2}/>
                                    <Components.StepItem title="Authentification" icon={authIcon} isCurrent={step === 3}/>
                                    <Components.StepItem title="Resume" icon={resumeIcon} isCurrent={step === 4}/>
                                </Components.Steps>

                                    {step === 1 ? 
                                        <Components.PacksStep usePack={usePack} packs={packs} />
                                    : null }
                                    {step === 2 ? 
                                        <Components.ProgrammesStep categories={categories} handleCheckbox={handleCheckbox}
                                        programmeIds={programmeIds}/>
                                    : null }
                                    {step === 3 ? 
                                        <Components.AuthentificationStep useUtilisateur={useUtilisateur} 
                                        isLogInDisabled={isLogInDisabled} setPassword={setPassword} 
                                        setEmail={setEmail} password={password} email={email} 
                                        handleConnexionSubmit={handleConnexionSubmit} isSignInDisabled={isSignInDisabled}
                                        handleInscriptionSubmit={handleInscriptionSubmit} isSignedIn={isSignedIn} 
                                        isLoggedIn={isLoggedIn} setHasAccount={setHasAccount} hasAccount={hasAccount}/>
                                    : null }
                                    {step === 4 ? 
                                        <Components.PanierStep categories={categories} programmeIds={programmeIds} 
                                        usePack={usePack} packs={packs} paiement_gateways={paiement_gateways}
                                        usePaiementGateway={usePaiementGateway}/>
                                    : null}
                                <div className="actions clearfix mt-3">
                                    <ul role="menu" aria-label="Pagination">
                                            <li className="">
                                                {step > 1 ? 
                                                    <button className="btn btn-light" type="button" hidden={step === 1} 
                                                    onClick={handlePrevious}>Pécedent</button>
                                                : null}
                                            </li>
                                            <li>
                                                {step < 4 ? 
                                                    <button className="btn btn-primary" type="button" onClick={handleNext}>
                                                        Suivant
                                                    </button>
                                                : null}
                                            </li>
                                            <li>
                                                <button className="btn btn-success">Valider</button>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}