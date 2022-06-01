export function PanierStep(props) {
    const getPack = () => {
        const packs = props.packs ?? [];
        return packs.find(pack => pack.id === props.usePack.id)
    }

    const showCategoriesWithProgrammes = () => {
        return (props.categories.map(categorie => {
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
            }));
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
                                            {getPack() ? getPack().qualification: ''}
                                        </li>
                                        {showCategoriesWithProgrammes()}
                                    </ul>
                                </td>
                                <td className="text-danger">€ {getPack() ? getPack().prix : ''}</td>
                                <td></td>
                                <td className="text-danger">€ {getPack() ? getPack().prix : ''}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="paiement_gateway">Moyens de paiement</label>
                            <select className="form-control" id="paiement_gateway" 
                            value={props.usePaiementGateway.nom ?? ""}
                            onChange={e => props.usePaiementGateway.setNom(e.target.value)}>
                                <option hidden>Selectionnez un moyen de paiement</option>
                                {props.paiement_gateways.map((paiement_gateway, index) => {
                                    return (
                                        <option value={paiement_gateway.nom} key={index}>{paiement_gateway.nom}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}