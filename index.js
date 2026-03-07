const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 100,
    forca: 98,
    resistencia: 90,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "",
    armaSecundaria: "",
    velocidade: 60,
    forca: 99,
    resistencia: 95,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "",
    velocidade: 90,
    forca: 90,
    resistencia: 85,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const homemFormiga = {
    nome: "Hank Pym",
    codinome: "Homem-Formiga",
    armaPrincipal: "Traje",
    armaSecundaria: "",
    velocidade: 50,
    forca: 95,
    resistencia: 70,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const vespa = {
    nome: "Janet van Dyne",
    codinome: "Vespa",
    armaPrincipal: "Traje",
    armaSecundaria: "",
    velocidade: 99,
    forca: 10,
    resistencia: 10,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const thanos = {
    nome: "Thanos de Titã",
    codinome: "Thanos",
    armaPrincipal: "Manoplas do Infinito",
    armaSecundaria: "",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        console.log(`
        Nome: ${this.nome}
        Codinome: ${this.codinome}
        Arma principal: ${this.armaPrincipal}
        Arma secundária: ${this.armaSecundaria}
        Velocidade: ${this.velocidade}
        Força: ${this.forca}
        Resistência: ${this.resistencia}`)
    }
}

const listaPersonagens = [
    capitaoAmerica,
    thor,
    hulk,
    homemDeFerro,
    homemFormiga,
    vespa,
    thanos
]

listaPersonagens.forEach((p1, i1) => {

    listaPersonagens.forEach((p2, i2) => {

        if (i1 >= i2) return

        console.log(`${p1.codinome} contra ${p2.codinome}!`)

        p1.descricao()
        p2.descricao()

        if (p1.velocidade > p2.velocidade) {
            console.log(`${p1.codinome} vence em Velocidade!`)
        } else {
            console.log(`${p2.codinome} vence em Velocidade!`)
        }

        if (p1.forca > p2.forca) {
            console.log(`${p1.codinome} vence em Força!`)
        } else {
            console.log(`${p2.codinome} vence em Força!`)
        }

        if (p1.resistencia > p2.resistencia) {
            console.log(`${p1.codinome} vence em Resistência!`)
        } else {
            console.log(`${p2.codinome} vence em Resistência!`)
        }

        console.log("\n")
    })
})
