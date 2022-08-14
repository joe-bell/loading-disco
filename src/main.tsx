import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./irrelevant";
import { Button } from "./Button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Button />
    </Layout>
  </React.StrictMode>
);
