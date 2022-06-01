import { Link, useNavigate } from "react-router-dom";

import { Utils } from "../utils";
import { Services } from "../services";
import { useState } from "react";

import logo from '../assets/images/logo.jpg';
import avatarPlaceolder from '../assets/images/avatar-placeholder.png';

export function Header(props) {
    const abortController = new AbortController();
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const logout = event => {
        event.preventDefault();

        Services.AuthService.logout(abortController.signal)
        navigate('/auth/connexion', {replace: true});
    }
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <Link to="/" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src={logo} alt="" height="50" />
                            </span>
                            <span className="logo-lg">
                                <img src={logo} alt="" height="48" />
                            </span>
                        </Link>

                        <Link to="/" className="logo logo-light">
                            <span className="logo-sm">
                                <img src={logo} alt="" height="50" />
                            </span>
                            <span className="logo-lg">
                                <img src={logo} alt="" height="48" />
                            </span>
                        </Link>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                        <i className="mdi mdi-backburger"></i>
                    </button>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block">
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                        onClick={e => setIsDropdownOpen(!isDropdownOpen)}   
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src={avatarPlaceolder}
                                alt="Header Avatar" />
                            <span className="d-none d-sm-inline-block ml-1">
                                {Utils.Auth.isLoggedIn() ? `${Utils.Auth.getUser().prenom} ${Utils.Auth.getUser().nom}`
                                : "Non connecté"}
                            </span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </button>
                        {isDropdownOpen ?  
                            <div className="dropdown-menu dropdown-menu-right" style={{display:'block'}}>
                                <Link className="dropdown-item" to="/profile">
                                    <i className="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> 
                                    Profile
                                </Link>
                                {/* <a className="dropdown-item" href="##"><i className="mdi mdi-credit-card-outline font-size-16 align-middle mr-1"></i> Billing</a>
                                <a className="dropdown-item" href="##"><i className="mdi mdi-account-settings font-size-16 align-middle mr-1"></i> Settings</a>
                                <a className="dropdown-item" href="##"><i className="mdi mdi-lock font-size-16 align-middle mr-1"></i> Lock screen</a> */}
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" onClick={logout}><i className="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</a>
                            </div>
                        : null}
                    </div>
        
                </div>
            </div>
        </header>
    )
}