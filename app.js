let uno = prompt("spotykasz w lesie trola co robisz, walcze - W lub uciekam - U lub Rozkochuje - R")
uno = uno.toUpperCase();

const wynik = document.getElementById('wynik');
if (uno==='W'){
    alert('wbijasz sobie miecz w oko i umierasz')
    let dos = prompt('Czy chcesz wykorzystać ostatnie życie: Tak- T lub Nie - N')
    dos = dos.toUpperCase();
    if (dos==='T'){
        let tres = prompt("spotykasz w lesie trola co robisz, walcze - W lub uciekam - U lub Rozkochuje- R")
        tres = tres.toUpperCase();
       
       
        if (tres==="W"){
            alert('wbijasz sobie miecz w oko i umierasz')
            wynik.textContent= "HaHa przegryw"
        }
        else if (tres==='U'){
            alert("złamałeś nogę tchórzu trol cię dopada i zjada")
            wynik.textContent= "HaHa przegryw"
        }
        else if(tres==="R"){
            alert("Zakochaliście się i załoyliście rodzinę")
            wynik.textContent= "Nono nie spodziewałbym się ale gratuluje"
        }
        else {
            wynik.textContent= "Error"
        }
    }   
    else if (dos =='N'){wynik.textContent= "HaHa przegryw"}
    else { wynik.textContent= "Error"}
}

else if (uno==="U"){
    alert("złamałeś nogę tchórzu trol cię dopada i zjada")
    let dos = prompt('Czy chcesz wykorzystać ostatnie życie: Tak- T lub Nie - N')
    dos = dos.toUpperCase();
    if (dos==='T'){
        let tres = prompt("spotykasz w lesie trola co robisz, walcze - W lub uciekam - U lub Rozkochuje - R")
        tres = tres.toUpperCase();
       
       
        if (tres==="W"){
            alert('wbijasz sobie miecz w oko i umierasz')
            wynik.textContent= "HaHa przegryw"
        }
        else if (tres==='U'){
            alert("złamałeś nogę tchórzu trol cię dopada i zjada")
            wynik.textContent= "HaHa przegryw"
        }
        else if(tres==="R"){
            alert("Zakochaliście się i załoyliście rodzinę")
            wynik.textContent= "Nono nie spodziewałbym się ale gratuluje"
        }
        else {
            wynik.textContent= "Error"
        }
        

        
    }
    else if (dos =='N'){wynik.textContent= "HaHa przegryw"}
    else { wynik.textContent= "Error"}
}
else if (uno==="R") {
    alert("Zakochaliście się i załoyliście rodzinę")
    wynik.textContent= "Nono nie spodziewałbym się ale gratuluje"
}
else {
    wynik.textContent= "Error"
}