import { NavLink } from "react-router-dom";

export function MainMenu(props) {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <NavLink exact="true" to="/" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Tableau de bord</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/resumes" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Mes Resumes</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}