import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SummaryUpload } from '../summary';
import {FileService } from 'src/app/service/file.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
form: FormGroup;
  error: string = '';
  summary: SummaryUpload;
  uploded: boolean;
  loader: boolean;
  valid:boolean;
  message:string;

    userName:String;
  constructor(private formBuilder: FormBuilder,public router: Router, private service: FileService, private authService:AuthServiceService) { }

  ngOnInit() {
     this.userName=this.authService.getUserName();
    this.form = this.formBuilder.group({
      upload: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      console.log("hi 1");
      const file = event.target.files[0];
      if (file.name.split('.').pop() != 'xlsx') {
        this.valid = true;
        this.message = "Choose Excel file";
      }
      else {
        this.valid = false;
        console.log("hi 2");
      }
  
      this.form.get('upload').setValue(file);
      this.error = '';
      this.uploded = false;
      console.log("hi 3");
    }
    console.log("hi 4");
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('upload').value);
    this.loader = true;
    this.service.importDatas(formData).subscribe(
      (data) => {
        this.loader = false;
        this.loader = true;
        console.log("hi submit");
        this.service.getSummary().subscribe((data) => {
          this.uploded = true;
          this.summary = data;
          this.loader = false;
          console.log(this.summary);
          console.log("hi saved");
        }, (responseError) => { 
          this.error = responseError.error.message;
          alert(this.error)
          console.log(this.error+"hi456");
        });
      },
      (responseError) => {
        this.error = responseError.error.message;
        alert(this.error)
        this.loader = false;
         console.log(this.error+"hi");
      }
    );
  }
      logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}

