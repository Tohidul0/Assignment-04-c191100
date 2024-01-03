import React from 'react';
import Expencelist from './Expencelist';
import Incomelist from './Incomelist';

function Mainlist(props) {
    return (
            <div
                className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2"
            >
                <Incomelist></Incomelist>
                <Expencelist></Expencelist>
            </div>   
    
    );
}

export default Mainlist;