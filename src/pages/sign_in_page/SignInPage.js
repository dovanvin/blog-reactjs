import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import EyeOpen from "../../components/icons/EyeOpen";
import EyeSlash from "../../components/icons/EyeSlash";
import Input from "../../components/inputs/Input";
import Label from "../../components/label/Label";
import { useAuth } from "../../contexts/Auth-context";
import { toast } from "react-toastify";
import './SignInPage.scss';

//--- Yup check if with from ----
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-blog/firebase-config";
const schema = yup.object({
    email: yup.string().email("Please enter your email address").required("Please enter your email"),
    password: yup.string().min(8,"Your password must be at least 8 characters or greater").required("Please enter your password")
});
//---- Yup ---------------
const SignInPage = () => {
  const { handleSubmit, control, formState: {isValid, isSubmitting, errors} } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
  })
  //--------------- Toggle-Password ------------
  const [togglePassword, setTogglePassword] = useState(false);
  //--------------- Toggle-Password ------------

  //------ hiện thông báo Dom 
  useEffect( () => {
    const arrErroes = Object.values(errors);
    if( arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay:0,
      });
    }
  },[errors]);
  //------

  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect( () => {
      document.title = "login page" ;
      if( userInfo?.email ) navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignIn = async (values) => {
      if (!isValid) return ;
      await signInWithEmailAndPassword(auth, values.email, values.password)
      navigate("/")
  }
  return (
    <>
      <div className="logo-signup">
        <div className="container">
          <img
            src="https://imgs.search.brave.com/DFVj_kxUHr73wtExNJjUbuCg_IlDkSF0aEUP8WSkGTk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/Z2xDWWkyOHF2UllE/ZVNGWHRlal9nSGFI/YSZwaWQ9QXBp"
            alt=""
            className="eaut"
          />
          <div className="heading">Eaut Blog</div>
          <form
            className="form"
            onSubmit={handleSubmit(handleSignIn)}
            autoComplete="off"
          >

            <Field>
              <Label htmlFor="email">Email:</Label>
              <Input
                control={control}
                type="email"
                name="email"
                placeholder="enter your email"
              >
                {" "}
              </Input>
            </Field>

            <Field>
              <Label htmlFor="password">Password:</Label>
              <Input
                control={control}
                type={togglePassword ? "text" : "password"}
                name="password"
                placeholder="enter your password"
              >
                {!togglePassword ? (
                  <EyeSlash
                    className="icon-eye"
                    onClick={() => setTogglePassword(true)}
                  ></EyeSlash>
                ) : (
                  <EyeOpen
                    className="icon-eye"
                    onClick={() => setTogglePassword(false)}
                  ></EyeOpen>
                )}
              </Input>
            </Field>

            <div className="have-account">You don't have an account do you ? <NavLink to={'/sign-up'}>Register</NavLink></div>
            <Button
              type="submit"
              className="btn-sign-up"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
