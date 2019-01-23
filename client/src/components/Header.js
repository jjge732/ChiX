import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav id="headerGridContainer" class="navbar fixed-top navbar-light ">
                <div class="zoom" id="headerFirstRow">
                    <h1>
                    <a href="./index.html" id="titleStyle">Chi<b>X</b></a>
                    </h1>
                </div>

                <div id="searchWrap headerSecondRow" class="justify-content-end">
                    <form class="searchBar form-inline" action="./searchResults.html">
                    <select id="selector">
                        <option disabled selected>Select option</option>
                        <option value="Arts">Arts</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Food">Food</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Sights">Sights</option>
                        <option value="Trending">Trending</option>
                    </select>
                    <input id="location" type="text" placeholder="Search address" />
                    <button id="searchLocation" class="searchButton">
                        <i class="fas fa-search"></i>
                    </button>
                    </form>
                </div>
                <div id="headerThirdRow">
                    <h2 id="currentDate" class="form-inline justify-content-end">
                    current date and time
                    </h2>
                </div>
                </nav>
            </header>
        );
    }
}

export default Header;