import React, { Component } from "react";
import "../../styles.css";
import Base from "./Base";

class Home extends Component {
  render() {
    return (
      <Base>
        {/* <h1>Home page!</h1>
        <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form> */}
      <h1>Contact Us</h1>
      </Base>
    )
  }
}

export default Home;