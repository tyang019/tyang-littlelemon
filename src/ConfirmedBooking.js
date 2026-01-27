import confirmPic from "./logo/food-tray.png"


function ConfirmedBooking(){
  const savedBooking = JSON.parse(localStorage.getItem('booking'));

  return(
  <div style={{display:"flex", justifyContent: "center", marginBottom: "4rem"}}>
    <div className="menuText">
      <section>
        <article>
          <h1>Reservation Confirmation</h1>
          <p>Thank you! Your table has been reserved.</p>
          <p>
            Date: {savedBooking.date} <br />
            Time: {savedBooking.time} <br />
            Guests: {savedBooking.guests} <br />
            Occasion: {savedBooking.occasion}
          </p>
          <img src={confirmPic} alt=""></img>
        </article>
      </section>
    </div>
    </div>
  )
}
export default ConfirmedBooking;