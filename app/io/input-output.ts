/* avoid */
@Component({
    selector: 'toh-hero-button',
    template: `<button></button>`,
    inputs: [
        'label'
    ],
    outputs: [
        'change'
    ]
})
export class HeroButtonComponent {
    change = new EventEmitter<any>();
    label:string;
}

// ############################################

@Component({
    selector: 'toh-hero-button',
    template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
    @Output() change = new EventEmitter<any>();
    @Input() label:string;
}
