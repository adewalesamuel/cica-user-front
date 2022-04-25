export function ProgrammesStep(props) {
    return (
        <>
        <h6 className="py-50">Choisissez vos programmes</h6>
        <ul className="list-unstyled mb-0 mt-2">
            {props.categories.map((categorie, i) => {
                return (
                    <li key={i}>
                        <h6 style={{color: categorie.couleur ?? "inherit"}}>{categorie.nom ?? ""}</h6>
                        <ul className="list-unstyled mb-0 mt-2">
                            {categorie.programmes.map((programme, j) => {
                                return (
                                    <li className="d-block mr-2 mb-1" key={j}>
                                        <fieldset>
                                            <div className="checkbox">
                                                <input type="checkbox" name="programme_id" id={`programme${programme.id}`}
                                                onChange={e => props.handleCheckbox(e, programme.id)} 
                                                checked={props.programmeIds.includes(programme.id)} value={""}/>
                                                <label htmlFor={`programme${programme.id}`} className="pl-1">
                                                    {programme.titre ?? ''}
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