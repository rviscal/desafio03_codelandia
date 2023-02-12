import React from "react";
import { Fform, Finput,Ftextarea} from "./Style";

function Form (){
    return(
        <Fform>
        <Finput type="text" placeholder="Nome"/>
        <Finput type="email" placeholder="E-mail"/>
        <Finput type="number" placeholder="Telefone"/>
        <Ftextarea type="textarea" placeholder="Mensagem..."/>
        </Fform>
    )
}export default Form;