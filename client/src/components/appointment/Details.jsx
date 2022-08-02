import React from 'react'
import {DetailsContainer, InfoRow, Info, PetInformation, PetDetails} from './components'
function Details() {
  return (
    <DetailsContainer>
        
        <h2>Customer Information</h2>
        <InfoRow>
            <Info>
                <h4>Customer ID</h4>
                <span>#1</span>
            </Info>

            <Info>
                <h4>Full Name</h4>
                <span>Andro Eugenio</span>
            </Info>
        </InfoRow>

        <InfoRow>
            <Info>
                <h4>Email</h4>
                <span>Menandroeugenio1028@gmail.com</span>
            </Info>

            <Info>
                <h4>Address</h4>
                <span>San Sebastian Hagonoy Bulacan</span>
            </Info>

        </InfoRow>

        <InfoRow>
            <Info>
                <h4>Birthdate</h4>
                <span>2022-18-19</span>
            </Info>

            <Info>
                <h4>Contact</h4>
                <span> (+63) 09561289642</span>
            </Info>
        </InfoRow>

        <h2>Pet Information</h2>

        <PetInformation>
            <img src={'/images/dogpic.jpg'} />
            
            <PetDetails>
            <InfoRow>
                <Info>
                    <h4>Name</h4>
                    <span> Pinti</span>
                </Info>

                <Info>
                    <h4>Birthdate</h4>
                    <span> 22-18-19</span>
                </Info>
            </InfoRow>

            <InfoRow>
                <Info>
                    <h4>Breed</h4>
                    <span> Aspinoy na aso</span>
                </Info>

                <Info>
                    <h4>Gender</h4>
                    <span> Male</span>
                </Info>
            </InfoRow>

            <InfoRow>
                <Info>
                    <h4>Pet type</h4>
                    <span> Cat </span>
                </Info>

                
            </InfoRow>
            </PetDetails>
            
        </PetInformation>

    </DetailsContainer>
  )
}

export default Details