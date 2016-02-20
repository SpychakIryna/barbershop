      var link = document.querySelector(".login");

      var popup = document.querySelector(".modal-block");
      var close = popup.querySelector(".modal-block-close");

      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=login]");
      var password = popup.querySelector("[name=password]");

      var storage = localStorage.getItem("login");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-block-show");

        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-block-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-block-show")) {
            popup.classList.remove("modal-block-show");
            popup.classList.remove("modal-error");
          }
        }
      });

      var mapOpen = document.querySelector(".js-open-map");
      var mapPopup = document.querySelector(".modal-block-map");
      var mapClose = mapPopup.querySelector(".modal-block-close");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-block-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-block-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-block-show")) {
            mapPopup.classList.remove("modal-block-show");
          }
        }
      });
