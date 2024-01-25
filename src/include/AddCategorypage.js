import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import "../asset/css/include/addcategory.css";
import ButtonA from '../atoms/ButtonA';
import { useNavigate } from 'react-router-dom';

const AddCategorypage = () => {

    const currencies = [
        {
            value: 'active',
            label: 'Active',
        },
        {
            value: 'inactive',
            label: 'Inactive',
        },
    ];

    const [inputValue, setInputValue] = useState('');
   

    const navigate = useNavigate(); // Use useNavigate hook

    const handlecancel = () => {
      navigate('/addcategory');
    };
    const handlesave = () => {
      navigate('/category');
    };

    const handleback = () => {
        navigate('/category');
      };

    return (
        <div className="addcategory-container">
            <div className="addcategory-main-heder">
                <IoMdArrowBack className="addcategory-heder-icon" onClick={handleback}/>
                Add Category
            </div>

            <div className="addcategory-main-textfield">
           
                <TextField
                    required
                    id="addcategory-textinput"
                    label="Category Name"
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
                    id="addcategory-textinput"
                    label="Description"
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

                <TextField
                    required
                    select
                    id="addcategory-textinput"
                    label="Select"
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
                >{currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}

                </TextField>
               


            </div>

            <div className="boxAddCa-button-main">
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

export default AddCategorypage