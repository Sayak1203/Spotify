// console.log("Welcome");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Kahani Suno", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Starboy", filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Despacito", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Gangsta's Paradise", filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Animals ", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Shape of You", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Heroine", filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Teri Deewani", filePath: "song/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Under the Influence", filePath: "song/9.mp3", coverPath: "cover/9.jpg"}
]
// audioElement.play();


// Handle Play-Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    songIndex=0;
    else{
        songIndex+=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    songIndex=0;
    else{
        songIndex-=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
})