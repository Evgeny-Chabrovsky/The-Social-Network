import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://www.farmersalmanac.com/wp-content/uploads/2020/11/sunrise.jpg"
          width="800px"
        ></img>
      </div>
      <div>
        ava + discription
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR5kqRkvr38UqiTbPsWtvW07y-naifcQdyw&usqp=CAU"></img> */}
      </div>
      <MyPosts />
      Main content
    </div>
  );
};

export default Profile;
