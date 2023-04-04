import React from 'react';

const Link = (props) => {
    return (
        <div className='ml-20 bg-purple-400 text-white '>
            <a className='text-white p-10' href={props.route.path}>{props.route.name}</a>
        </div>
    );
};

export default Link;