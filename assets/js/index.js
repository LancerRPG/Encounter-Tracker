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

		document.getElementById("EncounterContent").insertAdjacentHTML("beforeend"
			,'<form class="Character"'
				+ 'id="' + id + '">'
			+ '<div class="row mt-2 gy-2 align-items-center text-center">'
				+ '<div class="col col-2 text-start">'
					+ '<input class="form-control-plaintext"'
						+ ' type="text"'
						+ ' name="Name"'
						+ ' value="' + form.Name.value + '"'
						+ ' readonly>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HPStructureDecrease(\'' + id + '\')">–</button>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="HP"'
							+ ' value="' + form.HPMax.value + '" min="0" max="' + form.HPMax.value + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="HPMax"'
							+ ' value="' + form.HPMax.value + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="Structure"'
							+ ' value="' + form.StructureMax.value + '" min="0" max="' + form.StructureMax.value + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="StructureMax"'
							+ ' value="' + form.StructureMax.value + '"'
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
							+ ' name="Heat"'
							+ ' value="0" min="0" max="' + form.HeatMax.value + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="HeatMax"'
							+ ' value="' + form.HeatMax.value + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="Stress"'
							+ ' value="' + form.StressMax.value + '" min="0" max="' + form.StressMax.value + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="StressMax"'
							+ ' value="' + form.StressMax.value + '"'
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
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="ActivationsMax"'
							+ ' value="' + form.Activations.value + '"'
							+ ' readonly>'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Activations.stepUp(1)">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
				+ '<div class="col col-12">'
					+ '<div class="btn-group">'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ExposedCheck"'
							+ ' name="ExposedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ExposedCheck">Exposed</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_HiddenCheck"'
							+ ' name="HiddenCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_HiddenCheck">Hidden</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ImmobilisedCheck"'
							+ ' name="ImmobilisedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ImmobilisedCheck">Immobilised</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ImpairedCheck"'
							+ ' name="ImpairedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ImpairedCheck">Impaired</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_InvisibleCheck"'
							+ ' name="InvisibleCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_InvisibleCheck">Invisible</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_JammedCheck"'
							+ ' name="JammedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_JammedCheck">Jammed</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_LockOnCheck"'
							+ ' name="LockOnCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_LockOnCheck">Lock On</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ShreddedCheck"'
							+ ' name="ShreddedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ShreddedCheck">Shredded</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_SlowedCheck"'
							+ ' name="SlowedCheck">'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_SlowedCheck">Slowed</label>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
			+ '</div>'
			+ '</form>');

		bootstrap.Modal.getInstance(document.getElementById("CharacterAddEditModal")).hide();
	}
}




function GenerateExportText() {
	var data = {};
	Array.from(document.getElementsByClassName("Character")).forEach((item, i) => {
		data[item.id] = JSON.stringify(Object.fromEntries(new FormData(item)));
	});
	document.getElementById("ExportModal_Form").ExportTextArea.value = JSON.stringify(data);
}




function HeatStressDecrease(id) {
	var form = document.getElementById(id);

	if (
		form.Heat.value == 0
		&& form.Stress.value < form.Stress.max
	) {
		form.Heat.value = form.Heat.max;
		form.Stress.stepUp(1);
	} else {
		form.Heat.stepDown(1);
	}
}




function HeatStressIncrease(id) {
	var form = document.getElementById(id);

	if (form.Heat.value == form.Heat.max) {
		form.Heat.value = 0;
		form.Stress.stepDown(1);
	} else if (form.Stress.value != 0) {
		form.Heat.stepUp(1);
	}
}




function HPStructureDecrease(id) {
	var form = document.getElementById(id);

	if (form.HP.value > 1) {
		form.HP.stepDown(1);
	} else if (form.HP.value == 1) {
		if (form.Structure.value > 1) {
			form.HP.value = form.HP.max;
			form.Structure.stepDown(1);
		} else if (form.Structure.value == 1) {
			form.HP.stepDown(1);
			form.Structure.stepDown(1);
		}
	}
}




function HPStructureIncrease(id) {
	var form = document.getElementById(id);

	if (
		form.HP.value == form.HP.max
		&& form.Structure.value < form.Structure.max
	) {
		form.HP.value = 1;
		form.Structure.stepUp(1);
	} else {
		form.HP.stepUp(1);
		if (form.Structure.value == 0) {
			form.Structure.stepUp(1);
		}
	}
}




