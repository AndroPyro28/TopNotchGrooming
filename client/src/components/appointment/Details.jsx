import React from "react";
import {
  DetailsContainer,
  InfoRow,
  Info,
  PetInformation,
  PetDetails,
} from "./components";
import { useLocation } from "react-router-dom";

function Details({ data }) {
  const { customer } = data;
  const { appointment } = data;
  const { pathname } = useLocation();
  return (
    <DetailsContainer>
      {!pathname?.includes("/customer/schedules/") && (
        <>
          <h2>Customer Information</h2>
          <InfoRow>
            <Info>
              <h4>Customer ID</h4>
              <span>#{customer?.id}</span>
            </Info>

            <Info>
              <h4>Full Name</h4>
              <span>{`${customer?.firstname} ${customer?.lastname}`}</span>
            </Info>
          </InfoRow>

          <InfoRow>
            <Info>
              <h4>Email</h4>
              <span>{customer?.email}</span>
            </Info>

            <Info>
              <h4>Address</h4>
              <span>{customer?.address}</span>
            </Info>
          </InfoRow>

          <InfoRow>
            <Info>
              <h4>Birthdate</h4>
              <span>{customer?.birthdate}</span>
            </Info>

            <Info>
              <h4>Contact</h4>
              <span> (+63) {customer?.contact}</span>
            </Info>
          </InfoRow>
        </>
      )}

      <h2>Pet Information</h2>

      <PetInformation>
        <img src={appointment?.pet_image} />

        <PetDetails>
          <InfoRow>
            <Info>
              <h4>Name</h4>
              <span> {appointment?.pet_name}</span>
            </Info>

            <Info>
              <h4>Birthdate</h4>
              <span> {appointment?.birthdate}</span>
            </Info>
          </InfoRow>

          <InfoRow>
            <Info>
              <h4>Breed</h4>
              <span> {appointment?.pet_breed}</span>
            </Info>

            <Info>
              <h4>Gender</h4>
              <span> {appointment?.gender}</span>
            </Info>
          </InfoRow>

          <InfoRow>
            <Info>
              <h4>Pet type</h4>
              <span> {appointment?.pet_type} </span>
            </Info>
          </InfoRow>
        </PetDetails>
      </PetInformation>
    </DetailsContainer>
  );
}

export default Details;
