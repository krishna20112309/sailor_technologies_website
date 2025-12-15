import { Component } from '@angular/core';

@Component({
  selector: 'app-lets-talk',
  standalone: true,
  templateUrl: './lets-talk.component.html',
  styleUrl: './lets-talk.component.scss'
})
export class LetsTalkComponent {
formData: any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onInput(field: string, value: string) {
    this.formData[field] = value;
  }

  submit() {
    console.log('Form Data:', this.formData);

    if (!this.formData.name || !this.formData.email) {
      alert('Please fill required fields');
      return;
    }

    alert('Thank you! We will contact you soon.');
  }
}
