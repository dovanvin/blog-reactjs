import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth-context";
import SignInPage from "./pages/sign_in_page/SignInPage";
import SignUpPage from "./pages/sign_up_page/SignUpPage";
import HomePage from "./pages/home_page/HomePage" ;
import NoPage from "./pages/404_page/NoPage";
import BlogPage from "./pages/blog_page/BlogPage";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
