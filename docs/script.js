var name = localStorage.getItem("name")
if (name == "null" || !name) {
	name = prompt("What's your name?")
	localStorage.setItem("name", name)
	console.log(name)
} else {
	document.getElementById("title").innerHTML = "Welcome Back "+name;
	console.log(typeof name)
}

function show() {
	document.body.style.filter = "blur(0px)";
}

function hide() {
	document.body.style.filter = "blur(20px)"
	setTimeout(show, 2000);
	console.log('done');
}

function move() {
	let cover = document.querySelector(".n1 .left .cover")
	cover.style.transform = 'translateY(100%)'
}