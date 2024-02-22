const promienDuzyInput = document.getElementById("promienDuzy");
const promienMalyInput = document.getElementById("promienMaly");
const polePowierzchniEl = document.getElementById("polePowierzchni");
const objętośćEl = document.getElementById("objętość");

function oblicz() {
  const promienDuzy = parseFloat(promienDuzyInput.value);
  const promienMaly = parseFloat(promienMalyInput.value);

  if (isNaN(promienDuzy)  || isNaN(promienMaly) || promienDuzy<=promienMaly) {
    alert("Wprowadź poprawne wartości promieni!");
    return;
  }

  if (promienDuzy <= 0 || promienMaly <= 0) {
    alert("Wartości promieni muszą być dodatnie!");
    return;
  }

  const polePowierzchni = 4 * Math.pow(Math.PI, 2) * promienDuzy * promienMaly;
  const objętość = 2 * Math.pow(Math.PI, 2) * promienDuzy * Math.pow(promienMaly, 2);

  polePowierzchniEl.textContent = polePowierzchni.toFixed(2);
  objętośćEl.textContent = objętość.toFixed(2);
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  oblicz();
});

oblicz();