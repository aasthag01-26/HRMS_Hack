import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import PublicLayout from "./components/PublicLayout";
import ProtectedLayout from "./components/ProtectedLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import PublicHome from "./pages/public/PublicHome";
import Notices from "./pages/public/Notices";
import Policies from "./pages/public/Policies";
import Departments from "./pages/public/Departments";
import Help from "./pages/public/Help";

import Login from "./pages/auth/Login";

import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeProfile  from "./pages/employee/Profile";
import EmployeeAttendance  from "./pages/employee/Attendance";
import EmployeeLeave  from "./pages/employee/Leave";
import EmployeePayroll  from "./pages/employee/Payroll";
import EmployeeGrievance  from "./pages/employee/Grievance";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminEmployees  from "./pages/admin/Employees";
import AdminAttendance from "./pages/admin/Attendance";
import AdminLeaveRequests  from "./pages/admin/LeaveRequests";
import AdminPayroll  from "./pages/admin/Payroll";
import AdminGrievance  from "./pages/admin/Grievance";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PublicLayout />}>
  <Route index element={<PublicHome />} />
  <Route path="home" element={<PublicHome />} /> 👈 ADD THIS
  <Route path="notices" element={<Notices />} />
  <Route path="policies" element={<Policies />} />
  <Route path="departments" element={<Departments />} />
  <Route path="help" element={<Help />} />
</Route>


          {/* LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* EMPLOYEE */}
          <Route
            path="/employee"
            element={
              <ProtectedRoute role="employee">
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            {/* <Route path="dashboard" element={<EmployeeDashboard />} /> */}
            <Route index element={<EmployeeDashboard />} />
  <Route path="dashboard" element={<EmployeeDashboard />} />
  <Route path="profile" element={<EmployeeProfile  />} />
  <Route path="attendance" element={<EmployeeAttendance />} />
  <Route path="leave" element={<EmployeeLeave />} />
  <Route path="payroll" element={<EmployeePayroll />} />
  <Route path="grievance" element={<EmployeeGrievance />} />
          </Route>

          {/* ADMIN */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
            <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="employees" element={<AdminEmployees />} />
  <Route path="attendance" element={<AdminAttendance />} />
  <Route path="leave" element={<AdminLeaveRequests />} />
  <Route path="payroll" element={<AdminPayroll />} />
  <Route path="grievance" element={<AdminGrievance />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
