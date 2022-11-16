import './projectInfo.css'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ProjectInfo() {
    return (
        <section>
            <Container fluid className="bg-projectInfo">
                <div className="container-projectInfo">
                    <h2>Projetos</h2>
                    <div>
                        <p className="text-projectInfo">
                            Uma pequena seleção dos nossos projetos 
                            para matar sua curiosidade.
                        </p>
                    </div>
                    <Button className="button-projectInfo">Todos nossos projetos</Button>
                </div>
            </Container>
        </section>
    )
}

export default ProjectInfo;