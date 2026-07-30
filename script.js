// Buton kısmı
const buton = document.getElementById("renkButonu");
const mesajYeri = document.getElementById("mesajYeri");

buton.addEventListener("click", function(){
    mesajYeri.textContent = "wow naptin";
    if (document.body.style.backgroundColor === "rgb(208, 240, 255)") {
        document.body.style.backgroundColor = "#ffe0d0";
} else {
    document.body.style.backgroundColor = "#d0f0ff";
}
});

//Hesap makinesi kısmı
const toplaButonu = document.getElementById("topla");
const sonucYeri = document.getElementById("sonuc");

toplaButonu.addEventListener("click", function(){
    const s1= Number(document.getElementById("sayi1").value);
    const s2= Number(document.getElementById("sayi2").value);
    const toplam = s1+s2;
    sonucYeri.textContent = "Sonuç: " + toplam;
});
