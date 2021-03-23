

import "./style.css";



const About = () => {
    return (
        <div className="about">
            <div className="info">
                <img
                    src={`${process.env.PUBLIC_URL}/photo_2019-06-12_22-55-16.jpg`}
                    alt="person picture"
                />    
                
            </div>

            <h1>Sobre</h1>
                <p>
                Atualmente moro em Natal/RN. Tenho 23 anos sou discente em análise e desenvolvente de sistema pelo IFRN. Tenho expêriencia em suporte técnico e desenvolvimento.
                </p>

                <div className="chip">
                   <a href="https://pt.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a>
                </div>
                <div className="chip">
                   <a href="https://pt.wikipedia.org/wiki/HTML5">HTML</a>
                </div>
                <div className="chip">
                   <a href="https://pt.wikipedia.org/wiki/React_(JavaScript)">REACT</a>
                </div>
                <div className="chip">
                   <a href="https://pt.wikipedia.org/wiki/JavaScript">JS</a>
                </div>
                <div className="chip">
                   <a href="https://pt.wikipedia.org/wiki/Design_de_interface_de_usu%C3%A1rio">UI/UX</a>
                </div>
                <div className="chip">
                   <a href="#">Teste</a>
                </div>
   

        </div>
    );
};

export default About;