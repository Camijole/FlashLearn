import Banner from "./components/banner";
import CardList from "./components/cardList";
import './App.css';

// The main App component
const App = () => {
  return (
    <div className="app-container">
      <div className="banner-container">
        <Banner>FlashLearn</Banner>
      </div>
      <div className="cardlist-container">
        <CardList />
      </div>
    </div>
  );
};

export default App;
