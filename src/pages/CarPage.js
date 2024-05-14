import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Image, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { fetchOneCar } from '../http/carAPI';

const CarPage = () => {
    const [car, setCar] = useState({ info: [] })
    const { car_id } = useParams()
    useEffect(() => {
        fetchOneCar(car_id).then(data => setCar(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={8}>
                    <Image width={800} height={700} src={process.env.REACT_APP_API_URL + car.img} />
                </Col>
                <Col md={4}>
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
                        <Button variant="primary">Получить предложение</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default CarPage;