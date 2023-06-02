document.addEventListener("DOMContentLoaded", function() {
  let cards = document.querySelectorAll(".speaker__card");
  cards.forEach(function(card) {
    card.addEventListener("click", function(event) {
      if (card.classList.contains("card-active")) {
        let elements = card.querySelectorAll(".speaker__active");
        elements.forEach(function(element) {
          element.classList.remove("speaker__active");
          element.classList.add("speaker__off");
        });

        let onElements = card.querySelectorAll(".speaker__disable");
        onElements.forEach(function(element) {
          element.classList.remove("speaker__disable");
          element.classList.add("speaker__on");
        });

        let column = card.querySelectorAll(".speaker__row");
        column.forEach(function(element) {
          element.classList.remove("speaker__row");
          element.classList.add("speaker__column");
        });

        card.classList.remove("card-active");
      } else {
        let elements = card.querySelectorAll(".speaker__off");
        elements.forEach(function(element) {
          element.classList.remove("speaker__off");
          element.classList.add("speaker__active");
        });

        let onElements = card.querySelectorAll(".speaker__on");
        onElements.forEach(function(element) {
          element.classList.remove("speaker__on");
          element.classList.add("speaker__disable");
        });

        let column = card.querySelectorAll(".speaker__column");
        column.forEach(function(element) {
          element.classList.remove("speaker__column");
          element.classList.add("speaker__row");
        });

        card.classList.add("card-active");
      }
    });
  });
});