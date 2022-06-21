import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  candidate: any;

  // regForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.candidate)
  }

}
