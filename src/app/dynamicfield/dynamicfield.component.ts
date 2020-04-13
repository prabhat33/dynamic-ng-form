import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamicfield',
  templateUrl: './dynamicfield.component.html',
  styleUrls: ['./dynamicfield.component.scss']
})
export class DynamicfieldComponent implements OnInit {
  @Input() field;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   }

  private asFormArray(ctrl: AbstractControl): FormArray {
    return ctrl as FormArray;
  }

  // public addQuestion(): void {
  //   this.fieldArray.push(this.fb.control(''));
  // }

  // public removeQuestion(index: number): void {
  //   this.fieldArray.removeAt(index);
  // }

  public get fieldArray(): FormArray {
    return this.form.get(this.field.key) as FormArray;
  }

  public get IsIterable(): boolean {
    return !!this.field && this.field.iterable;
  }

  public fieldControl(index?: number): AbstractControl {
    return this.IsIterable ? this.asFormArray(this.form.get(this.field.key)).controls[index] : this.form.get(this.field.key);
  }

  public fieldId(index?: number): string {
    return this.IsIterable ? `${this.field.key}-${index}` : this.field.key;
  }

  public fieldLabel(index?: number): string {
    return this.IsIterable ? `${this.field.label} n°${index + 1}` : this.field.label;
  }
}
