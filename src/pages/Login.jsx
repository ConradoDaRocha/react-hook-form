
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Entrar</h3>
      <input
        type="email"
        placeholder="Digite seu email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Campo obrigatório</span>}

      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Campo obrigatório</span>}
      
      <button type="submit">Entrar</button>

      <Link to="/resetpassword">
        <p>Esqueceu sua senha?</p>
      </Link>
      <p>Não possui conta?</p>
      <Link to="/signup">
        <p>Cadastrar</p>
      </Link>
    </form>
  );
}
export default Login;