import React, { useEffect, useState } from "react";
import {
  ModalBackdrop,
  FormInputsContainer,
  InputContainer,
} from "./modalComponent";
import { Form, Formik, ErrorMessage, Field } from "formik";
import inventoryLogic from "./inventoryLogic";

function InventoryModal({ openItem, setOpenItem, toast, setProducts }) {
  const [img, setImg] = useState(null);
  const [imgError, setImgError] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    try {
      if (img != null) {
        setImgError("");
        const fileReader = new FileReader();
        fileReader.readAsDataURL(img);
        fileReader.onloadend = async () => {
          if (!fileReader.result.includes("image")) {
            throw new Error("Please set an image to this product");
          }
          if (fileReader.result.includes("image")) {
            setImg(fileReader.result);
            return setImgError("");
          }
        };
      }
    } catch (error) {
      setImgError(error.message);
      console.error(error.message);
    }
  }, [img]);

  const { onSubmit, initialValues, validationSchema } = inventoryLogic({
    img,
    imgError,
    setOpenItem,
    toast,
    setImgError,
    setProducts,
    setDisabled,
  });

  const dropDownCategory = [
    { key: "Select Category", value: "" },
    {
      key: "Toy",
      value: "Toy",
    },
    {
      key: "Food",
      value: "Food",
    },
    {
      key: "Utility",
      value: "Utility",
    },
    {
      key: "Hygiene kit",
      value: "Hygiene kit",
    },
  ];

  const dropDownPetType = [
    {
      key: "Select Applicable Pet",
      value: "",
    },
    {
      key: "Dog",
      value: "Dog",
    },
    {
      key: "Cat",
      value: "Cat",
    },
  ];

  const dropDownAgeGap = [
    {
      key: "Select age limit",
      value: "",
    },
    {
      key: "1-2 (yrs old)",
      value: "1-2",
    },
    {
      key: "2-4 (yrs old)",
      value: "2-4",
    },
    {
      key: "5-7 (yrs old)",
      value: "5-7",
    },
    {
      key: "Above 7+ (yrs old)",
      value: "7+",
    },
  ];

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
                Add Item <i className="fa-solid fa-warehouse"></i>
              </h1>

              <FormInputsContainer>
                <label htmlFor={"productName"}>Product Name</label>
                <InputContainer>
                  <Field
                    type="text"
                    name={"productName"}
                    id={"productName"}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"productName"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productPrice"}>Product Price (₱)</label>
                <InputContainer>
                  <Field
                    type="number"
                    name={"productPrice"}
                    min="0"
                    id={"productPrice"}
                    placeholder="00.00"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"productPrice"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productStocks"}>Product Stock (QTY)</label>
                <InputContainer>
                  <Field
                    type="number"
                    name={"productStocks"}
                    min="0"
                    id={"productStocks"}
                    placeholder="-"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"productStocks"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productAgeGap"}>Product Age Dedicated</label>
                <InputContainer>
                  <Field
                    as="select"
                    name={"productAgeGap"}
                    placeholder="(e.g: 1-2, 3-4, 5,9)"
                    id={"productAgeGap"}
                  >
                    {dropDownAgeGap.map((option) => {
                      return (
                        <option key={option.key} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name={"productAgeGap"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"petType"}>Pet Type</label>
                <InputContainer>
                  <Field as="select" name={"petType"} id={"petType"}>
                    {dropDownPetType.map((option) => {
                      return (
                        <option key={option.key} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name={"petType"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productCategory"}>Product Category</label>
                <InputContainer>
                  <Field
                    as="select"
                    name={"productCategory"}
                    id={"productCategory"}
                  >
                    {dropDownCategory.map((option) => {
                      return (
                        <option key={option.key} value={option.value}>
                          {option.key}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    name={"productCategory"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productDescription"}>
                  Product Description
                </label>
                <InputContainer>
                  <Field
                    as="textarea"
                    name={"productDescription"}
                    id={"productDescription"}
                    placeholder="Additional information"
                  />
                  <ErrorMessage
                    component={"div"}
                    name={"productDescription"}
                    className="error__message"
                  />
                </InputContainer>
              </FormInputsContainer>

              <FormInputsContainer>
                <label htmlFor={"productImg"}>Product Image</label>
                <InputContainer>
                  <input
                    type={"file"}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <div className="error__message">{imgError}</div>
                </InputContainer>
              </FormInputsContainer>

              <button disabled={disabled} type="submit">
                Add Item
              </button>
            </Form>
          );
        }}
      </Formik>
    </ModalBackdrop>
  );
}

export default InventoryModal;
