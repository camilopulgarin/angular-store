import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal<number>(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
