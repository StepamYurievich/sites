import React from 'react';
import Layout from "@/components/layout/Layout";
import DashBoardPage from "@/components/templates/DashBoardPage/DashBoardPage";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <main>
          <DashBoardPage/>
        </main>
      </Layout>
    </>
  );
};

export default Dashboard;
