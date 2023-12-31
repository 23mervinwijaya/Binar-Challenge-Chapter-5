function getPilihanCom(){
    const pilihan = Math.random();
    if(pilihan<=0.33) return "batu";
    if(pilihan>=0.34 && pilihan <=0.66) return "gunting";
    if(pilihan>=0.67) return "kertas";
}
class EndGame{
    constructor(pilihanPlayer,pilihanCom){
        this.pilihanPlayer = pilihanPlayer;
        this.pilihanCom = pilihanCom;
    }
    getHasil(){
        if(this.pilihanPlayer==this.pilihanCom) return "seri";
        if(this.pilihanPlayer=="batu") return (this.pilihanCom=="gunting")?"Player WON" : "Computer WON";
        if(this.pilihanPlayer=="gunting") return (this.pilihanCom=="kertas")?"player WON" : "Computer WON";
        if(this.pilihanPlayer=="kertas") return (this.pilihanCom=="batu")?"Player WON" : "Computer WON";
    }

}

// function randomCom(){
//     const listPilihan = ['batu','gunting','kertas'];
//     setInterval(() => {
//         for(i=0;i<listPilihan.length;i++){
//         const pil = document.querySelector(`.computer .${listPilihan[i]}`);
//         pil.style.backgroundColor = 'rgba(173, 173, 173, 0.541)';
//         pil.style.borderRadius = '25px';
//         }
//     }, 5000);
// }

const pilihan = document.querySelectorAll('.player img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        pil.style.backgroundColor = 'rgba(173, 173, 173, 0.541)';
        pil.style.borderRadius = '25px';
        
        const pilihanPlayer = pil.className;
        const pilihanCom = getPilihanCom();
        
        const imgComp = document.querySelectorAll('.computer img');
        imgComp.forEach(function(img){
            const className = img.className;

            if(className == pilihanCom){
                img.style.backgroundColor = 'rgba(173, 173, 173, 0.541)';
                img.style.borderRadius = '25px';
            }
        })
        const game = new EndGame(pilihanPlayer,pilihanCom);
        const hasil = game.getHasil()
        const result = document.querySelector('.result');
        result.innerHTML = hasil;

        console.log(`Pilihan Player : ${pilihanPlayer}`);
        console.log(`Pilihan Computer : ${pilihanCom}`);
        console.log(`Hasil Permainan : ${hasil}`)

        function reset(){
            setTimeout(()=>{
                alert("Ingin main lagi?")
                window.location.href = "/game"
            },500)
        }
        reset()
    })
})


