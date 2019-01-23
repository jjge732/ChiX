import React, {Component} from 'react';
import API from './utils/API';
import Header from './Header';

class Results extends Component {
    componentDidMount() {
        API.getData(this.props.query)
            .then(res => this.setState(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return this.state ? (
            <div class="wrapper">
            <Header />

            {/* <div class="content-wrap">
                <div class="wrapping">
                <h3>Weather</h3>
                <div class="currentWeather"></div>
                <div class="collapsible sliding">
                    <h4 id="weatherCollapse">Right Now</h4>
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Temperature (&#176;F)</th>
                        <th scope="col">Wind (mph)</th>
                        <th scope="col">Outlook</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td id="currentTemp"></td>
                        <td id="currentWind"></td>
                        <td id="currentOutlook"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <br />

                <div class="collapsible sliding" id="mobileScroll">
                    <h4 id="weatherCollapse">Hourly Forecast for 5 Days</h4>
                    <div class="weatherList content-wrap2">
                    <table class="table table-striped forecastTable">
                        <thead>
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">High (&#176;F)</th>
                            <th scope="col">Low (&#176;F)</th>
                            <th scope="col">Wind (mph)</th>
                            <th scope="col">Outlook</th>
                        </tr>
                        </thead>
                        <tbody class="js-data-append"></tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>

            <br /> */}

            <div class="wrapping">
                <h3 id="queryType"></h3>
                <div class="mapListWrapper">
                <div id="map">Google Map</div>

                <div class="content-wrap2">
                    <div id="listHolder" class="list-group list-group-flush">
                    <ol></ol>
                    </div>
                </div>
                </div>
            </div>
            {/* <br />

            <div class="wrapping">
                <h3>Train Schedule</h3>

                <div class="trainBg table-responsive" id="mobileTable">
                <table class="table table-striped" id="train-table">
                    <thead>
                    <tr class="tableRowMobile">
                        <th scope="col">Station</th>
                        <th scope="col">Route</th>
                        <th scope="col">Direction</th>
                        <th scope="col">Next Arrival</th>
                        <th scope="col">Next Train</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                </div>
            </div> */}
            </div>
        ) : (
            <div/>
        );
    }
}

export default Results;