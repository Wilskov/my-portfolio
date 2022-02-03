import React from 'react';
import "./Intro.scss";
import Me from "../../img/me.png"
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const Intro = () => {

    return (

        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-text">Hello, my name is</h2>
                    <h1 className="intro-name">William Bady</h1>
                    <div className="intro-titles">
                        <div className="intro-titles-wrapper">
                            <div className="intro-title-item">Junior Web-Dev</div>
                            <div className="intro-title-item">Front-end</div>
                            <div className="intro-title-item">Self-taught</div>
                            <div className="intro-title-item">UI/UX Designer</div>
                            <div className="intro-title-item">Writer</div>
                        </div>
                    </div>
                    <p className="intro-description">
                    I just finished my bootcamp and I want to keep learning more.
                    Start a career as a front-end developer without neglecting the back-end.
                    <br/>
                    `Limit is the Sky` 
                    <CloudQueueIcon />
                    </p>
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="#B0C3D6"
                    className="intro-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            stroke-width="3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            stroke-width="2.9895"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                stroke-width="3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className="intro-right">
                <div className="intro-img-background"></div>
                <img src={Me} alt="" className="intro-img" />
            </div>
        </div>
    );

};

export default Intro;
