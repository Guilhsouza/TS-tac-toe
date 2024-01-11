import caseForWin from "../utils/caseForWin.js";
import responseForWin from "../utils/responseForWin.js";

export default function playerWin(): boolean | undefined {
    const player1 = (document.getElementById('player1') as HTMLInputElement).value;
    const player2 = (document.getElementById('player2') as HTMLInputElement).value;
    const tie = (document.getElementById('tie') as HTMLParagraphElement).innerHTML
    const player1victory = (document.getElementById('player1-victory') as HTMLParagraphElement).innerHTML
    const player2victory = (document.getElementById('player2-victory') as HTMLParagraphElement).innerHTML
    const theGame = document.querySelector('.the-game');

    const elements: string[] = [];

    theGame?.querySelectorAll('.elements').forEach((element) => {
        elements.push((element.textContent as string));
    });

    if (caseForWin(elements, 'X')) {
        responseForWin('win', player1);
        (document.getElementById('player1-victory') as HTMLParagraphElement).innerHTML = `<b>Vitorias do jogador (X):</b> ${Number(player1victory[player1victory?.length - 2] + player1victory[player1victory?.length - 1]) + 1}`
        return true
    };

    if (caseForWin(elements, 'O')) {
        responseForWin('win', player2);
        (document.getElementById('player2-victory') as HTMLParagraphElement).innerHTML = `<b>Vitorias do jogador (O):</b> ${Number(player2victory[player2victory?.length - 2] + player2victory[player2victory?.length - 1]) + 1}`
        return true
    };

    if (!elements.includes('')) {
        responseForWin('tie');
        (document.getElementById('tie') as HTMLParagraphElement).innerHTML = `<b>Empates:</b> ${Number(tie[tie?.length - 2] + tie[tie?.length - 1]) + 1}`
        return true
    };
};