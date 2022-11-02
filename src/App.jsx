import { useEffect, useState } from "react";
import { TablaCrypto } from "./components/TablaCrypto";

function App() {
  const [nombreCrypto, setNombreCrypto] = useState([]);
  const API_KEY =
    "8704eae3a2d1cf0bde10017c7b36f2536c1c34370493405874e6246f03fa8c8f";
  const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`;

  const GetData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setNombreCrypto(data.Data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <h1>Crypto compare</h1>

      <TablaCrypto nombreCrypto={nombreCrypto} />
    </div>
  );
}

export default App;
