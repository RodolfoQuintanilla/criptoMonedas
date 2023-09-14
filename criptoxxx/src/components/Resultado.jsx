import styled from '@emotion/styled'

const ResultadoT = styled.div`
  color: #fff;
  font-family: 'lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Resultado = ({ resultado }) => {
  console.log(resultado)
  const {
    PRICE,
    HIGHDAY,
    LOWDAY,
    CHANGE24HOUR,
    IMAGEURL,
    LASTUPDATE,
  } = resultado
  return (
    <ResultadoT>
      <div>
        <Imagen
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="Img de Cripto"
        />
        <Precio>
          {' '}
          El Precio es de: <span>{PRICE} </span>
        </Precio>
        <Texto>
          {' '}
          El Precio mas Alto: <span>{HIGHDAY} </span>
        </Texto>
        <Texto>
          {' '}
          El Precio mas Bajo: <span>{LOWDAY} </span>
        </Texto>
        <Texto>
          {' '}
          Variacion ultimasd 24 Horas: <span>{CHANGE24HOUR} </span>
        </Texto>
        <Texto>
          {' '}
          Ultima Actualizacion: <span>{LASTUPDATE} </span>
        </Texto>
      </div>
    </ResultadoT>
  )
}

export default Resultado
