import React from 'react';
import '../styles/Filters.css';

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filters-box">
        <h3 className="filters-title">Filters</h3>
        <p className="showing-flights">Showing 86 flights</p>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Preferred Airlines</h4>
          <button className="view-all-button">View All</button>
          <div className="airline">
            <div className="airline-left">
              <input type="checkbox" id="abc-air" className="airline-checkbox" />
              <label htmlFor="abc-air" className="airline-name">ABC Air Technologies</label>
            </div>
            <div className="airline-right">
              <span className="price">$203</span>
              <img src="https://s3-alpha-sig.figma.com/img/8726/c448/156a3eead3cd13f00d62a1746fcb6965?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OsJ~7zndl8HzrlhrG5AxoAHD14UvQiKFCpnum7dA~KJaVrqnMWiI568QBuDWcb7ncIIEjG5ePlrPghY80g3PibPndLkhr1GxrLWl75jZnGlhFJ6B4pvXGJasBW~CrX9rjab-jjtj7SCrMSl6di5b9Xh0x0kdvvqP4KlAeTlinMuROkj3iXYTyJHL83HmrGhSMsnfeG~xkuQHq3uxt0ikh1-JvFZVF23f1k7kDXDK~NRuUneneXbSJy8WDuQakXuGg6YgD8aPiExV0Tqcg0pjzgyHE48ZW8gb4vGPIRGhRxB2zbQvoqPmkPXtnZX8pGym~TMOv1MAXWwpg5H6FTSV1g__" alt="ABC Air Technologies" className="price-image" />
            </div>
          </div>
          <div className="airline">
            <div className="airline-left">
              <input type="checkbox" id="emirates-air" className="airline-checkbox" />
              <label htmlFor="emirates-air" className="airline-name">Emirates Airlines</label>
            </div>
            <div className="airline-right">
              <span className="price">$520</span>
              <img src="https://s3-alpha-sig.figma.com/img/fa7a/7b30/507a76a5fb381349747966551fc46c61?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StuIKH7O5CJ1~rcmh38kPIxkMmwWjoW979ps2uVf2xjD~OpMOjnyIiJcm7--6lNxrN5LxJDlOTtDPA46K5JZp5LoOs4M2zByGfMkJuhvVXd7x1moBOpJ-5kYFsWBST8SmW5c4b9QNT4bgdJL6CbwmiKKB95ccI4oFz6B4WVFfPGC0XXQoZajAKw0mL3mBSffO5iJ5OdS5B-A66EX346Scs8Mz~lCjw9BBxKBmvp~MilkOrP8Y2vtqNHvbWOmTtqfaRW-XpT2Kl8-kWIUGG5B8P57H6dk~XG5rBRLYAGvEtVE~sXmHDRFM4YNxPDqAM-SfVcZF5cdOeHaN7uetWDLWA__" alt="Emirates Airlines" className="price-image" />
            </div>
          </div>
          <div className="airline">
            <div className="airline-left">
              <input type="checkbox" id="qatar-air" className="airline-checkbox" />
              <label htmlFor="qatar-air" className="airline-name">Qatar Airlines</label>
            </div>
            <div className="airline-right">
              <span className="price">$520</span>
              <img src="https://s3-alpha-sig.figma.com/img/a0b0/086c/975556e715f20543a84bc4f017ee16db?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vvw19Z1v86XniNTh8HpUZoSAgxiQjSAO-ubAsMPvmOsVjbR37IN1QjooyxRCB7yqoyD8-nIzW-Wi3lXV5t-Umr-dBJZZvcpcqXuBu8Jtoyfbb4d3tSRkYgf80Z6QiTcvhFKURbr5DueAjtuiqAdch8Jwnl~VnZ4~1A5DpvbDJt9gSXeQcZDCINVPFGe65TDkSvuY~Ds9kXmjYGthzggjrIB51PgLeDriVIWJEYz1J8Zqdg4-mZAXq76KzyYH6gunEd61gtxRoMPwbvrUc7SKXEBYX2FJmi~a~o9G~hPmOzKERTygEZzajNZGbfypH20dgv7zuzbQwEIivXw3zkOrpw__" alt="Qatar Airlines" className="price-image" />
            </div>
          </div>
          <div className="airline">
            <div className="airline-left">
              <input type="checkbox" id="etihad-air" className="airline-checkbox" />
              <label htmlFor="etihad-air" className="airline-name">Etihad Airlines</label>
            </div>
            <div className="airline-right">
              <span className="price">$230</span>
              <img src="https://s3-alpha-sig.figma.com/img/6dac/a0a1/a94e64cfdd0add4e5925f6edd0f15bf9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzJULKVOqlfPGoyEqdTf8z94d7sPzsA2DFFB-xL2RXY6F7xcggNPy8wbfNhd-1Ay7uTl974JOqU4aX0rD0foAfzbnDIg4l~ZXIBVDAvJbYpwsgH34V7Af3dLJvL~8dtfNb3Q7tUFZnAo1rmIeKcHEI4QAC9H8xPO8leS15EjeUqp0B4u4mt6p9irp8hdufmHkVKc9zlaUhIzjW8-xzJ0BCPLCOJs~886c4Y5PLn0j~sDMAYULRO6hzzswLTdka4sEQeoX0XzWmcj8b1elKgQQYYUa2Q6m-eSFG1eVpzPodncwI3UUEazYU1XFVsWxMmxbyW-vx9u3M7gx0ahc1Da0w__" alt="Etihad Airlines" className="price-image" />
            </div>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Stops</h4>
          <div className="stops-box">
            <div className="stop-option">Non-stop</div>
            <div className="stop-option">1 stop</div>
            <div className="stop-option">2+ Stop</div>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Price</h4>
          <input type="range" min="5000" max="10000" />
          <div className="price-range">
            <span>$5000</span>
            <span>$10,000</span>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Onward Duration</h4>
          <button className="reset-button">Reset</button>
          <input type="range" min="5000" max="10000" />
          <div className="price-range">
            <span>$5000</span>
            <span>$10,000</span>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Departure</h4>
          <div className="time-option">
            <img src="/icons/Action Icon.png" alt="icon" />
            <img src="/icons/Action Icon (1).png" alt="icon" />
        </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Arrival</h4>
          <div className="time-option">
            <img src="/icons/Action Icon (2).png" alt="icon" />
            <img src="/icons/Action Icon (3).png" alt="icon" />
            <img src="/icons/Action Icon.png" alt="icon" />
            <img src="/icons/Action Icon (1).png" alt="icon" />
        </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Bags</h4>
          <div className="bag-option">
          <img src="/icons/bag1.png" alt="bag1" />
            <span className="baggage1">Cabin Baggage</span>
            <span>1</span>
          </div>
          <div className="bag-option">
          <img src="/icons/bag2.png" alt="bag2" />
            <span className="baggage2">Checked baggage</span>
            <span>0</span>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Connections</h4>
          <div className="connection-option">
            <input type="checkbox" id="self-transfer" className="connection-checkbox" />
            <label>Self-transfer to different station/airport</label>
          </div>
          <div className="connection-option">
            <input type="checkbox" id="return-different" className="connection-checkbox" />
            <label htmlFor="return-different">Allow return from a different station/airport</label>
          </div>
          <div className="connection-option">
            <input type="checkbox" id="return-to-different" className="connection-checkbox" />
            <label htmlFor="return-to-different">Allow return to a different station/airport</label>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Duration</h4>
          <div className="duration-option">Max Travel time</div>
          <div className="any">Any</div>
          <img src="/icons/Slider.png" alt="slider" />
          <div className="any1">Any</div>
        </div>

        <div className="filter-section">
          <h4>Stopover</h4>
          <div className="any">2-25 hours</div>
          <img src="/icons/Slider (1).png" alt="slider" />
          <div className="stopover-option">2 hour</div>
          <div className="any1">25 hour</div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Days</h4>
          <div className="gap">
          <span className="depart">Departure</span>
          <span>Return</span>
          </div>
          <div className="days">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="filter-section">
          <h4>Exclude countries</h4>
        </div>
      </div>
    </div>
  );
};

export default Filters;
