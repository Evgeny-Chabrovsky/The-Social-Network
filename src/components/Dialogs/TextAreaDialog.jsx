import React from "react";
const TextAreaDialog = () => {
  let newMessageElement = React.createRef();
  let showMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className="form-floating w-75 pt-2">
        <textarea
          ref={newMessageElement}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">My message</label>
      </div>
      <button
        className="btn btn-primary mt-2 mb-2"
        type="submit"
        onClick={() => showMessage("Получилось!")}
      >
        Add message
      </button>
    </div>
  );
};

export default TextAreaDialog;
