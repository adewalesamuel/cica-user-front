export function PanierStep(props) {
    const getPack = () => {
        const packs = props.packs ?? [];
        return props.packs.find(pack => pack.id === props.usePack.id)
    }
    return (
        <div className="row">
            <div className="col-lg-12">
                <h5 className="py-50">Resume du panier</h5>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Description</th>
                                <th>Prix unitaire</th>
                                <th>Réduction</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <ul>
                                        <li style={{textTransform: 'uppercase'}} className='mb-1'>
                                            {getPack().qualification}
                                        </li>
                                        {props.categories.map(categorie => {
                                            return (
                                                categorie.programmes.map((programme, index) => {
                                                    if (props.programmeIds.includes(programme.id)) {
                                                        return (
                                                            <li key={index}>
                                                                {programme.titre ?? ""}
                                                            </li>
                                                        )
                                                    }
                                                    
                                                })
                                            )
                                        })}
                                    </ul>
                                </td>
                                <td className="text-danger">€ {getPack().prix}</td>
                                <td></td>
                                <td className="text-danger">€ {getPack().prix}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}