import { useEffect } from "react";
import { MainLayout, CabinetLayout } from "./view/layouts";
import { Login, Register } from "./view/pages/auth";
import CabinetBoard from "./view/pages/cabinetBoard";
import LoadingWrapper from "./view/components/shared/LoadingWrapper";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES_CONSTANTS } from "./routes";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./view/layouts/HomeLayout";
import { fetchUserProfileInfo } from "./state-managment/slices/authUserInfoSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const {
    loading,
    authUserInfo: { isAuth },
  } = useSelector((state) => state.authInfo);

  useEffect(() => {
    dispatch(fetchUserProfileInfo());
  }, []);

  return (
    <LoadingWrapper loading={loading} fullScreen>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomeLayout />} />
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
                    <Navigate to={ROUTES_CONSTANTS.REGISTER} />
                  )
                }
              />

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
    </LoadingWrapper>
  );
};

export default App;
