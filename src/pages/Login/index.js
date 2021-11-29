import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

const Login = function Login() {
    return (
        <Container>
            <Title>
                Login
                <br />
                <small>Hallo</small>
            </Title>
            <Paragrafo>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                voluptatibus adipisci unde eius commodi nobis nostrum, numquam
                aliquid dignissimos tempora.
            </Paragrafo>
            <button type="button"> Enviar </button>
        </Container>
    );
};

export default Login;
