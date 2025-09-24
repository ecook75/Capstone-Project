import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import MIntervals from "../pages/MIntervals";
import YIntervals from "../pages/YIntervals";
import UIntervals from "../pages/UIntervals";
import SIntervals from "../pages/SIntervals";
import LIntervals from "../pages/LIntervals";
import HIntervals from "../pages/HIntervals";
import PIntervals from "../pages/PIntervals";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      
      {/* <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route> */}
        // update AppRoutes.jsx to protect the Dashboard
{/* <Route path="dash" element={<ProtectedRoute>
<DashboardPage {...props} /></ProtectedRoute>}>
<Route path="messages" element={<DashboardMessages />} />
<Route path="tasks" element={<DashboardTasks />} />
</Route>
<Route path="login" element={<LoginForm/>} />
      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path="id" element={<Post />} />
        </Route> */}
        {/* <Homepage {...props} /><ProtectedRoute> */}
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="longer" element={<LIntervals />} />
        <Route path="mediumlength" element={<MIntervals />} />
        <Route path="pyramid" element={<PIntervals />} />
        <Route path="shortandfast" element={<SIntervals />} />
        <Route path="unstructured" element={<UIntervals />} />
        <Route path="hill" element={<HIntervals />} />
        <Route path="yasso" element={<YIntervals />} />







        

          
        {/* </ProtectedRoute>
       */}

    </Routes>
    
  );
}
export default AppRoutes;