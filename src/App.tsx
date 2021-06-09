import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserFormToken from './components/UserFormToken/UserFormToken';
import { useState } from 'react';

function App() {
   const [showCodeBox, setShowCodeBox] = useState<Boolean>(false);
   const [authenticated, setAuthenticated] = useState<Boolean>(false);

   const authorizationFlowView = () => {
     return (
       <>
        <h1>
          Activate two factor authentication for your account
        </h1>

        {showCodeBox && <UserFormToken setAuthenticated={setAuthenticated} />}

        {!showCodeBox && <UserForm setShowCodeBox={setShowCodeBox}/>}
       </>
     );
   }

  return (
    <div className="App">
      { authenticated && <h1> Congratulations, Your Two Factor Authentication is working</h1> }
      { !authenticated && authorizationFlowView()}
    </div>
  );
}

export default App;
