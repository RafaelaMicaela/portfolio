import { Link, useLocation } from "react-router-dom";

import "./style.css";

const About = () => {
    return (
        <div className="about">
            <div className="title">
            <h1>
                <p>Oi,</p>
                <p>Me Chamo Rafaela</p>
                <p>Desenvolvedora Fron-end</p>
            </h1>
            </div>
            
            
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/photo_2019-06-12_22-55-16.jpg`}
                    alt="person picture"
                    />
            </div>
            <div className="info">
                <h1>Sobre</h1>
                <p>
                atualmente moro em Natal/RN. Tenho 23 anos sou discente em analisé e desenvolvente de sistema pelo IFRN. Tenho expêriencia em suposte técnico e desenvolvimento.
                </p>
            </div>
            

        </div>
    );
};

export default About;