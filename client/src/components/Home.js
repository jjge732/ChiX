import React, {Component} from 'react';
import Form from './Form';

class Home extends Component {
    render() {
        return this.state.firstName ? (
            <div class="wrapper">
                <div class="content">
                    <h1 class="pageTitle animated slideInLeft">
                        Chi <span style="color: #4caf50">X</span>
                    </h1>
                    <p class="lead animated slideInRight">
                        Experience Chicago to the fullest potential
                    </p>
                    <Form />
                </div>
            </div>
        ) : (
            <div/>
        );
    }
}

export default Home;