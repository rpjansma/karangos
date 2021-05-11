import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://api.faustocintra.com.br/karangos";

export default function KarangosList() {
  const [karangos, setKarangos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(API);
        setKarangos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Lista dos Karangos</h1>
      {karangos.map((karango) => (
        <div>{karango.modelo}</div>
      ))}
      <div>{JSON.stringify(karangos)}</div>
    </>
  );
}
