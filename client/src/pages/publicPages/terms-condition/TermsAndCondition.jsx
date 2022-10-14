import React from "react";
import {
  TermsAndConditionContainer,
  GlobalStyles,
  Head,
  Body,
  Foot,
} from "./components";
import {useNavigate} from "react-router-dom";

function TermsAndCondition() {

  const navigate = useNavigate();
  return (
    <TermsAndConditionContainer>
      <GlobalStyles />
      <Head>
        <h1>Terms & Conditions</h1>
      </Head>

      <Body>
        <h5>PLEASE READ CAREFULLY</h5>

        <li>
          YOU ACCEPT THESE TERMS BY ACCESSING OR USING THE TOP NOTCH DOG
          GROOMING WEBSITE; IF YOU DO NOT AGREE WITH THESE TERMS, YOU SHOULD NOT
          ACCEPT THEM, IN WHICH CASE YOU DO NOT HAVE THE RIGHT TO USE THE TOP
          NOTCH DOG GROOMING MALOLOS WEBSITE.
        </li>

        <li>
          You understand and agree that we may change the Terms at any time, and
          that any changes will be effective as soon as we post the modified
          Terms on the Top-Notch Dog Grooming Malolos Website.
        </li>

        <li>
          Your continued use of the Top-Notch Dog Grooming Malolos Website going
          to follow the commenting of the modified Terms will constitute your
          agreement to be bound by the modified Terms.
        </li>
        <li>
          USER ACCOUNT Customer must first create an account on this website. It
          is your responsibility to provide accurate email, delivery, billing,
          and phone numbers.
        </li>
        <li>
          Any incorrect information provided may result in a delivery delay or
          non-delivery of the product you ordered.
        </li>

        <li>
          Your password and account information are saved on a secure server for
          future orders and warranty claims processing. The information is only
          used to process your orders, for statistical purposes, to help us
          improve our website and services, and to send you newsletters about
          special offers or new products.
        </li>

        <li>
          AUTHORIZE USE We grant you permission to view and download information
          and other materials at or through this Website only for your personal,
          non-commercial use, subject to these Terms.
        </li>

        <li>
          Use of any products or services offered through this Website may be
          subject to additional terms and conditions. Please read all the terms
          and conditions carefully before using any of these products or
          services.
        </li>

        <li>
          HEALTH AND MEDICAL CONDITIONS Procedures in the grooming environment
          can be stressful for some dogs, particularly senior, young,
          overweight, or medically compromised dogs. During or after the groom,
          the process may reveal previously unknown medical conditions or
          aggravate an existing one.
        </li>

        <li>
          This agreement gives Top-Notch Dog Grooming Malolos permission to seek
          emergency veterinary treatment in the best interest of your pet if we
          deem it necessary for whatever reason.
        </li>

        <li>
          We will make every effort to contact you before bringing your pet in
          for treatment, but this may not always be possible. Unless we are
          found to be negligent, the owner is responsible for all medical
          expenses.
        </li>

        <li>
          PURCHASES FROM THE WEBSITE GENERAL For any reason, including
          limitations on quantities available for purchase, inaccuracies or
          errors in product or pricing information, or problems identified by
          our credit and fraud avoidance department, Top-Notch Dog Grooming
          Website reserves the right to refuse or cancel an order. If your order
          is canceled after your credit card has been charged, we will refund
          the amount charged to your credit card (or other applicable payment
          account). We may attempt to notify you via email, billing address,
          and/or phone number provided at the time the order was placed if we
          make a change to or cancel an order.
        </li>

        <li>
          PRICING POLICY Prices on the Top-Notch Dog Grooming Website may change
          at any time without notice. This could be as a result of price changes
          from suppliers or current market conditions.
        </li>

        <li>
          Prices may differ from those found in stores. While Top-Notch Dog
          Grooming Website strives to provide accurate pricing information,
          mistakes do happen, and the price of your order will be validated as
          part of the acceptance procedure. Unless otherwise stated, all prices
          on the Top-Notch Dog Grooming Website are subject to taxes.
        </li>

        <li>
          Top-Notch Dog Grooming Website reserves the right to change prices at
          any time, without notice or explanation. PAYMENTS A third-party
          processor processes all payments made through this Website. You agree
          that the Company is not responsible for any third-party processor
          breaches of credit card or debit card security or privacy.
        </li>

        <li>
          You agree to pay all charges incurred by users of your credit card,
          debit card, or other payment method from the Company. ORDER
          CANCELLATION REFUNDS AND REPLACEMENT Except for Cash on Delivery, in
          which refunds will be made via bank transfer into the individual's
          bank account provided that complete and accurate bank account details
          are provided to us or check pick-up on preferred branch of store, all
          refunds will be made via the original payment mechanism and to the
          person who made the original payment. In addition, all refunds will be
          deducted from the transaction's handling and shipping fees. Send an
          email to topnotchdogrooming.tndg@gmail.com with your name, order
          confirmation number, and reason for the request within 30 days of
          receiving your Product to request a refund or replacement. If we can't
          verify your order, we may ask for proof of purchase.
        </li>

        <li>
          We will adjust this refund policy if necessary to comply with the laws
          of the jurisdiction in which you live. We are unable to accept food
          returns due to food safety regulations. This refund policy may change
          at any time without notice. RISKS Regardless of whether Top-Notch
          retains ownership of the products, the risk in and to any products
          sold to the customer passes to the customer upon delivery at the
          delivery place. If the customer fails to take delivery of the products
          ordered or delays delivery in any way, the risk in the products passes
          to the customer immediately. When products are returned, the risk
          remains with the customer until Top-Notch receives the defective
          goods.
        </li>

        <li>
          ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION Top-Notch Dog
          Grooming Malolos assumes no responsibility for the accuracy or
          completeness of the information provided on this website or app. Any
          reliance on this website's or app's content is entirely at your own
          risk.
        </li>

        <li>
          You acknowledge and agree that it is your responsibility to keep track
          of any changes to the material and information on this website. RISKS
          Regardless of whether Top-Notch retains ownership of the products, the
          risk in and to any products sold to the customer passes to the
          customer upon delivery at the delivery place.
        </li>

        <li>
          If the customer fails to take delivery of the products ordered or
          delays delivery in any way, the risk in the products passes to the
          customer immediately. When products are returned, the risk remains
          with the customer until Top-Notch receives the defective goods.
          ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION Top-Notch Dog
          Grooming Malolos assumes no responsibility for the accuracy or
          completeness of the information provided on this website or app.
        </li>

        <li>
          Any reliance on this website's or app's content is entirely at your
          own risk. You acknowledge and agree that it is your responsibility to
          keep track of any changes to the material and information on this
          website.
        </li>
      </Body>

      <Foot>
        <button onClick={() => navigate(-1)}>Ok</button>
      </Foot>
    </TermsAndConditionContainer>
  );
}

export default TermsAndCondition;
