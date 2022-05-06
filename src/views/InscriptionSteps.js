import { useState, useEffect } from "react";
import { Components } from "../components";
import { Services } from "../services";
import { Hooks }from "../hooks";
import { Utils } from "../utils";

export function InscriptionSteps(props) {
    const abortController = new AbortController();

    const usePack = Hooks.usePack();
    const useUtilisateur = Hooks.useUtilisateur();

    const [packs, setPacks] = useState([]);
    const [categories, setCategories] = useState([]);
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

    useEffect(() => {
        Services.PackService.getAll(abortController.signal)
        .then(response => {
          setPacks(response.packs);
          Services.CategorieService.getAll(abortController.signal)
          .then(response => setCategories(response.categories))
        })
        .catch(err => console.log(err));
    
      return () => {
        //
      }
    }, [])
    
    return (
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
                                   <Components.StepItem isFirst={true} title="Packs" isCurrent={step === 1}/>
                                   <Components.StepItem title="Programmes" isCurrent={step === 2}/>
                                   <Components.StepItem title="Inscription" isCurrent={step === 3}/>
                                   <Components.StepItem title="Resume" isCurrent={step === 4}/>
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
                                    usePack={usePack} packs={packs}/>
                                : null}
                               <div className="actions clearfix mt-3">
                                   <ul role="menu" aria-label="Pagination">
                                        <li className="">
                                           <button className="btn btn-light" type="button" hidden={step === 1} 
                                           onClick={handlePrevious}>Pécedent</button>
                                        </li>
                                        <li>
                                            <button className="btn btn-primary" type="button" onClick={handleNext}>
                                                Suivant
                                            </button>
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
    )

}