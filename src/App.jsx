
import React from 'react'; // Explicitly import React
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
