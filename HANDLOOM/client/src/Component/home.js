import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";


export default class Home extends React.Component
{
    render(){
        return(
            <div>
                <Header/>
               <Navbar/>
                {/* CAROSIAL */}
                
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner ">
                            <div class="h-carosial1 carousel-item active">
                            <img src={require("../image/carosial/360_F_230649847_CweGyH0JOmXxmX9AoAnqYpDw2MBPITfK (1).jpg")} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item h-carosial1">
                            <img src={require("../image/carosial/indian-saree-design-19704685.jpg")} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item h-carosial">
                            <img src={require("../image/carosial/download.jpg")} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item h-carosial">
                            <img src={require("../image/carosial/images.jpg")} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                </div>
                
                {/* IMAGES */}

                <div className="h-bg"><br/><br/>
                    <div className="col-sm he-h1">
                        <h2 class="text text-center">Shop by categoty</h2>
                    </div>

                    <div className="row">
                        <div className="col-sm-2">
                        <img src={require("../image/home/Kancheepuram.jpg")} className="h-img"/>
                        <p className="he-p">Kancheepuram <br />Pure Silk Sarees</p>
                        </div>

                        <div className="col-sm-2">
                        <img src={require("../image/home/arani.jpg")} className="h-img"/>
                            <p className="he-p">Arani Silk Sarees</p>
                        </div>

                        <div className="col-sm-2">
                        <img src={require("../image/home/aruppukottai.jpg")} className="h-img"/>
                        <p className="he-p">Aruppukottai Silk<br/> Sarees</p>
                        </div>

                        <div className="col-sm-2">
                        <img src={require("../image/home/chedibutta1.jpg")} className="h-img"/>
                        <p className="he-p">Chedibutta Sarees</p>
                        </div>

                        <div className="col-sm-2">
                        <img src={require("../image/home/kovai.jpg")} className="h-img"/>
                        <p className="he-p">Kovai Silk Sarees</p>
                        </div>

                        <div className="col-sm-2">
                        <img src={require("../image/home/Thirubuvanam.jpg")} className="h-img"/>
                        <p className="he-p">thirubavanam Silk<br/> Sarees</p>
                        </div>
                    </div>
                </div>

                {/* USING BUTTON */}

                <div className="row h-b-btn1">
                    <div className="col-sm-1">
                    <button class="btn btn-outline-warning"><b>Popular</b></button>
                    </div>

                    <div className="col-sm-1">
                    <button class="btn btn-outline-warning"><b>BestSeller</b></button>
                    </div>

                    <div className="col-sm-2 h-b-btn">
                    <button class="btn btn-outline-warning"><b>Special</b></button>
                    </div>
                </div>

                {/* Popular */}

                <div className="row pop-bg">
                    <div className="col-sm-3">
                        <button class="pop-card btn"><img src={require("../image/popular/popular 1.jpg")} class="pop-img"/>Palani Tie & Dye Silk sarees</button>
                    </div>

                    <div className="col-sm-3">
                        <button class="pop-card btn"><img src={require("../image/popular/popular 2.jpg")} class="pop-img"/>Palani Tie & Dye Silk sarees</button>
                    </div>

                    <div className="col-sm-3">
                        <button class="pop-card btn"><img src={require("../image/popular/popular 3.jpg")} class="pop-img"/>Palani Tie & Dye Silk sarees</button>
                    </div>

                    <div className="col-sm-3">
                        <button class="pop-card btn"><img src={require("../image/popular/popular 4.jpg")} class="pop-img"/>Palani Tie & Dye Silk sarees</button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}