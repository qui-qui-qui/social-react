import Online from "../online/Online";
import { Users } from "../../data";
import "./rightbar.css";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
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
            </>
        );
    };

    const ProfileRightbar = () => {
      return (
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <div className="rightbarInfoKey">City:</div>
              <div className="rightbarInfoValue">Volgograd</div>
            </div>
            <div className="rightbarInfoItem">
              <div className="rightbarInfoKey">Country:</div>
              <div className="rightbarInfoValue">Russia</div>
            </div>
            <div className="rightbarInfoItem">
              <div className="rightbarInfoKey">Relationship:</div>
              <div className="rightbarInfoValue">Single</div>
            </div>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Jonny Depp</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Jonny Depp</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Jonny Depp</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Jonny Depp</span>
            </div>
          </div>
        </>
      )
    }

    return (
        <div className="rightbar">
            <div className="rigthbarWrapper">
              {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}
