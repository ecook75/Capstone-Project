import AboutPage from "../pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import MyAccountPage from "../pages/MyAccountPage"
import LoginPage from "../pages/LoginPage";
import RunningStylesPage from "../pages/RunningStylesPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<LoginPage {...props} />} />
      <Route index element={<RunningStylesPage {...props} />} />   
      <Route index element={<MyAccountPage {...props} />} />   
      <Route index element={<AboutPage {...props} />} />
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
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="myaccount" element={<MyAccountPage />} />
        <Route path="runningstyles" element={<RunningStylesPage />} />







        

          
        {/* </ProtectedRoute>
       */}

    </Routes>
    
  );
}
export default AppRoutes;