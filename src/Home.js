import './index.css';
import logoBanner from "./logo/banner (2).jpg";
import gourmetLogo from "./logo/specials.jpg";
import percentLogo from "./logo/off.jpg";
import bookLogo from "./logo/book.jpg";

function Home(){
  return(
    <div>
    <section>
        <article>
          <div className="banner_class" style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>
            Great food, Great mood.
            <img src={logoBanner} alt="logo banner"/>
          </div>
        </article>
      </section>

      <section>
        <article className="lowerNav">
          <div className="para">
            <p>Experience gourmet perfection.</p>
            </div>
          <div>
            <img className="long" src={gourmetLogo}
            alt="Specials Logo"/>
          </div>
           <a href="specials.html"><h2>Specials</h2></a>
        </article>

        <article className="lowerNav">
          <div className="para">
             <p>Feast more. Save more!</p>
          </div>
          <div className="long">
            <img className="long" src={percentLogo} alt="Off logo"/>
          </div>
           <a href="percent.html"><h2>50% OFF</h2></a>
        </article>

         <article className="lowerNav">
          <div className="para">
            <p>Don't Wait, Book Now.</p>
          </div>
          <div className="long">
            <img className="book_table" src={bookLogo} alt="Book logo"/>
          </div> 
          <a href="book_table.html"><h2>Book a Table</h2></a>    
        </article>
      </section>
    </div>
  );
};
export default Home;