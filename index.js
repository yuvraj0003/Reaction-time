const start = Date.now();

setTimeout(function(){
    document.body.classList.add("pressed")
    document.addEventListener("mousedown" , function(){
        document.body.classList.remove("pressed")
        document.querySelector("h1").innerText = (Date.now() - start) - 2000 + " ms";
        document.querySelector("h2").innerText = "Click Again to restart";
        document.addEventListener("mousedown" , function(){
            window.location.reload(false);
        })
    })
} , 2000);