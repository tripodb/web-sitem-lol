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


const cikarButonu = document.getElementById("cikar");
cikarButonu.addEventListener("click", function(){
    const s1 = Number(document.getElementById("sayi1").value);
    const s2 = Number(document.getElementById("sayi2").value);
    sonucYeri.textContent = "Sonuç" + (s1 - s2);

});


const carpButonu = document.getElementById("carp");
carpButonu.addEventListener("click", function(){
    const s1 = Number(document.getElementById("sayi1").value);
    const s2 = Number(document.getElementById("sayi2").value);
    sonucYeri.textContent = "Sonuç" + (s1 * s2);
}); 


const bolButonu = document.getElementById("bol");
bolButonu.addEventListener("click", function(){
    const s1= Number(document.getElementById("sayi1").value);
    const s2= Number(document.getElementById("sayi2").value);
    if (s2 === 0) {
        sonucYeri.textContent = "0'a bölünemez.";
    } else {
        sonucYeri.textContent = "Sonuç" + (s1 / s2); 
    }
});

//Sayı tahmin oyunu
const gizliSayi = Math.floor(Math.random() *1000) + 1;
const tahminButonu = document.getElementById("tahminEt");
const oyunSonucYeri = document.getElementById("oyunSonuc");

tahminButonu.addEventListener("click", function(){
    const tahmin = Number(document.getElementById("tahmin").value);
    if(tahmin === gizliSayi){
        oyunSonucYeri.textContent = "vay be nasıl bildin :O Sayı " + gizliSayi + "idi.";
    } else if (tahmin > gizliSayi){
        oyunSonucYeri.textContent = "Daha küçük bir sayı söyle";
    } else {
        oyunSonucYeri.textContent = "Daha büyük bir sayı söyle";
    }
});