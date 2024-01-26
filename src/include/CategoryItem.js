import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const CategoryItem = ({ id,name1,description,status1, Onclick1}) => {
    return (
        <div className="category-mains-boxs1">
            <div className="category-text-mains1">
                <div className="category-text-mains-heder">{id}</div>
                <div>{name1}</div>
            </div>
            <div className="category-text-description-d2" />
            <div className="category-text-des-c1">
            {description}
            </div>

            <div className="category-text-status-c1">{status1}</div>
            <div className="category-text-main1-icons">
                <RiDeleteBin6Line onClick={Onclick1} className="Prod-deleteicon" />
                <FaRegEdit className="Prod-editicon" />
            </div>


        </div>
    )
}

export default CategoryItem