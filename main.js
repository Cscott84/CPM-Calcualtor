function calc() {
    let a = parseInt(document.getElementById("impressions").value);
    let b = parseInt(document.getElementById("cost").value);
    let c = parseInt(document.getElementById("cpm").value);
   
    //computations for cpm, cost and impressions

    let cpm = b / a * 1000;
    let impr = (b * 1000) / c;
    let cost = c * a / 1000;
    
    document.getElementById("impressions").value = impr || a;
    document.getElementById("cost").value = cost || b;
    document.getElementById("cpm").value = cpm || c;

   // When cpm hits $10 threshold - warning will be red background and warning text will appear    
   
    if (cpm > 10.00) {
        document.getElementById("div1").style.background = "red";
        document.getElementById("results").style.display = "block";
    }
    else if (cpm < 10.00) {
        document.getElementById("div1").style.background = "#19B335";
        document.getElementById("warning").style.display = "none";
    }

    
    
}

