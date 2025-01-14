import { useEffect, useState } from "react";
import CardRow from "./cardRow";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [counter, setCounter] = useState(1); // Start the counter at 1

  // Fetch cards when the component mounts (initial load)
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch("http://localhost:5000/posts");
      const cards = await response.json();
      setCards(cards);
    };
    fetchCards();
  }, []);

  // Add a card only when the button is clicked
  const addCards = async () => {
    const newCard = {
      id: counter,  // Use the counter value for the id
      title: "Card " + counter,
      description: "Description " + counter,
    };

    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    });

    const addedCard = await response.json();  // Get the response, which should be the added card

    setCards((prevCards) => [...prevCards, addedCard]);

    // Increment the counter for the next card
    setCounter(counter + 1);
  };

  // Handle card deletion
  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter(card => card.id !== id));
  };

  return (
    <>
      {/* Card List */}
      <div className="card-list-container">
        <h2>Cards</h2>

        {/* Create New Card Form */}
        <div className="create-card-container">
          <input
            type="text"
            className="form-input"
            placeholder="Enter card title"
          />
          <input
            type="text"
            className="form-input"
            placeholder="Enter card description"
          />
          <button onClick={addCards}>Add Card</button>
        </div>

        {/* Display Cards in a Table */}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((c) => (
              <CardRow key={c.id} card={c} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardList;
