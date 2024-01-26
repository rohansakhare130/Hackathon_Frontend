import React from 'react';
import "../asset/css/container/categorypage.css";
import "../asset/css/container/product.css";
import { BiCategory, } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import ButtonA from '../atoms/ButtonA';
import SearchBar from '../include/Searchbar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Prodimg from '../asset/images/productimg-1.png';
import Prodimg1 from '../asset/images/productimg-2.png';
import Prodimg2 from '../asset/images/productimg-3.png';
import ProductItem from '../include/ProductItem';
const Products = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/addproduct');
    };
    const handleDeleted = () => {
        navigate('/deleted');
    };

    const products = [
        { id: 123, name: 'Amul Taaza', packSize: '500 ml', category: 'Milk', mrp: 'Rs 27', imgSrc: Prodimg, status: 'Active' },
        { id: 124, name: 'Gokul Cow', packSize: '500 ml', category: 'Milk', mrp: 'Rs 27', imgSrc: Prodimg1, status: 'Inactive' },
        { id: 125, name: 'Shimla Apple', packSize: '1 kg', category: 'Fruits', mrp: 'Rs 150', imgSrc: Prodimg2, status: 'Active' },
        { id: 126, name: 'Amul Taaza', packSize: '500 ml', category: 'Milk', mrp: 'Rs 27', imgSrc: Prodimg, status: 'Active' },
        // Add more products as needed
    ];
    return (
        <div className="prod-main-container">
            <div className="prod-main">
                <div className="prod-main-bar">
                    <BiCategory className="prod-main-bars1" /> Product
                </div>

                <div className="prod-searchbar-container">
                    <SearchBar />
                </div>

                <div className="prod-butn-container">
                    <ButtonA
                        name="Add New"
                        classbtn="prod-butn1"
                        onClick={handleLogout}
                    />
                </div>
            </div>

            <div className="Prod-containers-box">
                <div className="Prod-mains-box">
                    <div className="Prod-text-main1">
                        <div>ID</div>
                        <div>Name</div>
                    </div>
                    <div className="Prod-text-pack">
                        Pack Size
                    </div>
                    <div className="Prod-text-category">
                        Category
                    </div>
                    <div className="Prod-text-mrp">
                        MRP
                    </div>
                    <div className="Prod-text-img">
                        Image
                    </div>
                    <div className="Prod-text-status">
                        Status
                    </div>
                </div>
            </div>

            <div className="Prod-containers-product-box">

            {products.map(product => (
                <ProductItem
                    key={product.id}
                    {...product}
                    onDelete={handleDeleted}
                />
            ))}
            </div>

            
        </div>
    )
}

export default Products