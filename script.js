//////// Function

// Remove From the dom Function
function remover(querySelect) {
  if (domSelectAll(querySelect).length > 0) {
    document.querySelector(querySelect).remove();
  }
}

// Remove All Error Messages
function errorMsgRemover(select) {
  remover(`${select} > .text-danger`);
  remover(`${select} > .text-success`);
}

// Select All Function
function domSelectAll(select) {
  return document.querySelectorAll(select);
}

// Select Function
function domSelect(select) {
  return document.querySelector(select);
}

// ---------------------Validating Form--------------------------------- //

// Create Element Function
function newElm(text, className, parent) {
  const newSpan = document.createElement("span");
  const newText = document.createTextNode(text);
  newSpan.setAttribute("class", `${className}`);
  newSpan.appendChild(newText);
  const parentElement = document.querySelector(`${parent}`);
  parentElement.insertBefore(newSpan, null);
}
const button = domSelect(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  // Selecting Inputs Value
  const inputUsername = domSelect("#inputUsername3").value,
    inputEmail = domSelect("#inputEmail3").value,
    inputPassword = domSelect("#inputPassword3").value,
    inputConfirmPassword = domSelect("#inputPassword4").value,
    checkBox = domSelect("#gridCheck2").checked;

  // Check if Username is more than 3 and less than 15 Character
  if (inputUsername.length < 3) {
    if (domSelectAll(".username > .text-danger").length < 1) {
      newElm("Must be more than 3 character", "text-danger", ".username");
    }
  } else {
    errorMsgRemover(".username");
  }

  if (inputUsername.length > 15) {
    errorMsgRemover(".username");
    if (domSelectAll(".username > .text-danger").length < 1) {
      newElm("Must be less than 15 character", "text-danger", ".username");
    }
  }

  // Check if Email is valid
  if (!inputEmail.includes("@") || !inputEmail.endsWith(".com")) {
    if (domSelectAll(".email > .text-danger").length < 1)
      newElm("Please enter a valid email address!", "text-danger", ".email");
    // }
  } else {
    errorMsgRemover(".email");
  }

  // Check if passsword is more than 6 characther
  if (inputPassword.length <= 5) {
    if (domSelectAll(".password > .text-danger").length < 1) {
      newElm("Must be more than 6 character", "text-danger", ".password");
    }
  } else {
    errorMsgRemover(".password");
  }

  // Check confirm input min and max character
  if (inputConfirmPassword.length <= 5) {
    if (domSelectAll(".confirm > .text-danger").length < 1) {
      errorMsgRemover(".confirm");
      newElm("Must be more than 6 character", "text-danger", ".confirm");
    }
  }

  if (inputConfirmPassword.length > 30) {
    // errorMsgRemover(".confirm");
    newElm("Must be less than 30 character", "text-danger", ".confirm");
  }

  // Check if passwords are same
  if (inputConfirmPassword.length > 5) {
    if (inputPassword == inputConfirmPassword) {
      if (domSelectAll(".confirm > .text-success").length < 1) {
        errorMsgRemover(".confirm");
        newElm("Confirm Password Match", "text-success", ".confirm");
      }
    } else {
      errorMsgRemover(".confirm");
      if (domSelectAll(".confirm > .text-danger").length < 1) {
        newElm("Confirm password does not match", "text-danger", ".confirm");
      }
    }
  }
});
