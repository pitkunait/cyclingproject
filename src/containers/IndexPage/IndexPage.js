import React, {useEffect} from 'react';
import Slider from "../../components/Slider/Slider";
import Image from "react-bootstrap/Image";

const IndexPage = () => {

    const date = "10/07/2020"

    let targetDate = new Date(date);
    const tickTimer = () => {
        let now = Date.now()
        let distance = targetDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer-counter").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }

    useEffect(() => {
        tickTimer()
        setInterval(tickTimer, 1000)

    })

    return (
        <div className="main-container">
            <Slider/>
            <div className="index-title">
                <div className="index-title-main">
                    <h1>Cycling race webpage</h1>
                    <h4>Subtitle for the page</h4>
                </div>
            </div>
            <div className="container timer-container">
                <h1>Time to the event:</h1>
                <div id="timer-counter" className="timer-counter"/>
            </div>
            <div className="col-md-6 m-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies varius finibus. Nulla
                    facilisi. Curabitur nec lorem tincidunt, semper enim vehicula, tincidunt ipsum. Nunc et pellentesque
                    nibh. Duis dignissim dapibus lacus, et aliquam mauris fermentum et. Duis vitae magna vulputate ipsum
                    tincidunt porttitor finibus ac ex. Phasellus semper ex quis est malesuada molestie. Etiam ornare
                    ligula quis velit dignissim volutpat eu eu urna. Vestibulum ullamcorper fringilla maximus.</p>
            </div>
            <div className="index-images">
                <div className="col-md-6 m-auto">
                    <div className="flex-row">
                        <svg className="bi bi-clock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z"
                                  clip-rule="evenodd"/>
                            <path fill-rule="evenodd"
                                  d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z"
                                  clip-rule="evenodd"/>
                        </svg> {date}</div>
                    <div className="flex-row">
                        <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
                                  clip-rule="evenodd"/>
                        </svg> Where</div>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies varius finibus.
                        Nulla facilisi. Curabitur nec lorem tincidunt, semper enim vehicula, tincidunt ipsum. Nunc et
                        pellentesque nibh. Duis dignissim dapibus lacus, et aliquam mauris fermentum et. Duis vitae
                        magna vulputate ipsum tincidunt porttitor finibus ac ex. Phasellus semper ex quis est malesuada
                        molestie. Etiam ornare ligula quis velit dignissim volutpat eu eu urna. Vestibulum ullamcorper
                        fringilla maximus.</p>
                </div>
                <div className="col-md-8 m-auto">
                    <Image
                        src="https://media.istockphoto.com/photos/cyclists-racing-on-country-roads-picture-id1002107936?k=6&m=1002107936&s=612x612&w=0&h=MSEKI0thvagjNL-SG4fXscMHTSf028uSy98ROrFR-As="
                        className="index-image"/>
                    <Image
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        className="index-image"/>
                    <Image
                        src="https://nttprocycling.com/wp-content/uploads/2020/03/GettyImages-1211368306.jpg"
                        className="index-image"/>
                    <Image
                        src="https://www.sport.be/media/photos/2020/april/niseko.jpg"
                        className="index-image"/>
                    <Image
                        src="https://www.intrepidtravel.com/sites/intrepid/files/styles/low-quality/public/elements/product/hero/Vietnam-cycling-09.jpg"
                        className="index-image"/>
                </div>
            </div>
        </div>

    );
};

export default IndexPage;