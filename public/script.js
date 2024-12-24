const BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('reviewForm');
  const showForm = document.getElementById('showForm');
  const appendSection = document.getElementById('append-section');

  // Function to render reviews
  const renderReviews = (reviews) => {
      appendSection.innerHTML = '';
      if (reviews.length === 0) {
          appendSection.innerHTML = '<p>No reviews found for the specified company.</p>';
          return;
      }

      // Calculate average rating
      let totalRating = 0;
      reviews.forEach((review) => {
          totalRating += review.rating;
      });
      const averageRating = (totalRating / reviews.length).toFixed(1);  
      
      reviews.forEach((review) => {
          const reviewElement = document.createElement('div');
          reviewElement.classList.add('review');
          reviewElement.innerHTML = `
              <h3>${review.companyName}</h3>
              <h3>Overall Rating: ${averageRating}</h3>
              <hr>
              <p><strong>Pros:</strong> ${review.pros}</p>
              <p><strong>Cons:</strong> ${review.cons}</p>
              <p><strong>Rating:</strong> ${review.rating}/5</p>
              <hr>
          `;
          appendSection.appendChild(reviewElement);
      });
  };

  // Event listener for submitting a new review
  reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const companyName = document.getElementById('name').value;
      const pros = document.getElementById('pros').value;
      const cons = document.getElementById('cons').value;
      const rating = document.querySelector('select[name="rating"]').value;

      try {
          const response = await axios.post(`${BASE_URL}/reviews`, {
              companyName,
              pros,
              cons,
              rating,
          });
          alert('Review submitted successfully!');
          reviewForm.reset();
      } catch (error) {
          console.error('Error submitting review:', error);
          alert('Failed to submit review. Please try again later.');
      }
  });

  // Event listener for fetching reviews by company name
  showForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const companyName = showForm.querySelector('input[name="name"]').value;

      try {
          const response = await axios.get(`${BASE_URL}/reviews?companyName=${encodeURIComponent(companyName)}`);
          renderReviews(response.data);
      } catch (error) {
          console.error('Error fetching reviews:', error);
          alert('Failed to fetch reviews. Please try again later.');
      }
  });
});
