import './navbar.css'

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid" id="container-navbar">
                    <a className="navbar-brand" href="">
                        <img src="../img/logo.svg" alt="Logo" id="logo" />
                    </a>
                    
                    <button className="navbar-toggler navbar-dark" id="button-hamburguer" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav navbar-option">
                            <li className="nav-item">
                                <a className="nav-link" id="ativa" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre Nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;