import './Admin.css'

import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import { useForm } from "react-hook-form";
const axios = require('axios');

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [isDirty, setIsDirty] = useState(true);

    const [imgUrl, setImgUrl] = useState(null)

    const [imgLoading, setImgLoading] = useState(false);

    const onSubmit = async (data, e) => {
        const productData = {
            name : data.name,
            price: data.price,
            imgUrl: imgUrl
        }

        const url = 'http://localhost:5000/addProduct';

        let response = await axios.post(url, productData);

        e.target.reset();

        setIsDirty(true);

        if(response.data){
            alert('Product Added Successfully');
        }
        else{
            alert('Something went wrong');
        }

    };


    const  handleImageUpload = async event =>{
        setImgLoading(true);

        const imageData = new  FormData();
        imageData.set('key', '2bbf0ed10cd767f80e53cd1bff7a2ab9');
        imageData.append('image', event.target.files[0]);

        let response = await axios.post('https://api.imgbb.com/1/upload', imageData);

        setImgUrl(response.data.data.display_url);
        setIsDirty(false);
        setImgLoading(false);
    }

    return (
        <div className="admin-page">
            <div className="admin">
                <div className="left">
                    <ul>
                        <li><Link to="/Admin">Add Product</Link></li>
                        <li><Link to="/Inventory">Manage Product</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" placeholder="Product Name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <input type="number" name="price" placeholder="Product Price" ref={register({ required: true })} />
                        {errors.price && <span>This field is required</span>}

                        <input type="file" name="file" ref={register({ required: true })} onChange={handleImageUpload} />
                        {errors.file && <span>This field is required</span>}
                        {
                            imgLoading && <p style={{
                                padding : '10px 0'
                            }}>Please wait image is uploading to ImgBB..</p>
                        }
                        <input type="submit" disabled={isDirty} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;