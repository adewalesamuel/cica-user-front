import { Components } from '..'
import { Utils } from '../../utils'

export function UtilisateurForm(props) {
    const isUserLoggedIn = Utils.Auth.getUser().id ? true : false;

    return (
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <div className='form-group'>
                    <label htmlFor='nom'>Nom</label>
                    <input className='form-control' type='text' id='nom' name='nom' 
                    placeholder='Nom' value={props.useUtilisateur.nom ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setNom(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='form-group'>
                    <label htmlFor='prenom'>Prenom</label>
                    <input className='form-control' type='text' id='prenom' name='prenom' 
                    placeholder='Prenom' value={props.useUtilisateur.prenom ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setPrenom(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='civilite'>Civilite</label>
                    <input className='form-control' type='text' id='civilite' name='civilite' 
                    placeholder='Civilite' value={props.useUtilisateur.civilite ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setCivilite(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='fonction'>Fonction</label>
                    <input className='form-control' type='text' id='fonction' name='fonction' 
                    placeholder='Fonction' value={props.useUtilisateur.fonction ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setFonction(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='specialite'>Specialite</label>
                    <input className='form-control' type='text' id='specialite' name='specialite' 
                    placeholder='Specialite' value={props.useUtilisateur.specialite ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setSpecialite(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='profession'>Profession</label>
                    <input className='form-control' type='text' id='profession' name='profession' 
                    placeholder='Profession' value={props.useUtilisateur.profession ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setProfession(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='societe'>Societe</label>
                    <input className='form-control' type='text' id='societe' name='societe' 
                    placeholder='Societe' value={props.useUtilisateur.societe ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setSociete(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='service'>Service</label>
                    <input className='form-control' type='text' id='service' name='service' 
                    placeholder='Service' value={props.useUtilisateur.service ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setService(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='form-group'>
                    <label htmlFor='adresse'>Adresse</label>
                    <input className='form-control' type='address' id='adresse' name='adresse' 
                    placeholder='Adresse' value={props.useUtilisateur.adresse ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setAdresse(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='form-group'>
                    <label htmlFor='code_postal'>Code postal</label>
                    <input className='form-control' type='text' id='code_postal' name='code_postal' 
                    placeholder='Code postal' value={props.useUtilisateur.code_postal ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setCode_postal(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor='pays'>Pays</label>
                    <input className='form-control' type='text' id='pays' name='pays' 
                    placeholder='Pays' value={props.useUtilisateur.pays ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setPays(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor='ville'>Ville</label>
                    <input className='form-control' type='text' id='ville' name='ville' 
                    placeholder='Ville' value={props.useUtilisateur.ville ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setVille(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor='telephone'>Telephone</label>
                    <input className='form-control' type='text' id='telephone' name='telephone' 
                    placeholder='Telephone' value={props.useUtilisateur.telephone ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setTelephone(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor='fax'>Fax</label>
                    <input className='form-control' type='text' id='fax' name='fax' 
                    placeholder='Fax' value={props.useUtilisateur.fax ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setFax(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='autres'>Requ??tes sp??ciales</label>
                    <input className='form-control' type='text' id='autres' name='autres' 
                    placeholder='Requ??tes sp??ciales' value={props.useUtilisateur.autres ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setAutres(e.target.value) ?? null} />
                </div>
            </div>
            <div className="col-12 mt-2">
                <h6>Informations de connexion</h6>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' type='mail' id='email' name='email' 
                    placeholder='Email' value={props.useUtilisateur.email ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setEmail(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input className='form-control' type='password' id='password' name='password' 
                    placeholder='Mot de passe' value={props.useUtilisateur.password ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setPassword(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='form-group'>
                    <label htmlFor='confirmer_password'>Confirmer le mot de passe</label>
                    <input className='form-control' type='password' id='confirmer_password' name='confirmer_password' 
                    placeholder='Mot de passe' value={props.useUtilisateur.confirmer_password ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.useUtilisateur.setConfirmerPassword(e.target.value) ?? null} required/>
                </div>
            </div>
            {!isUserLoggedIn ? 
                <div className='col-12 col-lg-6 pt-2'>
                    <div className="checkbox">
                        <input type="checkbox" name="has_accepted_conditions" id="has_accepted_conditions"
                        onChange={e => props.useUtilisateur.setHas_accepted_conditions(!props.useUtilisateur.has_accepted_conditions)} 
                        checked={props.useUtilisateur.has_accepted_conditions} value={""}/>
                        <label htmlFor="has_accepted_conditions" className="pl-1">
                            Veuillez accepter les conditions d'utilisation !
                        </label>
                    </div>
                </div>
            : null}
            <div className='col-12 text-right'>
                <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                onClick={props.handleFormSubmit}>
                    <span>{!isUserLoggedIn ? "S'inscrire" : "Enregistrer"}</span>
                </button>
            </div>
        </div>
    )
}