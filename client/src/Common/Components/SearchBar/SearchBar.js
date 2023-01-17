import React, { useState } from 'react';
import "./Searchbar.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchData, setSearchData] = useState("")
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setSearchData(data);
    }
    return (
        <>
            <div className='searchbar'>
                <form>
                <div className="input-wrap">
                    <input
                        type="text"
                        placeholder="Search Your Favourite food item here"
                        value={searchData}
                        onChange={inputEvent} />
                        <button className="search-icon-button"><SearchIcon /></button>
                        
                </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar