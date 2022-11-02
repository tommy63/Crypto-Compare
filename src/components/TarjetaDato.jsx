import { useState, useEffect } from "react";
export const TarjetaDato = ({ selName }) => {
  const [coins, setCoins] = useState();
  const [valor, setValor] = useState(true);
  const imagen = "https://www.cryptocompare.com";
  const GetData = async (cryptoName) => {
    const res = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoName}&tsyms=USD,ARS`
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    GetData(selName);
  }, [selName]);

  const cambioValor = (e) => {
    e.target.value == "USD" ? setValor(true) : setValor(false);
  };

  const cryptoDatos = valor
    ? coins?.DISPLAY?.[selName]?.USD
    : coins?.DISPLAY?.[selName]?.ARS;

  return (
    <div>
      <select className="Conteiner-List" onChange={cambioValor}>
        <option value="USD">USD</option>
        <option value="ARS">ARS</option>
      </select>
      <div className="Card">
        {cryptoDatos ? (
          <img
            src={imagen + cryptoDatos?.IMAGEURL}
            width={50}
            height={50}
            alt={cryptoDatos?.FROMSYMBOL}
          />
        ) : (
          " "
        )}
        <h2>Cotizacion del dia: {cryptoDatos?.OPENDAY}</h2>
        <h2>Precio max: {cryptoDatos?.HIGHDAY}</h2>
        <h2>Precio min: {cryptoDatos?.LOWDAY}</h2>
        <h2>Variacion 24hs: {cryptoDatos?.CHANGE24HOUR}</h2>
      </div>
    </div>
  );
};
