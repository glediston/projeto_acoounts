//modulos externos

const inquirer = require("inquire")
const chalk = require("chalk")

//modulos internos

const fs = require("fs")
operation()

function operation() {

    inquirer
        .prompt ([
        {
        type: "list",
        name: "action",
        message: 'O que voçê deseja fazer? ',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair',
        ],
    },
])
.then()
.catch((err) => console.log(err))
}