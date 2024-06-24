// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const targetSection = document.getElementById(this.getAttribute("href").slice(1));
		targetSection.scrollIntoView({ behavior: "smooth" });
	});
});

// Add active class to current navigation link
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const scrollY = window.scrollY;

		if (scrollY >= sectionTop - sectionHeight / 3 && scrollY <= sectionTop + (sectionHeight * 2) / 3) {
			const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
			navLink.classList.add("active");
		} else {
			navLink.classList.remove("active");
		}
	});
});
