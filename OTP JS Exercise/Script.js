const codes = document.querySelectorAll('.code');
codes[0].focus();
console.log(codes);

codes.forEach((code,idx)=>{
    code.addEventListener("keydown",(e)=>{
        const keyPressed = e.key;

        if(keyPressed>=0 && keyPressed<=9){
            codes[idx].value = ''
        
            if(idx<codes.length-1){
                setTimeout(()=>codes[idx+1].focus(),10);
            }
        }
        else if(keyPressed==="Backspace"){
            if(idx>0){
                setTimeout(function(){
                    codes[idx-1].value='';
                    codes[idx-1].focus();
                },10)
            }
        }
    })
})