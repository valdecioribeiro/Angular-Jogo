import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
      OnInit, 
      OnChanges, 
      DoCheck, 
      AfterContentInit, 
      AfterContentChecked, 
      AfterViewInit, 
      AfterViewChecked,
      OnDestroy {

  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string; 

  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!!");
    console.log("Text content -> " + this.header.nativeElement.textContent);
    console.log("Text of content of paragraph -> " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!!")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!!")
    console.log("Text of content of paragraph -> " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentchecked called!!")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!!")
    console.log("Text content -> " + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewchecked called!!")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called!!")
  }

}
