import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom'

const Dashboard = () => {

    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
            <body className="text-center">
                <Link to="/" >[Logout]</Link>
                <img src="https://www.klipfolio.com/sites/default/files/blog/best-dashboard.png" alt="dashboard" />
            </body>
        </>
    );
}

export default Dashboard;