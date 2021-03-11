//DOM ELEMENTS
const time=document.getElementById('time'),
greeting=document.getElementById('greeting'),
 name=document.getElementById('name'),
focus=document.getElementById('focus')

//show time
function showTime(){
    let now=new Date(),
    hour=now.getHours(),
    min=now.getMinutes(),
    sec=now.getSeconds()

    //set Am or PM
    const amPm= hour>=12 ? 'PM' : 'AM'

    //12hr format

    hour=hour%12 || 12

    //Output Time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`

    setTimeout(showTime,1000)   
}

//add zero to before min and sec

function addZero(n){
    return (parseInt(n,10)<10 ? '0': '')+n;
}

//show greeting

function setGreeting(){
    let today=new Date()
    hour =today.getHours()

    if(hour<12){
        document.body.style.backgroundImage="url('../img/morning2.jpg')"
        greeting.textContent='Good Morning'
        document.body.style.color='White'
    }

    else if(hour<18){
        document.body.style.backgroundImage="url('../img/afternoon2.jpg')"
        greeting.textContent='Good Afternoon'
        document.body.style.color='white'

    }
    else{
        document.body.style.backgroundImage="url('../img/nightpic.jpg')"
        greeting.textContent="Good Evening"
        document.body.style.color='white'
    }
}




showTime()
setGreeting()






