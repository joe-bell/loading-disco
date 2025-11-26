import React from "react";
import "./index.css";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <React.Fragment>
    <div className="layout">
      <main>{children}</main>
      <footer className="footer">
        <span className="footer__img">ℹ️</span>
        <a
          className="footer__link"
          href="https://joebell.studio/craft/loading-disco"
          target="_blank"
          rel="noopener"
        >
          See the full demo
        </a>
      </footer>
    </div>
  </React.Fragment>
);
