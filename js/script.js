const videoPlayer = document.querySelector('.video-player')
const video = document.querySelector('.video')
const playButton = document.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = document.querySelector('.current')
const durationTimeElement = document.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')
const progressBarSmall = videoPlayer.querySelector('.video-progress-small')
const volumeButton = videoPlayer.querySelector('.volume-button')
const fullscreen = videoPlayer.querySelector('.fullscreen-button')

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

//current time and duration
const currentTime = () => {
  let currentMinutes =  Math.floor(video.currentTime / 60)
  let currentSeconds =  Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes =  Math.floor(video.duration / 60)
  let durationSeconds =  Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0'+durationSeconds : durationSeconds}`
}
video.addEventListener('timeupdate', currentTime)

//Progress bar
video.addEventListener('timeupdate', () => {
  const percentage = (video.currentTime / video.duration) * 100
  const percentagesmall = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
  progressBarSmall.style.width = `${percentage}%`
})

//change progress bar on click
progress.addEventListener('click', (e) => {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})

//volume button
volumeButton.addEventListener('click', () => {
  video.muted = !video.muted;
  volumeButton.classList.toggle('muted')
})

//fullscreen button
fullscreen.addEventListener('click', () => {
  video.requestFullscreen();
})