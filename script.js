//Po załadowania się okna przeglądarki odpalam funkcję:
window.onload=function(){
    //Przypisuje id mojego canvasa na canv
    canv=document.getElementById("gc");
    //okreslasz obiekt na grę 2d (  console.log(ctx)  )
    ctx=canv.getContext("2d");
    //Przeglądarka nasłuchuje kliknięcia guzika i wtedy odpala funkcję keyPush()
    document.addEventListener("keydown", keyPush);
    //Co 0,0(6)sekundy jest odpalana funkcja game()
    setInterval(game, 1000/15);
}
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail=5;
function game(){
    //???px = px + xv;
    px+=xv;
    //???py = py + yv;
    py+=yv;
    if(px<0){
        px= tc-1;
    }
    if(px>tc-1){
        px= 0;
    }
    if(py<0){
        py= tc-1;
    }
    if(py>tc-1){
        py= 0;
    }
    //zmiana koloru na czarny
    ctx.fillStyle="black";
    //stworzenie kwadratu na rozmiary okna canvas
    ctx.fillRect(0, 0, canv.width, canv.height);
    //zmiana koloru na zielony
    ctx.fillStyle="lime";
    //pętla która wykonujue się zależnie od długośći tablicy trail
    for(var i=0; i<trail.length; i++){
        //rysuje kwadrat 
        //tworzy w obiekcie pole x i y dla kazdego z obiegów
        //???ustawia kwadrat w osi X i Y 
        //tworzy kwadrat o szerokosci gs-2 i wysokosci gs-2 czyli po 18px;
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);

        // Jesli wartosc dla kazdego z pola x jest równa 10 i wartosc kazdego pola y jest równa też 10, zmienna tail = 5;
        if(trail[i].x==px && trail[i].y==py){
            tail = 5;
        }
    }
    //??? Wrzuca do tablicy wartość x=px i y=py
    trail.push({x:px,y:py});
    //??? pętla wykonuje sie wtedy gdy długość tablicy jest większa od wartosci zmiennej tail
    while(trail.length>tail){
        //??? usuwa pierwszy element tablicy
        trail.shift();
    }

    //sprawdza czy ax i ay (liczby losowe) znajdują sie na tej samej pozycji co wartosci zmiennych px ipy
    if(ax==px && ay==py){
        //odaje 1 do wartosci zmiennej tail
        tail++;
        // losuje liczbe z przedizału od 1 do 19 i ustawia wartosc ax;
        ax=Math.floor(Math.random()*tc);
        // losuje liczbe z przedizału od 1 do 19 i ustawia wartosc ay;
        ay=Math.floor(Math.random()*tc);
    }
    //ustawia kolor kwadratu ta czerwony
    ctx.fillStyle="red";
    //rysuje kwadrat 
    //o współrzędnych osi X, ax(liczba losowa) * gs(20)
    //o współrzędnych osi Y, ay(liczba losowa) * gs(20)
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

}

//addEventListener przekazuje parametr evt do funkcji keyPush
function keyPush(evt){
//switch sprawdza keyCode parametru
    switch(evt.keyCode){
        //sprawdza ruch w lewo
        case 37: 
            xv=-1;yv=0;
            break;
        //sprawdza ruch w góre
        case 38:
            xv=0;yv=-1;
            break;
        //sprawdza ruch w prawo
        case 39: 
            xv=1;yv=0;
            break;
        //sprawdza ruch w dół
        case 40: 
            xv=0;yv=1;
            break;
    }
}