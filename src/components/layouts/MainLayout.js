import {Route, Routes, useNavigate} from 'react-router-dom'
import { useEffect } from "react";

import { Components } from "..";
import { Views } from "../../views";
import { Utils } from "../../utils";

import '../../assets/libs/slick-slider/slick/slick.css';
import '../../assets/libs/slick-slider/slick/slick-theme.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/icons.min.css';
import '../../assets/css/app.min.css';

export function MainLayout(props) {
    window.document.body.className = "";
    const navigate = useNavigate();
    const isLoggedIn = Utils.Auth.isLoggedIn();

    useEffect(() => {
        if (!isLoggedIn) navigate('/auth/connexion');
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) return null;

    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div id="layout-wrapper">
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <Routes>
                                <Route exact path="" element={<Views.DashboardView />} />
                                <Route exact path="profile" element={<Views.AccountView />} />
                                <Route exact path="resumes/:id/modifier" element={<Views.ResumeEditView />} />
                                <Route exact path="resumes/creer" element={<Views.ResumeCreateView />} />
                                <Route exact path="resumes" element={<Views.ResumeListView />} />
                                <Route exact path="telechargements" element={<Views.TelechargementListView />} />
                            </Routes>
                        </div>
                    </div>
                    <Components.Footer />
                </div>
            </div>
        </>
    )
}