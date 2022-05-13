import React from 'react';

const ServiceSectionCard = ({ img, header, body }) => {
    return (
        <div className='mt-10'>
            <div className="max-w-sm bg-white rounded-lg border-gray-200 shadow-lg text-center">
                <img className="rounded-t-lg mx-auto pt-3" src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{header}</h5>
                    <p className="mt-3 font-normal">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;