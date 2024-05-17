import React, { useState } from 'react';
import PlasticImage from '../assets/Plastic.png';
import PaperImage from '../assets/Paper.png';
import MetalImage from '../assets/Metal.png';
import GlassImage from '../assets/Glass.png';

const SelectItem = () => {
    const [selectedItem, setSelectedItem] = useState('Plastic');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');

    const validateAddress = (address) => {
        // Add address validation logic here
        return true;
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
            </label>

            {validateAddress(address) && weight !== '' && (
                <button className="next-button" onClick={() => console.log('Next')}>
                    Next
                </button>
            )}

            <style jsx>{`
                .select-item-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                select {
                    /* Add your select styles here */
                }

                img {
                    max-width: 100%;
                    height: auto;
                }

                .input-label {
                    margin-top: 10px;
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
