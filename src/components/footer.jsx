import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

function Footer (){
    return (
        <div className="footer" style={{ textAlign:"right" }}>
            <a href="https://www.linkedin.com/in/atramirez/" style={{color: "black"}}> <FaLinkedin size={20} /> </a>
            <a href="https://www.github.com/atramirez/" style={{color: "black"}}> <DiGithubBadge size={20} /> </a>
        </div>
    );
}

export default Footer