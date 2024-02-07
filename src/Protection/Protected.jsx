import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../__API__.js";

const Protection = ({ value }) => {
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (api.getCookie("login")) {
            setIsLoggedIn(api.getCookie("login"));
            api.getCookie("login") && navigate("/");
        }
    });
    return <>{!isLoggedIn && value}</>;
};
export default Protection;