import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AdminAuctionCard from '../../../components/AdminAuctionCard';
import DropdownMenu, { ResolveType } from '../../../components/DropdownMenu';
import Header from '../../../components/Header';

const Resolve = ({ history }) => {

  return (
    <div className='flex flex-col w-full h-auto min-h-screen p-5'>
      {/* header section */}
      <div className='flex w-full'>
        <div className='w-full h-full space-x-5 xl:w-2/3'>
          <ResolveType />
        </div>
        <div className='w-full xl:w-1/3'>
          <div className='flex justify-end'>
            <Header />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full h-full mt-5 lg:space-x-10 lg:flex-row'>
        <AdminAuctionCard />
        <AdminAuctionCard />
        <AdminAuctionCard />
        {/* <div className='flex flex-col w-full h-auto space-y-5 lg:w-1/3'>
          <img className='aspect-square' src='/images/auction_img.jpg' />
          <img className='aspect-square' src='/images/auction_img.jpg' />
        </div>
        <div className='flex flex-col w-full h-full mt-10 lg:mt-0 lg:w-2/3'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-gray-200'>bài đấu giá</h1>
            <h3 className='text-xl italic font-medium text-gray-200'>
              <i className='fas fa-user' /> Username
            </h3>
          </div>
          <h2 className='mt-5 text-xl font-medium text-orange-400'>
            Item description
          </h2>
          <form className='mt-5'>
            <div className='flex'>
              <input type='text' className='inputField' />
              <button className='w-40 bg-orange-600 rounded-l-none genericButton hover:bg-orange-700'>
                Raise price!
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Resolve;
