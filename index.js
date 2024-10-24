//modulos externos

const inquirer = require("inquirer");
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
.then( (answer) => {
    const action = answer.action

    if (action === 'Criar Conta') {
        CreateAccount()
    }

})
.catch((err) => console.log(err))
}

// create an Acoount

function CreateAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco! '))
    console.log(chalk.green('Defina as opções da sua conta a seguir! '))
}

function buildAccount(){
    inquirer
    .prompt([

        {
            name: 'AccountConta',
            message: 'Digite um nome para sua conta'

        }

    ])
    .then((answer) => {

    })
    .catch ((err) => console.log(err))
}