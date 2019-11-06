import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import logo from '../assets/logo.jpg';

const FormPage = () => {
  return (
    <MDBContainer className="d-flex flex-column">
      <MDBRow className="d-flex flex-column align-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <img src={ logo } alt="logo" />
              </div>
              <MDBInput
                label="Utilisateur"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Mot de passe"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;