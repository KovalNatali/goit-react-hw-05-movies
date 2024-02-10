import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'pages/Api';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const respons = await fetchMovieReviews(movieId);
        setReviews(respons);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(review => (
    <li key={review.id}>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </li>
  ));

  const isCast = Boolean(reviews.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isCast && <ol>{elements}</ol>}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default ReviewsPage;
