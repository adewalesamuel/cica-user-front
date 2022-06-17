import { useState, useEffect, useMemo } from "react";
import { Components } from "../components";
import { Services } from "../services";
import { Hooks } from "../hooks";
import { Utils } from "../utils";

import heroBgImage from '../app-assets/images/backgrounds/inscription-image-bg.jpg';
import packIcon from '../app-assets/images/icon/packs.svg';
import programmeIcon from '../app-assets/images/icon/programmes.svg';
import authIcon from '../app-assets/images/icon/authentfication.svg';
import resumeIcon from '../app-assets/images/icon/resume.svg';
import { useSearchParams } from "react-router-dom";

export function InscriptionSteps(props) {
    const abortController = useMemo(() => {
        return new AbortController();
    }, []);

    const isPaymentSuccess = useSearchParams()[0].get('success');
    const isPaymentCanceled = useSearchParams()[0].get('canceled');
    const payment_id = useSearchParams()[0].get('payment_id');

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
    const [isDisabled, setIsDisabled] = useState(false);
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
            return alert("Vous devez accepter les conditions d'utilisation");
        
        setIsSignInDisabled(true);

        useUtilisateur.createUtilisateur(abortController.signal)
        .then(response => {
            setIsSignedIn(true);
            setIsLoggedIn(true);
            setIsSignInDisabled(false);

            useUtilisateur.setId(response.utilisateur.id);

            Utils.Auth.setSessionToken(response.utilisateur.api_token);
            Utils.Auth.setUser(response.utilisateur);

            setStep(4);
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

            setStep(4);
        })
        .catch(err => {
            setIsLogInDisabled(false);
        });

    };
    const handlePaiementSubmit = event => {
        event.preventDefault();

        let payload = {
            pack_id: usePack.id,
            programme_ids: JSON.stringify(programmeIds),
            utilisateur_id: Utils.Auth.getUser() ? Utils.Auth.getUser().id : null,
            prix: usePack.prix,
            mode_paiement: usePaiementGateway.nom
        };

        setIsDisabled(true);
        Services.InscriptionService.create(JSON.stringify(payload), abortController.signal)
        .then(response => {
            window.location.assign(response.payment_gateway_url);

            setIsDisabled(false)
        })
        .catch(err => {
            setIsDisabled(false);
        });
    }

    useEffect(() => {
        if (payment_id) {
            const payload = { payment_id };

            setStep(5);
            
            if (isPaymentSuccess) {
                Services.InscriptionService.validatePayment(JSON.stringify(payload), abortController.signal)
                .then(response => console.log(response))
                .catch(err => null);
            }
          
            if (isPaymentCanceled) {
                Services.InscriptionService.cancelPayment(JSON.stringify(payload), abortController.signal)
                .then(response => console.log(response))
                .catch(err => null);
            }

            return;
        };
        (async function(){
            try {
                let response = null;
                response = await Services.PackService.getAll(abortController.signal);

                setPacks(response.packs);

                response = await Services.CategorieService.getAll(abortController.signal);

                setCategories(response.categories);

                response = await Services.PaiementGatewayService.getAll(abortController.signal);

                setPaiement_gateways(response.paiement_gateways);
            } catch (error) {
                console.log(error);   
            };
        })();
      return () => {
        //
      }
    }, [abortController])
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
                                    {step === 5 ? 
                                        <Components.ThankyouStep />
                                    : null}
                                <div className="actions clearfix mt-3">
                                    <ul role="menu" aria-label="Pagination">
                                            <li className="">
                                                {(step > 1 && step < 5) ? 
                                                    <button className="btn btn-light" type="button" hidden={step === 1} 
                                                    onClick={handlePrevious} disabled={isDisabled}>Pécedent</button>
                                                : null}
                                            </li>
                                            {step < 4 ? 
                                                <li>
                                                    <button className="btn btn-primary" type="button" onClick={handleNext}>
                                                        Suivant
                                                    </button>
                                                </li> :
                                                <li>
                                                    {step < 5 ?
                                                        <button className="btn btn-success" onClick={handlePaiementSubmit}
                                                        disabled={isDisabled}>
                                                            {isDisabled ? "Réservation en cours..." : "Validez la réservation"}
                                                        </button>
                                                    : null}
                                                </li>}
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
    );

};