function ImportData() {
	var characters = JSON.parse(document.getElementById("ImportModal_Form").ImportTextArea.value);
	var html = "";

	Object.keys(characters).forEach((id, i) => {
		var data = JSON.parse(characters[id]);

		html += '<form class="Character"'
		 		+ 'id="' + id + '">'
			+ '<div class="row mt-2 gy-2 align-items-center text-center">'
				+ '<div class="col col-2 text-start">'
					+ '<input class="form-control-plaintext"'
						+ ' type="text"'
						+ ' name="Name"'
						+ ' value="' + data.Name + '"'
						+ ' readonly>'
				+ '</div>'
				+ '<div class="col col-2">'
					+ '<div class="input-group">'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="HPStructureDecrease(\'' + id + '\')">–</button>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="HP"'
							+ ' value="' + data.HP + '" min="0" max="' + data.HPMax + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="HPMax"'
							+ ' value="' + data.HPMax + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="Structure"'
							+ ' value="' + data.Structure + '" min="0" max="' + data.StructureMax + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="StructureMax"'
							+ ' value="' + data.StructureMax + '"'
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
							+ ' name="Heat"'
							+ ' value="0" min="0" max="' + data.Heat + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="HeatMax"'
							+ ' value="' + data.HeatMax + '"'
							+ ' readonly>'
						+ '<input class="form-control text-center"'
							+ ' type="number"'
							+ ' name="Stress"'
							+ ' value="' + data.Stress + '" min="0" max="' + data.StressMax + '"'
							+ ' readonly>'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="StressMax"'
							+ ' value="' + data.StressMax + '"'
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
							+ ' value="' + data.Burn + '" min="0">'
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
							+ ' value="' + data.Activations + '" min="0" max="' + data.ActivationsMax + '">'
						+ '<input class="d-none"'
							+ ' type="number"'
							+ ' name="ActivationsMax"'
							+ ' value="' + data.ActivationsMax + '"'
							+ ' readonly>'
						+ '<button class="btn btn-outline-secondary"'
							+ ' type="button"'
							+ ' onclick="this.form.Activations.stepUp(1)">+</button>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
				+ '<div class="col col-12">'
					+ '<div class="btn-group">'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ExposedCheck"'
							+ ' name="ExposedCheck"'
							+ (data.ExposedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ExposedCheck">Exposed</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_HiddenCheck"'
							+ ' name="HiddenCheck"'
							+ (data.HiddenCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_HiddenCheck">Hidden</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ImmobilisedCheck"'
							+ ' name="ImmobilisedCheck"'
							+ (data.ImmobilisedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ImmobilisedCheck">Immobilised</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ImpairedCheck"'
							+ ' name="ImpairedCheck"'
							+ (data.ImpairedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ImpairedCheck">Impaired</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_InvisibleCheck"'
							+ ' name="InvisibleCheck"'
							+ (data.InvisibleCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_InvisibleCheck">Invisible</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_JammedCheck"'
							+ ' name="JammedCheck"'
							+ (data.JammedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_JammedCheck">Jammed</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_LockOnCheck"'
							+ ' name="LockOnCheck"'
							+ (data.LockOnCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_LockOnCheck">Lock On</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_ShreddedCheck"'
							+ ' name="ShreddedCheck"'
							+ (data.ShreddedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_ShreddedCheck">Shredded</label>'
						+ '<input class="btn-check"'
							+ ' type="checkbox"'
							+ ' id="' + id + '_SlowedCheck"'
							+ ' name="SlowedCheck"'
							+ (data.SlowedCheck == "on" ? ' checked' : "")
							+ '>'
						+ '<label class="btn btn-outline-primary"'
							+ ' for="' + id + '_SlowedCheck">Slowed</label>'
					+ '</div>'
				+ '</div>'
				+ '<div class="w-100"></div>'
			+ '</div>'
			+ '</form>';

	});

	document.getElementById("EncounterContent").innerHTML = html;

	bootstrap.Modal.getInstance(document.getElementById("ImportModal")).hide();
}
