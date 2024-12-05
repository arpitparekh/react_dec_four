export default function TodoList({ list }) {
  return (
    <div>
      <ul id="myList">
        {
          list.map((element, index) => (
            <li>{element}</li>
          ))
        }
      </ul>
    </div>
  );
}
