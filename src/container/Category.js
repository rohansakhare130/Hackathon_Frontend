import React from 'react';
import "../asset/css/container/categorypage.css";
import { BiCategory, } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import ButtonA from '../atoms/ButtonA';
import SearchBar from '../include/Searchbar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const Category = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/addcategory');
  };

  const handleDeleted = () => {
    navigate('/deleted');
  };

  return (
    <div className="category-main-container">
      <div className="category-main">
        <div className="category-main-bar">
          <BiCategory className="category-main-bars1" /> Category
        </div>

        <div>
          <SearchBar />
        </div>

        <div className="category-butn-container">
          <ButtonA
            name="Add New"
            classbtn="category-butn1"
            onClick={handleLogout}
          />
        </div>
      </div>

      <div className="category-containers-box">
        <div className="category-mains-box">
          <div className="category-text-main1">
            <div>ID</div>
            <div>Name</div>
          </div>
          <div className="category-text-description-d1" />
          <div className="category-text-description">
            Description
          </div>
          <div className="category-text-status3">
            Status
          </div>
        </div>
      </div>

      <div className="category-containers-product-box">

        <div className="category-mains-boxs1">
          <div className="category-text-mains1">
            <div className="category-text-mains-heder">123</div>
            <div>Milk</div>
          </div>
          <div className="category-text-description-d2" />
          <div className="category-text-des-c1">
            Lorem Ipsum is simply dummy
          </div>

          <div className="category-text-status-c1">Active</div>
          <div className="category-text-main1-icons">
            <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
            <FaRegEdit className="Prod-editicon" />
          </div>


        </div>

        <div className="category-mains-boxs1">
          <div className="category-text-mains1">
            <div className="category-text-mains-heder">124</div>
            <div>Fruits</div>
          </div>
          <div className="category-text-description-d2" />
          <div className="category-text-des-c1">
            Lorem Ipsum is simply dummy
          </div>

          <div className="category-text-status-c1">Active</div>
          <div className="category-text-main1-icons">
            <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
            <FaRegEdit className="Prod-editicon" />
          </div>
        </div>

        <div className="category-mains-boxs1">
          <div className="category-text-mains1">
            <div className="category-text-mains-heder">123</div>
            <div>Vegetables</div>
          </div>
          <div className="category-text-description-d2" />
          <div className="category-text-des-c1">
            Lorem Ipsum is simply dummy
          </div>

          <div className="category-text-status-c1">Active</div>
          <div className="category-text-main1-icons">
            <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
            <FaRegEdit className="Prod-editicon" />
          </div>
        </div>




      </div>

    </div>
  );
};

export default Category;
