export function ProgrammesStep(props) {
    return (
        <>
        <h5 className="py-50">Choisissez vos programmes</h5>
        <ul className="list-unstyled mb-0 mt-2">
            {props.categories.map((categorie, i) => {
                return (
                    <li key={i}>
                        <p style={{color: categorie.couleur ?? "inherit"}}>{categorie.nom ?? ""}</p>
                        <ul className="list-unstyled mb-0 mt-2">
                            {categorie.programmes.map((programme, j) => {
                                return (
                                    <li className="d-block mr-2 mb-1" key={j}>
                                        <fieldset>
                                            <div className="checkbox">
                                                <input type="checkbox" name="programme_id" id={`programme${programme.id}`}
                                                onChange={e => props.handleCheckbox(e, programme.id)} 
                                                checked={props.programmeIds.includes(programme.id)} 
                                                disabled={programme.nbr_places <= programme.nbr_place_inscrit}/>
                                                <label htmlFor={`programme${programme.id}`} className="pl-1">
                                                    {programme.titre ?? ''} 
                                                    <small>
                                                        &nbsp;le {new Date(programme.date).toLocaleDateString('fr-FR', 
                                                        {month: 'short', day: '2-digit', year: 'numeric'})} 
                                                        à <time>{programme.heure}</time>
                                                    </small>
                                                </label>
                                            </div>
                                        </fieldset>
                                    </li>
                                )
                            })}

                        </ul>

                    </li>
                )
            })}
        </ul>
        </>
    )
}