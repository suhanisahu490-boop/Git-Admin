import React, { useEffect } from "react";
import DashboardLayout from "../Components/DashboardLayout";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <DashboardLayout>
      <h2>This is dashboard page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, repellendus optio corporis totam quas sapiente vero dolores explicabo dicta eum alias, exercitationem mollitia ut dignissimos ipsam, quisquam doloremque nihil fugiat!</p>
    </DashboardLayout>
  );
};

export default Dashboard;
