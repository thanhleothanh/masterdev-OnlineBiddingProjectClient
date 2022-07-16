import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavigationBar = ({ history }) => {
    return (
        <nav className='sticky top-0 flex flex-col items-center justify-center w-12 h-screen text-gray-200 bg-gray-800 lg:w-16'>
            <Link to={'/resolve'} className='w-full'>
                <button className='w-full py-4 hover:bg-gray-700'>
                <i class="fa-solid fa-list-check" />
                </button>
            </Link>
            <Link to={'/statistics'} className='w-full'>
                <button className='w-full py-4 hover:bg-gray-700'>
                    <i class="fa-solid fa-chart-line"></i>
                </button>
            </Link>
        </nav>
    );
};

export default AdminNavigationBar;
