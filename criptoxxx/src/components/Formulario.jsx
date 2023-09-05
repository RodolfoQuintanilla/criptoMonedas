import React from "react";
import styled from "@emotion/styled";

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
text-align: center;
transition: background-color .3s ease;
&::hover{
    background-color: #7a7dfe;
    cursor: pointer;
}
`

function Formulario() {
  return (
    <div>
      <form action="">
        <InputSubmit 
        type="text" 
        value="cotizador" 
        />
      </form>
    </div>
  );
}

export default Formulario;
