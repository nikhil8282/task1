import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import FeedBack from "./pages/feedback/Feedback";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IssueView from "./components/issueView/IssueView";
import { useState } from "react";

function App() {
  const [feedbackFilter, setFeedbackFilter] = useState("Inprogress");
  const [feedbackSort, setFeedbackSort] = useState("Creataion Date");
  
  const router = createBrowserRouter([
    
    {
      path: "/admin",
      element: <Admin/>,
    },

    {
      path: "/feedback",
      element: <FeedBack  filter={feedbackFilter} sort={feedbackSort}/>,
    },
    {
      path: "/feedback/issue",
      element: <IssueView />,
    },
  ]);
  return (
    <>
      <Navbar filter={feedbackFilter} sort={feedbackSort} setFilter={setFeedbackFilter} setSort={setFeedbackSort}/>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
