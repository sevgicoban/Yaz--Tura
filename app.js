//Tura ve yazı sayılarını oluştur ve başlangıçta sıfırla
let tura = 0;
let yazı = 0; 
 
//Htlm de bulunan coin,flip ve reset butonlarını seç
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//Flip butonuna tıklanıldığında
flipBtn.addEventListener("click", () =>{
    //Rast gele sıfır veya bir sayısını secer
    let i = Math.floor(Math.random()*2);

    //Coin animasyonunu geçici olarak kapat
    coin.style.animation = "none";
    if (i) {
     //Eger i 1 ise (Yazı), 100 milisaniye sonra coin'e flip-tura animasyonunu vurgula
     setTimeout(() => {
        coin.style.animation = "spin-tura 3s forwards";
     },100);
     tura++;
    }else {
         //Eger i 1 ise (Tura), 100 milisaniye sonra coin'e flip-yazı animasyonunu vurgula
         setTimeout(() => {
            coin.style.animation = "spin-yazı 3s forwards";
         },100);
         yazı++;
    }

    //İstatistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
   disableButton();
    
});

//İstatistikleri güncelleme fonksiyonu
function updateStats(){
    document.querySelector("#tura-coin").textContent = `Tura: ${tura}`;
    document.querySelector("#yazı-coin").textContent = `Yazı: ${yazı}`;
}
//Butonu geçici olarak devre dışı birakma fonksiyonu
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    },3000);
}
 //Reset butonu tıklama
 resetBtn.addEventListener("click", () => {
    //Coin animasyonunu kapat,tura ve yzı sayılarını sıfırla,istatistikleri güncelle
    coin.style.animation = "none";
    tura = 0;
    yazı = 0;
    updateStats();
 });