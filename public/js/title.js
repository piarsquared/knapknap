const originalTitle = document.title;
const alternateTitle = "knapknap";

let showingAlternate = false;

setInterval(() => {
    document.title = showingAlternate ? originalTitle : alternateTitle;
    showingAlternate = !showingAlternate;
}, 3000);