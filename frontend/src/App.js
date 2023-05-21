import "./App.css";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/add" Component={AddStudent} />
          <Route exact path="/update/:id" Component={UpdateStudent} />
          <Route exact path="/" Component={AllStudent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
