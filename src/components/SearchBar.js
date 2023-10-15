import React from 'react';

const SearchBar = ({ setSearch }) => {
 return (
    <div>
      <input style={{textAlign:'center', width:"100%"}} type="text" placeholder="Search by city/country" onChange={(e) => setSearch(e.target.value)} />
    </div>
 );
};

export default SearchBar;