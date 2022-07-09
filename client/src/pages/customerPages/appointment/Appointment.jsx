import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import AppointmentLogic from "./appointmentLogic";
import {
  GlobalStyles,
  AppointmentFormPhoto,
  AppointmentFormInputsContainer,
  FormInputsContainer,
} from "./appointmentComponents";
import FormikControl from "../../../formik/FormikControl";
function Appointment() {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    genderOptions,
    petTypeOptions,
    requestTypeOptions,
    liveStreamOptions,
    dateTodayFormatter,
  } = AppointmentLogic();

  useEffect(() => {
    const birthdate = document.querySelector("#birthdate");
    const scheduledDate = document.querySelector("#scheduledDate");
    birthdate.max = dateTodayFormatter();
    scheduledDate.min = `${dateTodayFormatter()}T00:00:00`;
  }, []);

  const validateLiveStream = (liveStreamType) => {
    return liveStreamType == undefined || liveStreamType?.length <= 0
      ? "Live stream audience is required"
      : null;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const appointmentType = formik.values.appointmentType;
        const liveStreamType = formik.values.liveStreamType;
        return (
          <Form class="appointment__form__container">
            <AppointmentFormPhoto></AppointmentFormPhoto>
            <GlobalStyles />

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
                  control="date"
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
                  type="input"
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
                  control="dateTimeLocal"
                  className="input__container"
                />

                {appointmentType?.length > 0 &&
                  appointmentType == "grooming" && (
                    <FormikControl
                      name="liveStreamType"
                      label="Live stream publicity"
                      control="select"
                      options={liveStreamOptions}
                      className="input__container"
                      validate={() => validateLiveStream(liveStreamType)}
                    />
                  )}
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
