// TYPEIT

new TypeIt("#type1", {
	speed: 120,
	loop: true,
	waintUntilVisible: true,
})
	.type("LEE", { delay: 2000 })
	.pause(500)
	.delete(9)
	.go();

new TypeIt("#type2", {
	speed: 150,
	loop: false,
	waintUntilVisible: true,
})
	.type("SOFTWARE ENGINEER", { delay: 400 })
	.pause(500)
	.go();

// DARK MODE


icon.onclick = function() {
	document.body.classList.toggle("dark-theme");
}
