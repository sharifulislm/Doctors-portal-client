import React from 'react';

const BtnPrimary = ({children}) => {
    return (
        <button class="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white font-bold">{children}</button>
    );
};

export default BtnPrimary;