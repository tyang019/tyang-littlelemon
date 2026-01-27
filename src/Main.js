import { useReducer} from "react";
import { fetchAPI, submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";


export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return state;
};



function Main(){
  const navigate = useNavigate();

  const submitForm = (formData) => {
     if (submitAPI(formData)) {
    navigate("/confirmedBooking");
  }
      return submitAPI(formData);
  };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes()
    );

  return(
    //BookingForm that passes Props into BookingForm.js
    <main>
      <BookingForm 
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        />
    </main>
  );
}
export default Main;