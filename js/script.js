let playing = false;
let video = document.getElementById("video");            // Получаем элемент video
let WidthButton = video.offsetWidth/4;					 // Размер кнопок
//let btnSrnRewind = document.querySelector(".srnrewind");	 // Получаем кнопки перемотки назад
//let btnSrnForward = document.querySelector(".srnforward");	 // Получаем кнопки перемотки вперёд
let videoTrack = document.querySelector(".video-track"); // Получаем элемент Видеодорожки
let time = document.querySelector(".timeline");          // Получаем элемент времени видео
let btnPlay = document.querySelector(".play");           // Получаем кнопку проигрывания
let btnRewind = document.querySelector(".rewind");       // Получаем кнопки перемотки назад
let btnForward = document.querySelector(".forward");     // Получаем кнопку перемотки вперёд
let btnLoop = document.querySelector(".loop");     // Получаем кнопку loop
let txtduration = document.querySelector(".currenttime");     // Получаем кнопку Duration
//Функция запуска/остановки видео
function FuncPlay() {
	txtduration.text = video.duration;	
    if (playing) {
        playing = false
        video.pause(); // Останавливает воспроизведение
        clearInterval(videoPlay) // убирает работу интервала
    } else {
        playing = true
        video.play(); // Запуск проигрывания
        // Запуск интервала
        videoPlay = setInterval(function() {
                // Создаём переменную времени видел
                let videoTime = Math.round(video.currentTime)
                // Создаём переменную всего времени видео
                let videoLength = Math.round(video.duration)
                // Вычисляем длину дорожки
                time.style.width = (videoTime * 100) / videoLength + '%';
        }, 10)
    }
}
// Видос
video.addEventListener("click", FuncPlay);
// Плей
btnPlay.addEventListener("click", FuncPlay);
// Нажимаем на кнопку перемотать назад
btnRewind.addEventListener("click", function() {
    video.currentTime -= 1; // Уменьшаем время на пять секунд
});
    
// Нажимаем на кнопку перемотать вперёд
btnForward.addEventListener("click", function() {
    video.currentTime += 1; // Увеличиваем время на пять секунд
});
// Переход по дорожке
videoTrack.addEventListener("click", function(e) {
let posX = e.clientX - 8; // Вычисляем позицию нажатия
let timePos = (posX * 100) / 800; // Вычисляем процент перемотки
time.style.width = timePos + '%'; // Присваиваем процент перемотки
video.currentTime = (timePos * Math.round(video.duration)) / 100 // Перематываем
});
// Нажимаем на кнопку loop
btnLoop.addEventListener("click", function() {
	video.toggleAttribute("loop")
	if (video.loop == false) {
		console.log(video.currentTime);
		btnLoop.className = "loop2";
	} else {
		console.log("false");
		btnLoop.className = "loop";
	}
});