import React from 'react';
import Slider from "../../components/Slider/Slider";
import axios from 'axios';


class Contest extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        slogan: ''
    }

    putSubmission = () => {
        const submission = {...this.state}

        axios.post('https://cycling-lesson.firebaseio.com/submissions.json', submission)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            slogan: ''
        })
    }

    render() {
        return (
            <div className="main-container">
                <Slider/>
                <div className="index-title">
                    <div className="index-title-main">
                        <h1>Contest</h1>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="card m-5">
                        <div className="card-header">Add your submission</div>
                        <div className="card-body">
                            <div className="text-sm-left">
                                <div className="form-group">
                                    <label>Fist name</label>
                                    <input value={this.state.first_name} className="form-control"
                                           onChange={event => this.setState({first_name: event.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input value={this.state.last_name} className="form-control"
                                           onChange={event => this.setState({last_name: event.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={this.state.email} className="form-control"
                                           onChange={event => this.setState({email: event.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Slogan</label>
                                    <input value={this.state.slogan} className="form-control"
                                           onChange={event => this.setState({slogan: event.target.value})}/>
                                </div>

                                <button className="btn btn-primary" onClick={this.putSubmission}>Submit</button>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        );

    }


};

export default Contest;