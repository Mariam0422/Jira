import { Header } from './view/components/global/header';
import Register from './view/pages/auth/register';
import { Login } from './view/pages/auth/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
     <Register/>     
    </div>
  );
}

export default App;
