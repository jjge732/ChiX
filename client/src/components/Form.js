import React, {Component} from 'react';

class Form extends Component {
    render () {
        return (
            <form class="searchBar" action="./searchResults.html">
                <select name="selectionbar" id="selector" required>
                    <option value="" disabled selected
                        >Select option</option
                    >
                    <option value="Arts">Arts</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Food">Food</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Sights">Sights</option>
                    <option value="Trending">Trending</option>
                </select>
                <input
                    id="location"
                    type="text"
                    placeholder="Search address"
                    required
                />
                <div id="buttonID">
                    <button id="searchLocation" class="searchButton">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;