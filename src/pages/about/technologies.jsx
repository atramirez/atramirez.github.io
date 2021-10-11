import React from "react";
import {FaGitAlt} from "react-icons/fa"
import {DiPostgresql, DiLinux} from "react-icons/di"
import {SiPandas, SiSqlite} from "react-icons/si"

function Technoglogies(){
    return(
        <div style = {{textAlign:"center", justifyContent: "center"}}>
            <h3>
                <FaGitAlt size = {100} /> <DiLinux size = {100}/> <SiPandas size = {100} /> <DiPostgresql size = {100} /> <SiSqlite size = {100} />
            </h3>
        </div>
    );
}

export default Technoglogies;