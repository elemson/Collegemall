import React from "react";
import "./homepage.styles.scss";
import Directory from "../../directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory history />
  </div>
);

export default HomePage;
