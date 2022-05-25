// Create a new LoginForm component that successfully passes all of the tests in the test suite file. Try and challenge yourself to not build the component using the localhost initially, but you are allowed to run it in your browser to style the components. You will be required to submit only your LoginForm.js file with a screenshot of your terminal that showcases the passing of your tests.

// Testing a login component...
// Ensure no error messages are displaying on render
// Inputs are updated correctly -setstates???
// Ensure valid email validation works.
// Ensure password validation of more than 6 characters works..
// Ensure both password and email validation does not show if valid inputs are given

// imports
import React from "react";
import { Form, Input } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import '../css/LoginForm.css';
import { useRef, useState } from "react";


// const LoginForm = () => {


function LoginForm() {

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    let email = useRef();
    let password = useRef();

    // function om te validate
    const validate = () => {
        let emailVal = email.current.value;
        let passwordVal = password.current.value;
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        // Kan turnery code hier gebruik, maar 'n if statement sal werk soos my probeerslae, alhoewel dit gefail het omdat ek 'n ompad wou vat..
        if (emailVal.match(regexEmail)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }

        if (passwordVal.length < 6) {
            // as hy kleiner as 6 is, is dit true
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    // const emailInputValidation = () => {
    //     let emailInput = email.current.value;
    //     let userEmailPassword = password.current.value; 
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: ""
    //     }
    // validate = data => {
    //     const errors = {};
    //     if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    //     if (!data.password) errors.password = "Password required";
    //     return errors;
    // };

    // }
    // onSubmit = () => {
    //     const errors = this.validate(this.state.data);
    //     this.setState({ errors });
    //     console.log("test");
    // };
    // validate = data => {
    //     const errors = {};
    //     if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    //     if (!data.password) errors.password = "Password required";
    //     return errors;
    // };


    // render() {
    //     const { data, errors } = this.state;
    // const { email, password } = this.state;
    return (

        <form >
            <label>Email</label>
            <input
                name="email"
                type="text"
                aria-label="email"
                placeholder="Enter your email"
                // value={data.email}
                ref={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <label className="error" > Invalid email </label>}
            <label>Password</label>
            <input
                name="password"
                type="password"
                aria-label="password"
                placeholder="Enter your password"
                // value={data.password}
                ref={password}
            // onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <label className="error"> Password less than 6 characters </label>}
            {/* function validate, onclick initiate validate (NgOnINIT) */}
            <button type="submit" onClick={validate}>Login</button>
        </form>

        // <div>
        //     <form>
        //         <label htmlFor="email"> Email
        //             <input
        //                 name="email"
        //                 type="text"
        //                 placeholder="Enter your email"
        //                 value={email}


        //             />
        //             <label htmlFor="email">Password</label>
        //             <input
        //                 name="password"
        //                 type="password"
        //                 minLength={4}
        //                 aria-label="password"
        //                 placeholder="Enter your password"
        //             />
        //             <button type="submit">Login</button>
        //     </form>
        // </div>

    );
}

export default LoginForm;
{/* 
            inputEmailError &&
            <label htmlFor="email" className="error">Email Error</label> */}



{/* passwordValidationError &&
        <label htmlFor="email">Password Not Strong</label>
                } */}