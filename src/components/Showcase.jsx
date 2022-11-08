import './showcase.css'

function Showcase() {
    return(
        <section>
            <div className="container-fluid masthead">
                <div id="container-showcase">
                    <h1>Desenvolvimento</h1>
                    <h1 className="color-h1-blue">Web e Mobile</h1>
                    <p id="layout-info">
                    Especializados nas tecnologias mais modernas para atender
                    quais quer necessidades que você tenha.
                    </p>
                    <button type="button" className="btn-about-us" >Sobre nós</button>
                </div>
            </div>
        </section>
    )
}

export default Showcase;