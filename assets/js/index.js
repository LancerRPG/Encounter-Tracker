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
			,GenerateEncounterContentText(
				id
				,form.Name.value
				,form.HPMax.value
				,form.HPMax.value
				,form.StructureMax.value
				,form.StructureMax.value
				,0
				,form.HeatMax.value
				,form.StressMax.value
				,form.StressMax.value
				,0
				,form.ActivationsMax.value
				,form.ActivationsMax.value
				,false
				,false
				,false
				,false
				,false
				,false
				,false
				,false
				,false
			)
		);

		SaveToSessionStorage();

		bootstrap.Modal.getInstance(document.getElementById("CharacterAddEditModal")).hide();
	}
}




function CharacterDeleteModal_Delete(id) {
	document.getElementById(id).remove();

	SaveToSessionStorage();

	bootstrap.Modal.getInstance(document.getElementById("CharacterDeleteModal")).hide();
}




function CharacterDeleteModal_Open(id) {
	var form = document.getElementById("CharacterDeleteModal_Form");

	form.Name.value = document.getElementById(id).Name.value;
	form.setAttribute("action","javascript:CharacterDeleteModal_Delete('" + id + "')");
}




function GenerateEncounterContentText(
	id
	,name
	,hp
	,hpMax
	,structure
	,structureMax
	,heat
	,heatMax
	,stress
	,stressMax
	,burn
	,activations
	,activationsMax
	,exposedCheck
	,hiddenCheck
	,immobilisedCheck
	,impairedCheck
	,invisibleCheck
	,jammedCheck
	,lockOnCheck
	,shreddedCheck
	,slowedCheck
) {
	var html = '<form class="Character"'
			+ ' id="' + id + '"'
			+ ' onchange="SaveToSessionStorage()">'
		+ '<div class="row mt-2 gy-2 align-items-center text-center">'
			+ '<div class="col col-2 text-start">'
				+ '<input class="form-control-plaintext"'
					+ ' type="text"'
					+ ' name="Name"'
					+ ' value="' + name + '"'
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
						+ ' value="' + hp + '" min="0" max="' + hpMax + '"'
						+ ' readonly>'
					+ '<input class="d-none"'
						+ ' type="number"'
						+ ' name="HPMax"'
						+ ' value="' + hpMax + '"'
						+ ' readonly>'
					+ '<input class="form-control text-center"'
						+ ' type="number"'
						+ ' name="Structure"'
						+ ' value="' + structure + '" min="0" max="' + structureMax + '"'
						+ ' readonly>'
					+ '<input class="d-none"'
						+ ' type="number"'
						+ ' name="StructureMax"'
						+ ' value="' + structureMax + '"'
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
						+ ' value="' + heat + '" min="0" max="' + heatMax + '"'
						+ ' readonly>'
					+ '<input class="d-none"'
						+ ' type="number"'
						+ ' name="HeatMax"'
						+ ' value="' + heatMax + '"'
						+ ' readonly>'
					+ '<input class="form-control text-center"'
						+ ' type="number"'
						+ ' name="Stress"'
						+ ' value="' + stress + '" min="0" max="' + stressMax + '"'
						+ ' readonly>'
					+ '<input class="d-none"'
						+ ' type="number"'
						+ ' name="StressMax"'
						+ ' value="' + stressMax + '"'
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
						+ ' value="' + burn + '" min="0">'
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
						+ ' value="' + activations + '" min="0" max="' + activationsMax + '">'
					+ '<input class="d-none"'
						+ ' type="number"'
						+ ' name="ActivationsMax"'
						+ ' value="' + activationsMax + '"'
						+ ' readonly>'
					+ '<button class="btn btn-outline-secondary"'
						+ ' type="button"'
						+ ' onclick="this.form.Activations.stepUp(1)">+</button>'
				+ '</div>'
			+ '</div>'
			+ '<div class="col col-2">'
				+ '<button class="btn btn-danger"'
					+ ' type="button"'
					+ ' data-bs-toggle="modal"'
					+ ' data-bs-target="#CharacterDeleteModal"'
					+ ' onclick="CharacterDeleteModal_Open(\'' + id + '\')">Delete</button>'
			+ '</div>'
			+ '<div class="w-100"></div>'
			+ '<div class="col col-12">'
				+ '<div class="btn-group">'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_ExposedCheck"'
						+ ' name="ExposedCheck"'
						+ (exposedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_ExposedCheck">Exposed</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_HiddenCheck"'
						+ ' name="HiddenCheck"'
						+ (hiddenCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_HiddenCheck">Hidden</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_ImmobilisedCheck"'
						+ ' name="ImmobilisedCheck"'
						+ (immobilisedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_ImmobilisedCheck">Immobilised</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_ImpairedCheck"'
						+ ' name="ImpairedCheck"'
						+ (impairedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_ImpairedCheck">Impaired</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_InvisibleCheck"'
						+ ' name="InvisibleCheck"'
						+ (invisibleCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_InvisibleCheck">Invisible</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_JammedCheck"'
						+ ' name="JammedCheck"'
						+ (jammedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_JammedCheck">Jammed</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_LockOnCheck"'
						+ ' name="LockOnCheck"'
						+ (lockOnCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_LockOnCheck">Lock On</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_ShreddedCheck"'
						+ ' name="ShreddedCheck"'
						+ (shreddedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_ShreddedCheck">Shredded</label>'
					+ '<input class="btn-check"'
						+ ' type="checkbox"'
						+ ' id="' + id + '_SlowedCheck"'
						+ ' name="SlowedCheck"'
						+ (slowedCheck ? ' checked' : "")
						+ '>'
					+ '<label class="btn btn-outline-primary"'
						+ ' for="' + id + '_SlowedCheck">Slowed</label>'
				+ '</div>'
			+ '</div>'
			+ '<div class="w-100"></div>'
		+ '</div>'
		+ '</form>';

	return html
}




function GenerateExportText() {
	document.getElementById("ExportModal_Form").ExportTextArea.value = JSON.stringify(sessionStorage);
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

	SaveToSessionStorage();
}




function HeatStressIncrease(id) {
	var form = document.getElementById(id);

	if (form.Heat.value == form.Heat.max) {
		form.Heat.value = 0;
		form.Stress.stepDown(1);
	} else if (form.Stress.value != 0) {
		form.Heat.stepUp(1);
	}

	SaveToSessionStorage();
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

	SaveToSessionStorage();
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

	SaveToSessionStorage();
}




function ImportData(characters) {
	var html = "";

	Object.keys(characters).forEach((id, i) => {
		var character = JSON.parse(characters[id]);

		sessionStorage.setItem(id,characters[id]);

		html += GenerateEncounterContentText(
			id
			,character.Name
			,character.HP
			,character.HPMax
			,character.Structure
			,character.StructureMax
			,character.Heat
			,character.HeatMax
			,character.Stress
			,character.StressMax
			,character.Burn
			,character.Activations
			,character.ActivationsMax
			,(character.ExposedCheck == "on" ? true : false)
			,(character.HiddenCheck == "on" ? true : false)
			,(character.ImmobilisedCheck == "on" ? true : false)
			,(character.ImpairedCheck == "on" ? true : false)
			,(character.InvisibleCheck == "on" ? true : false)
			,(character.JammedCheck == "on" ? true : false)
			,(character.LockOnCheck == "on" ? true : false)
			,(character.ShreddedCheck == "on" ? true : false)
			,(character.SlowedCheck == "on" ? true : false)
		);
	});

	document.getElementById("EncounterContent").innerHTML = html;
}




function ImportEncounterModal_Import() {
	sessionStorage.clear();
	ImportData(JSON.parse(document.getElementById("ImportEncounterModal_Form").ImportTextArea.value));

	bootstrap.Modal.getInstance(document.getElementById("ImportEncounterModal")).hide();
}




function OnDocumentLoad() {
	if (sessionStorage.length != 0) {
		ImportData(sessionStorage);
	}
}




function SaveToSessionStorage() {
	sessionStorage.clear()
	Array.from(document.getElementsByClassName("Character")).forEach((item, i) => {
		sessionStorage.setItem(item.id,JSON.stringify(Object.fromEntries(new FormData(item))));
	});
}
