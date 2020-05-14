import React from 'react';
import Slider from "../../components/Slider/Slider";
import Image from "react-bootstrap/Image";

const axios = require("axios").default

class Gallery extends React.Component {
    state = {
        images: [],
        page: 1
    }

    loadImages = () => {
        console.log("I am going to load page" + this.state.page);
        // const pageParam = `&page=${this.state}`
        // const string = "https://www.flickr.com/services/rest?method=flickr.photos.search&api_key=02d12a45de3359bf358f67db6b70a927&tags=bikerace,BoulderBikeTour"+ pageParam
        axios
            .get("https://www.flickr.com/services/rest", {
                params: {
                    method: "flickr.photos.search",
                    api_key: "02d12a45de3359bf358f67db6b70a927",
                    tags: "bikerace,BoulderBikeTour",
                    page: this.state.page,
                    per_page: 40
                }
            })
            .then((message) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(message.data, "text/xml");
                const newlist = [...this.state.images]
                for (let i of xmlDoc.getElementsByTagName("photo")) {
                    const id = i.attributes.id.value;
                    const farm = i.attributes.farm.value;
                    const server = i.attributes.server.value;
                    const secret = i.attributes.secret.value;
                    newlist.push(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`)
                }
                this.setState({images: newlist, page:this.state.page+1})
            })
            .catch((err) => console.log(err))
    }

    loadAfterScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            this.loadImages()
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