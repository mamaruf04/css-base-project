//------------ Email validation---------------
      const input = document.querySelector("input"),
        emailIcon = document.querySelector(".email-icon");

      input.addEventListener("keyup", () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (input.value === "") {
          emailIcon.classList.replace("uil-check-circle", "uil-envelope");
          return (emailIcon.style.color = "#b4b4b4");
        } else if (input.value.match(pattern)) {
          emailIcon.classList.replace("uil-envelope", "uil-check-circle");
          return (emailIcon.style.color = "#4bb543");
        } else {
          emailIcon.classList.replace("uil-check-circle", "uil-envelope");
          emailIcon.style.color = "#de0611";
        }
      });

      // --------------------
      // password Validation
      // ---------------------
      let myInput = document.getElementById("psw");
      let letter = document.getElementById("letter");
      let capital = document.getElementById("capital");
      let number = document.getElementById("number");
      let length = document.getElementById("length");
      let passApprove = document.getElementById("passOk");
      let circleIcon = document.querySelector(".uil-check-circle");

      // When the user clicks on the password field, show the message box
      myInput.onfocus = function () {
        document.getElementById("message").style.display = "block";
        document.getElementById("passOk").style.display = "inline";
      };

      // When the user clicks outside of the password field, hide the message box
      myInput.onblur = function () {
        document.getElementById("message").style.display = "none";
        // document.getElementById("passOk").style.display = "inline";
      };

      // When the user starts to type something inside the password field
      myInput.onkeyup = function () {
        // Validate lowercase letters
        let lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
          letter.classList.remove("invalid");
          letter.classList.add("valid");
        } else {
          letter.classList.remove("valid");
          letter.classList.add("invalid");
        }

        // Validate capital letters
        let upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
          capital.classList.remove("invalid");
          capital.classList.add("valid");
        } else {
          capital.classList.remove("valid");
          capital.classList.add("invalid");
        }

        // Validate numbers
        let numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
          number.classList.remove("invalid");
          number.classList.add("valid");
        } else {
          number.classList.remove("valid");
          number.classList.add("invalid");
        }

        // Validate length
        if (myInput.value.length >= 8) {
          length.classList.remove("invalid");
          length.classList.add("valid");
        } else {
          length.classList.remove("valid");
          length.classList.add("invalid");
        }

        if (myInput.value === "") {
          return (circleIcon.style.color = "#b4b4b4");
        }

        if (
          myInput.value.match(lowerCaseLetters) &&
          myInput.value.match(upperCaseLetters) &&
          myInput.value.match(numbers) &&
          myInput.value.length >= 8
        ) {
          passApprove.classList.remove("invalid");
          passApprove.classList.add("valid");
          passApprove.style.color = "#4bb543";
        } else {
          passApprove.classList.add("invalid");
          passApprove.classList.remove("valid");
          passApprove.style.color = "#de0611";
        }
      };

    //   -----------
    //   responsive
    //   -------------------

    // const menu =document.querySelector(".gg-menu-right");
    
    const rightNav = document.querySelector(".right-nav");
    
    const mainMenu = document.querySelector(".menu");
    const menu = document.querySelector("svg")

    function myFunction() {
        rightNav.classList.toggle("back");
        mainMenu.classList.toggle("menu-location");
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded',
        menu.classList.contains('opened')); 
    }

   