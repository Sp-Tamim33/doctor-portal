import React from 'react';

const TimeSectionCard = ({ img, bg, header, body }) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bg} md:p-5`}>
                <figure><img src={img} alt="Album" className='pt-3' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{header}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeSectionCard;