const CardRow = ({ card, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Send DELETE request to the backend
      const response = await fetch(`http://localhost:5000/posts/${card.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Call the onDelete function passed from parent to update the state
        onDelete(card.id);
      } else {
        alert("Failed to delete the card.");
      }
    } catch (error) {
      console.error("Error deleting card:", error);
      alert("An error occurred while deleting the card.");
    }
  };

  return (
    <tr className="card-row">
      <td>{card.title}</td>
      <td>{card.description}</td>
      <td>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default CardRow;
