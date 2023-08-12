import React, { useState } from "react";

const  Search = (props) => {

    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');


    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleRadioChange = (name) => {
        setType(name);
        
    }


        return  <div className="row">
          <div className="input-field">
            <input 
                placeholder='search' 
                id="email_inline" 
                type="search" 
                className="validate" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className='btn search-btn' onClick={() => searchMovies(search, type)}>Search</button> <br />
            <div className="filter">
                <label>
                <input name="All" type="radio" checked={type === 'all'} onChange={() => handleRadioChange('all')}/>
                <span>All</span>
                </label>
                <label>
                <input name="Movies" type="radio" checked={type === 'movie'} onChange={() => handleRadioChange('movie')}/>
                <span>Movies</span>
                </label>
                <label>
                <input name="Series" type="radio" checked={type === 'series'} onChange={() => handleRadioChange('series')}/>
                <span>Series</span>
                </label>
            </div>
          </div>
        </div>

    }

export {Search}