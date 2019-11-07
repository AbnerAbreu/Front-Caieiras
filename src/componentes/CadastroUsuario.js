import React, {useState, useEffect} from 'react';
import './CadastroUsuario.scss';
import Botao from './Botao';
import Input from './Input';
import {Link} from 'react-router-dom';
import { API_URL } from '../api';

const CadastroUsuario = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    const [idade, setIdade] = useState(18);
    const [telefone, setTelefone] = useState("");
    const [count, setCount] = useState(0);
    const [mensagem , setMensagem] = useState("");


    const resposta = (texto) =>{
        setMensagem(texto)
        setTimeout(() =>{
          setMensagem("")
        }, 2000)
      }

    const handleSubmit = e =>{
        e.preventDefault();

        console.log("Opa")

        // fetch('http://localhost:8000/escolas/',
        //   {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   }
        // ).then(response => {
        //     return response.json()
        // }).then(response => {
        //     console.log(response)
        // })

      
        if(nome){
          const novoUsuarioCadastroUsuario = {
            nome: nome,
            idade: idade,
            telefone: telefone,
          }
          fetch(API_URL + '/usuarios/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novoUsuarioCadastroUsuario)
            }
          ).then(response => {
              return response.json()
          }).then(response => {
            if(response.id) {
              window.location='http://localhost:3000/esportes'
            }else{
              alert("Deu ruim")
            }
          })



          localStorage.setItem(`Dados${count}`, JSON.stringify(novoUsuarioCadastroUsuario));
          setCount(count + 1);
          setNome("");
          setIdade("");
          resposta("CadastroUsuario realizado com sucesso")
        }else{
          resposta("Os emails não correspondem");
          
        }
    
        }
    return (
        <div className="cadastro">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
    
            <Input 
            type="text" 
            label="Nome" 
            placeholder="Nome Completo"
            atualizarState={setNome}
            value={nome}
            obrigatorio
            />
            
            <Input 
            type="email" 
            label="Email" 
            placeholder="Digite o Email"
            atualizarState={setEmail}
            value={email}
            obrigatorio
            />
    
    
            <Input 
            type="email" 
            label="Confirme o seu email" 
            placeholder="Reescreva o Email"
            atualizarState={setConfirmEmail}
            value={confirmEmail}
            obrigatorio
            />

            <Input 
            type="Telefone" 
            label="Telefone" 
            placeholder="Digite seu Telefone"
            atualizarState={setTelefone}
            value={telefone}
            obrigatorio
            />

           
            
            <Input 
            type="password" 
            label="Senha" 
            placeholder="Digite a senha"
            atualizarState={setSenha}
            value={senha}
            obrigatorio
            />
    
            <Input type="submit" value="CadastroUsuario"/>
              
            </form> 

          </div>
        )
}
export default CadastroUsuario;