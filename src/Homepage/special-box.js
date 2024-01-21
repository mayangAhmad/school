const specialDiv = document.querySelector('.special-content-div');

specialDiv.addEventListener("click", (e) => {
    const activeBox = e.target.closest(".special-box");
    if (!activeBox) return;
    toggleBox(activeBox);
});

function toggleBox(boxToShow){
    const activeButton = boxToShow.querySelector("button");
    const activeBox = boxToShow.querySelector(".special-content");
    const activeBoxIsShowed = activeButton.getAttribute("aria-expanded");

    if(activeBoxIsShowed === "true"){
        boxToShow.querySelector("button").setAttribute("aria-expanded", false);
        boxToShow.querySelector(".special-content").setAttribute("aria-hidden", true);

    } else {
        boxToShow.querySelector("button").setAttribute("aria-expanded" , true);
        boxToShow.querySelector(".special-content").setAttribute("aria-hidden", false);
        

    }
}