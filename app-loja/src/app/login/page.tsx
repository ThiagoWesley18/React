"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm, SubmitHandler} from "react-hook-form";
import {useRouter} from "next/navigation";

type Inputs = {
    email: string;
    senha: string;
};

export default function Login() {
    const router = useRouter();
    const {register, handleSubmit, formState:{errors}} = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = async () => {
        router.push("/");
    };

    return (
        <main>
        <div className="container-fluid d-flex min-vh-100">
            <div className="row min-vw-100">
            <div className="col-12 col-md-4 bg-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                <h2>Bem vindo à TW Loja!</h2>
            </div>{" "}
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">

                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    aria-describedby="email"
                    {...register("email", {required: true})}
                    />
                    {errors.email?.type === "required" && (<span className="text-danger">Campo obrigatório</span>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">
                    Senha
                    </label>
                    <input
                    type="password"
                    className="form-control form-control-lg"
                    id="senha"
                    {...register("senha", {required: true, minLength: 6})}
                    />
                    {errors.senha?.type === "required" && (<span className="text-danger">Campo obrigatório</span>)}
                    {errors.senha?.type === "minLength" && (<span className="text-danger">Mínimo de 6 caracteres</span>)}
                </div>

                <div className="d-grid col-12">
                    <button type="submit" className="btn btn-success">
                    Entrar
                    </button>
                </div>

                <div className="text-center mt-3">
                    <Link href="/cadastro" className="btn btn-link">
                    não tenho cadastro
                    </Link>
                </div>
                </form>
                
            </div>
            </div>
        </div>
        </main>
    );
}