class Personagem {

    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
        this.nome = nome
        this.codinome = codinome
        this.armaPrincipal = armaPrincipal
        this.armaSecundaria = armaSecundaria
        this.velocidade = velocidade
        this.forca = forca
        this.resistencia = resistencia
    }

    descricao = function () {
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
    new Personagem("Steve Rogers", "Capitão América", "Escudo americano", "", 85, 75, 80),
    new Personagem("Thor Odinson", "Thor", "Mjolnir", "Stormbreaker", 100, 90, 90),
    new Personagem("Bruce Banner", "Hulk", "", "", 60, 100, 95),
    new Personagem("Tony Stark", "Homem de Ferro", "Armadura", "", 90, 90, 90),
    new Personagem("Hank Pym", "Homem-Formiga", "Traje", "", 50, 90, 70),
    new Personagem("Janet van Dyne", "Vespa", "Traje", "", 100, 10, 10),
    new Personagem("Thanos de Titã", "Thanos", "Manoplas do Infinito", 100, 100, 100)
]



listaPersonagens.forEach((Personagem_01, index1) => {

    listaPersonagens.forEach((Personagem_02, index2) => {

        if (index1 > index2 || Personagem_01 === Personagem_02) {return} // Quem é o agente do futuro?

        console.log(`${Personagem_01.codinome} contra ${Personagem_02.codinome}!`)

        if (Personagem_01.velocidade > Personagem_02.velocidade) {
            console.log(`${Personagem_01.codinome} vence em Velocidade!`)
        } else { console.log(`${Personagem_02.codinome} vence em Velocidade!`) }
        if (Personagem_01.forca > Personagem_02.forca) {
            console.log(`${Personagem_01.codinome} vence em Força!`)
        } else { console.log(`${Personagem_02.codinome} vence em Força!`) }
        if (Personagem_01.resistencia > Personagem_02.resistencia) {
            console.log(`${Personagem_01.codinome} vence em Resistência!`)
        } else { console.log(`${Personagem_02.codinome} vence em Resistência!`) }

        console.log("\n")
    })
})

