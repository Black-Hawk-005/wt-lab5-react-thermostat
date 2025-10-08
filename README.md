# React Thermostat Application

A simple interactive thermostat application built with React and Vite. This project allows users to control and display temperature in both Celsius and Fahrenheit units.

🌐 **Live Demo:** [https://black-hawk-005.github.io/wt-lab5-react-thermostat/](https://black-hawk-005.github.io/wt-lab5-react-thermostat/)

## Features

- Temperature display in Celsius and Fahrenheit
- Temperature increment/decrement controls
- Unit toggle between Celsius (°C) and Fahrenheit (°F)
- Clean, component-based architecture
- Real-time temperature conversion

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Application header component
│   ├── Display.jsx         # Temperature display component
│   ├── Controls.jsx        # Temperature control panel
│   └── ControlButton.jsx   # Individual control button component
├── App.jsx                 # Main application component
└── main.jsx               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React Fast Refresh support

## How It Works

The thermostat maintains state for temperature in both Celsius and Fahrenheit. When users adjust the temperature or toggle units, the application automatically converts and updates the display accordingly.

## License

This project is part of Web Technology Lab 5 coursework.
