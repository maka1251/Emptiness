const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", () => {
    // Додаємо префікс, якщо поле пусте або не містить "+380"
    if (phoneInput.value === "" || phoneInput.value === "+") {
        phoneInput.value = "+380";
    } else if (!phoneInput.value.startsWith("+380")) {
        phoneInput.value = "+380" + phoneInput.value.replace(/^\+380?/, "");
    }
});

// Запобігаємо видаленню префікса при видаленні всіх символів
phoneInput.addEventListener("keydown", (e) => {
    if (phoneInput.value === "+380" && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault(); // Блокуємо видалення префіксу
    }
});



$(document).ready(function() {
    $('input[type="checkbox"], input[type="radio"], select').styler();
});