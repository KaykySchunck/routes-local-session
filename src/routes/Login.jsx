import {useRef} from 'react'
import Conteudo from './Conteudo';

function login(){

/*Hook- useRef - retorna um elemento ou componentte no DOM */
const usuario =useRef();
const senha = useRef();

/*criando a estrutura do sessionStorage para os dados digitados */
const getUser = sessionStorage.getItem('userData');
const getSenha = sessionStorage.getItem('userSenha');

/*criando as funções */

const handleSubmit =()=>{
    if(usuario.current.value ==='admin' && senha.current.value ==='123456')
    {
        sessionStorage.setItem('userData','admin');
        sessionStorage.setItem('userSenha','123456');

    } else{
        alert("Usuario e senha invalidos")
    }
};

    return(
        <>
            { getUser && getSenha ? (
                <Conteudo/>
             ):(
                  <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" ref={usuario} />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" ref={senha} />

                    <input type="submit" value="login" />
                  </form>  
             )}

        </>
    )
             }
export default login