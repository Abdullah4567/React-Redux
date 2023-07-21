import React, { useRef, useState, useEffect } from "react";
import Avatar from '../Assets/images/Avatar.jpg'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from "redux";
import { SearchedItemActionCreators } from "../Redux/Action-Creators";
import client from "../Axios";

const Navbar = () => {
  const { quantity, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const { AddSearchedItem } = bindActionCreators(SearchedItemActionCreators, dispatch)
  const navigate = useNavigate();
  const ref = useRef();
  const [isCartOpen, setisCartOpen] = useState(false)
  const textsize = {
    fontSize: '1.25rem',
    lineHeight: '1.75rem'
  }
  const searchProduct = async (name) => {
    const url = `/products/search?q=${name}&limit=100`;
    const res = await client.get(url, {
      'Content-Type': 'application/json',
    }).then(response => {
      return response.data.products
    }).catch(err => console.log(err));
    AddSearchedItem(res);
  }
  useEffect(() => {
    return () => {
      setisCartOpen(false)
    }
  }, [])



  const handleChange = (e) => {
    searchProduct(ref.current.value);
    // if (e.keyCode == 13) {
    // }
  }
  return (
    <div className="p-2" >
      <div className="navbar bg-green-50 text-black rounded ">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">Shopify</a>
        </div>
        <div className="flex-none">
          <div className="form-control mr-10">
            <input type="text" onChange={handleChange} ref={ref} placeholder="Search" className="input input-bordered w-24 md:w-auto text-white" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{quantity}</span>
              </div>
            </label>
            {!isCartOpen && <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body bg-white rounded-md">
                <span className="font-bold text-lg">{quantity} Items</span>
                <span className="text-info font-bold">Subtotal: ${total}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block" onClick={() => {
                    setisCartOpen(true)
                    setTimeout(() => {
                      setisCartOpen(false)
                    }, 1000);
                    navigate('/cart')
                  }}>View
                    cart</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="dropdown dropdown-end bg-white ml-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-96 rounded-full">
                <img src={Avatar} alt="Avatar" className="" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white ">
              <li>
                <a className="justify-between" href="/" style={textsize}>
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a href="/" style={textsize}>Settings</a></li>
              <li><a href="/" style={textsize}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
