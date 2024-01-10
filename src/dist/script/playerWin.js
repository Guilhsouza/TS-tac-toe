import caseForWin from "../utils/caseForWin.js";
import responseForWin from "../utils/responseForWin.js";
export default function playerWin() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const tie = document.getElementById('tie').innerHTML;
    const player1victory = document.getElementById('player1-victory').innerHTML;
    const player2victory = document.getElementById('player2-victory').innerHTML;
    const theGame = document.querySelector('.the-game');
    const elements = [];
    theGame === null || theGame === void 0 ? void 0 : theGame.querySelectorAll('.elements').forEach((element) => {
        elements.push(element.textContent);
    });
    if (caseForWin(elements, 'X')) {
        responseForWin('win', player1);
        document.getElementById('player1-victory').innerHTML = `<b>Vitorias do jogador:</b> ${Number(player1victory[(player1victory === null || player1victory === void 0 ? void 0 : player1victory.length) - 1]) + 1}`;
        return;
    }
    ;
    if (caseForWin(elements, 'O')) {
        responseForWin('win', player2);
        document.getElementById('player2-victory').innerHTML = `<b>Vitorias do jogador:</b> ${Number(player2victory[(player2victory === null || player2victory === void 0 ? void 0 : player2victory.length) - 1]) + 1}`;
        return;
    }
    ;
    if (!elements.includes('')) {
        responseForWin('tie');
        document.getElementById('tie').innerHTML = `<b>Empates:</b> ${Number(tie[(tie === null || tie === void 0 ? void 0 : tie.length) - 1]) + 1}`;
        return;
    }
    ;
}
;
