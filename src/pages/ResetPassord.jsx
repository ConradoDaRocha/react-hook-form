import { useForm } from "react-hook-form";
import{useState} from 'react'
import{Link} from 'react-router-dom'

function ResetPassord() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const[message, setMessage]=useState('')

    function writeMessage(){
        setMessage("Um email de verificação foi enviado, verfique sua caixa de entrada.")
      
    }

    return (
        <>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Recuperação de senha</h3>
            <input {...register("firstName")} placeholder="Digite seu nome" />
            <input {...register("email")} placeholder="Digite seu email" />

            <button onClick={writeMessage} type="submit">Enviar solicitação</button>
            <p>{message}</p>
            <Link to="/"><p>Voltar ao início</p></Link>

        </form>
        
        </> 
    )
}
export default ResetPassord;
