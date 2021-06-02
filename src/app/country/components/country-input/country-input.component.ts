import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/internal/operators/debounceTime";

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  term: string = "";

  @Input() placeholder: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit(){
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(val=>{
      this.onDebounce.emit(val);
    });
  }

  search(): void{
    this.onEnter.emit(this.term);
  }

  keyPressed(){
    this.debouncer.next(this.term);
  }

}
