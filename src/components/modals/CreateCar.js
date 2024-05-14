import React, { useContext } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index'

const CreateCar = ({ show, onHide }) => {
  const { car } = useContext(Context)

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить машину
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите марку</Dropdown.Toggle>
            <Dropdown.Menu className='mt-2 mb-2'>
              {car.car.map(car =>
                <Dropdown.Item key={car.car_id}>{car.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCar;