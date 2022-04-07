import React from 'react'


import {useForm} from "react-hook-form"


export default function FormTestComplete() {
  // const { register, setValue } = useForm();
  const {register, setValue} = useForm()

  const checkUsers = (e) => {
    const PLACA = e.target.value;
    console.log(PLACA);
    fetch("http://localhost:5500/autocompletar/" + PLACA, {
        method: "get",
        mode: "cors"

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue('PLACA',data.PLACA);
        setValue('PROPRIETARIO',data.PROPRIETARIO);
        // setProprietario(data.name)  
      }).catch((err) => {
          console.log(err)
      });
  };
  return (
    <div className="App">
      <form>
        <label>
          id:
          <input type="text" name="PLACA" id="PLACA" {...register('PLACA')} onBlur={checkUsers}  onChange={(e) => setValue(e.target.value)}/>
        </label>
        <label>
      
          <input type="text" name="PROPRIETARIO" id="PROPRIETARIO" {...register('PROPRIETARIO')}/> 
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
