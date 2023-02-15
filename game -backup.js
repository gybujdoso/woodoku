let n=3; // oszlopok és sorok száma
document.getElementById('palya').style.width=(n*200)+'px';

let tomb = [];
for (let i = 0; i < n; i++) {
    let sor = document.createElement('div');
    sor.className='sor';
    for (let j = 0; j < n; j++) {
        let cella = document.createElement('div');
        cella.className="cella";

        do{
            var szam = Math.round(Math.random()*(n*n-1));

            for (var num of tomb) {
                if(num==szam) break;
            }
            }while(num==szam);
            tomb.push(szam);
            if (szam == 0) cella.classList.add('ures'); else cella.innerHTML=szam;
            
            cella.addEventListener("click", csuszik);
            sor.appendChild(cella);
        
        sor.appendChild(cella);
    }
    document.getElementById('palya').appendChild(sor);
    
}

function csuszik(){
    let sorszam=0;
    let elozo=this.previousElementSibling;
    while(elozo)
    {
        sorszam++;
        elozo=elozo.previousElementSibling;
    }
    console.log("Sorszám: ", sorszam);

    if((this.previousElementSibling)&&(this.previousElementSibling.classList[1]=="ures")){
        console.log("Csúszás balra!");
        this.classList.add('bal');

        setTimeout(function(t){
            document.getElementsByClassName('ures')[0].innerHTML=t.innerHTML;
            document.getElementsByClassName('ures')[0].classList.remove('ures');
            t.classList.add('ures');
            t.innerHTML="";
            t.classList.remove('bal');

        },200, this)
    }; // (this.previousElementSibling) azt jelenti, hogy elem egyáltalán létezik, ha van valamiben valami ==true, ha nincs == null/undefined == false a JS szerint;

    if((this.parentNode.previousElementSibling)&&
    (this.parentNode.previousElementSibling.children[sorszam].classList[1]=="ures")){
        this.classList.add('fel');
    };
}