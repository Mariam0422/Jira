import {useState, useEffect} from 'react';
import { CabinetLayout, MainLayout } from './view/layouts';
import {Login, Register} from './view/pages/auth';
import { db, auth, getDoc, onAuthStateChanged, doc} from './services/firebase/firebase';
import { AuthContextProvider } from './context/AuthContext';
import LoadingWrapper from './view/components/shared/LoadingWrapper';
import { ROUTES_CONSTANTS } from './routes';
import CabinetBoard from './view/pages/cabinetBoard';
import {
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Navigate 
} from 'react-router-dom'; 
import './App.css';


const App = () => {
const [isAuth, setIsAuth] = useState(false);
const [loading, setLoading] = useState(false);
const [userProfileInfo, setUserProfileInfo] =  useState({
  firstName: '',
  lastName: '',
  headLine: '',
  email: '',
});


useEffect(() => {
  setLoading(true);
  onAuthStateChanged(auth, (user) =>{ 
  setLoading(false)  

   if(user){     
    setIsAuth(true)
    const {uid} = user;
    const ref = doc(db, 'registerUsers', uid);
    getDoc(ref).then((userData) => {
      if(userData.exists()){
        setUserProfileInfo(userData.data());    
      }  
    })
   } 
})
}, [])


return (
  <LoadingWrapper loading={loading} fullScreen>
    <AuthContextProvider value={{isAuth, userProfileInfo, setIsAuth}}>
    <RouterProvider router={ createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path={ROUTES_CONSTANTS.LOGIN} element={!isAuth ? <Login/> : <Navigate to={ROUTES_CONSTANTS.CABINET}/>}/>
      <Route path={ROUTES_CONSTANTS.REGISTER} element={!isAuth ? <Register/> : <Navigate to={ROUTES_CONSTANTS.CABINET}/>}/>
      {/* *------Cabinet Layout Route -------* */}
      <Route path={ROUTES_CONSTANTS.CABINET} element={isAuth ? <CabinetLayout/> : <Navigate to={ROUTES_CONSTANTS.LOGIN}/>} >
      <Route path={ROUTES_CONSTANTS.CABINET} element={<CabinetBoard/>}/>
      </Route>
    </Route>
  )
)}/>
    </AuthContextProvider>
  </LoadingWrapper>
)
}

export default App;
