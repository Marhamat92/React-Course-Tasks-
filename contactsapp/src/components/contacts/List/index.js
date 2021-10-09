import React from "react";

function List({ contacts }) { //props kullanarak contacts parametreye ekledık
  return (
    <div>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>
            {" "}
            {contact.fullname} {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
