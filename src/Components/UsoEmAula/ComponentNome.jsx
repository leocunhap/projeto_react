import { useEffect, useState } from "react";

function ComponentNome() {
    const [nome, setNome] = useState ("SEU NOME");

    
    useEffect(() => {

      alert('O alterado o nome ${nome}')
         
    },[nome])


    
    return (
    <div>

        <button onClick={() => setNome("SEU NOME APELIDO")}>Alterar para APELIDO</button>
        <button onClick={() => setNome("SEU NOME")}>Alterar para NOME</button>

        <p>Nome: {nome}</p>
    </div>
    );
}

export {ComponentNome};