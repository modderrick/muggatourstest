import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.scss']
})
export class DestinationFormComponent implements OnInit {
	@Input()
	formId;
	destinationForm = this.fb.group({
		id: [''],
		destinationName: [''],
		description: [''],
		image: [''],
		status: ['']
	});
	imageSrc = null;


  	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
	}

	preview(event: any):void {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];

			const reader = new FileReader();
			reader.onload = e => this.imageSrc = reader.result;

			reader.readAsDataURL(file);
		}
	}

	onSubmit(){
		if (this.destinationForm.invalid){
			console.log("submit clicked");
			alert(JSON.stringify(this.destinationForm.value, null, 4));
		}else{
			console.log(JSON.stringify(this.destinationForm.value, null, 4));
			alert(JSON.stringify(this.destinationForm.value, null, 4));
		}
	}
}
