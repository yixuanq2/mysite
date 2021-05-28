import React, {useEffect} from "react";
import $ from 'jquery'

function navigation() {
    $('.primary-nav').css('height', $('.logo').height());
    $('.primary-nav li').css(
        'margin-top',
        ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
    );

    $(window).resize(function () {
        setTimeout(navigation, 500);
    });
}
export default function NavBar(){
    useEffect(() => {
        navigation();
    });
        return (
            <div className="navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                            <div className="logo">
                                <a href="home"><img src="./images/logo.svg"/></a>
                            </div>
                        </div>

                        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                            <div className="primary-nav">
                                <ul>
                                    <li><a href="home">Home</a></li>
                                    <li><a href="portfolio">Portfolio</a></li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )



}