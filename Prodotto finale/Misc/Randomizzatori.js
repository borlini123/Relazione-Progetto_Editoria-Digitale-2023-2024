var imagesArray = [
 "pexels-alexy-almond-3758133.jpg", 
 "pexels-alleksana-4186909.jpg", 
 "pexels-andrew-7041947.jpg", 
 "pexels-cadomaestro-3677150.jpg", 
 "pexels-daniela-constantini-5591734.jpg", 
 "pexels-micheile-6981998.jpg", 
 "pexels-micheile-9154519.jpg", 
 "pexels-micheile-9206602.jpg", 
 "pexels-nietjuh-1693626.jpg", 
 "pexels-olenkabohovyk-4121872.jpg", 
 "pexels-rachel-claire-4819319.jpg", 
 "pexels-rachel-claire-4993283.jpg", 
 "pexels-rebecca-1637573-5566040.jpg", 
 "pexels-vanessa-loring-5965962.jpg", 
 "pexels-viktoria-alipatova-1083711-2130134.jpg", 
 "pexels-viviana-ceballos-1480481-3490665.jpg"
];

function displayImage(){
    var num = Math.floor(Math.random() * 16); 
    document.getElementById("canvas").src = '../Images/'+imagesArray[num];
} 

var grandiCategorie = [
 "Strumenti musicali", 
 "Gusti di gelato", 
 "Sport", 
 "Generi cinematografici", 
 "Generi musicali", 
 "Formati di pasta", 
 "Nazioni", 
 "Frutti", 
 "Animali che volano", 
 "Animali che nuotano", 
 "Verdure", 
 "Fiori", 
 "Bevande", 
 "Dolci", 
 "Parole con le doppie", 
 "Motivi per festeggiare"
];
function categorieRandom(){
    var num = Math.floor(Math.random() * 16); 
    document.getElementById("category").textContent = grandiCategorie[num];
} 
var top3 = [
 "Canzoni", 
 "Film", 
 "Serie TV", 
 "Libri", 
 "Gusti di gelato", 
 "Sport", 
 "Generi cinematografici", 
 "Generi musicali",  
 "Frutti",
 "Piatti salati", 
 "Piatti Dolci", 
 "Bevande", 
 "Cantanti/Gruppi musicali", 
 "Attori", 
 "Hobby",
 "Colori"
];
function top3Random(){
    var num = Math.floor(Math.random() * 16); 
    document.getElementById("category").textContent = top3[num];
} 