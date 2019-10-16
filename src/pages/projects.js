import React from "react";
import Layout from "../components/layout";
import Filter from "../components/filter";

export default () => (
  <Layout>
    <div className="header-intro theme-bg-primary text-white py-5">
      <div className="container">
        <h2 className="page-heading mb-3">Projects</h2>
        <div className="page-heading-tagline">case studies to show you what I can offer</div>
      </div>
      {/*//container*/}
    </div>
    {/*//header-intro*/}
    <Filter />
  </Layout>
);
