import React, { useEffect, useState } from "react";
import {
  ModalBackdrop,
  FormInputsContainer,
  InputContainer,
} from "../basemodalDesignComponent";
import { Form, Formik, ErrorMessage, Field } from "formik";
import ProductAgeLimitLogic from "./ProductAgeLimitLogic";

function ProductAgeLimitModal({ openItem, setOpenItem, toast, setProductAgeLimit }) {
  const [disabled, setDisabled] = useState(false);

  const { onSubmit, initialValues, validationSchema } = ProductAgeLimitLogic({
    setOpenItem,
    toast,
    setDisabled,
    setProductAgeLimit
  });

  return (
    <ModalBackdrop openItem={openItem}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className="form__modal" autoComplete="off">
              <i
                class="fa-solid fa-xmark closeBtn"
                onClick={() => setOpenItem(false)}
              ></i>
              <h1>
                Add Product Age Limit
              </h1>

              <FormInputsContainer>
                <label htmlFor={"age_limit"}>Product Age Limit</label>
                <InputContainer>
                  <Field
                    type="text"
                    name={"age_limit"}
                    id={"age_limit"}
                    placeholder="(e.g: 1-3 weeks, 1-5 months, 1-2 years)"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"age_limit"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <button disabled={disabled} type="submit">
                Add new age limit
              </button>
            </Form>
          );
        }}
      </Formik>
    </ModalBackdrop>
  );
}

export default ProductAgeLimitModal;
