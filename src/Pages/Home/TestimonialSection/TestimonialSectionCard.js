import React from 'react';

const TestimonialSectionCard = ({ img, header, name }) => {
    return (
        <div>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-secondary" src={img} alt='' />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{header}</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                </div>
                <div className="flex justify-end mt-4">
                    <p className="text-xl font-medium text-secondary">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSectionCard;