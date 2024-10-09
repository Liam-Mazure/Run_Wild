import React from 'react';
import { Link } from "react-router-dom";

function Home(){

    return(
        <div className='home_screen'>
            <div className='homeTopImg'>
                <span>
                    <img id = "org_field" src = {require("./images/OrgFlower_Field.jpg")} alt = "field of orange flowers"></img>
                </span>

                <div id='home_img_center'>
                    <div>
                        <h1 id = 'homeImgTitle'>Envisioning the Future of Entertainment</h1>
                        <h3 id = 'homeImgTxt'>Discover whats to come</h3>
                    </div>
                    <div className='home_btn_block'>

                        <Link to = '/games'>
                            <button className='home_button'>Games</button>
                        </Link>
                    </div>
                </div>
                
            </div>

            <div className='home-vidContainer'>
                <video autoPlay loop muted>
                    <source  src = {require("./images/fultonWatson_train.mp4")}></source>
                </video>
                <div className='homeVid_block'>
                    <h1 id ='homeVid_title'>Creativity Has No Limits</h1>
                    <Link to = '/films'>
                        <button className='home_button'>Films</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home;