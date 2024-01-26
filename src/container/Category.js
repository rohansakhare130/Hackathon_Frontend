import React, { useState } from 'react';
import "../asset/css/container/categorypage.css";
import { BiCategory, } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import ButtonA from '../atoms/ButtonA';
import SearchBar from '../include/Searchbar';
import CategoryItem from '../include/CategoryItem';
import Modal from 'react-modal';
import Out1 from '../asset/images/out-img.png';
import Screen from '../screen/Screen';
const Category = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleLogout = () => {
    navigate('/addcategory');
  };

  const handleDeleted = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    handleCloseDialog();
  };

  const products = [
    { id: 123, name1: 'Milk', description: 'Lorem Ipsum is simply dummy text', status1: 'Active' },
    { id: 124, name1: 'Fruits', description: 'Lorem Ipsum is simply dummy text', status1: 'Inactive' },

    // Add more products as needed
  ];

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

        {products.map(product => (
          <CategoryItem
            key={product.id}
            {...product}
            Onclick1={handleDeleted}
          />
        ))}
      </div>


      <Modal
        isOpen={isDialogOpen}
        onRequestClose={handleCloseDialog}
        contentLabel="Confirm Delete"
        className="modal-main"
      >
      
          <div className="boxFD-cont">
            <div className="boxFD-heder-main">
              <img src={Out1} className="boxFD-img-1" alt={"logo"} />
              <p className="boxFD-text1">Delete</p>
            </div>
            <p className="boxFD-text3">Are you sure you want to delete?</p>

            <div className="boxFD-button-main">
              <ButtonA
                name="Cancel"
                className="boxFD-button2"
                onClick={handleCloseDialog}
              />
              <ButtonA
                name="Confirm"
                className="boxFD-button2 bt2"
                onClick={handleConfirmDelete}
              />
            </div>
          </div>
     
      </Modal>
    </div>
  );
};

export default Category;
