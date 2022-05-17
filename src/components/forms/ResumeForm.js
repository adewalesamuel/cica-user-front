import { Components } from '..'

export function ResumeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='titre'>Titre</label>
                            <input className='form-control' type='text' id='titre' name='titre' 
                            placeholder='Titre' value={props.useResume.titre ?? ''}
                            disabled={props.isDisabled} 
                            onChange={ e => props.useResume.setTitre(e.target.value) ?? null} required/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='mots_cles'>Mots cles</label>
                            <input className='form-control' type='text' id='mots_cles' name='mots_cles' 
                            placeholder='Mots cles' value={props.useResume.mots_cles ?? ''}
                            disabled={props.isDisabled} 
                            onChange={ e => props.useResume.setMots_cles(e.target.value) ?? null} required/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='auteurs'>Auteurs</label>
                            <input className='form-control' type='text' id='auteurs' name='auteurs' 
                            placeholder='Auteurs' value={props.useResume.auteurs ?? ''}
                            disabled={props.isDisabled} 
                            onChange={ e => props.useResume.setAuteurs(e.target.value) ?? null} required/>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='contenu'>Contenu</label>
                            <textarea  className='form-control' type='text' id='contenu' name='contenu' 
                            placeholder='Contenu' value={props.useResume.contenu ?? ''}
                            disabled={props.isDisabled} rows={10} 
                            onChange={ e => props.useResume.setContenu(e.target.value) ?? null} required>
                            </textarea>
                        </div>
                    </div>
                    <div className='col-12 text-right'>
                        <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                        onClick={props.handleFormSubmit}>
                            <span>Enregistrer</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}