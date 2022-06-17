import { Link } from "react-router-dom";

export function ThankyouStep(props) {
    return (
        <div className="thank-you">
            <h2 className="my-4 text-center">Votre inscription a bien été enregistrée</h2>
            <div className="text-center pb-3">
                <a href="https://cica2022.com" className="btn btn-link border mr-2">Revenir au site</a>
                <Link to="/auth/connexion" className="btn btn-warning">Espace client</Link>
            </div>
        </div>
    )
}