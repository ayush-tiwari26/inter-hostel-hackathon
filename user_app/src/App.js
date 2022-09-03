import React from 'react'
import Login from './Pages/Login'
import Complains from './Pages/Complains'
import './App.css';
import UserStateProvider from './Providers/UserStateProvider'
import Snackbar from './Components/Snackbar/Snackbar'

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <UserStateProvider>
      {(isLogin) ? <Complains /> : <Login setIsLogin={setIsLogin} />}
      <Snackbar />
    </UserStateProvider>
  );
}

export default App;