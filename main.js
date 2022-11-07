function createGame(player1, hour, player2) {
  return `<li>
              <img src="./assets/${player1}-icon.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img
                src="./assets/${player2}-icon.svg"
                alt="Bandeira do ${player2}"
              />
            </li>
              `
}

let delay = 0

function createCard(date, day, games) {
  delay += 0.3
  return ` <div class="card" style="animation-delay: ${delay}">
          <h2>${date} <span> ${day} </span></h2>
          <ul>
            ${games}
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") + createGame("usa", "16:00", "gales")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "Camaroon") +
      createGame("brasil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("serbia", "16:00", "switzerland") +
      createGame("brasil", "16:00", "Camaroon")
  )
