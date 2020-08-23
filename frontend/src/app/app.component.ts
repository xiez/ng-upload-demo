import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UploadService } from './upload.service';

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';

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

    onChange(event) {
      console.log(event)
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.form.get('profile').setValue(file);
        }
  }

    onSubmit() {
      console.log('submit');
        const formData = new FormData();
        formData.append('file', this.form.get('profile').value);
        formData.append('foo', 'bar'); // TEST

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `http://localhost:4200${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {  
        console.log(err);
      }
    );

    }



}
