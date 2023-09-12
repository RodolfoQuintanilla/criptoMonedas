import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
width: 105%;
font-size: 18px;
padding: 12px;
border-radius: 10px;
`


function useSelectMonedas(label, opciones) {

    const [state, setstate] = useState('');
  const SelectMonedas = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <Select
      value={state}
      onChange={(e)=>setstate(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
}

export default useSelectMonedas;
