import {useState} from 'react'

function Cadastro(){
    /*Hook- useState  */
    const [info, setInfo] = useState({
       nome:'',
       email:'', 
    });

    const chave =localStorage.setItem('chave',JSON.stringify(info));

    /*criando as funções */

    const valueInput = (e) =>
        setInfo({...info, [e.target.name]: e.target.value});
    

    const handleSubmit =(e)=>{
        /*previne a pagina ficar renderizando */
        e.preventDefault();
        localStorage.getItem(chave)
    }

    return(
        <>
            <form onClick={handleSubmit}>
            <fieldset>

            <legend>Cadastro</legend>

            <label htmlFor='nome'>Nome:</label>
            <input type="text" name="nome" placeholder='digite seu nome' 
             onChange={valueInput}/>

             <label htmlFor='email'>Email:</label>
            <input type="text" name="email" placeholder='digite seu email' 
             onChange={valueInput}/>

             <button type='submit'>Cadastrar</button>

            </fieldset>
            <p>{info.nome}</p>
            <p>{info.email}</p>
            </form>
           
        </>
    )
}
export default Cadastro