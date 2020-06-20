import React, { useState } from "react";
import Naira from 'react-naira';

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0);

    const handleChange = event => {
        handleFilters(event.target.value);
        setValue(event.target.value);
    };

    return prices.map((p, i) => (

        <div key={i}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio"
                className="mr-2 ml-4"
            />
            <label className="form-check-label">
            
            {p._id == 0 ? <p>Any</p> : <p><Naira>{parseInt(p.lower)}</Naira> to <Naira>{parseInt(p.upper)}</Naira></p> }

            
            

            </label>

        </div>
    ));
};

export default RadioBox;
