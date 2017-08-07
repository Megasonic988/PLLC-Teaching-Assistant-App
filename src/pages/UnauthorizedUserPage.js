import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

const UnauthorizedUserPage = () => (
    <div style={{ textAlign: 'center', paddingTop: '20%' }}>
        <h1>You are not authorized to use this application</h1>
        <p>For permissions, please email Kevin at <a href="weixiang@ualberta.ca">weixiang@ualberta.ca</a></p>
      </div>
);

export default UnauthorizedUserPage;