import { useEffect } from "react";


function ComponentResumoSobreVoce(props) {
   
    useEffect(() => {
      
      alert('Olá, Esse é o resumo sobre mim:)')
      
    },[])
  
  
      return (
        <div>
          <div>Resumo</div>
          <p>{props.children}</p>
        </div>
    );
}

export {ComponentResumoSobreVoce};
