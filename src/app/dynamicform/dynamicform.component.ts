import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent implements OnInit {
 @Input() public fields;
 form: FormGroup;
 payLoad = '';

  constructor( public qcs : FormControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = this.form.value;
  }

}
