import "./css/netease-import.css";
import "./css/UserPage.css";
import * as Page from "./MainPageComponents"
import { useState, useRef } from "react"
import { addCommand, ne, ports } from "./net-request"
import { Router, Route, Link } from "react-router-dom"

export default function UserPage() {
    return (
        <div className="iphone user-page">
            <div className="top-btn">
                <input type="button" value="&#xf104;" onClick={()=>{window.history.go(-1);}}/>
                <input type="button" value="&#xf142;" />
            </div>
            <div className="space-img"></div>
            <div className="info-card">
                <img src="" alt="" className="avatar-userpage" />
                <p>User</p>
                <div className="sub-inf1">
                    <span>a</span>
                    <span>a</span>
                    <span>a</span>
                </div>
                <div className="sub-inf2">
                    <span>aaa</span>
                    <span>aaa</span>
                    <span>aaa</span>
                    <span>aaa</span>
                </div>
                <div className="edit-and-recmd-users">
                    <Link to="/User/edit-personal-info">
                        <input type="button" value="编辑资料" />
                    </Link>
                    <input type="button" value="&#xf105;" />
                </div>
            </div>
        </div>
    );
}