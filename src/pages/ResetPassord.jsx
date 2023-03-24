import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function ResetPassord() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Recuperação de senha</h3>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>Campo obrigatório</span>}

                <button type="submit">Enviar solicitação</button>
                <Link to="/"><p>Voltar ao início</p></Link>
            </form>
        </>
    )
}
export default ResetPassord;
