import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  formSetting: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formSetting = this.fb.group({
      username: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]],
      confirmpsw: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }
  
  sendForm() {
    console.log(this.formSetting.value);
  }

  get form() {
    return this.formSetting.controls;
  }

  private passwordMatchValidator(): ValidatorFn {
        return (group: FormGroup):{ [key: string]: any} => {
          if (!(group.dirty || group.touched) || group.get ('password').value === group.get ('confirmpsw').value) {return null;
          }
          return {
            custom: 'Password are not equal'
          };
    };
  };
}
