import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateCar from '../components/modals/CreateCar'

const Admin = () => {
    const [carVisible, setCarVivible] = useState(false)
    return (
        <Container>
            <Button
                variant={"outline-dark"}
                className='mt-4 p-2'
                onClick={() => setCarVivible(true)}
            >
                Добавить авто
            </Button>
            <CreateCar show={carVisible} onHide={() => setCarVivible(false)} />
        </Container>
    );
};

export default Admin;