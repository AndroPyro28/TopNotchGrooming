import React from "react";
import { useState } from "react";
import { Data, Container } from "./basemodalDesignComponent";

function CategoryAndAgeLimit({setData, data, context, updateItem, deleteItem}) {
  const [modify, setModify] = useState(false);
  const [info, setInfo] = useState(data);
  return (
    <Container>
      <Data>{info.id}</Data>
      <Data>
        { modify ? (
          <input value={info[context]} name={context} onChange={(e) => setInfo(prev => ({...prev, [e.target.name]: e.target.value}))} />
        ) : (
          info[context]
        )}
      </Data>
      <Data>
        {modify ? (
          <i class="fa-solid fa-floppy-disk" onClick={() => updateItem(info, setModify)}></i>
        ) : (
          <i className="fa-solid fa-pen-to-square" onClick={() => setModify(true)}></i>
        )}

        <i className="fa-solid fa-eraser" onClick={() => deleteItem(info.id || data.id)}></i>
      </Data>
    </Container>
  );
}

export default CategoryAndAgeLimit;
