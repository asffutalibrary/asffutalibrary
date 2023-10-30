import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/landing";
import Library from "./pages/library/library";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/library/" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
