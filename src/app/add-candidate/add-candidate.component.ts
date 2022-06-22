import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-candidate',
	templateUrl: './add-candidate.component.html',
	styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

	candidate: any;

	regForm!: FormGroup;

	skills_Data = ['Angular', 'React', 'Node.JS', 'JavaScript', 'Flutter', 'Java'];
	isSubmitted = false;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {

		this.regForm = this.fb.group({

			fName: ['', [Validators.required]],
			lName: [''],
			gender: [''],
			email: [''],
			address: [''],
			country: [''],
			state: [''],
			pin: [''],
			prof_info: new FormGroup({
				skills: new FormArray([]),
				exper: new FormArray([])
			})
		})

		for (let i = 0; i < 2; i++) {
			this.add()
		}
	}

	get exarray() {
		return this.regForm.get('prof_info.exper') as FormArray;
	}

	onSubmit() {
		// console.log(this.candidate)
		this.isSubmitted = true;
		if (this.regForm.valid) {
			console.log(this.regForm.value)
		}

	}

	manage_Skills(e: any) {
		console.log(e.target.value)
		const skills: FormArray = this.regForm.get('prof_info.skills') as FormArray;
		if (e.target.checked) {
			skills.push(new FormControl(e.target.value))
		} else {
			let i: number = 0;
			skills.controls.forEach((skill: AbstractControl) => {
				if (skill.value === e.target.value) {
					skills.removeAt(i);
					return;
				}
				i++;
			})
		}
	}

	add() {
		this.exarray.push(this.fb.group({
			cName: [''],
			duration: [''],
			responsibilities: ['']
		}))
	}

	removeExp(i: any) {
		this.exarray.removeAt(i);
	}

}
