import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-locate',
  templateUrl: './form-locate.component.html',
  styleUrls: ['./form-locate.component.css']
})
export class FormLocateComponent implements OnInit {
  foods= ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangan","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];
  selected:string="State";
  input="";
  public aFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
   }
  registerForm:any;
  
  
  ngOnInit(): void {
    this.registerForm =new FormGroup({
      "FirstName":new FormControl(null,[Validators.required]),
      "CompanyName":new FormControl(null,[Validators.required]),
      "address":new FormControl(null, [Validators.required]),
      "State":new FormControl(this.input, [Validators.required]),
      "ZIPcode":new FormControl(null,[Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      "phoneNumber":new FormControl(null,[Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      "Email":new FormControl(null,[Validators.required,Validators.email]),

    });
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  submitData(){  
      console.log(this.registerForm.value);
    }
  get firstname(){
    return this.registerForm.get('FirstName');
  }
  siteKey:string= "6Ld1LZ4eAAAAAINQnFBcVUC_a3CaJU4lWwo43_qV";
}
