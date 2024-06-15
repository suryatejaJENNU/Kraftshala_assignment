Weather Application
Welcome to the Weather Application! This application allows you to check the current weather information for various cities around the world.

You can view the live deployment of the application https://suryateja-kraftshala-assignment.netlify.app/

Table of Contents
Instructions to Run Locally
Brief Description and Technologies Used
Known Issues or Limitations
Instructions to Run Locally
To run this application locally on your machine, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/suryatejaJENNU/Kraftshala_assignment
Replace your-username/your-repository with the actual URL of your GitHub repository.

Navigate into the Project Directory:

bash
Copy code
cd your-repository
Install Dependencies:

bash
Copy code
npm install
This command will install all the necessary dependencies required for the application.

Set Up Environment Variables:

Obtain an API key from OpenWeatherMap if you haven't already.

Create a .env file in the root of your project.

Add your API key to the .env file:

plaintext
Copy code
REACT_APP_API_KEY=your_api_key_here
Replace your_api_key_here with your actual API key.

Start the Development Server:

bash
Copy code
npm start
This command will start the development server and open the application in your default web browser at http://localhost:3000.

View the Application:

Open your web browser and go to http://localhost:3000 to view the running application locally.

Brief Description and Technologies Used
Approach:
Functionality: The Weather Application fetches weather data from the OpenWeatherMap API based on user input (city name or zip code). It displays current weather information such as temperature, humidity, and weather description.

Design: The user interface (UI) is designed to be intuitive and visually appealing using React components styled with Material-UI for a modern look and feel. It includes a dark mode feature for user preference.

Technologies Used:
React: Frontend library for building user interfaces.
Material-UI: React component library that implements Google's Material Design.
OpenWeatherMap API: Provides weather data including current weather and forecasts.
HTML, CSS, JavaScript: Basic web technologies used for structuring, styling, and enhancing functionality.
Known Issues or Limitations
API Limitations: The free tier of the OpenWeatherMap API has limitations on the number of API calls per minute and per day. Ensure not to exceed these limits to avoid service interruptions.

Error Handling: Basic error handling is implemented for invalid city names or API fetch failures. Enhancements can be made to provide more informative error messages to users.

Accessibility: Considerations for accessibility (a11y) could be further improved, such as ensuring all interactive elements are keyboard accessible and providing alternative text for non-text content like icons.

