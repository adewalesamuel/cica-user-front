export function PacksStep(props) {
    return (
        <>
        <p className="pt-2">
            Le CICA, <strong>CONGRES INTERNATIONAL DE CICATRISATION DES ANTILLES</strong> est un 
            espace scientifique francophone. Il est au service des acteurs travaillant 
            dans l’écosystème de la cicatrisation et des patients qui les sollicitent.
        </p>
        <p>
            Afin de pouvoir participer à un programme, vous devez
            faire une réservation en suivant le processus ci-dessous: 
        </p>
        <ul style={{listStyleType: 'initial', paddingLeft: "30px"}}>
            <li>
                Sélection d’un pack selon la catégorie professionnel (Médecin, paramédical, 
                membres, étudiant). Le pack comprend Conférences, ateliers, collation, 
                buffet journalier. Le prix du pack varie en fonction de la qualification.
            </li>
            <li>
                L’étape suivante est le choix de programmes. Une personne peut choisir 
                plusieurs programmes. Le choix des programmes est matérialisé par des 
                cases à cocher.
            </li>
        </ul>
        <h5 className="py-50">Choisissez un pack</h5>
        <ul className="list-unstyled mb-0 mt-2">
            {props.packs.map((pack, index) => {
                return (
                    <li className="d-block mr-2 mb-1" key={index}>
                        <fieldset>
                            <div className="radio">
                                <input type="radio" name="pack_id" id={`pack${pack.id}`} checked={pack.id === props.usePack.id}
                                onChange={e => {
                                    props.usePack.setPrix(pack.prix);
                                    props.usePack.setId(pack.id);
                                    }}/>
                                <label htmlFor={`pack${pack.id}`}>
                                    <span className="pl-1">{pack.qualification ?? ''}</span>
                                    <span className="text-success ml-1">{pack.prix ?? ''} €</span>
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