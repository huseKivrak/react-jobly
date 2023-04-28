import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import EditProfileForm from './EditProfileForm';
import RegisterForm from './RegisterForm.js'
/**
 * RoutesList
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 *
 * /companies/[invalid handle] -> redirect to /companies
 * /jobs/... -> redirect to /jobs
 *
 * App -> RoutesList -> [HomePage, CompanyList, CompanyDetail, JobList]
 */

function RoutesList({ user = null, loginUser, registerUser, editProfile }) {
  console.log("RoutesList is running");

  return (
    <div className="RoutesList">
      {user ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/*" element={<Navigate to="/jobs" />} />
          <Route
            path="/profile"
            element={<EditProfileForm editProfile={editProfile} user={user} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
          <Route
            path="/signup"
            element={<UserForm registerUser={registerUser} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default RoutesList;
