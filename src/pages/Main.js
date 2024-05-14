import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import '../components/index.css';
import { SHOP_ROUTE } from '../utils/const';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const aboutCompanyRef = useRef(null);
    let navigate = useNavigate()

    return (
        <div className="Main">
            <div className="image-background">
                <Container>
                    <Row className="main-text">
                        <Col md={8} style={{ width: '100%' }} className='text-1'>Элегантность и мощь в каждой детали</Col>
                        <Col md={6} style={{ width: '100%' }} className='text-2'>ВСЕГДА В СВОЕЙ СТИХИИ</Col>
                    </Row>
                </Container>
            </div>
            <div className='description-main'>
                <Container>
                    <Row className='dscrpt-text'>
                        <Col md={3} className='title-text' ref={aboutCompanyRef}>
                            О компании
                        </Col>
                        <Col md={12} className='dscrpt-text-1'>
                            Prestige Motors — это не просто автомобили, это воплощение стиля, качества и
                            надёжности. На протяжении многих лет мы предоставляем нашим клиентам исключительные
                            автомобили, сочетая передовые технологии и элегантный дизайн. Наша миссия — сделать
                            процесс выбора и покупки автомобиля удобным, прозрачным и приятным. В Prestige Motors
                            каждый автомобиль проходит строгий отбор и проверку, чтобы убедиться в его безупречном
                            состоянии и соответствии высоким стандартам. Присоединяйтесь к нам и откройте мир истинного
                            автомобильного искусства.
                        </Col>
                        <Col md={3} className='button-shop'>
                            <Button variant="outline-light" onClick={() => {navigate(SHOP_ROUTE)}} className='button-size'>Перейти к покупкам</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Main;