
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
                atualmente moro em Natal/RN. Tenho 23 anos sou discente em análise e desenvolvente de sistema pelo IFRN. Tenho expêriencia em suporte técnico e desenvolvimento.
                </p>
 
            

        </div>
    );
};

export default About;