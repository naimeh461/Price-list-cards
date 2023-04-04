import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceLIst = () => {
    const[prices,setPrices] = useState([]);
    useEffect(() => {
        fetch("price.json")
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div className='p-10'>
            <h2 className='text-5xl text-center text-white bg-purple-600'>Awesome price</h2>
            <div className='grid md:grid-cols-3 gap-3 '>
            {
                prices.map(price => <PriceCard 
                    price={price}
                    key ={price.id}
                    ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceLIst;