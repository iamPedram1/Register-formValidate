const button = document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  // Selecting Inputs Value
  const inputEmail = document.querySelector("#inputEmail3").value;
  const inputPassword = document.querySelector("#inputPassword3").value;
  const inputConfirmPassword = document.querySelector("#inputPassword4").value;

  // Check if Email is valid
  if (!inputEmail.includes("@") || !inputEmail.endsWith(".com")) {
    if (document.querySelectorAll(".email > .text-danger").length < 1)
      newElm("Please enter a valid email address!", "text-danger", ".email");
    // }
  } else {
    if (document.querySelectorAll(".email > .text-danger").length > 0) {
      document.querySelector(".email > .text-danger").remove();
    }
  }

  // Check if passsword is more than 6 characther
  if (inputPassword.length < 6) {
    if (document.querySelectorAll(".password > .text-danger").length < 1) {
      newElm(
        "Password must be More than 6 Character",
        "text-danger",
        ".password"
      );
    }
  } else {
    if (document.querySelectorAll(".password > .text-danger").length > 0) {
      document.querySelector(".password > .text-danger").remove();
    }
  }

  // Check if passwords are same
  if (inputPassword == inputConfirmPassword) {
    const spanFail = document.querySelectorAll(".confirm > .text-danger");
    const spanSuccess = document.querySelectorAll(".confirm > .text-success");
    if (spanSuccess.length < 1) {
      if (spanFail.length > 0) {
        spanFail[0].remove();
      }
      newElm("Confirm Password Match", "text-success", ".confirm");
    }
  } else {
    const spanSucess = document.querySelectorAll(".confirm > .text-success");
    const spanFail = document.querySelectorAll(".confirm > .text-danger");
    if (spanFail.length < 1) {
      if (spanSucess.length > 0) {
        spanSucess[0].remove();
      }
      newElm("Confirm password dosen't match", "text-danger", ".confirm");
    }
  }
});

function newElm(text, className, parent) {
  const newSpan = document.createElement("span");
  const newText = document.createTextNode(text);
  newSpan.setAttribute("class", `${className}`);
  newSpan.appendChild(newText);
  const parentElement = document.querySelector(`${parent}`);
  parentElement.insertBefore(newSpan, null);
}
