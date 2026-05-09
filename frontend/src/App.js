import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MarkAttendance from './pages/MarkAttendance';
import AttendanceHistory from './pages/AttendanceHistory';
import Profile from './pages/Profile';
import ManagerDashboard from './pages/ManagerDashboard';
import AllEmployeesAttendance from './pages/AllEmployeesAttendance';
import TeamCalendar from './pages/TeamCalendar';
import Reports from './pages/Reports';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import ManagerLayout from './components/ManagerLayout';
import EmployeeLayout from './components/EmployeeLayout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  React.useEffect(() => {
    document.body.style.background = '#f5f8fd'; // match dashboard bg
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
  }, []);
  return (
    <Router>
      <Routes>
        {/* Login (no nav) */}
        <Route path="/" element={<Login />} />

        {/* Employee routes with modern sidebar layout */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <EmployeeLayout>
              <Dashboard />
            </EmployeeLayout>
          </ProtectedRoute>
        } />
        <Route path="/mark-attendance" element={
          <ProtectedRoute>
            <EmployeeLayout>
              <MarkAttendance />
            </EmployeeLayout>
          </ProtectedRoute>
        } />
        <Route path="/attendance-history" element={
          <ProtectedRoute>
            <EmployeeLayout>
              <AttendanceHistory />
            </EmployeeLayout>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <EmployeeLayout>
              <Profile />
            </EmployeeLayout>
          </ProtectedRoute>
        } />
        {/* Manager profile route */}
        <Route path="/manager/profile" element={
          <ProtectedRoute>
            <ManagerLayout>
              <Profile />
            </ManagerLayout>
          </ProtectedRoute>
        } />

        {/* Manager routes wrapped with enterprise sidebar layout */}
        <Route path="/manager/dashboard" element={
          <ProtectedRoute>
            <ManagerLayout>
              <ManagerDashboard />
            </ManagerLayout>
          </ProtectedRoute>
        } />
        <Route path="/manager/attendance" element={
          <ProtectedRoute>
            <ManagerLayout>
              <AllEmployeesAttendance />
            </ManagerLayout>
          </ProtectedRoute>
        } />
        <Route path="/manager/calendar" element={
          <ProtectedRoute>
            <ManagerLayout>
              <TeamCalendar />
            </ManagerLayout>
          </ProtectedRoute>
        } />
        <Route path="/manager/reports" element={
          <ProtectedRoute>
            <ManagerLayout>
              <Reports />
            </ManagerLayout>
          </ProtectedRoute>
        } />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
