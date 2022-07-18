import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions/userActions';

const DropdownMenu = () => {
  const [show, setShow] = useState(false);
  const container = useRef(null);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        container &&
        container.current &&
        !container.current.contains(event.target)
      ) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;
      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <span ref={container}>
      <button
        className='font-bold genericButton'
        onClick={() => setShow(!show)}
      >
        {userInfo &&
          userInfo.name &&
          userInfo.name[0].toUpperCase() + userInfo.name.slice(1)}{' '}
        <i className='fas fa-caret-square-down' />
      </button>

      <div
        style={{
          visibility: `${show ? 'visible' : 'hidden'}`,
          opacity: `${show ? '100%' : '0%'}`,
        }}
      >
        <div className='absolute z-10 flex flex-col mt-1 border-2 border-orange-500 rounded-md shadow-md w-44 right-5 overflow-hiddenbg-white'>
          <Link to='/profile' className='w-full'>
            <div className='w-full font-bold text-right rounded-b-none genericButton'>
              Profile <i className='fas fa-smile'></i>
            </div>
          </Link>
          {userInfo && userInfo.role === 'ADMIN' && (
            <Link to='/admin'>
              <div className='font-bold text-right rounded-none genericButton'>
                For Admin <i className='fas fa-chalkboard-teacher'></i>
              </div>
            </Link>
          )}
          <button
            className='w-full font-bold text-right rounded-t-none genericButton'
            onClick={() => logoutHandler()}
          >
            Log Out <i className='fas fa-sign-out-alt' />
          </button>
        </div>
      </div>
    </span>
  );
};

const TYPE = {
  0: 'Form',
  1: 'Report',
}

export const ResolveType = (props) => {
  const [show, setShow] = useState(false);
  const container = useRef(null);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  function typeHandle(e, i) {
    props.setResolveType(TYPE[i]);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        container &&
        container.current &&
        !container.current.contains(event.target)
      ) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;
      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);


  return (
    <span ref={container}>
      <button
        className='font-bold genericButton bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white'
        onClick={() => setShow(!show)}
      >
        {props.resolveType + ' '}
        <i className="fa-solid fa-angle-down"></i>
      </button>

      <div
        style={{
          visibility: `${show ? 'visible' : 'hidden'}`,
          opacity: `${show ? '100%' : '0%'}`,
        }}
      >
        <div className='absolute z-10 flex flex-col mt-1 border-2 border-orange-500 rounded-md shadow-md w-44 overflow-hiddenbg-white'>
          {Object.keys(TYPE).map((e, i) => {
            return (
              <button key={'ddm' + i}
                className='w-full font-bold text-left rounded-none genericButton'
                onClick={(event) => typeHandle(event, i)}>
                {TYPE[i]}
              </button>
            )
          })}
        </div>
      </div>
    </span>
  );
};

export default DropdownMenu;
