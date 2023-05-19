import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#inicio">BlueStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nosotros">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>                            
                        </ul>
                        <div className="d-flex">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default NavBar