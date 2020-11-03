import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tour-category-form',
  templateUrl: './tour-category-form.component.html',
  styleUrls: ['./tour-category-form.component.scss']
})
export class TourCategoryFormComponent implements OnInit {
  categoryForm = this.fb.group({
		id: [''],
		categoryName: [''],
		description: [''],
		image: [''],
		status: ['']
	});
  fileData: File;
  previewUrl: string | ArrayBuffer;
  imageSrc = null;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  preview(event: any):void {
    //fileData: File;
    //previewUrl: string | ArrayBuffer;
    //imageSrc = null;
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
}

}
