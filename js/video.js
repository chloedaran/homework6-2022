var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Paused Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate * .95;
})
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / .95;
	console.log(video.playbackRate);
})
var mute = document.querySelector("#mute")
mute.addEventListener("click", function(){
	if(video.muted == false){
		video.muted = true;
		mute.innerHTML = "Unmute";		
	}
	else {
		video.muted = false;
		mute.innerHTML = "Mute";
}})
document.querySelector("#slider").addEventListener("change", function(){
	var sound = this.value
	console.log(sound)
	document.querySelector("#volume").innerHTML = sound + "%"
	video.volume = sound / 100
	console.log(this.value)
})
document.querySelector("#skip").addEventListener("click", function(){
	console.log(video.currentTime)
	video.currentTime = video.currentTime + 15
	if(video.currentTime >= video.duration){
		video.currentTime = 0
	}
})
var element = document.querySelector("body")
document.querySelector("#vintage").addEventListener("click", function() {
	element.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function(){
	element.classList.remove("oldSchool")
});