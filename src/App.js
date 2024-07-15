import React from 'react';
import Login from './view/pages/auth/login';
import Register from './view/pages/auth/register';
import CabinetLayout from './view/layouts/CabinetLayout';
import { db, auth, getDoc, onAuthStateChanged, doc} from './services/firebase/firebase';
import LoadingWrapper from './view/components/shared/LoadingWrapper';
import Cabinet from './view/pages/cabinet';
import MainLayout from './view/layouts/MainLayout';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'; 
import './App.css';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
       <Route path='login' element={<Login/>} />
       <Route path='register' element={<Register/>} />

       <Route path='/cabinet' element={<CabinetLayout/>}>
       <Route path='/cabinet' element={<Cabinet/>}/>
       </Route>
    </Route>
  )
)
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isAuth: false,
      loading: false,
      userProfileInfo: {
        firstName: '',
        lastName: '',
        headLine: '',
        email: '',
      },

    }
  }


  componentDidMount(){
    this.setState({
      loading: true
    })
    onAuthStateChanged(auth, (user) =>{ 
      this.setState({
        loading: false
      })   

     if(user){     
      this.setState({
        isAuth: true
      });
      const {uid} = user;
      const ref = doc(db, 'registerUsers', uid);
      getDoc(ref).then((userData) => {
        if(userData.exists()){
          this.setState({
            userProfileInfo: userData.data(),
          })
      
        }  
      })
     }
     else{
      this.setState({
        isAuth: false
      });
     }
    })
  }
  render(){   
    const {userProfileInfo, loading, isAuth} = this.state;

    return (
      <LoadingWrapper loading={loading} fullScreen>
    <RouterProvider router={route}/>
      </LoadingWrapper>
    )
  }
}


export default App;
