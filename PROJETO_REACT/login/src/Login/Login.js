import React from "react";
import "./Login.css"

 export default function Login(props){
   function mostrarMensagem(){ 
        alert("o nome do usuário e/ou senha está invalido.")
   }

 return(
<div>
  <form className="form">
      <div className="usuario">
         <input type="texto" name="username" placeholder="Nome do usuario ou email"/>

</div>
<div className="senha">

    <input type="passsword" name="senha" placeholder="senha" />
</div>
  <button className="botao" onClick={() => mostrarMensagem()}>LOGIN</button>
  <p className="esqueceu">Esqueceu sua senha? <a target="_blank" href="http://google.com">Clique aqui</a></p>
  
  <p> 
    {props.site} entre e confira!
  </p>
  </form>


    </div>
    );
}
 

