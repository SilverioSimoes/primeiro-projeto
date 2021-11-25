import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() valorInicial: number = 10

  constructor() {
    this.log('constructor')
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngOnInit(){
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }
}
