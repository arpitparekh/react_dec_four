import React from 'react';
import './ListComp.css';

export default function ListComp({ items }) {
  return (
    <ul>
      {
        items.map((element, index) => (
        <li key={index}>{element}</li>
        ))
      }
    </ul>
  );
}
