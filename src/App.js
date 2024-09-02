import { useState, useEffect } from "react";
import { CabinetLayout, MainLayout } from "./view/layouts";
import { Login, Register } from "./view/pages/auth";
import {
  db,
  auth,
  getDoc,
  onAuthStateChanged,
  doc,
  getDocs,
  collection
} from "./services/firebase/firebase";
import { AuthContextProvider } from "./context/AuthContext";
import LoadingWrapper from "./view/components/shared/LoadingWrapper";
import { ROUTES_CONSTANTS } from "./routes";
import CabinetBoard from "./view/pages/cabinetBoard";
import { taskStatusModel } from "./view/pages/cabinetBoard/constants"; //todo
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./view/layouts/HomeLayout";
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState(taskStatusModel); //todo
  const [issueLoading, setissueLoading] = useState(false)//todo

  const [userProfileInfo, setUserProfileInfo] = useState({
    firstName: "",
    lastName: "",
    headLine: "",
    email: "",
  });
  const hadleGetIssues = async () => { //todo
    setissueLoading(true)
    const updatedTaskStatusModel = taskStatusModel();
    const queryData = await getDocs(collection(db, "issue"));
    queryData.docs.map((doc) => {
      const data = doc.data();
      const { status } = data;
      if (updatedTaskStatusModel[status]) {
        updatedTaskStatusModel[status].items.push(data);
      }
    });

    setColumns({ ...updatedTaskStatusModel });
    setissueLoading(false)
  };
  useEffect(() => {
    setLoading(true);//todo
    onAuthStateChanged(auth, (user) => {
      setLoading(false);

      if (user) {
        setIsAuth(true);
        const { uid } = user;
        const ref = doc(db, "registerUsers", uid);
        getDoc(ref).then((userData) => {
          if (userData.exists()) {
            setUserProfileInfo(userData.data());
          }
        });
      }
    });
  }, []);


  return (
    <LoadingWrapper loading={loading} fullScreen>
  <AuthContextProvider value={{ isAuth, userProfileInfo, setIsAuth, issueLoading, columns,setColumns, hadleGetIssues }}>
        <RouterProvider
          router={createBrowserRouter(
            createRoutesFromElements(
              <Route path="/" element={<MainLayout />}>
                <Route
                  path={ROUTES_CONSTANTS.LOGIN}
                  element={
                    !isAuth ? (
                      <Login />
                    ) : (
                      <Navigate to={ROUTES_CONSTANTS.CABINET} />
                    )
                  }
                />
                <Route
                  path={ROUTES_CONSTANTS.REGISTER}
                  element={
                    !isAuth ? (
                      <Register />
                    ) : (
                      <Navigate to={ROUTES_CONSTANTS.CABINET} />
                    )
                  }
                />
                {/* *------Cabinet Layout Route -------* */}
                <Route
                  path={ROUTES_CONSTANTS.CABINET}
                  element={
                    isAuth ? (
                      <CabinetLayout />
                    ) : (
                      <Navigate to={ROUTES_CONSTANTS.LOGIN} />
                    )
                  }
                >
                  <Route
                    path={ROUTES_CONSTANTS.CABINET}
                    element={<CabinetBoard />}
                  />
                </Route>
              </Route>
            )
          )}
        />
      </AuthContextProvider>
    </LoadingWrapper>
  );
};

export default App;
