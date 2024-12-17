import * as Pages from "./pages";

export const router = {
  "/": () => Pages.MainPage(),
  "/login": () => Pages.LoginPage(),
  "/profile": () => Pages.ProfilePage(),
  "/404": () => Pages.ErrorPage(),
};
