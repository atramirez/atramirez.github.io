import React from "react";
import Languages from "./languages";
import Technologies from "./technologies"
import personal_pic from "../../Assets/personal_pic.jpg";
import styles from "../../styles.module.css"

function About() {
    return (
        <div className="about" style={{ textAlign: "center" }}>
            <div class="container" style={{ textAlign: "left", padding: "30px" }}>
                <h1 style={{ textAlign: "left" }}>
                    About Me!
                </h1>

                <img src={personal_pic} alt="Picture of me" width="250" height="300" style={{ float: "right" }} />
                <p style={{ padding: "5px" }}> Hello! My name is Aden Ramirez, I am a third year Student at Arizona State University,
                    majoring in Data Science with a focus in Computer Science. </p>

                <p style={{ padding: "5px" }}> I have a passion for making clean simple to understand data visualizations. I love learning about the behind the scenes of data warehousing,
                    and following new emerging technologies. </p>
                <p style={{ padding: "5px" }}> Outside coding I love expanding my knowledge by reading, playing games, and teaching others.
                    I am also an aviation enthusiest, where I plane spot, and play flight simulators when I am not coding. </p>

                <br />
                <br />
                <br />
                <br />

                <div style={{ float: "center", textAlign: "center" }} class="test">
                    {/* <h5> Skills </h5>
                    <ul>
                        <li>Data Processing</li>
                        <li>Data Visualization</li>
                        <li>Employee Managment</li>
                        <li>Time Managment</li>
                    </ul> */}

                    <h5 style={{}}> Languages I know</h5>
                    <Languages />

                    <h5> Technoglogies I know</h5>
                    <Technologies />
                </div>

            </div>
        </div>
    );
}

export default About;