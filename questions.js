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

function ConversionChaineTableau(reseaux_sociaux_chaine) {
	var result = reseaux_sociaux_chaine.split(",");
	return result;
};

function ConversionTableauChaine(langages) {
	var result = langages.join();
	return result;
};

function TriTableau(reseaux_sociaux) {
	return reseaux_sociaux.sort();
};

function InversionTableau(langages) {
	return langages.reverse();
};

function TriSpecial(langages) {
	var result = [];
	var index_small = 0;
	var compteur = 0;
	var taille = langages.length; 
	while (compteur != taille) {
		var small = langages[0];
		for (var i = 1 ; i < langages.length ; i++) {
			if (small.length > langages[i].length) {
				small = langages[i];
				index_small = i;
			}
		}
		result.push(small);
		langages.splice(index_small, 1);
		compteur++;
	}
	return result;
};
