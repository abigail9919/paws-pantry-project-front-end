var amountOfApps = 1;

document.getElementById("test").addEventListener("click", function () {
    amountOfApps = document.getElementById("testNum").value;
    console.log(amountOfApps);
    if(amountOfApps == 0){
        document.getElementById("noMoreApps").style.display = "block";
    }else{
        document.getElementById("noMoreApps").style.display = "none";
    }
});