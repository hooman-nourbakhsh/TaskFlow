import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RiMastodonLine } from "react-icons/ri";

function Task({ data, next, back, fetchTodos }) {
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div key={item._id} className="tasks__card">
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <div>
            {back ? (
              <button className="button-back">
                <BiLeftArrow />
                Back
              </button>
            ) : null}
            {next ? (
              <button className="button-next">
                Next
                <BiRightArrow />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task;
