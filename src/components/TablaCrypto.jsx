import { TarjetaDato } from "./TarjetaDato";
import { useState } from "react";

export const TablaCrypto = ({ nombreCrypto }) => {
  const [selName, setSelName] = useState();

  const nameSelector = (e) => {
    setSelName(e.target.value);
  };

  return (
    <div>
      <select className="Conteiner-List" onChange={nameSelector}>
        <option className="Item-List"> Seleccione la cripto</option>
        {nombreCrypto.map((crypto) => (
          <option
            className="Item-List"
            key={crypto.CoinInfo.Id}
            value={crypto.CoinInfo.Name}
          >
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </select>

      <div>
        <TarjetaDato selName={selName} />
      </div>
    </div>
  );
};
