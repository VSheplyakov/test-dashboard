
# Company Information Dashboard

A simple dashboard application for displaying information about companies, built with React, TypeScript, Tailwind CSS, and React Mosaic for flexible window layouts.

## Project Structure

- `src/`: Contains the source code for the application.
- `src/data/`: Includes mock JSON data for company details.

## Requirements

- **Node.js** (v14 or higher)
- **Docker** (if running the app in a container)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VSheplyakov/test-dashboard.git
   cd test-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

## Running the Project

To run the project locally:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Building the Project

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Running with Docker

1. **Build the Docker image**:

   ```bash
   docker build -t test-dashboard .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 3000:80 test-dashboard
   ```

The application will be accessible at `http://localhost:3000`.

## Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Runs tests (if configured).
- **`npm run lint`**: Runs linter to check for code quality.

## Project Dependencies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: For static typing in JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Mosaic**: A tiling window manager component for React.

## License

This project is licensed under the MIT License.
