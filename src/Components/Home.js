import {
    Link 
     } from "react-router-dom";
    
    const Home = () => { // vista principal de botón para ver empleos
        return (
            <div className="home-page-container">    
                <Link to="/jobs"><button className="view-jobs-button">Ver empleos</button></Link>
            </div>
        );
    }
    
    export default Home;