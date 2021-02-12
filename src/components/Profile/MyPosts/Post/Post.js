import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiAuLeexgeW0thUOGTL4oLYLLmiCqtFuI7Q&usqp=CAU"
        alt=""
      />
      Post 1<span>Like</span>
      {props.likeCount}
    </div>
  );
};

export default Post;
