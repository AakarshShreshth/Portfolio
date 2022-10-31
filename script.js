document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#theme");
    const home = document.querySelector("#home");
    const about = document.querySelector("#about");
    const skills = document.querySelector("#skills");
    button.onclick = () => {
        if (button.innerHTML === "🌑") {
            document.body.style.backgroundColor = "#16171d";
            button.innerHTML = "☀️";
            about.style.backgroundColor = "darkblue";
            about.querySelector("h1").style.color = "#ffffff";
            skills.style.backgroundColor = "green";
        } else {
            document.body.style.backgroundColor = "#ffffff";
            button.innerHTML = "🌑";
            about.style.backgroundColor = "blue";
            about.querySelector("h1").style.color = "#000000";
            skills.style.backgroundColor = "lightgreen";
        }
    };
    const coolTextContainer = document.querySelector("#home > h1");

    let i = 0;
    const coolText = [
        "A",
        "Aa",
        "Aak",
        "Aaka",
        "Aakar",
        "Aakars",
        "Aakarsh",
        "Aakarsh ",
        "Aakarsh S",
        "Aakarsh Sh",
        "Aakarsh Shr",
        "Aakarsh Shre",
        "Aakarsh Shres",
        "Aakarsh Shresh",
        "Aakarsh Shresht",
        "Aakarsh Shreshth",
        "Aakarsh Shreshth",
        "Aakarsh Shresht",
        "Aakarsh Shresh",
        "Aakarsh Shres",
        "Aakarsh Shre",
        "Aakarsh Shr",
        "Aakarsh Sh",
        "Aakarsh S",
        "Aakarsh ",
        "Aakarsh",
        "Aakars",
        "Aakar",
        "Aaka",
        "Aak",
        "Aa",
        "A",
        ""
    ];
    function coolTextHandler() {
        coolTextContainer.innerHTML = coolText[i];
        i = (i + 1) % 33;
    }

    setInterval(coolTextHandler, 250);

    (function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('clock').innerHTML =
        h + ":" + m;
        var t = setTimeout(startTime, 250);
    })();
    
    function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
    }
});
