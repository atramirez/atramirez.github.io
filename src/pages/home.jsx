import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

function Home() {
    return (
        <div className="home"style={{textAlign:"center"}}>
            <div class="container">
                <h1>
                    Hello! I'm Aden
                </h1>
                <p>
                    Welcome to my website, it is very much a work in progress currently, but will be updated whenever I am free. 
                    Front end development is a weaker spot I want to work on and this is one of the places I will work on my skills.
                </p>

                <h4>
                    Connect with me!
                </h4>

                    <a href="https://www.linkedin.com/in/atramirez/" style={{color: "black"}}> <FaLinkedin size = {50} /> </a>

                    <a href="https://www.github.com/atramirez/" style = {{color: "black"}}> <DiGithubBadge size = {50} /> </a>
            </div>
        </div>
    );
}

export default Home;