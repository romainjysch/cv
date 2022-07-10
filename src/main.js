import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./main.css";
import "bootswatch/dist/simplex/bootstrap.min.css";
import Chart from "chart.js/auto";

function transformProgressToChart() {
  //Trouver tous les progress
  const progressAll = [...document.querySelectorAll(".progress")];
  for (const progress of progressAll) {
    // Récupérer la valeur :
    const ariaValue = progress.children[0].getAttribute("aria-valuenow");
    // Ajouter canvas pour toutes les progress :
    const canvas = document.createElement("canvas");
    canvas.classList.add("canvasPerso");
    progress.replaceWith(canvas);
    drawChart(canvas, ariaValue);
  }
}

function drawChart(canvas, arialValue) {
  // Configuration :
  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [arialValue, 100 - arialValue],
        backgroundColor: ["#d9230f", "transparent"],
        borderWidth: 0,
      },
    ],
  };

  let config = {
    type: "doughnut",
    data: data,
    options: { events: [], cutout: 60 },
  };
  new Chart(canvas, config);
}

document.addEventListener("DOMContentLoaded", () => {
  drawChart();
  transformProgressToChart();
});
