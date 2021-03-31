import './Admin.css'

import React from 'react';
import {
    Link
} from "react-router-dom";
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="admin-page">
            <div className="admin">
                <div className="left">
                    <ul>
                        <li><Link to="/Admin">Add Product</Link></li>
                        <li><Link to="/Admin/manage-product">Manage Product</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="example" defaultValue="test" ref={register} />

                        <input name="exampleRequired" ref={register({ required: true })} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;