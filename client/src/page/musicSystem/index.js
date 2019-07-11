import React from 'react';
import Aside from "../../systemComponents/aside";
import Header from "../../systemComponents/header";
import Content from "../../systemComponents/content";
import { Layout } from "antd";
import { connect } from "react-redux";
import { closeDrawer } from '../../actions/app';
import "./style.less";

const musicSystem = props => {

  return (
    <div className="musicSystem">
      <Layout>
        <Aside />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </div>
  )
}

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
)(musicSystem);    