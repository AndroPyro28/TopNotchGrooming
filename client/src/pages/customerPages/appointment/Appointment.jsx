import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import AppointmentLogic from "./appointmentLogic";
import {
  GlobalStyles,
  AppointmentFormPhoto,
  AppointmentFormInputsContainer,
  FormInputsContainer,
} from "./appointmentComponents";


import { toast, ToastContainer } from "react-toastify";
import FormikControl from "../../../formik/FormikControl";
import Loader from "../../../components/loader/Loader"


function Appointment() {
  const [image, setImage] = useState(null);
  const [imgError, setImgError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setImgError("");

      if (image != null) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);

        fileReader.onloadend = async () => {
          if (fileReader?.result?.includes("image")) {
            return setImage(fileReader.result);
          } else {
            setImgError("Please set an image to this product");
          }
        };
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [image]);

  const {
    initialValues,
    validationSchema,
    onSubmit,
    genderOptions,
    petTypeOptions,
    requestTypeOptions,
    dateTodayFormatter,
  } = AppointmentLogic({ toast, image, setImgError, setLoading });

  useEffect(() => {
    const birthdate = document.querySelector("#birthdate");
    const scheduledDate = document.querySelector("#scheduledDate");
    birthdate.max = dateTodayFormatter();
    scheduledDate.min = `${dateTodayFormatter()}T00:00:00`;
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form class="appointment__form__container" autoComplete="off">
            <AppointmentFormPhoto></AppointmentFormPhoto>
            <GlobalStyles />
            {
              loading && <Loader bg={"rgba(0, 0, 0, 0.548)"} />
            }
            <ToastContainer autoClose={1500} />
            <AppointmentFormInputsContainer>
              <h2>
                B o o k &nbsp; A n &nbsp; A p p o i n t m e n t &nbsp; O n l i n
                e!
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                doloremque obcaecati maxime voluptatem vero quasi voluptatum
                alias. Quasi, dolor placeat!
              </p>

              <FormInputsContainer>
                <FormikControl
                  name="petName"
                  label="Pet Name"
                  type="text"
                  control="input"
                  className="input__container"
                />

                <FormikControl
                  name="petType"
                  label="Pet Type"
                  control="select"
                  className="input__container"
                  options={petTypeOptions}
                />
              </FormInputsContainer>

              <FormInputsContainer>
                <FormikControl
                  name="birthdate"
                  label="Pet birthday"
                  id="birthdate"
                  control="input"
                  type="date"
                  className="input__container"
                />

                <FormikControl
                  name="gender"
                  label="Gender"
                  control="select"
                  options={genderOptions}
                  className="input__container"
                />
              </FormInputsContainer>

              <FormInputsContainer>
                <FormikControl
                  name="breed"
                  label="Pet Breed"
                  type="text"
                  control="input"
                  className="input__container"
                />

                <FormikControl
                  name="appointmentType"
                  label="Appointment Type"
                  control="select"
                  options={requestTypeOptions}
                  className="input__container"
                />
              </FormInputsContainer>

              <FormInputsContainer>
                <FormikControl
                  name="dateNtime"
                  label="Prefered date & time"
                  id="scheduledDate"
                  control="input"
                  type="datetime-local"
                  className="input__container"
                />
              </FormInputsContainer>

              <FormInputsContainer>
                <div className="input__container">
                  <label>Sample picture of your pet</label>
                  <input
                    className="input"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                  />
                  <div className="error__message">{imgError}</div>
                </div>
                
              </FormInputsContainer>

              <FormInputsContainer>
                <FormikControl
                  name="additional_details"
                  label="Additional Details"
                  control="textarea"
                  className="input__container"
                />
              </FormInputsContainer>

              <FormInputsContainer>
                <button class="button">
                  Submit <i class="fa-solid fa-envelope-circle-check"></i>
                </button>
              </FormInputsContainer>
            </AppointmentFormInputsContainer>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Appointment;
