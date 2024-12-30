import { RiMastodonLine } from "react-icons/ri";

function Task({ data }) {
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div key={item._id} className="tasks__card">
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Task;
