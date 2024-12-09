export default function TodoList({ list, removeClick, editClick }) {

  return (
    <div>
      <ul id="myList">
        {list.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={() => removeClick(index)}>Remove</button>
            <button onClick={()=> editClick(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
