import Recommendation from './Recommendation';
import animals from './animals';
import '/src/components/recommendationlist.css';

const RecommendationList = ({pets}) => {
    return (
        <div className="recommendation-list">
            {pets.map((p, index) => <Recommendation key={index} pet={p} />)}
        </div>
    );
}

export default RecommendationList;