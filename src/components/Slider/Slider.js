import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const images = [
    "https://images.immediate.co.uk/production/volatile/sites/8/2017/07/cyclingplus-hero-1.png?quality=90&resize=960,408",
    "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2019/02/sedbergh-sportive-preview-_302__163067161_248147902-e1575385161962.jpg"
]


const Slider = () => {
    return (
        <Carousel>

            {images.map((item, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 image-scaling"
                            src={item}
                            alt="First slide"
                            height={600}
                        />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default Slider;