import React from "react";

const Body = ({ children }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-4-widescreen">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
