import React from "react";
import { Link, withRouter } from "react-router-dom";
import { DiTerminalBadge } from "react-icons/di";


function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <DiTerminalBadge/>
                        atramirez
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <Link class="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link class="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);