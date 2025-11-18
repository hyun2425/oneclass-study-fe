import { createBrowserRouter } from "react-router-dom";
import Onboarding from "../pages/Onboarding/Onboarding";
import SelectType from "../pages/SelectType/SelectType";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import GroupDetail from "../pages/GroupDetail/GroupDetail";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import Certify from "../pages/Certify/Certify";
import More from "../pages/More/More";
import { ErrorBoundary } from "../components/ErrorBoundary";

// GitHub Pages 배포를 위한 base path
// 프로덕션 환경에서만 basename 설정
const basename = import.meta.env.PROD ? '/oneclass-study-fe' : '/';

export const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Onboarding />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/select-type", 
    element: <SelectType />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/home", 
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/group", 
    element: <Group />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/group/:id", 
    element: <GroupDetail />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/create-group", 
    element: <CreateGroup />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/certify", 
    element: <Certify />,
    errorElement: <ErrorBoundary />,
  },
  { 
    path: "/more", 
    element: <More />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
], {
  basename: basename,
});