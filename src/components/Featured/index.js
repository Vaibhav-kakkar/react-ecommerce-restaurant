import React from 'react';
import {FeaturedButton, FeaturedContainer} from '../Featured/FeaturedElements';

const Featured = () => {
    return (
        <FeaturedContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust</p>
            <FeaturedButton>Order</FeaturedButton>
        </FeaturedContainer>
    )
}

export default Featured
