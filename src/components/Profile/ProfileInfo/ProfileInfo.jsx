import style from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.farmersalmanac.com/wp-content/uploads/2020/11/sunrise.jpg"
          alt=" "
          width="800px"
        ></img>
      </div>

      <div className={style.mainContent}>
        Main content
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR5kqRkvr38UqiTbPsWtvW07y-naifcQdyw&usqp=CAU"
          width="50px"
          alt=""
        ></img>
        ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
