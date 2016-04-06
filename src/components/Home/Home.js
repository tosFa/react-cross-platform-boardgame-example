'use strict';



import React from 'react';


const Home = React.createClass({
  render: function() {
    return (
      <div className="page home-page" style={{background: "red", width: 60}}>
        this is home
      </div>
    );
  }
});

module.exports = Home;