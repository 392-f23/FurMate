import Recommendation from './Recommendation';
import '/src/components/recommendationlist.css';

const RecommendationList = ({results}) => {
    return (
        <div className="recommendation-list">
            {results.map((p, index) => <Recommendation key={index} pet={p.pet} />)}
        </div>
    );
}

export default RecommendationList;