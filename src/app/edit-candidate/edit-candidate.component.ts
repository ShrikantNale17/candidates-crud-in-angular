import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import uuid from 'smc-uuid-generator';

import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  candidate: any;
  candidateId: any;
  formData: any;
  regForm!: FormGroup;

  skills_Data = ['Angular', 'React', 'Node.JS', 'JavaScript', 'Flutter', 'Java'];
  isSubmitted = false;

  constructor(private fb: FormBuilder, private candidateService: CandidateService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.candidateId = this.activatedRoute.snapshot.params['id'];


    this.regForm = this.fb.group({

      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      prof_info: new FormGroup({
        skills: new FormArray([], [Validators.required, Validators.minLength(3)]),
        exper: new FormArray([], [Validators.required, Validators.minLength(2), Validators.maxLength(5)])
      })
    })

    for (let i = 0; i < 2; i++) {
      this.add()
    }

    this.formData = this.candidateService.getCandidateById(this.candidateId);
    this.regForm.patchValue(this.formData);

    for (let i of this.formData.prof_info.skills) {
      this.skills.push(this.fb.control(i));
    }
    // this.regForm.setValue(this.skills: this.formData.prof_info.skills);

  }

  get exarray() {
    return this.regForm.get('prof_info.exper') as FormArray;
  }

  get fName() {
    return this.regForm.get('fName') as FormControl;
  }

  get lName() {
    return this.regForm.get('lName') as FormControl;
  }

  get gender() {
    return this.regForm.get('gender') as FormControl;
  }

  get email() {
    return this.regForm.get('email') as FormControl;
  }

  get address() {
    return this.regForm.get('address') as FormControl;
  }

  get country() {
    return this.regForm.get('country') as FormControl;
  }

  get state() {
    return this.regForm.get('state') as FormControl;
  }

  get pin() {
    return this.regForm.get('pin') as FormControl;
  }

  get skills() {
    return this.regForm.get('prof_info.skills') as FormArray;
  }

  get exper() {
    return this.regForm.get('prof_info.exper') as FormArray;
  }

  get cName() {
    return this.regForm.get('prof_info.exper.cName') as FormControl;
  }

  onSubmit() {
    console.log(this.regForm.value)
    this.isSubmitted = true;
    if (this.regForm.valid) {
      console.log(this.regForm.value)
      this.candidateService.editCandidate({ id: this.candidateId, ...this.regForm.value });
      this.router.navigate(['']);
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
      cName: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]]
    }))
  }

  removeExp(i: any) {
    this.exarray.removeAt(i);
  }

}
