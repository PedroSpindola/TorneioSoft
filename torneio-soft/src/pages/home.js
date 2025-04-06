import React from "react";
import 'bootswatch/dist/vapor/bootstrap.css'
import Navbar from "../components/navbar";
import '../App.css';


function Home() {

    return (

        <div className="container">
            <Navbar />
            <div>
                <div class="card mb-3">
                    <h3 class="">Crie o seu torneio</h3>
                    <img src="torneio-soft\src\imagens\torneioHome.jpg" width="100%" height="200"/>
                    <div class="">
                        <p class="">Monte seu próprio torneio de futsal com poucos cliques! Cadastre-se e organize partidas, equipes e tabelas direto pelo nosso site.</p>
                        <button type="button" class="btn btn-primary btn-lg">Monte já!</button>
                    </div>
                </div>
                <div class="card mb-3">
                    <h3 class="">Adicione sua equipe</h3>
                    <img src="" width="100%" height="200"/>
                    <div class="">
                        <p class="">Adicione sua equipe ao site e fique disponível para convites! Os administradores dos torneios poderão convidar seu time para participar das competições.</p>
                        <button type="button" class="btn btn-primary btn-lg">Adicione já!</button>
                    </div>
                </div>
                <div class="card mb-3">
                    <h3 class="">Cadastre Jogadores</h3>
                    <img src="" width="100%" height="200"/>
                    <div class="">
                        <p class="">Cadastre-se como jogador e entre em campo! Equipes poderão te convidar para participar dos torneios e mostrar seu talento nas competições.</p>
                        <button type="button" class="btn btn-primary btn-lg">Cadastre já!</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;