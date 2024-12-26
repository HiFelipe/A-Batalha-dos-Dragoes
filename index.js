let energiaInicialDragaoA = 50;
let energiaInicialDragaoB = 60;

let itensMagicosDragaoA = [];
let itensMagicosDragaoB = [];

let energia = "";

let condicao = "";

function opcoes () {
    return prompt(
        "A Batalha dos Dragões 🐉\n\n"+
        "Escolha uma das opções abaixo para proseguir:\n"+
        "1. Adicionar quantidade de energia mágica encontrados pelo dragão A.\n"+
        "2. Adicionar quantidade de energia mágica encontrados pelo dragão B.\n"+
        "3. Listar quantidade de energia mágica encontrados pelo dragão A.\n"+
        "4. Listar quantidade de energia mágica encontrados pelo dragão B.\n"+
        "5. Encerrar batalha."
    );
} 

do {
    condicao = opcoes();

    switch (condicao) {
        case "1":
            energia = Number(prompt("Qual a quantidade de energia mágica foi encontrada pelo Dragão A?"));
            itensMagicosDragaoA.push(energia)                        
            break;
        case "2":
            energia = Number(prompt("Qual a quantidade de energia mágica foi encontrada pelo Dragão B?"));
            itensMagicosDragaoB.push(energia)             
            break;
        case "3":
            alert(
                `Energia mágica encontrada pelo Dragão A:\n\n`+
                `${itensMagicosDragaoA}`
            );
            break;
        case "4":
            alert(
                `Energia mágica encontrada pelo Dragão B:\n\n`+
                `${itensMagicosDragaoB}`
            );
            break;
        default:
            break;
    }
} while (condicao !== "5");

let energiaAcumuladoDragaoA = itensMagicosDragaoA.reduce(function (valorAcumulado, energia) {
    return (valorAcumulado + energia);

}, 0);

let energiaAcumuladoDragaoB = itensMagicosDragaoB.reduce(function (valorAcumulado, energia) {
    return (valorAcumulado + energia);

}, 0);

let energiaFinalDragaoA = energiaAcumuladoDragaoA + energiaInicialDragaoA;

let energiaFinalDragaoB = energiaAcumuladoDragaoB + energiaInicialDragaoB;

alert(
    `Dragão A:\n`+
    `Energia inicial: ${energiaInicialDragaoA}\n`+
    `Energia acumulado: ${energiaAcumuladoDragaoA}\n`+
    `Energia final: ${energiaFinalDragaoA}`
);

alert(
    `Dragão B:\n`+
    `Energia inicial: ${energiaInicialDragaoB}\n`+
    `Energia acumulado: ${energiaAcumuladoDragaoB}\n`+
    `Energia final: ${energiaFinalDragaoB}`
);

if (energiaFinalDragaoA > energiaFinalDragaoB) {
    alert("Dragão A é o vencedor!!");
} else if (energiaFinalDragaoB > energiaFinalDragaoA) {
    alert("Dragão B é o vencedor!!");
} else {
    alert("O combate empatou");
}   
