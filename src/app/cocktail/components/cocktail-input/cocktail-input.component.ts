import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cocktail-input',
  templateUrl: './cocktail-input.component.html',
  styleUrls: ['./cocktail-input.component.css'],
})
export class CocktailInputComponent implements OnInit {
  // emit terms
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // write emit
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  terms: string = '';
  search() {
    this.onEnter.emit(this.terms);
  }

  keyPress() {
    this.debouncer.next(this.terms);
  }

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }
}
