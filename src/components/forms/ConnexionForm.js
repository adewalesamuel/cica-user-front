import { Components } from '..'

export function ConnexionForm(props) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' type='email' id='email' name='email' 
                    placeholder='Email' value={props.email ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.setEmail(e.target.value) ?? null} required/>
                </div>
            </div>
            <div className='col-12'>
                <div className='form-group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input className='form-control' type='password' id='password' name='password' 
                    placeholder='Mot de passe' value={props.password ?? ''}
                    disabled={props.isDisabled} 
                    onChange={ e => props.setPassword(e.target.value) ?? null} required/>
                </div>
            </div>
            
            <div className='col-12 text-right'>
                <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                onClick={props.handleFormSubmit}>
                    <span>Connexion</span>
                </button>
            </div>
        </div>
    )
}