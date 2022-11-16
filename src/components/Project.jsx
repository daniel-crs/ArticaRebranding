import './project.css'

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project() {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Card className="containerCardProject customCardProject">
                                <Card.Img className="custom-img-project" variant="top" src="../../img/img-test-1.jpg" />
                                <Card.Body>
                                    <Card.Title className="custom-Card-project">ClayPhone</Card.Title>
                                    <Card.Text className="custom-Card-project-text">
                                        ClayPhone é um aplicativo para te ajudar a organizar 
                                        os seus horários de forma simples. Pensado para deixar sua 
                                        usa-bilidade a melhor possível para você.
                                    </Card.Text>
                                    <Button className="button-project">Ver projeto</Button>
                                </Card.Body>
                            </Card>  
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="containerCardProject customCardProject">
                                <Card.Img className="custom-img-project" variant="top" src="../../img/img-test-5.png" />
                                <Card.Body>
                                    <Card.Title className="custom-Card-project">Free Delivery</Card.Title>
                                    <Card.Text className="custom-Card-project-text">
                                        Um aplicativo especializado em deliveries dos mais variados produtos com muita 
                                        eficiência e os valores mais competitivos do mercado. Não perca...
                                    </Card.Text>
                                    <Button className="button-project">Ver projeto</Button>
                                </Card.Body>
                            </Card>  
                        </Carousel.Item>

                        <Carousel.Item>
                            <Card className="containerCardProject customCardProject">
                                <Card.Img className="custom-img-project" variant="top" src="../../img/img-test-4.webp" />
                                <Card.Body>
                                    <Card.Title className="custom-Card-project">Pesto Itallian Food</Card.Title>
                                    <Card.Text className="custom-Card-project-text">
                                        Pesto e um restaurante italiano que te traz uma experiência idêntica a 
                                        de comer na própria Itália. Certamente um dos melhores restaurantes de São Paulo...
                                    </Card.Text>
                                    <Button className="button-project">Ver projeto</Button>
                                </Card.Body>
                            </Card>  
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;