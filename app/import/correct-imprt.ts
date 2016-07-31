import { Component, OnInit } from '@angular/core';
import {
    CONFIG,
    EntityService,
    ExceptionService,
    FilterTextComponent,
    InitCapsPipe,
    SpinnerService,
    ToastService
    } from 'shared';
@Component({
    selector: 'toh-heroes',
    templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
