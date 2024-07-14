import React from 'react';
import { Header } from './view/components/global/header';
import Auth from './view/pages/auth';
import { db, auth, getDoc, onAuthStateChanged, doc} from './services/firebase/firebase';
import './App.css';
import LoadingWrapper from './view/components/shared/LoadingWrapper';


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
      <div>
       <Header 
       isAuth={isAuth}
       userProfileInfo={userProfileInfo}/>
       <Auth/>
       </div>
      </LoadingWrapper>
    )
  }
}


export default App;
