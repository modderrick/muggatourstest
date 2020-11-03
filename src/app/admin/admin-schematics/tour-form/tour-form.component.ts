import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent implements OnInit {
	seletedValues: string;
	tourForm: FormGroup;

	@Input()
	formId;

	createForm(){
		this.tourForm = this.fb.group({
			id: [''],
			tourName: [''],
			description: [''],
			price: [''],
			discount: [''],
			duration: [''],
			destination: [''],
			status: [''],
			category: [''],
			related: this.fb.array([
				this.fb.group({
					relatedId: ['']
				})
			]),
			tags: this.fb.array([
				this.fb.group({
					tagId:	[''],
					tagName: [''],
				})
			]),
			images: this.fb.array([
				this.fb.group({
					imageId: [''],
					imagePath:	['']
				})
			]),
			questions: this.fb.array([
				this.fb.group({
					questionId: [''],
					question: [''],
					answer:	[''],
				})
			]),
			programs: this.fb.array([
				this.fb.group({
					programId:	[''],
					programName: [''],
					programTime: [''],
					programDesc: [''],
					programAvator: ['']
				})
			]),
			inclusions:	this.fb.array([
				this.fb.group({
					inclusionId: [''],
					inclusionName: [''],
					inclusionDesc: [''],
				})
			]),
			insights: this.fb.array([
				this.fb.group({
					insightId: [''],
					insightName: [''],
					insightDesc: ['']
				})
			])
		})
	}

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.createForm();
	}

	
	imageSrc: any[]=[];
	preview(event: any,i:number):void {
		if (event.target.files && event.target.files[0]) {
		  const file = event.target.files[0];	
		  const reader = new FileReader();
		  reader.onload = e => this.imageSrc.splice(i,1,reader.result); //push(reader.result);
		  reader.readAsDataURL(file);
		
	  	}
	}


	tourImg: any[]=[];
	tourImgPreview(event: any,i:number):void {
		if (event.target.files && event.target.files[0]) {
		  const file = event.target.files[0];	
		  const reader = new FileReader();
		  reader.onload = e => this.tourImg.splice(i,1,reader.result); //push(reader.result);
		  reader.readAsDataURL(file);
		
	  	}
	}


	// dynamic related tours
	relatedArray(){
		return this.tourForm.get("related") as FormArray
	}
	addRelated(){
		
		this.relatedArray().push(
			(this.fb.group({relatedId: ['']})) as FormGroup)
	}

	removeRelated(i: number){
		this.relatedArray().removeAt(i)
	}

	//dynamic tour tags
	tagArray(){
		return this.tourForm.get("tags") as FormArray
	}

	addTag(){
		this.tagArray().push(
			(this.fb.group({tagId: [''],tagName:['']})) as FormGroup)
	}

	removeTag(i: number){
		this.tagArray().removeAt(i)
	}


	//dynamic tour programs
	programArray(){
		return this.tourForm.get("programs") as FormArray
	}

	addProgram(){
		this.programArray().push((this.fb.group({
			programId:	[''],
			programName: [''],
			programTime: [''],
			programDesc: [''],
			programAvator: ['']
		})) as FormGroup)

		this.imageSrc.push("../../../../assets/icons/no_image.png");
		console.log("image src "+ this.imageSrc)

		alert("image src "+ this.imageSrc);
	}

	removeProgram(i: number){
		this.programArray().removeAt(i)
		this.imageSrc.splice(i,1)
	}


	//dynamic tour questions
	questionArray(){
		return this.tourForm.get("questions") as FormArray
	}

	addQuestion(){
		this.questionArray().push(
			(this.fb.group({
				questionId: [''],
				question:[''],
				answer:['']
			})) as FormGroup)
	}

	removeQuestion(i: number){
		this.questionArray().removeAt(i)

	}



	//dynamic tour insights
	insightArray(){
		return this.tourForm.get("insights") as FormArray
	}

	addInsight(){
		this.insightArray().push(
			(this.fb.group({
				insightId: [''],
				insightName:[''],
				insightDesc:[''],
			})) as FormGroup)
	}

	removeInsight(i: number){
		this.insightArray().removeAt(i)

	}



	//dynamic tour inclusions
	inclusionArray(){
		return this.tourForm.get("inclusions") as FormArray
	}

	addInclusion(){
		this.inclusionArray().push(
			(this.fb.group({
				inclusionId: [''],
				inclusionName:[''],
				inclusionDesc:[''],
			})) as FormGroup)
	}

	removeInclusion(i: number){
		this.inclusionArray().removeAt(i)

	}



	//dynamic tour images
	imageArray(){
		return this.tourForm.get("images") as FormArray
	}

	addImage(){
		this.imageArray().push(
			(this.fb.group({
				imageId: [''],
				imagePath:[''],
			})) as FormGroup)
			this.tourImg.push("../../../../assets/icons/no_image.png");
	}

	removeImage(i: number){
		this.imageArray().removeAt(i)
		this.tourImg.splice(i,1)

	}










	onSubmit(){
		if (this.tourForm.invalid){
			console.log("submit clicked");
			alert(JSON.stringify(this.tourForm.value, null, 4));
		}else{
			console.log(JSON.stringify(this.tourForm.value, null, 4));
			alert(JSON.stringify(this.tourForm.value, null, 4));
		}
	}
}
