let btn=document.querySelector("#btn")  //accessing button
let content=document.querySelector("#content")  

let voice=document.querySelector("#voice")  

function speak(text){
let text_speak=new SpeechSynthesisUtterance(text)
text_speak.pitch=1
text_speak.rate=1
text_speak.volume=1
text_speak.lang="en-GB"
window.speechSynthesis.speak(text_speak)
}
function  wishme(){
    let day=new Date()
    let hours=day.getHours()
if(hours>=0 && hours<12){
    speak("good morning mam")
}
else if(hours>=12 && hours <16){
    speak("good afternoon mam")
}
else{
    speak("good evening mam")
}
}
window.addEventListener('load',()=>{
    wishme()
})
let speechrecognition=window.SpeechRecognition ||window.webkitSpeechRecognition
let recognition=new speechrecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
   let transcript = event.results[currentIndex][0].transcript
   content.innerText=transcript
    takeCommand(transcript.toLowerCase())
    
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")||message.includes("hi") ){
        speak("hello maam,how can i help you")
    }
    else if( message.includes("who are you") ){
        speak("i am virtual assistant,created by nandini arora")
    }
    else if( message.includes("how are you") ){
        speak("i am completely alright")
    }

    else if( message.includes("open youtube") ){
        speak("opening youtube")
        window.open( "https://www.youtube.com/ ","_blank")
    }
    else if( message.includes("open instagram") ){
        speak("opening instagram")
        window.open( " https://www.instagram.com/accounts/login/   ","_blank")
    }
    else if( message.includes("open google") ){
        speak("opening google")
        window.open( "  https://www.google.co.in/ ","_blank")
    }
    else if( message.includes("open calculator") ){
        speak("opening calculator")
        window.open( " calculator://")
    }
    else if( message.includes("time") ){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if( message.includes("date") ){
        let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
       speak(date)
    }

    else{
        let finaltext="  this is what i found on internet regarding"+message.replace("pepper","")||message.replace("pepper","")
speak(finaltext)
        window.open(` https://www.google.com/search?q=${message.replace("pepper","")}`, "_blank")
    }
}
 