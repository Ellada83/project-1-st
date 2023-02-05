// var person = {
//     name: "petros",
//     lastName: "Petrosyan",
//     age: 14,
//     Inwork: true,
//     frends:["Kirakos","Martiros","Poxos"]
// }

// console.log(person.name);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.Inwork);
// console.log(person.frends[0]);

// for(let i = 0 ; i < person.frends.length; i++){
//     console.log(person.frends[i]);

// }

var data  = {
    title: [
        "song1",
        "song2",
        "song3",
       " song4",
       "song5",
           
],
    song: [
        "song/song/song1.mp3",
        "song/song/song2.mp3",
        "song3",
        "song4",
        "song5",


    ],
    poster: [
        "https://media1.giphy.com/media/Ru00axlTLzs2gNAVms/giphy.gif",
        "https://i.pinimg.com/originals/95/2a/53/952a531e7265d50e5017248fe08dd6f1.gif",
        "https://i.gifer.com/origin/9d/9d0f84336451fc41e6dbc927f9bdf618_w200.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4x85fu0vQZaoTWZYFb0g07F5NPmONDPtmMQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6T5BYD7RG-I7ejVvTLIIK2kGCkvIxJJhWQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhx0YiQe2vPAk9Yoc0Zh7geqP8FBllAZCp6MbLdRh4LztFHDrRwiGwl-6oTjXdFMYQMw&usqp=CAU"
        
    ]
}
var song = new Audio()
var currentSong = 0

window.onload = function() { 
    playSong()
}



function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementById("row1")
    img.style = backgraundImage = "url(" + data.poster[currentSong] +" )"
    let main = document.getElementById("main")
    main.style.backgraundImage = "url(" + data.poster[currentSong]+")"
    song.play()
  console.log(song);
}
function playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
            play.src = "imagesbtn/pause.png"
      }else{
        song.pause()
        play.src = "imagesbtn/play-button-arrowhead.png"
      }
}
song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);
  let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration
    fill.style.marginLeft = position * 100 + "%"

    convertTime (song.currentTime)

    if(song.ended){
        next()

    }
    
     
})
function convertTime(seconds){
    let currentTime = document.getElementById("currentTime")
    
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min  = (min < 10) ? "0" + min : min 
    sec = (sec < 10) ? "0" + sec : sec
    currentTime.textContent = min + ":" + sec
    // console.log(currenttime.textContent);
    totalTime(Math.round(song.duration))


}
function totalTime(seconds){
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min  = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" +  sec : sec

    currentTime.textContent += " " +  "/ " + min + ":" + sec

}
function next () {
    currentSong++
    if (currentSong >= data.song.length) {
        currentSong = 0
        
    }
    playSong()
    play.src = "imagesbtn/pause.png"
    
    
    
}
function pre() {
    currentSong--
    if(currentSong < 0){
        currentSong = data.song.length-1
    }
    playSong()

    play.src = "imagesbtn/pause.png"
}


