import './App.css';
import {
    Link 
     } from "react-router-dom";
    
    const Home = () => {
        return (
            <div className="home-page-container">    
                <Link to="/jobs"><button className="view-jobs-button">Ver empleos</button></Link>
            </div>
        );
    }
    
    export default Home;