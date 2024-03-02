import React, { useState } from 'react';

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    console.log(searchTerm.toLowerCase());

    return (
        <div>
            <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Buscar artistas"
                maxLength="800"
            />
        </div>
    );
}

export default SearchComponent;