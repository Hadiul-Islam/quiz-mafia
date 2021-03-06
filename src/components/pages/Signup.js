import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';
import classes from '../../styles/SignUp.module.css';
import { Link } from 'react-router-dom';
import LayoutWithNav from '../Layouts/LayoutWithNav';

const Signup = () => {
    return (
        <LayoutWithNav>
            <h1>Create an account</h1>

            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />

                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                    />

                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button>Submit Now</Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </LayoutWithNav>
    );
};

export default Signup;