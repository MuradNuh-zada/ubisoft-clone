import { Routes, Route } from "react-router-dom";
import { ROUTES, USER_ROUTES, ADMIN_ROUTES } from "@/constants/const";
import UserHome from "@/pages/user/UserHome";
import UserLayout from "@/layouts/UserLayout";
import UserGames from "@/pages/user/UserGames";
import Basket from "@/pages/user/Basket";
import UserLogin from "@/pages/user/Login";
import Dashboard from "@/pages/admin/Dashboard";
import NotFound from "@/pages/NotFound";
import AdminLayout from "@/layouts/AdminLayout";

function AppRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path={USER_ROUTES.GAMES} element={<UserGames />} />
        <Route path={USER_ROUTES.BASKET} element={<Basket />} />
        <Route path={ROUTES.LOGIN} element={<UserLogin />} />
      </Route>
      <Route path={ADMIN_ROUTES.DASHBOARD} element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
