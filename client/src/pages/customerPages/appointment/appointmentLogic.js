import React from "react";
import * as yup from "yup";
import Cookies from "js-cookie";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { replace } from "formik";
function AppointmentLogic({toast, image, setImgError}) {

  const navigate = useNavigate();


  const onSubmit = async (values) => {
    try {

      values.image = image;
      if(image == null || !image) {
        return setImgError("Please set an image to this product");

      }
      const res = await axios.post("/api/customer/appointment", values, {
        headers: {
          userinfo: Cookies.get("userToken"),
        },
      });

      const {success, msg} = res.data;

      if(!success && msg.includes('session expired')) {
        return window.location.reload();
      }

      if(!success) {
        return toast(msg, {type: 'error'});
      }

      toast(msg, {type: 'success'});

      setTimeout( _ => navigate('/customer/profile', {replace: true}), 2500)
    } catch (error) {
      console.error(error.message);
    }
  };

  const initialValues = () => {
    return {
      petName: "",
      petType: "",
      birthdate: "",
      gender: "",
      breed: "",
      appointmentType: "",
      dateNtime: "",
      liveStreamType: "",
      additional_details: "",
    };
  };

  const validationSchema = yup.object({
    petName: yup.string().required("Pet name is required"),
    petType: yup.string().required("Pet Type is required"),
    birthdate: yup.date().required("Birthdate is required"),
    gender: yup.string().required("Gender is required"),
    breed: yup.string().required("Breed is required"),
    appointmentType: yup.string().required("Appointment is required"),
    dateNtime: yup.date().required("Date and time is required"),
    liveStreamType: yup.string(),
    additional_details: yup.string(),
  });

  const genderOptions = [
    {
      key: "Select Gender",
      value: "",
    },
    {
      key: "Male",
      value: "male",
    },
    {
      key: "Female",
      value: "female",
    },
  ];

  const petTypeOptions = [
    {
      key: "Select",
      value: "",
    },
    {
      key: "Dog",
      value: "dog",
    },
    {
      key: "Cat",
      value: "cat",
    },
  ];

  const requestTypeOptions = [
    {
      key: "Select Type",
      value: "",
    },
    {
      key: "Grooming",
      value: "grooming",
    },
    {
      key: "Walk-in consulting",
      value: "walk-in-consulting",
    },
  ];

  const liveStreamOptions = [
    { key: "Select", value: "" },
    { key: "Public Live Stream", value: "public" },
    { key: "Private Live Stream", value: "private" },
  ];

  const dateTodayFormatter = () => {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const today = `${yyyy}-${mm}-${dd}`;
    return today
  }
  return {
    onSubmit,
    initialValues,
    validationSchema,
    genderOptions,
    petTypeOptions,
    requestTypeOptions,
    liveStreamOptions,
    dateTodayFormatter
  };
}

export default AppointmentLogic;
