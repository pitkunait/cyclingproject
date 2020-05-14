import React from 'react';
import Slider from "../../components/Slider/Slider";
import readXlsxFile from 'read-excel-file'
import Table from "react-bootstrap/Table";

class Riders extends React.Component {

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
                        racers.push({
                            id: rows.indexOf(i),
                            firstName: i[0],
                            lastName: i[1],
                            city: i[2],
                            state: i[3],
                        })
                        this.setState({racers})
                    }
                }))

    }


    render() {
        return (
            <div className="main-container">
                <Slider/>
                <div className="index-title">
                    <div className="index-title-main">
                        <h1>Riders</h1>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies varius finibus.
                        Nulla
                        facilisi. Curabitur nec lorem tincidunt, semper enim vehicula, tincidunt ipsum. Nunc et
                        pellentesque
                        nibh. Duis dignissim dapibus lacus, et aliquam mauris fermentum et. Duis vitae magna vulputate
                        ipsum
                        tincidunt porttitor finibus ac ex. Phasellus semper ex quis est malesuada molestie. Etiam ornare
                        ligula quis velit dignissim volutpat eu eu urna. Vestibulum ullamcorper fringilla maximus.</p>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City of origin</th>
                            <th>State of origin</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.racers.map((racer, index) => {
                            return (
                                <tr>
                                    <td>{racer.id}</td>
                                    <td>{racer.firstName}</td>
                                    <td>{racer.lastName}</td>
                                    <td>{racer.city}</td>
                                    <td>{racer.state}</td>
                                </tr>
                            )

                        })}

                        </tbody>
                    </Table>
                </div>


            </div>
        );
    }

};

export default Riders;