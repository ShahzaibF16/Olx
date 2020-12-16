import React from "react";
import logo from "../Images/logo.png";
import "../App.css";
import "../props.css";
import { AiOutlineDown, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  
  const nav = [
    { ID: 1, label: "Mobile Phones" },
    { ID: 2, label: "Cars" },
    { ID: 3, label: "Motorcycles" },
    { ID: 4, label: "Houses" },
    { ID: 5, label: "TV-Video-Audio" },
    { ID: 6, label: "Tablets" },
    { ID: 7, label: "Land & Plots" },
  ];

  return (
    <React.Fragment>
      <div className="header fixed flex aic">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="location rel flex aic">
          <div className="icon-search ico s24">
            <input
              className="label s16 font"
              placeholder="Your Location"
              value="Pakistan"
            />
            <button className="arro">
              <AiOutlineDown className="s24 flex sico" />
            </button>
          </div>
        </div>
        <div className="search flex aic">
          <input
            type="text"
            className="query font s15"
            placeholder="Find Cars, Mobile Phones and more"
          />
          <button className="icon-search go s24">
            <AiOutlineSearch className="flex fff" />
          </button>
        </div>
        <div className="actions flex aic">
          <Link to="/account/signin" className="fontb noul noulh s16">
            Login
          </Link>
          <button className="sell color flex aic">
            <div className="icon-plus">
              <AiOutlinePlus className="flex s24" />
            </div>
            <h2 className="s15 font">Sell</h2>
          </button>
        </div>
      </div>
      {/* Section-2 */}
      <div className="hnav fixed flex aic">
        <button className="view-cates flex aic color">
          <h2 className="s18 font">All Categories</h2>
          <button className="arro">
            <AiOutlineDown className="s24 flex" />
          </button>
        </button>
        {
        nav.map(item => {
          return (
            <Link
              to={"/browser/" + item.ID}
              className="noul noulh color font bl s15"
            >
              {item.label}
            </Link>
          )
        })
        }
      </div>
      <div className="hclr" />
    </React.Fragment>
  );
}

export default Header;
