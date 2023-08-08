import React, { useState } from 'react';

const Checkbox = ({ onChange, points }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange(newChecked); // Notify the parent component
    };

    return (
        <label className="custom-label">
            <input type="checkbox" className="custom-checkbox" checked={isChecked} onChange={handleChange} />
        </label>
    );
};

export default Checkbox;
