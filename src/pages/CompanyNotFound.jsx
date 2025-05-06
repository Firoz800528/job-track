import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CompanyNotFound = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className='text-5xl text-gray-500 mb-6'>
                Company not found with this ID: <span className="text-[#F1971C]">{id}</span>
            </h1>
            <Link to='/'>
                <button className='btn bg-amber-700 hover:bg-amber-500 text-white'>
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default CompanyNotFound;
