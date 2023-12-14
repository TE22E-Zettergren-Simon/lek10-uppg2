let bild = 1;

let bildElement = document.getElementById("bild-karusell");

const bytBild = (bytMed) => {
	bild += bytMed;

	if (bild > 9) bild -= 9;
	if (bild < 1) bild += 9;

	bildElement.setAttribute("src", "img/album" + bild + ".jpg");
};
