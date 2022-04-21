const button = document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  const password = document.querySelector("#inputPassword3").value;
  const confirmPassword = document.querySelector("#inputPassword4").value;
  // Check if passsword is more than 6 characther
  if (password.length < 6) {
    //newElm("Hello", "text-danger", ".confirm");
  }
  // Check if passwords are same
  if (password == confirmPassword) {
    const spanFail = document.querySelectorAll(".text-danger");
    const spanSuccess = document.querySelectorAll(".text-success");
    if (spanSuccess.length < 1) {
      if (spanFail.length > 0) {
        spanFail[0].remove();
      }
      newElm("Confirm Password Match", "text-success", ".confirm");
    }
  } else {
    const spanSucess = document.querySelectorAll(".text-success");
    const spanFail = document.querySelectorAll(".text-danger");
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
