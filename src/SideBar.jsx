// export function Button({children, eve}){
//     return (
//         <button className="test-button" onClick={eve}>{children}</button>
//     );
// }

export function SideContainer({obj}) {
    return (
        <div className="sidebar-container">
            {Object.keys(obj).map((key) => (
                <div className="sidebar-item">
                    <div>
                        <img className="side-icon" src={obj[key].iconPath} alt="" />
                        <span className="side-text">{key}</span>
                    </div>
                    <div>
                        <span className="side-noticer">{obj[key].extraMsg}</span>
                        <span className="side-right-arrow">{">"}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function UserArea({json}){
    // json.userName, .id
    return (
        <div className="user-area">
            <div>
                <img src={json.avatarPath} alt="" className="side-avatar" />
                <span className="username">{json.userName}</span>
            </div>
            <img src="" alt="" className="qr-icon" />
        </div>
    )
}
