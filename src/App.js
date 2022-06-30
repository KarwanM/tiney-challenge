import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import DailyLog from "./components/DailyLog";
import History from "./components/History";
import Register  from "./components/Register";

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="tiney-challenge/" element={<DailyLog />} />
          <Route path="tiney-challenge/history" element={<History />} />
          <Route path="tiney-challenge/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
