import React from 'react'
import Login from './Pages/Login'
import Complains from './Pages/Complains'
import './App.css';
import UserStateProvider from './Providers/UserStateProvider'

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <UserStateProvider>
      {(isLogin) ? <Complains /> : <Login setIsLogin={setIsLogin} />}
    </UserStateProvider>
  );
}

export default App;