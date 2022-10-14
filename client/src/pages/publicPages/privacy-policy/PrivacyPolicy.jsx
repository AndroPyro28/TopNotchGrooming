import React from "react";
import {
  TermsAndConditionContainer as PrivacyPolicyContainer,
  GlobalStyles,
  Head,
  Body,
  Foot,
} from "../terms-condition/components";
import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <PrivacyPolicyContainer>
      <GlobalStyles />
      <Head>
        <h1>PRIVACY POLICY</h1>
      </Head>

      <Body>
        <h5>USER ACCOUNT</h5>

        <p>
          Customer must first create an account on this website. It is your
          responsibility to provide accurate email, delivery, billing, and phone
          numbers. Any incorrect information provided may result in a delivery
          delay or non-delivery of the product you ordered. Your password and
          account information are saved on a secure server for future orders and
          warranty claims processing. The information is only used to process
          your orders, for statistical purposes, to help us improve our website
          and services, and to send you newsletters about special offers or new
          products.
        </p>

        <h5>AUTHORIZE USE</h5>
        <p>
          We grant you permission to view and download information and other
          materials at or through this Website only for your personal,
          non-commercial use, subject to these Terms. Use of any products or
          services offered through this Website may be subject to additional
          terms and conditions. Please read all the terms and conditions
          carefully before using any of these products or services.
        </p>

        <h5>DEFINITION OF TERMS</h5>
        <p>
          When you create an account or profile on the Website, we collect the
          following personal information:
        </p>
        <li>First name</li>
        <li>Last name</li>
        <li>Email address</li>
        <li>First name</li>
        <li>Birthdate</li>

        <p>
          When you make a purchase from the Website, you must provide the
          following information:
        </p>

        <li>First name</li>
        <li>Last name</li>
        <li>Contact number</li>
        <li>Delivery or Shipping Address</li>
        <li>Billing Address, if different from shipping address</li>

        <p>
          If you choose to pay with a credit or debit card, you will be directed
          to a payment gateway service provider's website/platform. They may
          collect personal and financial information from you for their own use
          and to facilitate your online payment. The payment gateway service
          provider will handle your personal and financial data in accordance
          with its terms, conditions, and privacy policy.
        </p>

        <h5>CUSTOMER’S APPROVAL </h5>

        <p>By continuing to use our website and services, you reaffirm your consent to the use or processing of your personal data in accordance with the terms of this Privacy Policy. You can withdraw or modify the scope of your consent by contacting our Data Protection Officer using the information provided below. Please keep in mind that if you choose to withdraw, modify, or limit the scope of your consent, we may be unable to provide you with the services you require.</p>
        

        <h5>YOUR DATA SUBJECT RIGHTS:</h5>

        <p>Under the Data Privacy Act of 2012, you have the right to be informed, to object, to access, to rectify, to erasure or blocking, to damages, to data portability, and to complain about your personal information. You may exercise these rights at any time by following the procedures outlined in government publications and regulations. We have provided contact information for you to use if you have any questions or concerns about your personal information.</p>
      
      </Body>

      <Foot>
        <button onClick={() => navigate(-1)}>Ok</button>
      </Foot>
    </PrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;
