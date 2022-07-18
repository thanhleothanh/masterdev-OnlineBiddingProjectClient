import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AdminAuctionCard from '../../../components/AdminAuctionCard';
import DropdownMenu, { ResolveType } from '../../../components/DropdownMenu';
import Header from '../../../components/Header';
import Message from '../../../components/Message';
import ItemInfoSection from '../../../components/MyAuctionsScreen/ItemInfoSection';
import AuctionInfoSection from '../../../components/MyAuctionsScreen/AuctionInfoSection';

// auctions example
const auctions = [
  {
    id: '0',
    category: {
      id: 1,
      name: 'Đồ ăn',
    },
    description: 'Hehe',
    status: 'SUBMIT',
    timeStart: '12h12\'',
    timeEnd: '13h12\'',
    priceStart: '231',
    priceStep: '12',
    highestPrice: '444000',
    createdAt: '10h12\'',
    item: {
      name: 'LMH',
      description: 'Mua 1 tặng 1',
      amount: '2',
      itemImages: [
        { imageUrl: 'https://i.redd.it/gnwtcccoa5c91.jpg' },
        { imageUrl: 'https://i.redd.it/789kn221x5c91.jpg' },
        { imageUrl: 'https://i.redd.it/9akk4ytk48c91.jpg' },
        { imageUrl: 'https://i.redd.it/gnwtcccoa5c91.jpg' },
        { imageUrl: 'https://i.redd.it/789kn221x5c91.jpg' },
        { imageUrl: 'https://i.redd.it/9akk4ytk48c91.jpg' }
      ],
    },
  },
  {
    id: '1',
    category: {
      id: 1,
      name: 'Đồ ăn',
    },
    description: 'Mua 2 tặng 2',
    status: 'SUBMIT',
    timeStart: '12h12\'',
    timeEnd: '13h12\'',
    priceStart: '231',
    priceStep: '12',
    highestPrice: '444000',
    createdAt: '10h12\'',
    item: {
      name: 'HML',
      description: 'Mua 1 tặng 1',
      amount: '2',
      itemImages: [],
    },
  },
  {
    id: '2',
    category: {
      id: 1,
      name: 'Đồ ăn',
    },
    description: 'Hehe',
    status: 'SUBMIT',
    timeStart: '12h12\'',
    timeEnd: '13h12\'',
    priceStart: '231',
    priceStep: '12',
    highestPrice: '444000',
    createdAt: '10h12\'',
    item: {
      name: 'MLH',
      description: 'Mua 1 tặng 1',
      amount: '2',
      itemImages: [],
    },
  },
];

const reports = {

}

const Resolve = ({ history }) => {

  const [resolveType, setResolveType] = useState('Form');
  const acceptButtonClickedHandler = (auctionId) => {
    if (window.confirm('Are you sure to accept this auction?')) {
      // dispatch(auctionSubmit(auctionId));
    }
  };

  const declineButtonClickedHandler = (auctionId) => {
    if (window.confirm('Are you sure to decline this auction?')) {
      // dispatch(auctionSubmit(auctionId));
    }
  };

  return (
    <div className='flex flex-col w-full h-auto min-h-screen p-5'>
      {/* header section */}
      <div className='flex w-full'>
        <div className='w-full h-full space-x-5 xl:w-2/3'>
          <ResolveType resolveType={resolveType} setResolveType={setResolveType} />
        </div>
        <div className='w-full xl:w-1/3'>
          <div className='flex justify-end'>
            <Header />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full h-full mt-5 lg:space-x-10 lg:flex-row'>
        <div className='w-full overflow-auto rounded-md scrollbar-thin'>
          <table className='w-full table-fixed overflow-x-scoll'>
            {/* auctions section */}
            {/* {userInfo && loadingMyAuctions ? (
              <Loader
                className='mt-3'
                loader={Math.floor(Math.random() * 10 + 1)}
                color={Math.floor(Math.random() * 10 + 1)}
              />
            ) : errorMyAuctions ? (
              <Alert className='mt-3'>{errorMyAuctions}</Alert>
            ) : ( */}
            <>
              <thead className='text-gray-100 bg-orange-600'>
                <tr className='border-2 border-orange-500'>
                  <th className='w-1/12 py-7'>ID</th>
                  <th className='w-5/12 py-7'>Auction Info</th>
                  <th className='w-5/12 py-7'>Auction Item</th>
                  <th className='w-1/12 py-7'></th>
                </tr>
              </thead>
              <tbody>
                {auctions &&
                  auctions.length !== 0 &&
                  Object.keys(auctions).map((i) => {
                    const auction = auctions[i];
                    if (resolveType == 'Form')
                      return (
                        <tr className='text-center text-gray-200 bg-gray-700 border-2 border-orange-500'>
                          <td className='py-10'>{auction.id}</td>
                          <td className='py-10 pr-5'>
                            <AuctionInfoSection auction={auction} />
                          </td>
                          <td className='px-5 py-10'>
                            <ItemInfoSection auction={auction} />
                          </td>
                          <td className='py-2 space-x-2 justify-evenly flex-column lg:flex-row'>
                            <button><i className='fa-solid fa-square-check fa-lg hover:text-orange-500 text-2xl' onClick={() => acceptButtonClickedHandler(auction.id)} /></button>
                            <button><i className='fa-solid fa-square-xmark fa-lg hover:text-orange-500 text-2xl' onClick={() => declineButtonClickedHandler(auction.id)} /></button>
                          </td>
                        </tr>
                      );
                    else {
                      if (resolveType === 'Report')
                        return (
                          <tr className='text-center text-gray-200 bg-gray-700 border-2 border-orange-500'>
                            <td className='py-10'>{auction.id}</td>
                            <td className='py-10 pr-5'>
                              <AuctionInfoSection auction={auction} />
                            </td>
                            <td className='px-5 py-10'>
                              <ItemInfoSection auction={auction} />
                            </td>
                            <td className='py-2 space-x-2 justify-evenly flex-column lg:flex-row'>
                              <button><i className='fa-solid fa-square-check fa-lg hover:text-orange-500 text-2xl' onClick={() => acceptButtonClickedHandler(auction.id)} /></button>
                              <button><i className='fa-solid fa-square-xmark fa-lg hover:text-orange-500 text-2xl' onClick={() => declineButtonClickedHandler(auction.id)} /></button>
                            </td>
                          </tr>
                        );
                    }
                  })}
              </tbody>
            </>
            {/* ) }*/}
          </table>
          {auctions && auctions.length === 0 && (
            <Message type='info' className='w-full '>
              You dont have any auction!
            </Message>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resolve;
