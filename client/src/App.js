import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AddArticle from "./pages/add-article";
import Home from "./pages/home";
import SpecificArticle from "./pages/specific-article";
import Signup from "./pages/signup";
import { SnackBarProvider } from "./contexts/useSnackbar";
import { AuthProvider } from "./contexts/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <SnackBarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/add-article"
              element={
                <ProtectedRoute>
                  <AddArticle />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/article/:id"
              element={
                <ProtectedRoute>
                  <SpecificArticle />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </SnackBarProvider>
    </AuthProvider>
  );
}

export default App;
