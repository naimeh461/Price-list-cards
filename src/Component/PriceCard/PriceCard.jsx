import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    
    return (
        <div className='bg-indigo-400 p-4 rounded-md text-white mt-5 gap-5 flex flex-col'>
            <h2 className='text-3xl font-extrabold text-purple-200 my-5'>{price.price}</h2>
            <h5 className='text-2xl font-bold'>{price.name}<span className='text-sm'>/mon</span></h5>
            <p className='mt-6 font-bold'>Features:</p>
            {
                price.features.map((feature, index) => <Feature
                    key={index}
                    feature ={feature}
                >
                </Feature>)

            }
        <button className='w-full bg-green-400 hover:bg-green-800 py-2 rounded-sm font-bold mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;