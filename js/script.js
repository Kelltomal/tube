const videoPlayer = document.querySelector('.video-player')
const video = document.querySelector('.video')
const playButton = document.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = video.querySelector('.current')
const durationTimeElement = video.querySelector('.duration')

//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    e.target.textContent = "◼"
  } else {
    video.pause()
    e.target.textContent = "▶"
  }
})
//volume
volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value
})

video.addEventListener('timeupdate', currentTime)
//current time and duration
const currentTime = () => {
  console.log(video.currentTime);
  /*let currentMinutes =  Math.floor(video.currentTime / 60)
  let currentSeconds =  Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes =  Math.floor(video.duration / 60)
  let durationSeconds =  Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`*/
}