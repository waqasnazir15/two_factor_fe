import { useState } from "react";
import './UserFormToken.css';

const UserFormToken = ({ setAuthenticated }) => {
  const [code, setcode] = useState<string>('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("called");

    let reqHeaders = new Headers();
    reqHeaders.append("Content-Type", "application/json");

    fetch('/users/authenticate', {
      method: 'post',
      body: JSON.stringify({ code: code }),
      headers: reqHeaders
    }).then((response) => {
      if (response.status == 200) {
        setAuthenticated(true);
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
      <label htmlFor="code">Please enter the two factor code sent on your phone number</label>

      <input
        value={code}
        onChange={e => setcode(e.target.value)}
        placeholder="Enter 2FA code"
        type="number"
        name="Code"
        required
        id="code"
      />
      <button type="submit">Submit</button>
    </form>

  );
};

export default UserFormToken;
