var c=console.log, d=document, aBtn;

aBtn=d.querySelectorAll('#lineup .container> .row>a');

for(var i=0; i<aBtn.length; i++){

    if(d.querySelector('body').offsetWidth<=991){
        s=aBtn[0];
        s.style.color='#cc3333';
        s.style.fontFamily='hb';

        aBtn[i].onclick=function(){
            if(s!=this){
                s.style.color='white';
                s.style.fontFamily='hl';
                s=this;    
                s.style.color='#cc3333';
                s.style.fontFamily='hm';
            }
        }
        
    }else{
        aBtn[i].style.color='#cc3333';
        aBtn[i].style.fontFamily='hb';

        aBtn[i].onclick=function(){
            return false;
        }

    }
}
