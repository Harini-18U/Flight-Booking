import React from 'react';
import '../styles/DatePriceList.css';

const DatePriceList = () => {
  return (
    <div className="date-price-list-outer"> 
      {/* Date-Price List Section */}
      <div className="date-price-list-container"> 
        <div className="date-price-list">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="date-price-item" key={index}>
              <div className="date">12 JUL’24</div>
              <div className="amt">$ 4,500</div>
              {index < 9 && <div className="separator"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className="button-section">
        <div className="buttons-container">
          <button className="btn recommended">Recommended <br /> $500 - 10h 20m</button>
          <button className="btn cheapest">CHEAPEST <br /> $500 - 10h 20m</button>
          <button className="btn fastest">FASTEST <br /> $500 - 10h 20m</button>
          <button className="btn price-calendar">Price Calendar<br />$500 - 10h 20m</button>
          </div>
        <p className="sort-info">Flights sorted by discounted fares</p> 
      </div>

      {/* Airline Information Box */}
      <div className="airline-info-box">
        <div className="airline-info-header">
        <div className="airline-left">
        <img 
            src="https://s3-alpha-sig.figma.com/img/8726/c448/156a3eead3cd13f00d62a1746fcb6965?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OsJ~7zndl8HzrlhrG5AxoAHD14UvQiKFCpnum7dA~KJaVrqnMWiI568QBuDWcb7ncIIEjG5ePlrPghY80g3PibPndLkhr1GxrLWl75jZnGlhFJ6B4pvXGJasBW~CrX9rjab-jjtj7SCrMSl6di5b9Xh0x0kdvvqP4KlAeTlinMuROkj3iXYTyJHL83HmrGhSMsnfeG~xkuQHq3uxt0ikh1-JvFZVF23f1k7kDXDK~NRuUneneXbSJy8WDuQakXuGg6YgD8aPiExV0Tqcg0pjzgyHE48ZW8gb4vGPIRGhRxB2zbQvoqPmkPXtnZX8pGym~TMOv1MAXWwpg5H6FTSV1g__" 
            alt="Airline Logo" 
            className="airline-logo"
          />
          <div className="airline-name">ABC Airline</div> 
          </div>  
          <div className="travel-class">Travel Class: Economy</div>
        </div>

        <div className="airline-info-container">
          <div className="flight-details-box">
            {/* Left Details */}
            <div className="flight-details-left">
              <div className="flight-detail date-time">Sun, 29 Jan 2023</div>
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">Moi Intl, Mombasa</div>
              <div className="flight-detail">Kenya</div>
            </div>

            {/* Center with Flight Duration and Image */}
            <div className="flight-details-center">
              <div className="flight-detail duration-text">---- 9hr 50min ----</div>
              <img src="/icons/Vector.png" alt="Flight Duration" className="flight-duration-image" />
            </div>

            {/* Right Details */}
            <div className="flight-details-right">
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">JFK Terminal, Nairobi</div>
              <div className="flight-detail">Kenya</div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="pricing-info">
            <div className="prices">$18,500</div>
            <div className="discount">$500 OFF</div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>

        <div className="additional-info-line">
          <div className="seats-info">100 seats remaining</div>
          <div className="refund-info">Partially Refundable</div>
          <div className="details-info">View flight details</div>
        </div>
        <hr className="dotted-line" />

        <div className="special-info-line">
          <div className="special-info">Separate tickets booked together for cheaper price</div>
          <div className="special-info">Change of Terminal</div>
          <div className="special-info">Self Transfer</div>
          <div className="special-info">7kg</div>
          <button className="btn-cheapest-special">Cheapest</button>
        </div>
      </div>

      {/* Airline Information Box 2*/}
      <div className="airline-info-box">
        <div className="airline-info-header">
        <div className="airline-left">
        <img 
            src="https://s3-alpha-sig.figma.com/img/a0b0/086c/975556e715f20543a84bc4f017ee16db?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vvw19Z1v86XniNTh8HpUZoSAgxiQjSAO-ubAsMPvmOsVjbR37IN1QjooyxRCB7yqoyD8-nIzW-Wi3lXV5t-Umr-dBJZZvcpcqXuBu8Jtoyfbb4d3tSRkYgf80Z6QiTcvhFKURbr5DueAjtuiqAdch8Jwnl~VnZ4~1A5DpvbDJt9gSXeQcZDCINVPFGe65TDkSvuY~Ds9kXmjYGthzggjrIB51PgLeDriVIWJEYz1J8Zqdg4-mZAXq76KzyYH6gunEd61gtxRoMPwbvrUc7SKXEBYX2FJmi~a~o9G~hPmOzKERTygEZzajNZGbfypH20dgv7zuzbQwEIivXw3zkOrpw__" 
            alt="Airline Logo" 
            className="airline-logo"
          />
          <div className="airline-name">QATAR Airline</div> 
          </div>  
          <div className="travel-class">Travel Class: Economy</div>
        </div>

        <div className="airline-info-container">
          <div className="flight-details-box">
            {/* Left Details */}
            <div className="flight-details-left">
              <div className="flight-detail date-time">Sun, 29 Jan 2023</div>
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">Moi Intl, Mombasa</div>
              <div className="flight-detail">Kenya</div>
            </div>

            {/* Center with Flight Duration and Image */}
            <div className="flight-details-center">
              <div className="flight-detail duration-text">---- 9hr 50min ----</div>
              <img src="/icons/Vector.png" alt="Flight Duration" className="flight-duration-image" />
            </div>

            {/* Right Details */}
            <div className="flight-details-right">
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">JFK Terminal, Nairobi</div>
              <div className="flight-detail">Kenya</div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="pricing-info">
            <div className="prices">$18,500</div>
            <div className="discount">$500 OFF</div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>

        <div className="additional-info-line">
          <div className="seats-info">100 seats remaining</div>
          <div className="refund-info">Partially Refundable</div>
          <div className="details-info">View flight details</div>
        </div>
        <hr className="dotted-line" />

        <div className="special-info-line">
          <div className="special-info">Separate tickets booked together for cheaper price</div>
          <div className="special-info">Change of Terminal</div>
          <div className="special-info">Self Transfer</div>
          <div className="special-info">7kg</div>
          {/* <button className="btn-cheapest-special">Cheapest</button> */}
        </div>
      </div>

      {/* Airline Information Box 3*/}
      <div className="airline-info-box">
        <div className="airline-info-header">
        <div className="airline-left">
        <img 
            src="https://s3-alpha-sig.figma.com/img/8726/c448/156a3eead3cd13f00d62a1746fcb6965?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OsJ~7zndl8HzrlhrG5AxoAHD14UvQiKFCpnum7dA~KJaVrqnMWiI568QBuDWcb7ncIIEjG5ePlrPghY80g3PibPndLkhr1GxrLWl75jZnGlhFJ6B4pvXGJasBW~CrX9rjab-jjtj7SCrMSl6di5b9Xh0x0kdvvqP4KlAeTlinMuROkj3iXYTyJHL83HmrGhSMsnfeG~xkuQHq3uxt0ikh1-JvFZVF23f1k7kDXDK~NRuUneneXbSJy8WDuQakXuGg6YgD8aPiExV0Tqcg0pjzgyHE48ZW8gb4vGPIRGhRxB2zbQvoqPmkPXtnZX8pGym~TMOv1MAXWwpg5H6FTSV1g__" 
            alt="Airline Logo" 
            className="airline-logo"
          />
          <div className="airline-name">ABC Airline</div> 
          </div>  
          <div className="travel-class">Travel Class: Economy</div>
        </div>

        <div className="airline-info-container">
          <div className="flight-details-box">
            {/* Left Details */}
            <div className="flight-details-left">
              <div className="flight-detail date-time">Sun, 29 Jan 2023</div>
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">Moi Intl, Mombasa</div>
              <div className="flight-detail">Kenya</div>
            </div>

            {/* Center with Flight Duration and Image */}
            <div className="flight-details-center">
              <div className="flight-detail duration-text">---- 9hr 50min ----</div>
              <img src="/icons/Vector.png" alt="Flight Duration" className="flight-duration-image" />
            </div>

            {/* Right Details */}
            <div className="flight-details-right">
              <div className="flight-detail time">14.50</div>
              <div className="flight-detail">JFK Terminal, Nairobi</div>
              <div className="flight-detail">Kenya</div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="pricing-info">
            <div className="prices">$18,500</div>
            <div className="discount">$500 OFF</div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>

        <div className="additional-info-line">
          <div className="seats-info">100 seats remaining</div>
          <div className="refund-info">Partially Refundable</div>
          <div className="details-info">View flight details</div>
        </div>
        <hr className="dotted-line" />

        <div className="special-info-line">
          <div className="special-info">Separate tickets booked together for cheaper price</div>
          <div className="special-info">Change of Terminal</div>
          <div className="special-info">Self Transfer</div>
          <div className="special-info">7kg</div>
          {/* <button className="btn-cheapest-special">Cheapest</button> */}
        </div>
      </div>


    </div>
  );
};

export default DatePriceList;
