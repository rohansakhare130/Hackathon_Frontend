import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import "../asset/css/include/addproduct.css";
import ButtonA from '../atoms/ButtonA';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    
    // const Products = [
    //     {
    //         value: 'milk',
    //         label: 'Milk',
    //     },
    //     {
    //         value: 'fruits',
    //         label: 'Fruits',
    //     },
    // ];

    // const Status = [
    //     {
    //         value: 'active',
    //         label: 'Active',
    //     },
    //     {
    //         value: 'inactive',
    //         label: 'Inactive',
    //     },
    // ];

    const [inputValue, setInputValue] = useState('');


    const navigate = useNavigate(); // Use useNavigate hook

    const handlecancel = () => {
        navigate('/addcategory');
    };
    const handlesave = () => {
        navigate('/product');
    };

    const handleback = () => {
        navigate('/product');
    };

    return (
        <div className="addproduct-container">
            <div className="addproduct-main-heder">
                <IoMdArrowBack className="addproduct-heder-icon" onClick={handleback} />
                Add Product
            </div>

            <div className="addproduct-main-textfield-Product">
           
                {/*<TextField
                    required
                    select
                    id="addproduct-textinput1"
                    label="Category"
                    // name="email"
                    variant="outlined"
                    // value={formData.email}
                    // onChange={handleChange}
                    InputLabelProps={{
                        style: {
                            color: inputValue ? '#662671' : 'black',
                            
                        }
                    }}
                >
                {Products.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}

                </TextField>*/}

                <TextField
                required
                id="addproduct-textinput"
                label="Category"
                // name="categoryname"
                variant="outlined"
                // value={xyz.categoryname}
                // onChange={handleChange}
                InputLabelProps={{
                    style: {
                        color: inputValue ? '#662671' : 'black',


                    },
                }}

                className={`custom-border ${inputValue ? 'custom-border' : ''}`}
            />
                <TextField
                    required
                    id="addproduct-textinput"
                    label="Product Name"
                    // name="categoryname"
                    variant="outlined"
                    // value={xyz.categoryname}
                    // onChange={handleChange}
                    InputLabelProps={{
                        style: {
                            color: inputValue ? '#662671' : 'black',


                        },
                    }}

                    className={`custom-border ${inputValue ? 'custom-border' : ''}`}
                />
                <TextField
                    required
                    id="addproduct-textinput"
                    label="Pack Size"
                    // name="description"
                    variant="outlined"
                    // value={xyz.description}
                    // onChange={handleChange}
                    InputLabelProps={{
                        style: {
                            color: inputValue ? '#662671' : 'black',
                        }
                    }}
                />

            </div>

            <div className="addproduct-main-textfield-Product">
            <TextField
                required
                id="addproduct-textinput"
                label="MRP"
                // name="categoryname"
                variant="outlined"
                // value={xyz.categoryname}
                // onChange={handleChange}
                InputLabelProps={{
                    style: {
                        color: inputValue ? '#662671' : 'black',


                    },
                }}

                className={`custom-border ${inputValue ? 'custom-border' : ''}`}

            />

            <TextField
                required
                id="addproduct-textinput"
                label="Product Image"
                // name="categoryname"
                variant="outlined"
                // value={xyz.categoryname}
                // onChange={handleChange}
                InputLabelProps={{
                    style: {
                        color: inputValue ? '#662671' : 'black',


                    },
                }}

                className={`custom-border ${inputValue ? 'custom-border' : ''}`}

            />

            <TextField
                required
                id="addproduct-textinput"
                label="Status"
                // name="categoryname"
                variant="outlined"
                // value={xyz.categoryname}
                // onChange={handleChange}
                InputLabelProps={{
                    style: {
                        color: inputValue ? '#662671' : 'black',


                    },
                }}

                className={`custom-border ${inputValue ? 'custom-border' : ''}`}

            />

             {/*<TextField
                required
                select
                id="addproduct-textinput"
                label="Status"
                // name="email"
                variant="outlined"
                // value={formData.email}
                // onChange={handleChange}
                InputLabelProps={{
                    style: {
                        color: inputValue ? '#662671' : 'black',
                        borderColor: 'text.primary'
                    }
                }}
            >
            
           {Status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}

            </TextField>*/}
        </div>

            <div className="boxAddPr-button-main">
                <ButtonA
                    name="Cancel"
                    className="boxFD-button2"
                    onClick={handlecancel}
                />
                <ButtonA
                    name="Save"
                    className="boxFD-button2 bt2"
                    onClick={handlesave}
                />
            </div>
        </div>
    )
}

export default AddProduct