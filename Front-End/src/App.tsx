import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./Components/PageNotFound/PageNotFound";
import SinglePage from "./SinglePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
