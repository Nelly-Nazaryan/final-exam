import React from 'react';
import { useFormik } from 'formik';

import './styles.css';
import { useNavigate } from 'react-router';
import { withAppContext } from '../../context/withAppContext';

function CreateUser({ context }) {
    const navigate = useNavigate();

    const {
        createUser 
    } = context;

    const formik = useFormik({
        initialValues: {
            lastName: '',
            firstName: '',
            password: '',
            confirmPassword: '',
            image: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.lastName) {
                errors.lastName = 'Please fill the last name field'
            }

            if (!values.firstName) {
                errors.firstName = 'Please fill the first name field'
            }

            if (!values.password) {
                errors.password = 'Please fill the password field'
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Please fill the confirm password field'
            }
            if (!values.image) {
                errors.image = 'Please fill the image field'
            }

            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values, 'values')
            createUser(values);
            resetForm();
            navigate('/dashboard')
        }

    })

   

    return (
        <div className='createUser'>
            <div className='createUserContent'>
                <h3>Create User</h3>
                <div className='row'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        name="firstName"
                        id="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                    />
                    {formik.touched.firstName && formik.errors.firstName && <p className="error">{formik.errors.firstName}</p>}
                </div>
                <div className='row'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        id="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                    />
                    {formik.touched.lastName && formik.errors.lastName && <p className="error">{formik.errors.lastName}</p>}
                </div>
                <div className='row'>
                    <label htmlFor="Password">Password</label>
                    <input
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password" />
                    {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}
                </div>
                <div className='row'>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password" />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="error">{formik.errors.confirmPassword}</p>}

                </div>
                <div className='row'>
                    <label htmlFor="image">Image</label>
                    <input
                        name="image"
                        id="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text" />
                    {formik.touched.image && formik.errors.image && <p className="error">{formik.errors.image}</p>}

                </div>
                <button onClick={formik.handleSubmit}>Create</button>
            </div>
        </div>
    )
}

export default withAppContext(CreateUser)