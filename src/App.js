import React from 'react';
import { CabinetLayout, MainLayout } from './view/layouts';
import {Login, Register} from './view/pages/auth';
import { db, auth, getDoc, onAuthStateChanged, doc} from './services/firebase/firebase';
import LoadingWrapper from './view/components/shared/LoadingWrapper';
import Cabinet from './view/pages/cabinet';
import {
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'; 
import './App.css';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="cabinet" element={<CabinetLayout/>} />
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
