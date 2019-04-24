function calc(){
    let a = parseInt(document.getElementById("impressions").value);
    let b = parseInt(document.getElementById("cost").value);
    let c = parseInt(document.getElementById("cpm").value);
    
    //computations for cpm, cost and impressions
    
    document.getElementById("cpm").value = b/a * 1000;
    document.getElementById("impressions").value = (b *1000) / c;
    document.getElementById("cost"). value= c *a /1000;
    
    if( c > 10.00){
        document.getElementById("div1").style.background = "red";
    }
    
}
