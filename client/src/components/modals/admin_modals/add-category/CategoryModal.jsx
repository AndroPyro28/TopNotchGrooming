import React, { useEffect, useState } from "react";
import {
  ModalBackdrop,
  FormInputsContainer,
  InputContainer,
} from "../basemodalDesignComponent";
import { Form, Formik, ErrorMessage, Field } from "formik";
import CategoryLogic from "./categoryLogic";
import Category from "../Category_AgeLimit";

function CategoryModal({ openItem, setOpenItem, toast, setCategories, categories }) {
  const [disabled, setDisabled] = useState(false);

  const { onSubmit, initialValues, validationSchema, updateCategory, deleteCategory } = CategoryLogic({
    setOpenItem,
    toast,
    setDisabled,
    setCategories,
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
                Add category
              </h1>

              <FormInputsContainer>
                <label htmlFor={"category"}>Category</label>
                <InputContainer>
                  <Field
                    type="text"
                    name={"category"}
                    id={"category"}
                    placeholder="Category"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"category"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <button disabled={disabled} type="submit">
                Add Category
              </button>
              
              {
                categories?.map((data) => <Category 
                  setData={setCategories}
                  data={data}
                  context="category"
                  updateItem={updateCategory}
                  deleteItem={deleteCategory}
                  />)
              }
              
              
            </Form>
          );
        }}
      </Formik>
    </ModalBackdrop>
  );
}

export default CategoryModal;
