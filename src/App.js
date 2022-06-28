import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import DailyLog from "./components/DailyLog";
import History from "./components/History";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DailyLog />} />
          <Route path="/" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
