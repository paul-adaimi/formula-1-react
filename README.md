# CS 5610  Final Project README

**Authors:** Sam Treadwell, Paul Adaimi, Rashaad Mirza  
**Date:** 04/22/2024

## User Guidelines

1. Clone the GitHub repository containing the Flask application:

    ```bash
    git clone https://github.com/paul-adaimi/formula-1-react
    ```

### Installing Dependencies

2. Open a terminal and navigate to the directory containing environment.yml file and create a conda virtual environment from the YAML file:

    ```bash
    cd formula-1-react/
    conda env create -f environment.yml
    ```

3. Activate the virtual environment you created by running:

    ```bash
    conda activate fusion
    ```

### Running the Flask Application

4. Navigate to the Flask directory:

   ```bash
   cd Flask/
   ```

5. Run the Flask application with debugging enabled:

    ```bash
    flask --app flaskr run --debug
    ```

### Setting up and Running the React Application

6. Open another terminal window or tab.

7. Activate the virtual environment if it's not already activated:

    ```bash
    conda activate fusion
    ```

8. Navigate to the React directory:

   ```bash
   cd formula-1-react/React/
   ```

9. Install the required Node.js dependencies:

   ```bash
   npm install
   ```

10. Run the React development server:

   ```bash
   npm run dev
   ```

### Exploring the Website

1. Open your web browser and navigate to the URL where the React application is hosted. You can typically find this URL in the terminal output after running the React development server. For example, if the application is running on port 5173, the prompt might say: "Your application running on port 5173 is available. Open in Browser".

2. If you're already logged in, click on the "Logout" button on the top-right corner of the website to log out.

3. If you're a new user, register by providing the necessary details.

4. After registration, log in using the credentials you registered with.

5. Explore the website and its features, such as viewing team standings, driver details, or adding articles. (Note: When adding articles, remember to attach an image.)

6. Enjoy your experience on the Fusion Formula 1 React website!
