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
  const { initialValues, validationSchema, onSubmit, validateContact, validateZipCode } = logic({
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
              <InputWrapper>
                <label htmlFor="billingAddress">Billing Address</label>
                <InputContainer>
                  <Field
                    type="text"
                    name="billingAddress"
                    id={"billingAddress"}
                    placeholder="Billing address Including Street"
                  />
                  <i class="fa-solid fa-location-dot"></i>
                </InputContainer>
                <ErrorMessage
                  component={"div"}
                  name={"billingAddress"}
                  className="error__message"
                />
              </InputWrapper>

              <InputWrapper>
                <InputContainer>
                  <Field
                    type="text"
                    name="contactNo"
                    id={"contactNo"}
                    placeholder="Contact number"
                    validate={validateContact}
                  />

                  <Field
                    type="text"
                    name="zipCode"
                    id={"zipCode"}
                    placeholder="Zip Code"
                    validate={validateZipCode}
                  />
                </InputContainer>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <ErrorMessage
                    component={"div"}
                    name={"contactNo"}
                    className="error__message"
                  />

                  <ErrorMessage
                    component={"div"}
                    name={"zipCode"}
                    className="error__message"
                  />
                </div>
              </InputWrapper>

              <Note>
                <input
                  type={"checkbox"}
                  onChange={(e) => setAgree(e.target.checked)}
                  checked={agree === true}
                />
                &nbsp;
                <small style={{color:"maroon"}}>
                  Note:&nbsp; The Delivery of the product is only around malolos bulacan, Do you agree?
                </small>
              </Note>

              <CourierTypeContainer>
                <CourierType
                  onClick={() => setCourierType("toktok")}
                  style={{
                    background:
                      courierType == "toktok" ? "#EAEAEA" : "transparent",
                      borderColor:
                      courierType == "toktok" ? "gray" : "transparent",
                  }}
                >
                  <img src="/images/lalamove.png" />
                </CourierType>
                <CourierType
                  onClick={() => setCourierType("lalamove")}
                  style={{
                    background:
                      courierType == "lalamove" ? "#EAEAEA" : "transparent",
                      borderColor:
                      courierType == "lalamove" ? "gray" : "transparent",
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
