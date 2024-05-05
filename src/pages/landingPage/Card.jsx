import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    // eslint-disable-next-line react/prop-types
    title,
    text // Receive text prop
}) => (
    <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p> {/* Render text prop */}
                <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
            </div>
        </div>
    </div>
);

export default Card;
