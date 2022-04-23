import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  submitted = false;
  registered = false;
  submitting = false;

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private http: HttpClient) {
    console.log(environment)
   }

  ngOnInit(): void {
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    console.warn(this.profileForm.value);
    this.postRegistration();
  }

  postRegistration() {
    this.submitting = true;
    let dto = {
      firstName: this.profileForm.value.firstName,
      book: 'demystifier-algorithmes-tri',
      email: this.profileForm.value.email
    }
    this.http.post<any>(environment.apiUrl+'registrations', dto).subscribe(data => {
      this.registered = true;
      this.submitting = false;
      console.log(JSON.stringify(data));
    })
  }

}
