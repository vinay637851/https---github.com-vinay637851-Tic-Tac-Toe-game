let data=document.querySelectorAll('.box');
let arr=[];
let button = document.querySelector('button');
let count=0;
let name=document.getElementsByClassName('name')[0];
let draw=0;
let para=document.getElementById("para");
let pop_up=document.getElementsByClassName('pop_up')[0];
let flag=true;
function validate(element,value,step){
    if(element.innerHTML==''){
        if(step==1){
            element.style.color='#3498DB';
            draw++;
        }
        else{
            element.style.color='#D4AC0D';
        }
        element.innerHTML=value;
        arr[Array.from(element.parentNode.children).indexOf(element)]=value;
        setTimeout(async function(){
            let check=await checkWinner(arr);
            if(check==value){
                para.innerHTML=`${value} is winner`;
                pop_up.classList.add("pop_down")
                flag=false;
                let make=document.getElementById(`${value}`);
                let increment=make.innerHTML;
                make.innerHTML=`${parseInt(increment)+1}`;
                draw=0;
                refresh();
            }
            if(draw==5){
                para.innerHTML='Match draw';
                pop_up.classList.add("pop_down")
                flag=false;
                let make=document.getElementById("draw");
                let increment=make.innerHTML;
                make.innerHTML=`${parseInt(increment)+1}`;
                draw=0;
                refresh();
            }
        },100);
        count=step;
    }         
    else{
        name.innerHTML=`${value}&nbsp<p>trun</p>`;
        para.innerHTML='Please try again !';
        pop_up.classList.add("pop_down")
        flag=false;
    }
}
for(let ele of data) {
    ele.addEventListener('click',function(){
        if(flag==true){
            button.classList.remove("effect")
            if(count==0){
                name.innerHTML='O &nbsp <p>trun</p>';
                validate(ele,"X",1);
            }
            else{
                name.innerHTML='X &nbsp <p>trun</p>';
                validate(ele,"O",0);
            }
        }
        else{
            button.classList.add("effect")
            setTimeout(async function(){
                console.log("no")
                button.classList.remove("effect");
            },500);
        }
    })
}
function checkWinner(arr){
    if(arr[0]=='X'&&arr[1]=='X'&&arr[2]=='X')
        return "X";
    else if(arr[3]=='X'&&arr[4]=='X'&&arr[5]=='X')
        return "X";
    else if(arr[6]=='X'&&arr[7]=='X'&&arr[8]=='X')
        return "X";
    else if(arr[0]=='X'&&arr[3]=='X'&&arr[6]=='X')
        return "X";
    else if(arr[1]=='X'&&arr[4]=='X'&&arr[7]=='X')
        return "X";
    else if(arr[2]=='X'&&arr[5]=='X'&&arr[8]=='X')
        return "X";
    else if(arr[0]=='X'&&arr[4]=='X'&&arr[8]=='X')
        return "X";
    else if(arr[2]=='X'&&arr[4]=='X'&&arr[6]=='X')
        return "X";
    else if(arr[0]=='O'&&arr[1]=='O'&&arr[2]=='O')
        return "O";
    else if(arr[3]=='O'&&arr[4]=='O'&&arr[5]=='O')
        return "O";
    else if(arr[6]=='O'&&arr[7]=='O'&&arr[8]=='O')
        return "O";
    else if(arr[0]=='O'&&arr[3]=='O'&&arr[6]=='O')
        return "O";
    else if(arr[1]=='O'&&arr[4]=='O'&&arr[7]=='O')
        return "O";
    else if(arr[2]=='O'&&arr[5]=='O'&&arr[8]=='O')
        return "O";
    else if(arr[0]=='O'&&arr[4]=='O'&&arr[8]=='O')
        return "O";
    else if(arr[2]=='O'&&arr[4]=='O'&&arr[6]=='O')
        return "O";
    else
        return "";
}
function refresh(){
    for(let i=0;i<data.length;i++){
        data[i].innerHTML='';
        arr[i]='';
    }
    count=0;
    name.innerHTML='X &nbsp <p>trun</p>';
}
function close_pop_up(){
    pop_up.classList.remove("pop_down")
    flag=true;
}
