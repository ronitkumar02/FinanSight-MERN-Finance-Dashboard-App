# FinanSight

FinanSight is a comprehensive finance dashboard application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with machine learning predictions. The project features a modern frontend built with  Redux Toolkit, Material UI, and Recharts, while the backend is powered by Node.js, Express.js, and MongoDB.

### Dashboard
![FinanSight Dashboard](https://github.com/ronitkumar02/FinanSight-MERN-Finance-Dashboard-App/blob/main/client/public/Dashboard.png)

### Prediction
![FinanSight Predictions](https://github.com/ronitkumar02/FinanSight-MERN-Finance-Dashboard-App/blob/main/client/public/Predictions.png)

## Features

- **Dashboard Overview**: Visualize key financial metrics and trends.
- **Revenue and Expenses**: Track and compare revenue and expenses over time.
- **Profit Analysis**: Monitor profit margins and analyze revenue vs. expenses.
- **Operational Metrics**: Differentiate between operational and non-operational expenses.
- **Campaigns and Targets**: Set and track target sales.
- **Recent Orders and Product List**: Keep an eye on recent transactions and product details.
- **Expense Breakdown**: Analyze expenses by different categories.
- **Machine Learning Predictions**: Utilize a regression model to predict future revenues.

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management tool for efficient state management.
- **Material UI**: Component library for a consistent and customizable design.
- **Recharts**: Library for building responsive charts.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.

## Installation

### Prerequisites
- Node.js (>=14.x)
- MongoDB (>=4.x)

### Clone the Repository
```bash
git clone https://github.com/ronitkumar02/FinanSight-MERN-Finance-Dashboard-App.git
cd Finansight-MERN-Finance_dashboard-App
```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd server
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the backend directory with the following content:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```
4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../client
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

1. Ensure MongoDB is running.
2. Start the backend server.
3. Start the frontend server.
4. Open your browser and navigate to `http://localhost:3000` to view the FinanSight dashboard.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any enhancements or bug fixes.

Feel free to customize this README file further based on your specific project requirements and structure.
