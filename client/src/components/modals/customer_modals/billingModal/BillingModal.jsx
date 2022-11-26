import React from "react";
import {
  ModalBackdrop,
  InputContainer,
  InputWrapper,
  CourierTypeContainer,
  CourierType,
  ButtonContainer,
  Note,
} from "./components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../../loader/Loader";
import logic from "./logic";
import { useState } from "react";
import { useEffect } from "react";

function BillingModal({ items, totalAmount, paymentType, setOpenBilling }) {
  const [courierType, setCourierType] = useState("");
  const [loading, setLoading] = useState(true);
  const [agree, setAgree] = useState(false);
  const {
    initialValues,
    validationSchema,
    onSubmit,
    validateContact,
    validateZipCode,
  } = logic({
    items,
    totalAmount,
    paymentType,
    ToastContainer,
    toast,
    courierType,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader bg="rgba(0,0,0,0.5)" />;
  }

  const brgyValues = [
    "Anilao",
    "Atlag",
    "Babatnin",
    "Bagna",
    "Bagong Bayan",
    "Balayong",
    "Balite",
    "Bangkal",
    "Barihan",
    "Bulihan",
    "Bungahan",
    "Caingin",
    "Calero",
    "Caliligawan",
    "Canalate",
    "Caniogan",
    "Catmon",
    "Cofradia",
    "Dakila",
    "Guinhawa",
    "Ligas",
    "Liyang",
    "Longos",
    "Look 1st",
    "Look 2nd",
    "Lugam",
    "Mabolo",
    "Mambog",
    "Masile",
    "Matimbo",
    "Mojon",
    "Namayan",
    "Niugan",
    "Pamarawan",
    "Panasahan",
    "Pinagbakahan",
    "San Agustin",
    "San Gabriel",
    "San Juan",
    "San Pablo",
    "San Vicente",
    "Santiago",
    "Santisima Trinidad",
    "Santo Cristo",
    "Santo Niño",
    "Santo Rosario",
    "Santol",
    "Sumapang Bata",
    "Sumapang Matanda",
    "Taal",
    "Tikay",
  ];
  return (
    <ModalBackdrop>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { contactNo } = formik.values;

          return (
            <Form className="billing__form" autoComplete="off">
              <h1>Billing</h1>
              <h3>Choose a delivery courier method below</h3>

              <h4>
                <i class="fa-solid fa-info"></i> Billing Information{" "}
              </h4>

              <InputWrapper className="billing">
                <InputContainer>
                  <Field
                    type="text"
                    name="houseNo"
                    id={"houseNo"}
                    placeholder="House no."
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"houseNo"}
                    className="error__message"
                  />
                </InputContainer>

                <InputContainer>
                  <Field
                    type="text"
                    name="subdivision"
                    id={"subdivision"}
                    placeholder="subdivision no / street"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"subdivision"}
                    className="error__message"
                  />
                </InputContainer>
              </InputWrapper>


              <InputWrapper className="billing">
                <InputContainer>
                  <Field
                    type="text"
                    name="contactNo"
                    id={"contactNo"}
                    placeholder="Contact number"
                    validate={validateContact}
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"contactNo"}
                    className="error__message"
                  />
                </InputContainer>
              </InputWrapper>

             
              <InputWrapper className="billing">
                <InputContainer>
                  <Field
                    type="text"
                    name="brgy"
                    id={"brgy"}
                    placeholder="brgy"
                    as="select"
                  >
                    <option value={''}>Select Brgy</option>
                    {brgyValues.map((value) => (
                      <option value={value}>{value}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name={"brgy"}
                    className="error__message"
                  />
                </InputContainer>
              </InputWrapper>

              <InputWrapper className="billing">
                <InputContainer>
                  <Field
                    type="text"
                    name="city"
                    id={"city"}
                    placeholder="City"
                    as="select"
                  >
                    <option value={"malolos"}>Malolos</option>
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name={"city"}
                    className="error__message"
                  />
                </InputContainer>
              </InputWrapper>

              <Note>
                <input
                  type={"checkbox"}
                  onChange={(e) => setAgree(e.target.checked)}
                  checked={agree === true}
                />
                &nbsp;
                <small style={{ color: "maroon" }}>
                  Note:&nbsp; The Delivery of the product is only around malolos
                  bulacan, Do you agree?
                </small>
              </Note>

              <CourierTypeContainer>
                <CourierType
                  onClick={() => setCourierType("lalamove")}
                  style={{
                    background:
                      courierType == "lalamove" ? "#EAEAEA" : "transparent",
                    borderColor:
                      courierType == "lalamove" ? "gray" : "transparent",
                  }}
                >
                  <img src="/images/lalamove.png" />
                </CourierType>
                <CourierType
                  onClick={() => setCourierType("jnt")}
                  style={{
                    background:
                      courierType == "jnt" ? "#EAEAEA" : "transparent",
                    borderColor:
                      courierType == "jnt" ? "gray" : "transparent",
                  }}
                >
                  <img src="/images/jnt.png" />
                </CourierType>
              </CourierTypeContainer>

              <ButtonContainer>
                <button
                  className="cancell"
                  onClick={() => setOpenBilling(false)}
                >
                  Cancel
                </button>
                <button className="proceed" type="submit" disabled={!agree}>
                  Proceed
                </button>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </ModalBackdrop>
  );
}

export default BillingModal;
