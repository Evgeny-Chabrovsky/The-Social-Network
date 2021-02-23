import { useState } from "react";

const UserItem = (props) => {
  return (
    <div className="card mb-3 w-75 p-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            className=" mx-auto d-block"
            src={
              props.photos == null
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
                : props.photos
            }
            width="150px"
            alt=""
          />

          {/* {u.followed?<button
            type="button"
            className="btn btn-secondary btn-sm mx-auto d-flex justify-content-center mt-3"
            onClick={u.followed }
          ></button>}
 */}
          {props.followed ? (
            <button
              type="button"
              className="btn btn-secondary btn-sm mx-auto d-flex justify-content-center mt-3"
              onClick={() => {
                props.follow(props.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary btn-sm mx-auto d-flex justify-content-center mt-3"
              onClick={() => {
                props.follow(props.id);
              }}
            >
              Follow
            </button>
          )}
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.status}</p>
            <p className="card-text">
              <small className="text-muted">
                {"props.location.city} {props.location.country"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
