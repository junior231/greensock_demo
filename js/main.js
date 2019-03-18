(() => {
	// i cant believe how stressful this is
	

	const box = document.querySelector('.box');

	// look at it it's red
	// 
	// 
	function startAnimation() {
		TweenMax.to(box, 0.8, { x: 500, rotation: 180, scaleX: 1.5, scaleY: 1.75});
	} 
	

	function resetAnimation() {
		TweenMax.to(box, 0.8, { x: 0, rotation: 0, scaleX: 1, scaleY: 1});
	}

	box.addEventListener("mouseover", startAnimation);
	box.addEventListener("mouseout", resetAnimation);


})();
