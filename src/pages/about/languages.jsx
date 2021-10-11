import React from "react";
import {DiPython, DiJava} from "react-icons/di";
import {SiR} from "react-icons/si"
import {CgCPlusPlus} from "react-icons/cg"
//import {Col, Row} from "react"

function Languages(){
    return (
        <div style = {{textAlign:"center", justifyContent: "center"}}>
            <h3> <DiPython size={100} />  <SiR  size = {100}/> <CgCPlusPlus size = {100}/> <DiJava size = {100}/> </h3>
        </div>
    );

    
}

export default Languages