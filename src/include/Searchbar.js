import React, { useState } from 'react';
import "../asset/css/include/searchbar.css";
const Searchbar = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    let filteredCountries = [];
    if (searchInput.length >= 3) {
        filteredCountries = countries.filter((country) => {
            return country.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    }

    return (
        <div>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
                className={`serarch-bar ${props.className}`}
            />
            {/* Render the filtered countries or use them as needed */}
            {filteredCountries.map((country, index) => (
                <div key={index}>{country.name}</div>
            ))}
        </div>
    );
};

export default Searchbar;
