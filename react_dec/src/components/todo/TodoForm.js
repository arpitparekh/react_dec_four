export default function TodoForm({ addTodo, writeTodo, todo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={writeTodo}
        value={todo}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
