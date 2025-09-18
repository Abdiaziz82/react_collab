import React, { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

const Dashboard = () => {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", { method: "POST", credentials: "include" });
    navigate("/");
  };

  let PageComponent;
  if (page === "home") PageComponent = <Home />;
  else if (page === "profile") PageComponent = <Profile />;
  else if (page === "settings") PageComponent = <Settings />;

  return (
    <div className="flex min-h-screen">
      <Sidebar setPage={setPage} activePage={page} />
      <div className="flex-1 flex flex-col">
        <Topbar onLogout={handleLogout} />
        <main className="flex-1 p-4 ">{PageComponent}</main>
      </div>
    </div>
  );
};

export default Dashboard;