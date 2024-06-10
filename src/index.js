import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App"
import UserPage from "./UserPage";
import EditUserInfo from "./EditUserInfo";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1 style={{margin: "5px auto auto 5px"}}>404 Not Found</h1>
    },
    {
        path: "User/",
        element: <UserPage />,
        children: [
            {
                path: "/User/edit-personal-info",
                element: <EditUserInfo />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
