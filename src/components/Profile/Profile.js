import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.farmersalmanac.com/wp-content/uploads/2020/11/sunrise.jpg" alt=" "
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
