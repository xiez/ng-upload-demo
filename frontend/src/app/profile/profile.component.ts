import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

    form: FormGroup;
  response;
  imageURL;

    constructor(
        private formBuilder: FormBuilder,
        private uploadService: UploadService
    ) { }

  ngOnInit(): void {
      console.log('111111111')
      this.form = this.formBuilder.group({
          profile: ['']
      })
  }

    onChange(evt) {
      console.log(evt)
  }

    onSubmit() {
      console.log('submit');
    }

}
