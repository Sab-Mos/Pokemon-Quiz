import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Start from "./Start";
import Quiz from "./Quiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Start />} />
      <Route path="/quiz" element={<Quiz />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
