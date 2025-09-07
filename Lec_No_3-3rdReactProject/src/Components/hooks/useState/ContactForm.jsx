import { useState } from "react";
import "./ContactForm.css"

export const ContactForm=() =>
{
    const [user, setUser] = useState({
        uName: "",
        uEmail: "",
        uMessage: ""
    });

    const handleUserInput=(e) =>
    {
        const {name, value} = e.target;
        setUser((prev)=> ({...prev, [name]:value}));
    }

    const handleFormSubmit = (event) =>
    {
        event.preventDefault();
        console.log(user);
    }
    return(
        <div className="OuterBody">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="uName" className="InputLabel">USERNAME</label>
                <input type="text" className="InputField" name="uName" placeholder="Enter Your Username..!" required onChange={handleUserInput} value = {user.uName}></input>

                <label htmlFor="uEmail" className="InputLabel">EMAIL</label>
                <input type="text" className="InputField" name="uEmail" required placeholder = "Enter Your Email Address..!" onChange={handleUserInput} value = {user.uEmail}></input>

                <label htmlFor="uMessage" className="InputLabel">MESSAGE</label>
                <textarea className="InputField" name="uMessage" required placeholder="Enter Your Message...!"onChange={handleUserInput} value = {user.uMessage}></textarea>
                <button type="submit" className="SubmitButton">Submit</button>
            </form>
        </div>
    );
};