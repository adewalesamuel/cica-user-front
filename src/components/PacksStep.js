export function PacksStep(props) {
    return (
        <>
        <h5 className="py-50">Choisissez un pack</h5>
        <ul className="list-unstyled mb-0 mt-2">
            {props.packs.map((pack, index) => {
                return (
                    <li className="d-block mr-2 mb-1" key={index}>
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="pack_id" id={`pack${pack.id}`} value={props.usePack.id ?? ''}
                                onChange={e => props.usePack.setId(pack.id)}/>
                                <label htmlFor={`pack${pack.id}`}>
                                    <span className="pl-1">{pack.qualification ?? ''}</span>
                                    <span className="text-success ml-1">{pack.prix ?? ''}</span>
                                </label>
                            </div>
                        </fieldset>
                    </li>
                )
            })}
        </ul>
        </>
    )
}