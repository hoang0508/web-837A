import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./WatchPage";
import { MemberPage } from "./Member";
import { ResultPage } from "./result";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/watch",
    element: <WatchPage />,
  },
  {
    path: "/member",
    element: <MemberPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
