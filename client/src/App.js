import React from 'react';
import './App.css';
import AdminRegister from './components/features/register/admin-register-component';
import Login from './components/features/login/login-component';
import MainRegister from './components/features/register/main-register-component';
import {UsersContextProvider} from './context/users-context/users-context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContextProvider>
          <MainRegister/>
    {/* <AdminRegister/> */}

        {/* <Login/> */}
        </UsersContextProvider>
      </header>
    </div>
  );
}

export default App;
