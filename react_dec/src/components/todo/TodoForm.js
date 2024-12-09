export default function TodoForm({ addTodo, writeTodo, todo,status }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={writeTodo}
        value={todo}
      />
      <button onClick={addTodo}>{status}</button>
    </div>
  );
}
