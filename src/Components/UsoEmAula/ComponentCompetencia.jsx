function ComponentCompetencia(props)  {
    return (
        <div
        style={{
            background: "#000",
            color: "#fff",
            width: "40%",
            marginLeft: "30%",
            padding: "2%",
            border: "15px solid green",
           }}
         >
        
         <div>
            {props.nome}
        </div>
          <div>
            {props.descricao}
          </div>
        </div>
    );
}

export {ComponentCompetencia};