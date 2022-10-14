import React from "react";
import {
  TermsAndConditionContainer as ReturnPolicyContainer,
  GlobalStyles,
  Head,
  Body,
  Foot,
} from "../terms-condition/components";
import { useNavigate } from "react-router-dom";

function ReturnPolicy() {
  const navigate = useNavigate();

  return (
    <ReturnPolicyContainer>
      <GlobalStyles />
      <Head>
        <h1>RETURN AND EXCHANGE POLICY</h1>
      </Head>

      <Body>
        <h5>GENERAL</h5>
        <p>
          For any reason, including limitations on quantities available for
          purchase, inaccuracies or errors in product or pricing information, or
          problems identified by our credit and fraud avoidance department,
          Top-Notch Dog Grooming Website reserves the right to refuse or cancel
          an order. If your order is canceled after your credit card has been
          charged, we will refund the amount charged to your credit card (or
          other applicable payment account). We may attempt to notify you via
          email, billing address, and/or phone number provided at the time the
          order was placed if we make a change to or cancel an order.
        </p>

        <h5>PRICING POLICY</h5>
        <p>
          Prices on the Top-Notch Dog Grooming Website may change at any time
          without notice. This could be as a result of price changes from
          suppliers or current market conditions. Prices may differ from those
          found in stores. While Top-Notch Dog Grooming Website strives to
          provide accurate pricing information, mistakes do happen, and the
          price of your order will be validated as part of the acceptance
          procedure. Unless otherwise stated, all prices on the Top-Notch Dog
          Grooming Website are subject to taxes. Top-Notch Dog Grooming Website
          reserves the right to change prices at any time, without notice or
          explanation.
        </p>

        <h5>PAYMENTS</h5>

        <p>
          A third-party processor processes all payments made through this
          Website. You agree that the Company is not responsible for any
          third-party processor breaches of credit card or debit card security
          or privacy. You agree to pay all charges incurred by users of your
          credit card, debit card, or other payment method from the Company.
        </p>

        <h5>ORDER CANCELLATION REFUNDS AND REPLACEMENT</h5>

        <p>
          Except for Cash on Delivery, in which refunds will be made via bank
          transfer into the individual's bank account provided that complete and
          accurate bank account details are provided to us or check pick-up on
          preferred branch of store, all refunds will be made via the original
          payment mechanism and to the person who made the original payment. In
          addition, all refunds will be deducted from the transaction's handling
          and shipping fees. Send an email to topnotchdogrooming.tndg@gmail.com
          with your name, order confirmation number, and reason for the request
          within 30 days of receiving your Product to request a refund or
          replacement. If we can't verify your order, we may ask for proof of
          purchase. We will adjust this refund policy if necessary to comply
          with the laws of the jurisdiction in which you live. We are unable to
          accept food returns due to food safety regulations. This refund policy
          may change at any time without notice.
        </p>

        <h5>RISKS</h5>
        <p>
          Regardless of whether Top-Notch retains ownership of the products, the
          risk in and to any products sold to the customer passes to the
          customer upon delivery at the delivery place. If the customer fails to
          take delivery of the products ordered or delays delivery in any way,
          the risk in the products passes to the customer immediately. When
          products are returned, the risk remains with the customer until
          Top-Notch receives the defective goods.
        </p>

        <h5>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h5>

        <p>
          Top-Notch Dog Grooming Malolos assumes no responsibility for the
          accuracy or completeness of the information provided on this website
          or app. Any reliance on this website's or app's content is entirely at
          your own risk. You acknowledge and agree that it is your
          responsibility to keep track of any changes to the material and
          information on this website.
        </p>
      </Body>

      <Foot>
        <button onClick={() => navigate(-1)}>Ok</button>
      </Foot>
    </ReturnPolicyContainer>
  );
}

export default ReturnPolicy;
