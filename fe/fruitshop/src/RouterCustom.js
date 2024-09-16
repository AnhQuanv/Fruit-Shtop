import { ROUTERS } from "./utils/Router"
import HomePage from "./pages/user/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/Theme/MasterLayout/MasterLayout";
import ProfilePage from "./pages/user/ProfilePage/ProfilePage";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))

                }
            </Routes>
        </MasterLayout>

    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;