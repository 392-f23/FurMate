import '/src/components/recommendation.css';
import { useAuthState } from '../utilities/firebase';
import Star from './star';
const Recommendation = ({ pet }) => {
  const [user] = useAuthState();
    return (
      <div className="recommendation-card">
        <img src={pet.Image} alt={`./assets/${pet.Image}`} className="pet-image" />
        <div className="pet-details">
          <h3>{pet.Name}</h3>
          <p><strong>Breed:</strong> {pet.Breed}</p>
          <p><strong>Temperament:</strong> {pet.Temperament}</p>
          <p><strong>Age:</strong> {pet.Age} years</p>
          <p><strong>Activity Level:</strong> {pet.Activity}</p>
        </div>
        {user? <Star></Star>:<></>}
      </div>
    );
  }
  
export default Recommendation;