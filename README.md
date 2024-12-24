# Company Review System

## Description
The Company Review System is a web application that allows users to submit and search reviews for various companies. Users can provide ratings, pros, and cons about companies and view existing reviews.

## Features
- Submit company reviews with ratings, pros, and cons.
- Search and display reviews by company name.
- Responsive design for seamless usage across devices.

## Technologies Used
- **Frontend**: HTML, CSS (responsive design), JavaScript (Axios for API communication)
- **Backend**: Node.js, Express.js
- **Database**: Sequelize (with SQLite or any supported database)

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or above)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/abhishektripathi-dev/company-review-system.git
   cd company-review-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   ```bash
   npx sequelize-cli db:migrate
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to use the application.

## File Structure
```
company-review-system/
├── public/
│   ├── style.css       # CSS for styling
│   ├── script.js       # JavaScript for frontend logic
├── routes/
│   ├── reviewRoutes.js # Express routes for handling review API
├── controllers/
│   ├── reviewController.js # Controller logic for reviews
├── models/
│   ├── index.js        # Sequelize initialization
│   ├── review.js       # Review model definition
├── migrations/
│   ├── [timestamp]-create-review.js # Migration for reviews table
├── app.js              # Main application entry point
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## API Endpoints

### Submit a Review
**POST** `/reviews`
- **Request Body**:
  ```json
  {
    "companyName": "string",
    "pros": "string",
    "cons": "string",
    "rating": "number"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Review submitted successfully."
  }
  ```

### Get Reviews by Company Name
**GET** `/reviews?companyName=<companyName>`
- **Response**:
  ```json
  [
    {
      "id": "number",
      "companyName": "string",
      "pros": "string",
      "cons": "string",
      "rating": "number",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
  ```

## Author
**Abhishek Tripathi**
- GitHub: [github.com/abhishektripathi-dev](https://github.com/abhishektripathi-dev)
- LinkedIn: [linkedin.com/in/imabhishek-tripathi](https://linkedin.com/in/imabhishek-tripathi)
- LeetCode: [leetcode.com/abhishektripathi-dev](https://leetcode.com/abhishektripathi-dev)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments
- Node.js
- Express.js
- Sequelize
- Axios

