import React from "react";

const Business = (props) => {

    const { image, name, address, city, state, zipCode, category, rating, reviewCount } = props;

    return (
        <div className="business">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className="business-info">
                <p>{address}</p>
                <p>{`${city}, ${state} ${zipCode}`}</p>
                <p>{category}</p>
                <p>Rating: {rating}</p>
                <p>Reviews: {reviewCount}</p>
            </div>
        </div>
    );

};

export default Business;