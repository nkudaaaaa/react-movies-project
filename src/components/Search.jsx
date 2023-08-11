import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type ='all');
        }
    }

    handleRadioChange = (name) => {
        console.log(name);
        this.setState({type: name});
        console.log(this.state.type);
        
    }

    render() {
        return  <div className="row">
          <div className="input-field">
            <input 
                placeholder='search' 
                id="email_inline" 
                type="search" 
                className="validate" 
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
            />
            <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button> <br />
            <div className="filter">
                <label>
                <input name="All" type="radio" checked={this.state.type === 'all'} onChange={() => this.handleRadioChange('all')}/>
                <span>All</span>
                </label>
                <label>
                <input name="Movies" type="radio" checked={this.state.type === 'movie'} onChange={() => this.handleRadioChange('movie')}/>
                <span>Movies</span>
                </label>
                <label>
                <input name="Series" type="radio" checked={this.state.type === 'series'} onChange={() => this.handleRadioChange('series')}/>
                <span>Series</span>
                </label>
            </div>
          </div>
        </div>

    }
}

export {Search}