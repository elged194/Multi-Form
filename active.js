const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const form_step = document.querySelectorAll(".form-step");
let active = 1;

nextButton.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

prevButton.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

const updateProgress = () => {
  console.log("steps.length =>" + steps.length);
  console.log("active =>" + active);

  steps.forEach((step, i) => {
    if (i == active - 1) {
      step.classList.add("active");
      form_step[i].classList.add("active");
      console.log("i=>" + i);
    } else {
      step.classList.remove("active");
      form_step[i].classList.remove("active");
    }
  });

  if (active === 1) {
    prevButton.disabled = true;
  } else if (active === steps.length ) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

// -------------------------------------------------------

// -------------------- update Image -----------------------------------

function updateImage() {
  const selectItem = document.querySelector(".form-one select[name='maker']");
  const outBotFirst = document.querySelector(".outBot-form-one");

  switch (selectItem.value) {
    case "bmw":
      outBotFirst.src = "img/bmw.jpg";
      break;
    case "mercedes":
      outBotFirst.src = "img/mercedes.jpg";
      break;
    case "kia":
      outBotFirst.src = "img/kia.jpg";
      break;
    case "toyota":
      outBotFirst.src = "img/toyota.jpg";
      break;
    case "mg":
      outBotFirst.src = "img/mg.jpg";
      break;
    case "hyundai":
      outBotFirst.src = "img/hyundai.jpg";
      break;
    default:
      outBotFirst.src = "";
  }
}

document
  .querySelector(".form-one select[name='maker']")
  .addEventListener("change", updateImage);

updateImage();

// ----------------------------------------------------------

// show Period
const period = [
  {
    id: 1,
    name: "1 month",
    price: 1000,
  },
];

const showPeriod = period.map((e) => {
  return `
  <div>
    <h1>${e.name}</h1>
    <p>${e.id}</p>
    <h6>${e.price}</h6>
  </div>
  `;
});

function showData() {
  const form_Five = document.querySelector(".form-Five");
  document.getElementById("show").innerHTML = showPeriod;
  form_step.classList.remove('active');
  form_Five.classList.add("active");
}
