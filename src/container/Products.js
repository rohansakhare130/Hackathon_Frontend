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
const Products = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/addproduct');
    };
    const handleDeleted = () => {
        navigate('/deleted');
    };
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

                <div className="Prod-mains-boxs1">
                    <div className="Prod-text-mains1">
                        <div>123</div>
                        <div>Amul Taaza</div>
                    </div>
                    <div className="Prod-text-packSize">
                        500 ml
                    </div>
                    <div className="Prod-text-category-p1">
                        Milk
                    </div>
                    <div className="Prod-text-mrp-p1">
                        Rs 27
                    </div>
                    <div className="Prod-text-img-p1">
                        <img src={Prodimg} className="Prod-img-logo" alt={"logo"} />
                    </div>
                    <div className="Prod-text-status-p1">
                        Active
                    </div>

                    <div className="Prod-text-main1-icons">
                    <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
                    <FaRegEdit className="Prod-editicon" />
                    </div>


                </div>


                <div className="Prod-mains-boxs1">
                    <div className="Prod-text-mains1">
                        <div>124</div>
                        <div>Gokul Cow</div>
                    </div>
                    <div className="Prod-text-packSize">
                        500 ml
                    </div>
                    <div className="Prod-text-category-p1">
                        Milk
                    </div>
                    <div className="Prod-text-mrp-p1">
                        Rs 27
                    </div>
                    <div className="Prod-text-img-p1">
                        <img src={Prodimg1} className="Prod-img-logo" alt={"logo"} />
                    </div>
                    <div className="Prod-text-status-p1">
                        Inactive
                    </div>

                    <div className="Prod-text-main1-icons">
                    <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
                    <FaRegEdit className="Prod-editicon" />
                    </div>


                </div>

                <div className="Prod-mains-boxs1">
                    <div className="Prod-text-mains1">
                        <div>124</div>
                        <div>Shimla Apple</div>
                    </div>
                    <div className="Prod-text-packSize">
                        1 kg
                    </div>
                    <div className="Prod-text-category-p1">
                        Fruits
                    </div>
                    <div className="Prod-text-mrp-p1">
                        Rs 150
                    </div>
                    <div className="Prod-text-img-p1">
                        <img src={Prodimg2} className="Prod-img-logo" alt={"logo"} />
                    </div>
                    <div className="Prod-text-status-p1">
                        Active
                    </div>

                    <div className="Prod-text-main1-icons">
                    <RiDeleteBin6Line onClick={handleDeleted} className="Prod-deleteicon" />
                    <FaRegEdit className="Prod-editicon" />
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Products