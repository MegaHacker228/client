import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/index.css';
import testIMG from '../source/cardM4.jpg';
import CarList from '../components/CarList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCar } from '../http/carAPI';

const Shop = observer(() => {
    // const { image, brand, model, color, body, engineVolume, horsepower, price } = product;
    const {car}=useContext(Context)

    useEffect(()=>{
        fetchCar().then(data => car.setCar(data.rows))
        console.log(car)
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col className='header-text'>
                        Наши текущие предложения автомобилей
                    </Col>
                </Row>
                <CarList />
            </Container>
        </div>
    );
});

export default Shop;