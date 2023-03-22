import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Entrar</h3>
      <input {...register("firstName")} placeholder="Digite seu nome" />
      <input {...register("password")} placeholder="Digite sua senha" />
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