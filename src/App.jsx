import "./css/SideBar.css";
import "./css/netease-import.css";
import "./css/MainPage.css"
import * as SideBar from "./SideBar";
import * as Page from "./MainPageComponents"
import { useState, useRef } from "react"
import {addCommand, ne, ports} from "./net-request"
import {Router,Route,Link} from "react-router-dom"

export default function App() {
	const [mouseX, mouseXSetter] = useState(0);
	const refToSideBar = useRef(null), refToPage = useRef(null);
	const root = document.getElementById("root");
	function mouseDown(e) {
		mouseXSetter(e.clientX);
	}
	function mouseUp(e) {
		if (e.clientX - mouseX >= 100) {
			refToSideBar.current.style.transform = "translateX(0)";
			refToPage.current.style.animation = "blur-in 0.5s";
			refToPage.current.style.filter = "blur(2px)";
			
		}
		if (e.clientX - mouseX <= -100) {
			refToSideBar.current.style.transform = "";
			refToPage.current.style.animation = "blur-out 0.5s";
			refToPage.current.style.filter = "blur(0)";
		}
		mouseXSetter(0);
	}
	return (
		<>
			<div className="iphone" onMouseDown={mouseDown} onMouseUp={mouseUp}>
				<div className="sidebar" ref={refToSideBar}>
					<Link to='/User'>
						<SideBar.UserArea json={{userName: "Steino", avatarPath: ""}}/>
					</Link>
					<SideBar.SideContainer
						obj={{
							"我的消息": {iconPath: "", extraMsg: <span className="msgpop">99+</span>},
							"云贝中心": {iconPath: "", extraMsg: ""},
							"创作者中心": {iconPath: "", extraMsg: ""}
						}}
					/>
				</div>
				<div className="main-page" ref={refToPage}>
					<div className="top-header">
						<span
							className="header-icon"
							onClick={()=>{
								const sidebar = document.querySelector(".sidebar"),
									mainPage = document.querySelector(".main-page");
								sidebar.style.transform = 'translateX(0)';
								mainPage.style.animation = "blur-in 0.5s";
								mainPage.style.filter = "blur(2px)";
								}}>
							&#xf0c9;
						</span>
						<span className="search"><input type="text" name="" id="" /></span>
						<span className="header-icon">&#xf130;</span>
					</div>
					<div className="greeting">
						<span>推荐歌单</span>
						<span></span>
					</div>
				</div>
			</div>
		</>
	);
};

