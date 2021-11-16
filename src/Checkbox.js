import React, { useState } from 'react'

const Checkbox = ({ name, value, movie, upsertMovie }) => {
console.log(value);
    const [checked, setChecked] = useState(value == 1)

    const handleChange = (event) => {
        setChecked(event.target.checked)
        upsertMovie({...movie, [name.toLowerCase()]: event.target.checked ? 1 : 0})
    }

    return (
        <>
            <input className="cbx" type="checkbox" id={"cbx_" + name + movie.id} checked={checked} onChange={handleChange} />
            <label htmlFor={"cbx_" + name + movie.id} className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
            <span className="ps-2 pt-2">{name}</span>
        </>
    )
}

export default Checkbox