import React from "react";
import Languages from "./languages";
import Technologies from "./technologies"

function About() {
    return (
        <div className="about" style={{ textAlign: "center" }}>
            <div class="container">
                <h1>
                    About Me!
                </h1>

                <p> Hello! My name is Aden Ramirez, I am a third year Data Science Student at Arizona State University. </p>
                <br />

                <p> I have a passion for making clean simple to understand data visualizations. I love learning about the behind the scenes of data warehousing </p>
                <p> Outside coding I love expanding my knowledge by reading, playing games, and teaching others </p>

                <h5> Languages I know</h5>
                <Languages />

                <h5> Technoglogies I know</h5>
                <Technologies />

            </div>
        </div>
    );
}

export default About;