import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    // NO ASYNC
    // before render
    // corre una vez
    console.log('CounterComponent created');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log('changes', changes);
  }
  ngOnInit() {
    // After render
    // corre una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
  }

  ngAfterContentInit() {
    // After render
    // corre una vez
    // async, then, subs
    // hijos ya fueron renderizados
    console.log('ngAfterContentInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // before destroy
    // corre una vez
    // se ejecuta cuando el componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
