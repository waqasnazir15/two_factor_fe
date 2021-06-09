import { useState } from "react";
import './UserForm.css';

const UserForm = ({ setShowCodeBox }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("called");

    let reqHeaders = new Headers();
    reqHeaders.append("Content-Type", "application/json");

    fetch('/users', {
      method: 'post',
      body: JSON.stringify({ phone_number: phoneNumber }),
      headers: reqHeaders
    }).then((response) => {
      if (response.status == 200) {
        setShowCodeBox(true);
        console.log("okay")
      } else {
        alert('Something went wrong. Please check logs');
        console.log(response.json())
      }
    }).catch((err) => {
      alert('Something went wrong. Please check logs')
      console.log(err)
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">Please enter your phone number below with country code</label>

      <input
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        placeholder="+923031234567"
        type="tel"
        pattern="^\+[1-9]{1}[0-9]{3,14}$"
        name="Phone number"
        required
        id="phoneNumber"
      />
      <button type="submit">Submit</button>
    </form>

  );
};

export default UserForm;
