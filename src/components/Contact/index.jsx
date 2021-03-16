import "./style.css"

const About = () => {
    return (
        <div className="contact">
            <h1>Contate-me!</h1>
            <h4>Telefone</h4>
            <p>000 000 0000</p>

            <h4>Email</h4>
            <p>email@gmail.com</p>

            <div className="footer_social">
                <a href="https://github.com/RafaelaMicaela">
                    <img
                    src={`${process.env.PUBLIC_URL}/github.svg`}
                    alt="github" 
                    />

                 </a>
                <a href="https://github.com/RafaelaMicaela">
                    <img
                    src={`${process.env.PUBLIC_URL}/gmail.svg`}
                    alt="gmail" 
                    />

                </a>
                <a href="https://www.linkedin.com/in/rafaela-medeiros-72b5b2177/">
                    <img
                    src={`${process.env.PUBLIC_URL}/linkedin (1).svg`}
                    alt="linkedin" 
                    />

                </a>
            </div>

            <footer className="dev">
                <a href="https://github.com/RafaelaMicaela">
                    Feito por  <span className="core">♥</span> Rafaela 
                    
                </a>

            </footer>

      
        </div>
                
    );
};

export default About;