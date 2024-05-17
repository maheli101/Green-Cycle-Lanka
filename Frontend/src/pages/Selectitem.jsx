import React, { useState } from 'react';
import PlasticImage from '../assets/Plastic.png';
import PaperImage from '../assets/Paper.png';
import MetalImage from '../assets/Metal.png';
import GlassImage from '../assets/Glass.png';

const SelectItem = () => {
    const [selectedItem, setSelectedItem] = useState('Plastic');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const validateAddress = (address) => {
        // Simple validation for demonstration (you can replace it with your own validation logic)
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
            // Proceed to the next step
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="select-item-container">
            <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="Plastic">Plastic</option>
                <option value="Paper">Paper</option>
                <option value="Metal">Metal</option>
                <option value="Glass">Glass</option>
            </select>

            {selectedItem === "Plastic" && <img src={PlasticImage} alt="Plastic" />}
            {selectedItem === "Paper" && <img src={PaperImage} alt="Paper" />}
            {selectedItem === "Metal" && <img src={MetalImage} alt="Metal" />}
            {selectedItem === "Glass" && <img src={GlassImage} alt="Glass" />}

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
