import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import Row from 'react-bootstrap/Row';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: window.innerHeight - 54, marginTop: "20px" }}
        >
            <Card style={{ width: "600px", paddingTop: "20px", paddingBottom: "20px" }} className="p-4">
                <h2 className="text-center mb-4">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin ?
                        <div>
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш пароль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                        :
                        <div>
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваше имя"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите вашу фамилию"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваше отчество"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш номер телефона"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш пароль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button className="mt-3 align-self-end"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;