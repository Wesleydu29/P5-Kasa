import React from 'react';
import '../../styles/ApartmentInfo.scss';

function ApartmentInfo({ title, location, tags }) {
    return (
        <div className="apartment-info">
            <div className="apartment-header">
                <h1 className="apartment-title">{title}</h1>
                <p className="apartment-location">{location}</p>
            </div>
            <div className="apartment-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ApartmentInfo;
