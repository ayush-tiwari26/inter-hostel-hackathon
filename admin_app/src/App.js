import React from 'react'
import Login from './Pages/Login'
import Complains from './Pages/Complains'
import './App.css';
import AdminStateProvider from './Providers/AdminStateProvider'

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <AdminStateProvider>
      {(isLogin) ? <Complains /> : <Login setIsLogin={setIsLogin} />}
    </AdminStateProvider>
  );
}

export default App;