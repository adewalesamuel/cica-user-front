import {Route, Routes} from 'react-router-dom'
import { Views } from "../../views";

import '../../app-assets/vendors/css/vendors.min.css';
import '../../app-assets/css/bootstrap.css';
import '../../app-assets/css/bootstrap-extended.css';
import '../../app-assets/css/colors.css';
import '../../app-assets/css/components.css';
import '../../app-assets/css/themes/dark-layout.css';
import '../../app-assets/css/themes/semi-dark-layout.css';
import '../../app-assets/css/core/menu/menu-types/horizontal-menu.css';
import '../../app-assets/css/plugins/forms/wizard.css';
import '../../assets/css/style.css';
import '../../index.css';

export function AuthLayout(props) {
    return (
        <>
        <div className="app-content">
            <div className="content-overlay">
                <div className="content-body">
                    <Routes>
                        <Route exact path="inscription" element={<Views.InscriptionSteps />} />
                        <Route exact path="connexion" element={<Views.LoginView />} />
                    </Routes>
                </div>
            </div>
        </div>
        </>
    )
}
