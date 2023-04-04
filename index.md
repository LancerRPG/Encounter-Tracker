{% comment %} Control {% endcomment -%}
<div class="container mt-3">
	<h2 id="Control">Control</h2>
	<div class="container mt-3">
		<div class="row align-items-center">
			<div class="col col-6">
				<button class="btn btn-secondary"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#CharacterAddEditModal"
					onclick="CharacterAddEditModal_Open()">Add Character</button>
				<button class="btn btn-secondary"
					type="button"
					onclick="Array.from(document.getElementsByClassName('EncounterActivations')).forEach((item,i)=>{item.value = item.max;})">Reset Activations</button>
			</div>
			<div class="col col-6 text-end">
				<button class="btn btn-outline-secondary"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#ExportModal"
					onclick="GenerateExportText()">Export</button>
				<button class="btn btn-outline-secondary"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#ImportModal">Import</button>
			</div>
		</div>
	</div>
</div>




{% comment %} Encounter {% endcomment -%}
<div class="container mt-3">
	<h2 id="Encounter">Encounter</h2>
	<div class="container mt-3">
		<div class="row gy-2 align-items-center text-center">
			<div class="col col-2"><b>Character</b></div>
			<div class="col col-2"><b>HP / Structure</b></div>
			<div class="col col-2"><b>Heat / Stress</b></div>
			<div class="col col-2"><b>Burn</b></div>
			<div class="col col-2"><b>Activations</b></div>
			<div class="col col-2"><b>Control</b></div>
		</div>
		<div class="row gy-2 align-items-center text-center"
			id="EncounterContent">
		</div>
	</div>
</div>




{% comment %} Character - Add Edit Modal {% endcomment -%}
<form id="CharacterAddEditModal_Form"
	action="javascript:CharacterAddEditModal_Save()">
<div class="modal fade"
	id="CharacterAddEditModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5"
					id="CharacterAddEditModal_Label">Add/Edit Character</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					{% comment %} Name {% endcomment -%}
					<div class="col col-4">Name</div>
					<div class="col col-6">
						<input class="form-control"
							id="CharacterAddEditModal_CharacterName"
							name="Name"
							onchange="this.value = this.value.trim()"
							required>
					</div>
					<div class="w-100"></div>
					{% comment %} Max HP {% endcomment -%}
					<div class="col col-4">HP</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.HPMax.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="HPMax"
								value="10" min="1" max="30"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.HPMax.stepUp(1)">+</button>
						</div>
					</div>
					<div class="w-100"></div>
					{% comment %} Max Structure {% endcomment -%}
					<div class="col col-4">Structure</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.StructureMax.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="StructureMax"
								value="1" min="1" max="10"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.StructureMax.stepUp(1)">+</button>
						</div>
					</div>
					<div class="w-100"></div>
					{% comment %} Max Heat {% endcomment -%}
					<div class="col col-4">Heat Cap</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.HeatMax.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="HeatMax"
								value="10" min="1" max="30"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.HeatMax.stepUp(1)">+</button>
						</div>
					</div>
					<div class="w-100"></div>
					{% comment %} Max Stress {% endcomment -%}
					<div class="col col-4">Stress</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.StressMax.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="StressMax"
								value="1" min="1" max="10"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.StressMax.stepUp(1)">+</button>
						</div>
					</div>
					<div class="w-100"></div>
					{% comment %} Activations {% endcomment -%}
					<div class="col col-4">Activations</div>
					<div class="col col-6">
						<div class="input-group">
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.ActivationsMax.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="ActivationsMax"
								value="1" min="1" max="5"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.ActivationsMax.stepUp(1)">+</button>
						</div>
					</div>
					<div class="w-100"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Close</button>
				<button class="btn btn-primary"
					type="submit"
					id="CharacterAddEditModal_SaveButton">Save</button>
			</div>
		</div>
	</div>
</div>
</form>




{% comment %} Delete {% endcomment -%}
<form id="CharacterDeleteModal_Form">
<div class="modal fade"
	id="CharacterDeleteModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5">Delete Character</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					<div class="col col-12">
						Confirm deletion of: <input class="form-control-plaintext text-danger"
							type="text"
							name="Name"
							value="Character Name"
							readonly>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Cancel</button>
				<button class="btn btn-danger"
					type="submit">Delete</button>
			</div>
		</div>
	</div>
</div>
</form>




{% comment %} Export {% endcomment -%}
<form id="ExportModal_Form">
<div class="modal fade"
	id="ExportModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5">Export</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					<div class="col col-12">
						<textarea class="form-control"
							name="ExportTextArea"
							readonly></textarea>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
</form>




{% comment %} Import {% endcomment -%}
<form id="ImportModal_Form">
<div class="modal fade"
	id="ImportModal"
	tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5">Import</h1>
				<button class="btn-close"
					type="button"
					data-bs-dismiss="modal"></button>
			</div>
			<div class="modal-body">
				<div class="row gy-2 align-items-center">
					<div class="col col-12">
						<textarea class="form-control"
							name="ImportTextArea"></textarea>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary"
					type="button"
					data-bs-dismiss="modal">Close</button>
				<button class="btn btn-danger"
					type="button"
					onclick="ImportData()">Import</button>
			</div>
		</div>
	</div>
</div>
</form>




<script src="{{ 'assets/js/index.js?v=' | append: site.github.build_revision }}"></script>
