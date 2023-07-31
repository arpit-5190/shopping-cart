import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: '<strong>SUCCESS:</strong><p>This is a success message</p>',
    styles: [`
    strong{
        color: green;
    }`]
})
export class SuccessAlertComponent {

}