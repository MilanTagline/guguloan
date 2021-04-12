import React, { useState } from 'react'
import FormUserDetails from "./components/FormUserDetails";
import FormPersonalDetails from "./components/FormPersonalDetails";
import Confirm from "./components/Confirm";

const LoanForm = ({step,nextStep,prevStep}) => {

  const [loanDetails, setLoanDetails] = useState({ userType: "", userID: "", registrationNumber: "", fileData: null,screens: null,isSelfieShow:false });
    
  const handleChange = name => e => {
    console.log('name :>> ', name);
    if (name === "fileData") {
      setLoanDetails({ ...loanDetails, fileData: e.target.files[0]})
    } else {
      setLoanDetails({ ...loanDetails, [name]: e.target.value })
    }
  };

  const typeChangeHandle = (params) => {
    setLoanDetails({ ...loanDetails,userType:params})
  }

  const screensHandle = (params) => {
    setLoanDetails({ ...loanDetails,screens:params,isSelfieShow:true})
  }

  const selfieHandle = () => {
    setLoanDetails({ ...loanDetails,isSelfieShow:false})
  }

  const fileChange = () => {
    setLoanDetails({ ...loanDetails, fileData: null})
  }

  switch (step) {
    case 0:
      return (
        <FormUserDetails
          handleChange={handleChange}
          values={loanDetails}
          nextStep={nextStep}
          typeChangeHandle={typeChangeHandle}
        />
      );
    case 1:
      return (
        <FormPersonalDetails
          handleChange={handleChange}
          values={loanDetails}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Confirm
          handleChange={handleChange}
          values={loanDetails}
          prevStep={prevStep}
          screensHandle={screensHandle}
          selfieHandle={selfieHandle}
          fileChange={fileChange}
        />
      );
    default:
      return "Unknown step";
  }
}

export default LoanForm