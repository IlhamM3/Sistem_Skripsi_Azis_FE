document.addEventListener("DOMContentLoaded", () => {
    const ButtonCobaAI = document.getElementById("ButtonCobaAI");
    if (ButtonCobaAI) {
      ButtonCobaAI.addEventListener("click", (event) => {
        event.preventDefault();
  
        const CobaAIElement = document.getElementById("CobaAI");
        if (CobaAIElement) {
          CobaAIElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
  
          history.replaceState(null, null, " ");
        } else {
          console.error("Elemen dengan ID 'CobaAI' tidak ditemukan.");
        }
      });
    } else {
      console.error("Tombol dengan ID 'ButtonCobaAI' tidak ditemukan.");
    }
    const ButtonOpenContoh = document.querySelectorAll(".ButtonOpenContoh");
    const TableContohInput = document.querySelectorAll(".TableContohInput");
    const ButtonCloseInfo = document.querySelectorAll(".ButtonCloseInfo");

    ButtonOpenContoh.forEach((element, index) => {
        element.addEventListener('click', function() {
            ButtonOpenContoh.forEach(btn => btn.classList.remove('activeButtonLabel'));
            element.classList.add('activeButtonLabel');
            TableContohInput.forEach(table => table.classList.add('hidden')); 
            TableContohInput[index].classList.toggle('hidden');
        });
    });
    
    ButtonCloseInfo.forEach((element, index) => {
        element.addEventListener('click', function() {
            ButtonOpenContoh.forEach(btn => btn.classList.remove('activeButtonLabel'));
            TableContohInput[index].classList.add('hidden');
        });
    });

});