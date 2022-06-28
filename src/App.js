import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import DailyLog from "./components/DailyLog";
import History from "./components/History";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="tiney-challenge/" element={<DailyLog />} />
          <Route path="tiney-challenge/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
