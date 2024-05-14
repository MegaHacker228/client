import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import testIMG from '../source/cardM4.jpg';
import { useNavigate } from 'react-router-dom'
import { CAR_ROUTE } from '../utils/const';

const CarItem = ({ car }) => {
    let navigate = useNavigate()

    return (
        <Col xs={12} sm={6} md={4}>
            <Card className="product-card">
                {/* <Card.Img variant="top" src={testIMG} /> */}
                <Image src={process.env.REACT_APP_API_URL + car.img} />
                <Card.Body>
                    <Card.Title>{car.brand} {car.model}</Card.Title>
                    <Card.Text>
                        <strong>Цвет:</strong> {car.color}<br />
                        <strong>Кузов:</strong> {car.body_type}<br />
                        <strong>Тип двигателя:</strong> {car.engine_type}<br />
                        <strong>Объем двигателя:</strong> {car.engine_displacement}<br />
                        <strong>Лошадиные силы:</strong> {car.engine_power}<br />
                        <strong>Цена:</strong> {car.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(CAR_ROUTE + '/' + car.car_id)}>Купить</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CarItem;