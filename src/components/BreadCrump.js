export function BreadCrump(props) {
    return(
        <div className="content-header row">
        <div className="content-header-left col-12 mb-2 mt-1">
            <div className="row breadcrumbs-top">
                <div className="col-12">
                    <h5 className="content-header-title float-left pr-1 mb-0">Form Wizard</h5>
                    <div className="breadcrumb-wrapper col-12">
                        <ol className="breadcrumb p-0 mb-0">
                            <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item"><a href="#">Forms</a>
                            </li>
                            <li className="breadcrumb-item active">Form Wizard
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}