export function scrollToElem(id: string): void {
	const elem = document.getElementById(id);
	if (elem) window.scrollTo({ top: elem?.offsetTop - 78 });
}
