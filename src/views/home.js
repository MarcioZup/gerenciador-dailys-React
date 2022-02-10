import React from "react";

class Home extends React.Component{


    state = {
        squad: ''
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Sejam Bem vindes!</h1>
                <p className="lead">Esse é seu sistema de Gerenciamento de Dailys</p>
               
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                        href="#/cadastro-usuarios" 
                        role="button"><i className="fa fa-users"></i>  
                        Cadastrar Usuário
                    </a>
                    <a className="btn btn-danger btn-lg" 
                        href="https://bootswatch.com/flatly/#" 
                        role="button"><i className="fa fa-users"></i>  
                        Cadastrar Lançamento
                        </a>
                </p>
            </div>
        )
    }
}

export default Home