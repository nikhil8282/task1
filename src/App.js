import "./App.css";
import Admin from "./pages/admin/Admin";
import JobRequirement from "./pages/jobRequirement/JobRequirement";
import JobRequirementManage from "./pages/jobRequirementManage/JobRequirementManage";
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
      path: "/jobRequirement",
      element: <JobRequirement/>,
    },
    {
      path: "/jobRequirement/manage",
      element: <JobRequirementManage/>,
    },

    {
      path: "/feedback",
      element: <FeedBack  filter={feedbackFilter} sort={feedbackSort} setFilter={setFeedbackFilter} setSort={setFeedbackSort}/>,
    },
    {
      path: "/feedback/issue",
      element: <IssueView filter={feedbackFilter} sort={feedbackSort} setFilter={setFeedbackFilter} setSort={setFeedbackSort}/>,
    },
  ]);
  return (
    <>
      <RouterProvider
       router={router} />      
    </>
  );
}

export default App;
