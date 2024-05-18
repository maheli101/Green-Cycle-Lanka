import React, { useState } from 'react';


const SelectItem = () => {
    const [selectedItem, setSelectedItem] = useState('Plastic');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const validateAddress = (address) => {
        
        if (!address.trim()) {
            setAddressError('Address is required');
            return false;
        } else {
            setAddressError('');
            return true;
        }
    };

    const handleNext = () => {
        if (validateAddress(address) && weight.trim() !== '') {
            console.log('Next');
    
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div >
            <label className="input-label">
                Amount/Weight (kg):
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>

            <label className="input-label">
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => validateAddress(address)}
                />
                {addressError && <span className="error">{addressError}</span>}
            </label>

            <button className="next-button" onClick={handleNext}>
                Next
            </button>

            <style jsx>{`
                .select-item-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                select {
                    margin-top: 10px;
                    /* Add your select styles here */
                }

                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 10px;
                }

                .input-label {
                    margin-top: 10px;
                    display: block;
                }

                .error {
                    color: red;
                    font-size: 12px;
                    margin-top: 5px;
                    display: block;
                }

                .next-button {
                    margin-top: 20px;
                    background-color: #0078d4;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default SelectItem;
