import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hook/useSelectMonedas";
import { monedas } from "../data/mondedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &::hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

function Formulario({setMonedas}) {
  const [criptos, setcriptos] = useState([]);
  const [errors, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elje tu Moneda", monedas);

  const [criptomonedas, SelectCriptomonedas] = useSelectMonedas(
    "Elje tu Cripto Moneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";

      const resupuesta = await fetch(url);
      const resultado = await resupuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setcriptos(arrayCriptos);
    };

    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomonedas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptomonedas
    })
  };

  return (
    <div>
      {errors && <Error>Todos los Rrrores son Obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomonedas />

        {moneda}

        <InputSubmit type="submit" value="cotizador" />
      </form>
    </div>
  );
}

export default Formulario;
