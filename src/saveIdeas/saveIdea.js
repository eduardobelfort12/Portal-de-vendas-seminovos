import React from 'react'
import { useState } from "react";

export default function FormAutoPreencher() {
  // const { register, setValue } = useForm();
  const [register,setRegister] = useState();
  const [proprietario, setProprietario] = useState()
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [ano_veiculo, setAno] = useState()


  const checkUsers = (id) => {
    console.log(id);
    fetch(`http://localhost:5500/queryteste/${id}`, {
      method: "GET",
      mode: "cors"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMarca(data[0].marca);  
        setModelo(data[0].modelo)
        setAno(data[0].ano_veiculo)
        setProprietario(data[0].proprietario)
        // setProprietario(data.name)
      });
  };
  return (
    <div className="App">
      <form>
        <label>
          id:
          <input
            type="text"
            name="id"
            id="id"
            onBlur={(e) => checkUsers(e.target.value)}
            onChange={(e) => setRegister(e.target.value)}
          />
        </label>
        <label>
          <input type="text" name="marca" id="marca" value={marca} />
        </label>
        <label>
          <input type="text" name="modelo" id="modelo" value={modelo} />
        </label>
        <label>
          <input type="text" name="ano_veiculo" id="ano_veiculo" value={ano_veiculo} />
        </label>
        <label>
          <input type="text" name="proprietario" id="proprietario" value={proprietario} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
