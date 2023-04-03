{% comment %} Control {% endcomment -%}
<div class="container mt-3">
	<h2 id="Control">Control</h2>
	<div class="container mt-3">
		<div class="row align-items-center">
			<div class="col col-12">
				<button class="btn btn-secondary"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#CharacterAddEditModal"
					onclick="CharacterAddEditModal_Open()">Add Character</button>
				<button class="btn btn-secondary"
					type="button"
					onclick="Array.from(document.getElementsByClassName('EncounterActivations')).forEach((item,i)=>{item.value = item.max;})">Reset Activations</button>
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
		</div>
		<div class="row gy-2 align-items-center text-center"
			id="ActivationsRemaining">
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
							name="CharacterName"
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
								onclick="this.form.Activations.stepDown(1)">–</button>
							<input class="form-control text-center"
								type="number"
								name="Activations"
								value="1" min="1" max="5"
								required>
							<button class="btn btn-outline-secondary"
								type="button"
								onclick="this.form.Activations.stepUp(1)">+</button>
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




<script src="{{ 'assets/js/index.js?v=' | append: site.github.build_revision }}"></script>
