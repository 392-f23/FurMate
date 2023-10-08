import '/src/components/recommendation.css';

const Recommendation = ({ pet }) => {
    return (
      <div className="recommendation-card">
        <img src={`./src/assets/${pet.Image}`}alt={`./assets/${pet.Image}`} className="pet-image" />
        <div className="pet-details">
          <h3>{pet.Name}</h3>
          <p><strong>Breed:</strong> {pet.Breed}</p>
          <p><strong>Temperament:</strong> {pet.Temperament}</p>
          <p><strong>Age:</strong> {pet.Age} years</p>
          <p><strong>Activity Level:</strong> {pet.Activity}</p>
        </div>
      </div>
    );
  }
  
export default Recommendation;