import React from "react";
import * as yup from "yup";
import Cookies from "js-cookie";
function AppointmentLogic() {
  const onSubmit = async (values) => {
    try {
      console.log(values);
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
      additionalRequest: "",
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
    additionalRequest: yup.string(),
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

  return {
    onSubmit,
    initialValues,
    validationSchema,
    genderOptions,
    petTypeOptions,
    requestTypeOptions,
  };
}

export default AppointmentLogic;
