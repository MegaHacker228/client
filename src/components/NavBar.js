import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../utils/const';
import { Button } from 'react-bootstrap';
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import './index.css';

const NavBar = observer(() => {
  const { user } = useContext(Context)
  let navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
      <Container>
        <NavLink to={MAIN_ROUTE} className="logo-link">PM</NavLink>
        {user.isAuth ? (
          <Row className="w-100">
            <Col className="me-auto">
              <Nav>
                <Nav.Link className="col-2" as={NavLink} to={MAIN_ROUTE} href="#about">О компании</Nav.Link>
                <Nav.Link className="col-2" as={NavLink} to={SHOP_ROUTE}>Автомобили</Nav.Link>
              </Nav>
            </Col>
            <Col xs={6} md={5} className="ms-auto text-end">
              <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}
              >
                Админка
              </Button>
              <Button variant="outline-light" className="ms-2" onClick={() => { console.log(user); user.setIsAuth(false); logOut() }}
              >
                Выйти
              </Button>
            </Col>
          </Row>
        ) : (
          <Row className="w-100">
            <Col className="me-auto">
              <Nav>
                <Nav.Link className="col-2" as={NavLink} to={MAIN_ROUTE} href="#about">О компании</Nav.Link>
                <Nav.Link className="col-2" as={NavLink} to={SHOP_ROUTE}>Автомобили</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} md="auto" className="col-2 ms-auto text-end">
              <Button variant="outline-light" onClick={() => { console.log(user); navigate(LOGIN_ROUTE) }}
              >
                Авторизация
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;