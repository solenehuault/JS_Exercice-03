function CreationTableauLangages() {
	langages = ["Html","CSS","Java","PHP"]	
	return langages;
};

function CreationTableauNombres() {
	nombres = [0, 1, 2, 3, 4, 5];
	return nombres;
};

function RemplacementElement(langages) {
	langages[2] = "Javascript";
	return langages;
};

function AjoutElementLangages(langages) {
	langages.push("Ruby", "Python");
	return langages;
};

function AjoutElementNombres(nombres) {
	nombres.unshift(-2, -1);
	return nombres;
};

function SuppressionPremierElement(langages) {
	langages.splice(0,1);
	return langages;
};

function SuppressionDernierElement(langages) {
	langages.splice(langages.length-1, 1);
	return langages;
};
