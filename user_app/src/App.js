import React from 'react'
import Login from './Pages/Login'
import Complains from './Pages/Complains'
import './App.css';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <div>
      {(isLogin) ? <Complains /> : <Login setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
