import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Col, Row } from 'react-bootstrap';
import CarItem from './CarItem';

const CarList = observer(() => {
    const { car } = useContext(Context)

    return (
        <Row className='d-flex'>
            {Array.isArray(car.car) && car.car.map(car =>
                <CarItem key={car.car_id} car={car} />
            )}
        </Row>
    );
});

export default CarList;