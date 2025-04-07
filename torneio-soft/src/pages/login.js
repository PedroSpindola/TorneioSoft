import React from "react";
import bootstrap from 'bootstrap'

function Login() {

    return (
        <div className="container mt-5 justify-content-center">
            <div class="card border-primary mb-3">
                <div class="card-header">LOGIN</div>
                <div class="card-body">
                    <form >
                        <label>Email</label>
                        <input type="text" className="form-control mt-3"></input>
                        <label>Senha</label>
                        <input type="password" className="form-control mt-3"></input>
                        <div className="mt-5">
                            <button className="btn btn-primary btn-lg m-2">enviar</button>
                            <button className="btn btn-outline-primary btn-lg">esqueceu a senha?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;