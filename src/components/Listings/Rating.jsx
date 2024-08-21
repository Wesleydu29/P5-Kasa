
import React from 'react';
import '../../styles/Rating.scss';
import startActive from '../../assets/star-active 1.png'
import startInactive from '../../assets/star-inactive 1.png'

function Rating({ name, rating, picture }) {
    
    const [firstName, lastName] = name.split(' ');

    // Créez un tableau avec le nombre d'étoiles remplies et vides
    const fullStars = Array(Number(rating)).fill(startActive);
    const emptyStars = Array(5 - Number(rating)).fill(startInactive);
    const combinedStars = [...fullStars, ...emptyStars];

    return (
        <div className="rating-container">
            <div className="owner-info">
                <div className="owner-name">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <img src={picture} alt={`${firstName} ${lastName}`} className="owner-picture" />
            </div>
            <div className="rating-stars">
                {combinedStars.map((star, index) => (
                    <img key={index} src={star}  alt="note" className="star-image"/>
                ))}
            </div>
        </div>
    );
}

export default Rating;

