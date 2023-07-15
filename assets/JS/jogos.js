function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="assets/times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    `
}
let delay = -0.5;
function createCard(date, day, games) {
    delay = delay + 0.5
    return`
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = 
createCard("15/07", "sábado", createGame("palmeiras", "21:00",
 "corinthians")) + createCard("20/07", "quinta-feira", createGame("santos", "15:00",
  "bahia")) + createCard("18/07", "Terça-feira", createGame("flamengo", "19:00",
   "sp")) + createCard("23/07", "domingo", createGame("bota", "13:00", 
   "vasco")) + createCard("27/07", "quinta-feira", createGame("inter", "20:00", 
   "cruzeiro")) + createCard("31/07", "segunda-feira", createGame("atletico", "20:00", "gremio"))