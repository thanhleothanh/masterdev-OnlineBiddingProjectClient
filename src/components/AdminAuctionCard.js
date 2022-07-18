import React from 'react';
import { Link } from 'react-router-dom';

const AdminAuctionCard = ({
    data = {
        title: 'A famous carpet',
        author: 'Monkey',
        endDate: 'Dec 31st 2022',
        price: '301',
        image: 'https://m.media-amazon.com/images/I/51o3umDVoOL._AC_SL1000_.jpg',
    },
}) => {
    return (
        <div className='items-center justify-center mx-5 space-x-2 space-2 text-white w-1/3 h-1/4 rounded bg-[#1F2937]'>
            <div className='block justify-center flex content-center p-2 '>
                {/* <Link to={`/auctions/${auctionId}`}> */}
                <Link to={`#`}>
                    <h2 className='text-lg font-semibold uppercase'>{data.title}</h2>
                </Link>
            </div>
            <div className='block flex flex-column items-center'>
                <span>
                    <img
                        src={data.image}
                        className='object-cover bg-gray-600 w-40 h-40 content-center'
                    ></img>
                </span>
                <span className='px-4 space-y-4'>
                    <div className='flex content-center space-x-2 '>
                        <span><i class="fa-solid fa-house-chimney-user text-orange-500" /></span>
                        <span>{data.author}</span>
                    </div>
                    <div className='flex content-center space-x-2 '>
                        <span><i class="fa-solid fa-calendar-day" /></span>
                        <span className='text-orange-500'>{data.endDate}</span>
                    </div>
                    <div className='flex content-center space-x-2 '>
                        <span><i class="fa-solid fa-money-bill text-orange-500" /></span>
                        <span>{data.price}</span>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default AdminAuctionCard;
