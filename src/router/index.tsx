import { createBrowserRouter } from "react-router-dom";
import Onboarding from "../pages/Onboarding/Onboarding";
import SelectType from "../pages/SelectType/SelectType";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import GroupDetail from "../pages/GroupDetail/GroupDetail";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import Certify from "../pages/Certify/Certify";
import More from "../pages/More/More";

export const router = createBrowserRouter([
  { path: "/", element: <Onboarding /> },
  { path: "/select-type", element: <SelectType /> },
  { path: "/home", element: <Home /> },
  { path: "/group", element: <Group /> },
  { path: "/group/:id", element: <GroupDetail /> },
  { path: "/create-group", element: <CreateGroup /> },
  { path: "/certify", element: <Certify /> },
  { path: "/more", element: <More /> },
]);