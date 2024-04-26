// ------------------- / validateStep click / ------------------------------
let currentStep = 1;

function validateStep(step) {
  if (step === 1) { // if step is 1
    const input1 = document.querySelectorAll(".form-one [required]");
    let isValid = true;

    input1.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError();
      return;
    }

    document.querySelector(".step2").classList.add("active");

  } else if (step === 2) { // if step is 2

    const input2 = document.querySelectorAll(".form-two [required]");
    let isValid = true;

    input2.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError();
      return;
    }

    document.querySelector(".step3").classList.add("active"); // add active class to step 3

  } else if (step === 3) { // if step is 3

    const input3 = document.querySelectorAll(".form-three [required]");
    const pass = document.getElementById("password");
    const conf_pass = document.getElementById("Confirm-Password");

    let isValid = true;

    input3.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError();
      return;
    } else if (pass.value != conf_pass.value) {
      errorPass();
      return;
    }

    document.querySelector(".step4").classList.add("active"); //add active class to step 4

  } else if (step === 4) {// if step is 4

    const input4 = document.querySelectorAll(".form-four [required]");
    let isValid = true;

    input4.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError();
      return;
    }

    document.querySelector(".step5").classList.add("active"); // add active class to step 5

  } else if (step === 5) { // if step is 5
    
    const input5 = document.querySelectorAll(".form-Five [required]");
    let isValid = true;

    input5.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError();
      return;
    }

    document.querySelector(".progres-steps").style.display = "none"; // hide progres bar
  }

  showStep(step + 1);
}
function showStep(step) {
  document.getElementById("step" + currentStep).style.display = "none"; // hide current step
  document.getElementById("step" + step).style.display = "block"; // show next step
  currentStep = step; // update current step
}

function prevStep() {
  showStep(currentStep - 1); // show previous step
}

// ------------------- / cancel order / ------------------------------
const del_order = document.querySelector(".cancel-order");
del_order.onclick = () => {
  setTimeout(() => {
    window.location.reload(); // reload page
  }, 500);
};
// ----------------------- / update Type model /----------------------
function updateType_model() {
  const type_model = document.getElementById("typeModel");
  const number_item = document.getElementById("numberItem");

  switch (type_model.value) {
    case "Singles":
      number_item.min = 1;
      number_item.value = 1;
      break;
    case "Companies":
      number_item.min = 10;
      number_item.value = 10;
      break;
  }
}

document
  .getElementById("typeModel")
  .addEventListener("change", updateType_model);

// ------------------- / Show Error Snackbar / ------------------------------
function ShowError() {
  var snack = document.getElementById("ShowError");
  snack.className = "show"; // show the error
  setTimeout(() => {
    snack.className = snack.className.replace("show", ""); // remove the show class to allow the user to see the error
  }, 3000);
}

function errorPass() {
  var snack = document.getElementById("errorPass");
  snack.className = "show"; // show the error
  setTimeout(() => {
    snack.className = snack.className.replace("show", ""); // remove the show class to allow the user to see the error
  }, 3000);
}

// -------------------- update Image -----------------------------------

function updateImage() {
  const selectItem = document.getElementById("carMaker");
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

document.getElementById("carMaker").addEventListener("change", updateImage);

updateImage();

// -------------------- / / -----------------------------------
