/* 

Replace low res images with high res images.
*/

window.onload = function loadStuff() {
    console.log("Begin...");
    try {
        const target = document.getElementById("hero")
        target.src="static/images/IMG_20250202_173854_Hero_1024x681.jpg";
        target.style.filter = "none";

    } catch (e) {
        console.log("hero - Caught: " + toString(e))
    }
    
    try {
        const target = document.getElementById("knoll-one")
        target.src="static/images/IMG_20250202_161322_HDR_KNOLL_brand_Knitting_Wool_1024x771.jpg";
        target.style.filter = "none";

    } catch (e) {
        console.log("knoll - Caught: " + toString(e))
    }
    
    try {
        const target = document.getElementById("dyneema-one")
        target.src="static/images/IMG_20250202_131517_HDR_Dyneema_Merino_Wool_Cones_771x1024.jpg";
        target.style.filter = "none";

    } catch (e) {
        console.log("dymeena - Caught: " + toString(e))
    }
    
    try {
        const target = document.getElementById("hero-two")
        target.src="static/images/IMG_20250202_173908_Hero_1024x771.jpg";
        target.style.filter = "none";

    } catch (e) {
        console.log("hero two - Caught: " + toString(e))
    }
    
    try {
        const target = document.getElementById("wool-not-found")
        target.src="static/images/wool-not-found.png";
        target.style.filter = "none"; // "grayscale(100%)";

    } catch (e) {
        console.log("error - Caught: " + toString(e))
    }

    // NG document.getElementById("hero").innerHTML = "<img src='{{ url_for('static', filename='images/IMG_20250202_173854_Hero_1024x681.jpg') }}' />"
    console.log("End.");
  };