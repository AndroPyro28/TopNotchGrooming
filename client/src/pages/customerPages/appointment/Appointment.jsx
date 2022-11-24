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
import Loader from "../../../components/loader/Loader";
import CustomAxios from "../../../customer hooks/CustomAxios";

function Appointment() {
  const [image, setImage] = useState(null);
  const [imgError, setImgError] = useState("");
  const [loading, setLoading] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await CustomAxios({
          METHOD: "GET",
          uri: "/api/customer/getAllAdmin",
        });
        const { success, msg, data } = res;
        console.log(res);
        if (msg?.includes("session expired") && !success) {
          toast(msg, { type: "error" });
          return window.location.reload();
        }

        setAdmins(
          data.map((d) => {
            return {
              key: `${d.firstname} ${d.lastname}`,
              value: d.id,
            };
          })
        );
        setAdmins((prev) => [
          {
            key: "Select Admin",
            value: "",
          },
          ...prev,
        ]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      setImgError("");
      if (image != null) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onloadend = async () => {
          if (!fileReader?.result?.includes("image")) {
            setImage("");
            setImgError("Please set an image type to this appointment");
          } else {
            setImage(fileReader.result);
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
    birthdate.max = dateTodayFormatter({ year: 1, month: 4 });
    scheduledDate.min = `${dateTodayFormatter({ date: 1 })}T07:00:00`;
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
       
        const time = formik.values?.dateNtime?.split('T')[1];
        if(time < '08:00' || time > '19:00') {
        //   formik.setTouched({
        //     ...formik.touched,
        //     dateNtime: true,
        // });
        
        // formik.setFieldError('dateNtime', 'invalid time')
        formik.setFieldValue('dateNtime', '')
        }
        return (
          <Form class="appointment__form__container" autoComplete="off">
            <AppointmentFormPhoto></AppointmentFormPhoto>
            <GlobalStyles />
            {loading && <Loader bg={"rgba(0, 0, 0, 0.548)"} />}
            <ToastContainer autoClose={4000} />
            <AppointmentFormInputsContainer>
              <h2>
                B o o k &nbsp; A n &nbsp; A p p o i n t m e n t &nbsp; O n l i n
                e!
              </h2>

              <p>
                All online bookings are reviewed and approved prior to
                confirmation to avoid scheduling conflicts
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

                <FormikControl
                  name="admin_id"
                  label="Select groomer (optional)"
                  control="select"
                  options={admins}
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
