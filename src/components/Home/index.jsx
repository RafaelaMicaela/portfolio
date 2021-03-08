import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Home() {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Oi,</p>
                    <p>Me Chamo Rafaela</p>
                    <p>Desenvolvedora Fron-end</p>
                </h1>
                <Link to="about">
                    <button>Mais Infor</button>
                </Link>
            </div>

            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/photo_2019-06-12_22-55-16.jpg`}
                    alt="person picture" 
                />
            </div>

        </div>

    );
}

export default Home;