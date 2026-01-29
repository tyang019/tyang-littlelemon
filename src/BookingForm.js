import clock from "./logo/clock.png";
import { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("None");

  useEffect(() => {
  const savedBooking = localStorage.getItem('booking');
  if (savedBooking) {
    const parsedBooking = JSON.parse(savedBooking);
    setDate(parsedBooking.date || "");
    setTime(parsedBooking.time || "");
    setGuest(parsedBooking.guests || 1);
    setOccasion(parsedBooking.occasion || "None");
  }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date, 
      time, 
      guests: guest,
      occasion,
    };
    submitForm(formData);
    //Save to local storage
    localStorage.setItem('booking', JSON.stringify(formData));
  };

  const isFormValid =
  date &&
  time &&
  guest >= 1 &&
  guest <= 10;

  return (
    <>
      <section>
        <article className="menuText">
          <form onSubmit={handleSubmit}>
            <h1>Reserve Table Form</h1>

            <label htmlFor="res-date">Select Date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => {
              const selectedDate = e.target.value;
              setDate(selectedDate);
              setTime(""); // reset time
              dispatch({ type: "UPDATE_TIMES", date: selectedDate });
            }}
              required
            />
            <table style={{
                display: "flex", 
                justifyContent: "center", alignItems: "center",
                padding: "1rem"
                }}>
             <img src={clock} alt="clock icon"  aria-hidden="true" 
             />
              </table>
        <div>
            <label style={{padding: "1rem"}} htmlFor="res-time">Select Time</label>
              <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Choose time</option>
              {availableTimes && availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div style={{padding: "1rem"}}>
              <label htmlFor="guest">Number of guests</label>
            <input
              type="number"
              min="1"
              max="10"
              id="guest"
              value={guest}
              onChange={(e) => setGuest(Number(e.target.value))}
              required
            />
              <label style={{padding: "1rem"}} htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
            <div>
              <button 
              type="button" 
              aria-label="On Click"
              onClick={() => {
              setDate("");
              setTime("");
              setGuest(1);
              setOccasion("None");
              localStorage.removeItem('booking'); 
            }}>Cancel</button>
            <button type="submit" disabled={!isFormValid}>Submit</button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}

export default BookingForm;
