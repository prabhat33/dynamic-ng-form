import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic-form';

  questions = [{
    key: '123',
    label: 'Name',
    required: true,
    controlType: 'textbox',
    placeholder: 'Name',
    iterable: false,
  },
  {
    key: '1234',
    label: 'Email',
    required: true,
    controlType: 'textbox',
    placeholder: 'Email',
    iterable: false,
  },
  {
    key: '12345',
    label: 'Select',
    required: true,
    controlType: 'dropdown',
    placeholder: 'Select example',
    iterable: false,
    options: [
      {key: 1, value: 'First'},
      {key: 2, value: 'Second'},
    ]
  }
  ];
}
