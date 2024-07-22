export function Task({ id, title, description, deleteTodo }) {
  return (
    <li className="b-todo_list-item_box">
      <div className="b-todo_list-item_title">{title}</div>
      <div className="b-todo_list-item_description">{description}</div>

      <button
        onClick={() => deleteTodo(id)}
        className="b-todo_list-item_delete_btn"
      ></button>
    </li>
  );
}
