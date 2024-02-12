let slideIndex = 1;

function currentSlide(n: number, projClass: string) {
	showSlide(slideIndex = n, projClass);
};

function showSlide(n: number, projClass: string) {
	let i;
	let slides = document.getElementsByClassName(projClass);
	if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
	}
	(slides[slideIndex-1] as HTMLElement).style.display = "block";
};

export default currentSlide;