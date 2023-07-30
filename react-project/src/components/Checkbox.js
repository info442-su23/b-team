import React, { useState } from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="custom-label">
            <input type="checkbox" className="custom-checkbox" checked={isChecked} onChange={handleChange} />
        </label>
    );
};

export default Checkbox;