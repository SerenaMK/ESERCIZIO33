import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-td',
    templateUrl: './form-td.component.html',
    styleUrls: ['./form-td.component.scss']
})
export class FormTdComponent implements OnInit {

    constructor() { }

    @ViewChild('form', { static: true }) form!: NgForm;

    powers = [
        {
            label: "super forte",
            value: "super forte"
        },
        {
            label: "volare",
            value: "volare"
        },
        {
            label: "occhi laser",
            value: "occhi laser"
        },
    ]

    hero: any = {
        name: "",
        alter: "",
        power: "",
        enemy: "",
        planet: "",
        weakness: ""
    }

    ngOnInit(): void {
        this.form.statusChanges?.subscribe(status => {
            console.log("Stato del form: ", status);
        })
    }

    submit(form: NgForm) {
        // console.log("Form inviato: ", this.form);
        console.log("Form inviato: ", form.value);

        this.hero.name = this.form.value.name;
        this.hero.alter = this.form.value.alter;
        this.hero.power = this.form.value.power;
        this.hero.enemy = this.form.value.enemy;
        this.hero.planet = this.form.value.planet;
        this.hero.weakness = this.form.value.weakness;

        this.form.reset();
    }

}
