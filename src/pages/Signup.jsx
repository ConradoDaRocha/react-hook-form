import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Inscreva-se</h3>
      <input {...register("firstName")} placeholder="Digite seu nome" />
      <input {...register("lastName")} placeholder="Digite seu sobrenome" />
      <p>sexo:</p>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input {...register("email")} placeholder="Digite seu email" />
      <input {...register("passord")} placeholder="Digite sua senha" />
      <input {...register("passord")} placeholder="repita sua senha" />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
export default Signup;
