import Recommendation from './Recommendation';
import '/src/components/recommendationlist.css';
import { NavLink } from 'react-router-dom';
const RecommendationList = ({results}) => {
    return (
        <div className="recommendation-list">
            <NavLink to="/" className='btn btn-secondary'> Back to Questionnaire</NavLink>
            {results.map((p, index) => <Recommendation key={index} pet={p.pet} />)}
        </div>
    );
}

export default RecommendationList;