function CharacterAddEditModal_Open(characterId) {
	if (characterId == null) {
		document.getElementById("CharacterAddEditModal_Label").innerHTML = "Add Character";
		document.getElementById("CharacterAddEditModal_Form").reset();
		document.getElementById("CharacterAddEditModal_SaveButton").innerHTML = "Add";
	}
}




function CharacterAddEditModal_Save(characterId) {
	var form = document.getElementById("CharacterAddEditModal_Form");
	if (characterId == null) {
		var id = crypto.randomUUID();

		document.getElementById("ActivationsRemaining").insertAdjacentHTML("beforeend"
			,'<form id="' + id + '">'
			+ '<div class="row mt-2 gy-2 align-items-center text-center">'
				+ '<div class="col col-2 text-start">'
					+ '<input class="form-control-plaintext"'
						+ ' type="text"'
						+ ' name="CharacterName"'
						+ ' value="' + form.CharacterName.value + '"'
						+ ' readonly>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HPStructureDecrease(\'' + id + '\')">–</button>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="CharacterHP"'
							+ ' value="' + form.HPMax.value + '" min="0" max="' + form.HPMax.value + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="CharacterStructure"'
							+ ' value="' + form.StructureMax.value + '" min="0" max="' + form.StructureMax.value + '"'
							+ ' readonly>'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HPStructureIncrease(\'' + id + '\')">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HeatStressDecrease(\'' + id + '\')">–</button>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="CharacterHeat"'
							+ ' value="0" min="0" max="' + form.HeatMax.value + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="CharacterStress"'
							+ ' value="' + form.StressMax.value + '" min="0" max="' + form.StressMax.value + '"'
							+ ' readonly>'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HeatStressIncrease(\'' + id + '\')">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Burn.value = 0">Zero</button>'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Burn.stepDown(1)">–</button>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="Burn"'
							+ ' value="0" min="0">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Burn.stepUp(1)">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Activations.stepDown(1)">–</button>'
						+ '<input class="form-control text-center EncounterActivations"'
							+ ' type="number"'
							+ ' name="Activations"'
							+ ' value="' + form.Activations.value + '" min="0" max="' + form.Activations.value + '">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Activations.stepUp(1)">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
				+ '<div class="col col-12">'
					+ '<div class="btn-group">'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_ExposedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_ExposedCheck">Exposed</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_HiddenCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_HiddenCheck">Hidden</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_ImmobilisedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_ImmobilisedCheck">Immobilised</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_ImpairedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_ImpairedCheck">Impaired</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_InvisibleCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_InvisibleCheck">Invisible</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_JammedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_JammedCheck">Jammed</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_LockOnCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_LockOnCheck">Lock On</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_ShreddedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_ShreddedCheck">Shredded</label>'
						+ '<input class="btn-check"'
							+ 'type="checkbox"'
							+ 'id="' + id + '_SlowedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ 'for="' + id + '_SlowedCheck">Slowed</label>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
			+ '</div>'
			+ '</form>');

		bootstrap.Modal.getInstance(document.getElementById("CharacterAddEditModal")).hide();
	}
}




function HeatStressDecrease(id) {
	var form = document.getElementById(id);

	if (
		form.CharacterHeat.value == 0
		&& form.CharacterStress.value < form.CharacterStress.max
	) {
		form.CharacterHeat.value = form.CharacterHeat.max;
		form.CharacterStress.stepUp(1);
	} else {
		form.CharacterHeat.stepDown(1);
	}
}




function HeatStressIncrease(id) {
	var form = document.getElementById(id);

	if (form.CharacterHeat.value == form.CharacterHeat.max) {
		form.CharacterHeat.value = 0;
		form.CharacterStress.stepDown(1);
	} else if (form.CharacterStress.value != 0) {
		form.CharacterHeat.stepUp(1);
	}
}




function HPStructureDecrease(id) {
	var form = document.getElementById(id);

	if (form.CharacterHP.value > 1) {
		form.CharacterHP.stepDown(1);
	} else if (form.CharacterHP.value == 1) {
		if (form.CharacterStructure.value > 1) {
			form.CharacterHP.value = form.CharacterHP.max;
			form.CharacterStructure.stepDown(1);
		} else if (form.CharacterStructure.value == 1) {
			form.CharacterHP.stepDown(1);
			form.CharacterStructure.stepDown(1);
		}
	}
}




function HPStructureIncrease(id) {
	var form = document.getElementById(id);

	if (
		form.CharacterHP.value == form.CharacterHP.max
		&& form.CharacterStructure.value < form.CharacterStructure.max
	) {
		form.CharacterHP.value = 1;
		form.CharacterStructure.stepUp(1);
	} else {
		form.CharacterHP.stepUp(1);
		if (form.CharacterStructure.value == 0) {
			form.CharacterStructure.stepUp(1);
		}
	}
}
