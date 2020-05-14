import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import Slider from "../../components/Slider/Slider";
import readXlsxFile from 'read-excel-file'

class Locations extends React.Component {

    state = {
        racers: []
    }

    componentDidMount() {
        fetch('/Rider_data.xlsx')
            .then(res => res.blob())
            .then(blob => readXlsxFile(blob)
                .then(rows => {

                    const racers = []

                    for (let i of rows) {
                        if (rows.indexOf(i) === 0) {
                            continue
                        }
                        const position = i[4].replace('lat:', '').replace(' lng:', '').trim().split(", ")
                        racers.push({
                            name: `${i[0]} ${i[1]}`,
                            position: position
                        })
                        this.setState({racers})
                    }
                }))

    }


    render() {
        return (
            <div>
                <Slider/>
                <div className="index-title">
                    <div className="index-title-main">
                        <h1>Locations</h1>
                    </div>
                </div>
                <Map center={this.state.racers[0] ? this.state.racers[0].position : null} zoom={13}
                     style={{width: "100%", height: "600px"}}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {this.state.racers.map((item, index) => {
                        return (<Marker position={item.position} key={index}>
                            <Popup>{item.name}</Popup>
                        </Marker>)

                    })}

                </Map>
            </div>
        );
    }


};

export default Locations;