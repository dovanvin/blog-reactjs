import React, { useEffect } from "react";
import {useState} from 'react';
import Input from "../../components/inputs/Input";
import Label from "../../components/label/Label";
import { useForm } from "react-hook-form";
import "./SignUpPage.scss";
import EyeSlash from "../../components/icons/EyeSlash";
import Field from "../../components/field/Field";
import EyeOpen from "../../components/icons/EyeOpen";
import Button from "../../components/button/Button";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth, db } from "../../firebase-blog/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import {NavLink} from "react-router-dom" ;



//--- Yup check if with from ----
const schema = yup.object({
  fullname: yup.string().required("please enter your fullname"),
  email: yup.string().email("Please enter your email address").required("Please enter your email"),
  password: yup.string().min(8,"Your password must be at least 8 characters or greater").required("Please enter your password")
});
//---- Yup ---------------


const SignUpPage = () => {
  const navigate = useNavigate();

  // ========== xử lý hook from ===========
  const { control, handleSubmit, watch, reset, formState:{errors, isValid, isSubmitting} } = useForm({ mode:"onChange" , resolver: yupResolver(schema)});
  // ========== xử lý end hook from ==========

  //========== Get Firebase ==============
  const handleSignUp = async (values) => {
    if(!isValid) return ;
    console.log(values);
    const user = await createUserWithEmailAndPassword( auth, values.email, values.password) ;
    await updateProfile( auth.currentUser, {
      displayName: values.fullname ,
    });
    // create data
    const colRef = collection(db, "user");
    await addDoc( colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    })
    toast.success(" Thank you !!!") ;
    navigate("/");
  }
  //================== firebase ========================

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

  useEffect( () => {
    document.title = "Register Page";
  }, []);

  
  return (
    <div className="logo-signup">
      <div className="container">
        <img
          src="https://imgs.search.brave.com/DFVj_kxUHr73wtExNJjUbuCg_IlDkSF0aEUP8WSkGTk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/Z2xDWWkyOHF2UllE/ZVNGWHRlal9nSGFI/YSZwaWQ9QXBp"
          alt=""
          className="eaut"
        />
        <div className="heading">Eaut Blog</div>
        <form className="form" onSubmit={handleSubmit(handleSignUp)} autoComplete='off'>
          <Field>
            <Label htmlFor="fullname">Full-Name:</Label>
            <Input
              control={control}
              type="text"
              name="fullname"
              placeholder="enter your fullname"
              > </Input>
          </Field>

          <Field>
            <Label htmlFor="fullname">Email:</Label>
            <Input
              control={control}
              type="email"
              name="email"
              placeholder="enter your email"
              > </Input>
          </Field>

          <Field>
            <Label htmlFor="fullname">Password:</Label>
            <Input
              control={control}
              type={togglePassword ? "text" : "password"}
              name="password"
              placeholder="enter your password"
              > 
                {
                  !togglePassword ? <EyeSlash className="icon-eye" onClick={() => setTogglePassword(true)}></EyeSlash>
                  : <EyeOpen className="icon-eye" onClick={() => setTogglePassword(false)}></EyeOpen>
                }
              </Input>
          </Field>

          <Button type="submit" className='btn-sign-up' disabled={isSubmitting}  isLoading={isSubmitting}>
            Sign Up
          </Button>
          <div className="have-account">Do you already have an account ? <NavLink to={'/sign-in'}> To login</NavLink></div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
