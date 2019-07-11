import React, { useState, useEffect } from "react";
import Header from "components/header";
import Banner from "components/banner";
import LeftMemu from "components/leftMemu";
import { connect } from "react-redux";
import { closeDrawer } from 'actions/app';
import "./style.less"

const Home = props => {

    const { drawer } = props;

    return (
       <div className="home">
         <Header/>
         <Banner/>
         {drawer === "headerMemu" ? <LeftMemu/>:null}
      </div>
    );
};

const mapStateToProps = ({ app }) => {
  const { drawer } = app; 
  return {
      drawer
  }
};

const mapDispatchToProps = { closeDrawer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);    