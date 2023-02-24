import React from "react";

function Contact() {
  return <div className="contact">
    <main>
        <h1>Contact Us</h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" required placeholder="Enter your Name"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required placeholder="Enter your Email"/>
            </div>
            <div>
                <label htmlFor="textarea">Message</label>
                <input type="textarea" required placeholder="Enter your Message"/>
            </div>
            <button type="submit">Send</button>
            
        </form>
    </main>
  </div>;
}

export default Contact;
