const players = [
  { rank: 1, name: "LIN Shidong", country: "Chine", points: 8675 },
  { rank: 2, name: "WANG Chuqin", country: "Chine", points: 6575 },
  { rank: 3, name: "Hugo CALDERANO", country: "Brésil", points: 5400 },
  { rank: 4, name: "Tomokazu HARIMOTO", country: "Japon", points: 4550 },
  { rank: 5, name: "LIANG Jingkun", country: "Chine", points: 4200 },
  { rank: 6, name: "Truls MOREGARD", country: "Suède", points: 3680 },
  { rank: 7, name: "Felix LEBRUN", country: "France", points: 3220 },
  { rank: 8, name: "Lin Yun-Ju", country: "Taïwan", points: 2310 },
  { rank: 9, name: "Darko Jorgic", country: "Slovénie", points: 2275 },
  { rank: 10, name: "Xiang Peng", country: "Chine", points: 2275 },
];

const container = document.getElementById("ranking");

players.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.1}s`;
  card.innerHTML = `
    <h2>#${player.rank} - ${player.name}</h2>
    <p><strong>Pays :</strong> ${player.country}</p>
    <p><strong>Points :</strong> ${player.points}</p>
  `;
  container.appendChild(card);
});

