import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Inscreva-se</h3>

      <input
        placeholder="Digite seu nome"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <span>Campo obrigatório</span>}

      <input
        placeholder="Digite seu sobrenome"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <span>Campo obrigatório</span>}

      <p>sexo:</p>
      <select {...register("gender", { required: true })}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      {errors.gender && <span>Campo obrigatório</span>}

      <input placeholder="Digite seu email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Campo obrigatório</span>}

      <input placeholder="Digite sua senha"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Campo obrigatório</span>}

      <input placeholder="repita sua senha"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Campo obrigatório</span>}

      <button type="submit">Cadastrar</button>
    </form>
  );
}
export default Signup;
