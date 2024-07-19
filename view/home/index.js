import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const ColorCircle = ({ emoji, onClick }) => (
    <div onClick={onClick}
        style={{
            fontSize: '70px',
            cursor: 'pointer',
            margin: '10px'
        }}>
        {emoji}
    </div>
);
const Homepage = () => {
    const colors = [
        { emoji: '🔴', name: 'red' },
        { emoji: '🟣', name: 'purple' },
        { emoji: '🔵', name: 'blue' }
    ];

    const [clickedColors, setClickedColors] = useState([]);

    const handleClick = (color) => {
        console.log(color);
        setClickedColors([...clickedColors, color]);
        
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Click the circles</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {colors.map((color) => (
                    <ColorCircle
                        emoji={color.emoji}
                        color={color.name}
                        onClick={() => handleClick(color.name)}
                    />
                ))}
            </div>
            {clickedColors.length > 0 && (
            <table class="table">
                <thead>
                    <tr>
                        <th scope='row'>No.</th>
                        <th scope='row'>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clickedColors.map((color, index) => (
                            <tr key={index}>
                                <th scope='row'> {index + 1} </th>
                                <th> {color} </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            )}
        </div >
    );
};
export default Homepage;


