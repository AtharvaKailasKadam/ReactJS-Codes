import { useState } from "react";
import "./RegistrationForm.css";

export const RegistrationReactForm = () =>
{

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
        phone: ""
    });
    const handleFirstName = (e) =>
    {
        const {name, value} = e.target;
        setUser((prev)=> ({...prev, [name]:value}) )
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(user);
    };

    return(
            <form onSubmit={handleSubmit}>
                <div className="Container">
                    <h1>Registration Form</h1>
                    <p>Fill The Form for New Registration..!</p>

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="Your First Name..?" required value = {user.firstName} onChange={handleFirstName}></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Your Last Name..?" required value = {user.lastName} onChange={handleFirstName}></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email..?" required value = {user.email} onChange={handleFirstName}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Your Password..?" required value = {user.password} onChange={handleFirstName}></input>

                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Your Password..?" required value = {user.cpassword} onChange={handleFirstName}></input>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number..?" required value={user.phone} onChange={handleFirstName}></input>

                    <button type="submit">Register</button>
                </div>
            </form>
    )
}