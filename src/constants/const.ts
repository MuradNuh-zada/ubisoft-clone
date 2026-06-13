interface AppRoutes {
  // Public routes
  LOGIN: string;
  REGISTER: string;
  PROFILE: string;
  NOTFOUND: string;
  // User routes
  HOME: string;
  GAMES: string;
  BASKET: string;
  // Admin routes
  DASHBOARD: string;
  ADD_GAME: string;
}

type RoutesPreview = Pick<
  AppRoutes,
  "LOGIN" | "REGISTER" | "NOTFOUND" | "PROFILE"
>;
export const ROUTES: RoutesPreview = {
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  NOTFOUND: "*",
};

type UserPreview = Pick<AppRoutes, "HOME" | "GAMES" | "BASKET">;
export const USER_ROUTES: UserPreview = {
  HOME: "/",
  GAMES: "games",
  BASKET: "basket",
};

type AdminPreview = Pick<AppRoutes, "DASHBOARD" | "ADD_GAME">;
export const ADMIN_ROUTES: AdminPreview = {
  DASHBOARD: "dashboard",
  ADD_GAME: "add-game",
};
