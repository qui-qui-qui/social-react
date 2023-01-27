import Online from "../online/Online";
import { Users } from "../../data";
import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rigthbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Mike Tompson</b> and <b>2 other friends</b> have a
                        birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
