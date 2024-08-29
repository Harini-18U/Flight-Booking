// src/App.js
import './App.css';
import DatePriceList from './components/DatePriceList';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Filters className="filters" />
        <DatePriceList className="date-price-list" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
