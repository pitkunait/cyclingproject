import React from 'react';
import Slider from "../../components/Slider/Slider";
import Image from "react-bootstrap/Image";

const axios = require("axios").default

class Gallery extends React.Component {
    state = {
        images: []
    }

    loadImages = (page) => {
        console.log("I am going to load page" + page);
        const pageParam = `&page=${page}`
        const string = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=02d12a45de3359bf358f67db6b70a927&tags=bikerace" + pageParam
        axios
            .get(string)
            .then((message) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(message.data, "text/xml");
                const newlist = [...this.state.images]
                let count = 0
                for (let i of xmlDoc.getElementsByTagName("photo")) {
                    const id = i.attributes.id.value;
                    const farm = i.attributes.farm.value;
                    const server = i.attributes.server.value;
                    const secret = i.attributes.secret.value;
                    newlist.push(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`)
                    if (count === 40) {
                        break;
                    }
                }
                this.setState({images: newlist})
            })
            .catch((err) => console.log(err))
    }

    loadAfterScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            // console.log(images.length)
            // console.log(images)
            const pages = Math.round(this.state.images.length  / 40) + 1
            this.loadImages(pages)
        }
    }
    componentDidMount() {
        this.loadImages(1)
        window.addEventListener('scroll', this.loadAfterScroll);
    }

    render(){
        return (
            <div className="main-container">
                <Slider/>
                <div className="index-title">
                    <div className="index-title-main">
                        <h1>Gallery</h1>
                        {/*<h4>Subtitle for the page</h4>*/}
                    </div>
                </div>
                <div className="col-md-12 align-self-center">
                    {this.state.images.map((image, index) => {
                        return (
                            <Image
                                key={index}
                                src={image}
                                className="index-image"/>
                        )
                    })}
                </div>


            </div>
        );
    }

};

export default Gallery;