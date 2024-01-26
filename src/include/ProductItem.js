import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const ProductItem = ({ id, name, packSize, category, mrp, imgSrc, status, onDelete }) => {
  return (
    <div className="Prod-mains-boxs1">
            <div className="Prod-text-mains1">
                <div>{id}</div>
                <div>{name}</div>
            </div>
            <div className="Prod-text-packSize">{packSize}</div>
            <div className="Prod-text-category-p1">{category}</div>
            <div className="Prod-text-mrp-p1">{mrp}</div>
            <div className="Prod-text-img-p1">
                <img src={imgSrc} className="Prod-img-logo" alt={"logo"} />
            </div>
            <div className="Prod-text-status-p1">{status}</div>

            <div className="Prod-text-main1-icons">
                <RiDeleteBin6Line onClick={onDelete} className="Prod-deleteicon" />
                <FaRegEdit className="Prod-editicon" />
            </div>
        </div>
  )
}

export default ProductItem