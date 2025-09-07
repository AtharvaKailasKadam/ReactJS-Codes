import { useState } from "react";
import "./RegistrationForm.css";

export const RegistrationForm = () =>
{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleFirstName = (e) =>
    {
        const {name, value} = e.target;
        switch(name)
        {
            case "fname":
                setFirstName(value);
                break;
            case "lname":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "cpassword":
                setCpassword(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            password,
            cpassword,
            phone,
            email
        };
        console.log("Form Data : ", formData);
    };

    return(
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <h1>Registration Form</h1>
                    <p>Fill The Form for New Registration..!</p>

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="Your First Name..?" required value = {firstName} onChange={handleFirstName}></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Your Last Name..?" required value = {lastName} onChange={handleFirstName}></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email..?" required value = {email} onChange={handleFirstName}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Your Password..?" required value = {password} onChange={handleFirstName}></input>

                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Your Password..?" required value = {cpassword} onChange={handleFirstName}></input>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number..?" required value={phone} onChange={handleFirstName}></input>

                    <button type="submit">Register</button>
                </div>
            </form>
    )
}