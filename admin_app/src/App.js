import React from 'react'
import Login from './Pages/Login'
import Complains from './Pages/Complains'
import './App.css';
import AdminStateProvider from './Providers/AdminStateProvider'
import Snackbar from './Components/Snackbar/Snackbar'

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <AdminStateProvider>
      {(isLogin) ? <Complains /> : <Login setIsLogin={setIsLogin} />}
      <Snackbar />
    </AdminStateProvider>
  );
}

export default App;