import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-form-r',
    templateUrl: './form-r.component.html',
    styleUrls: ['./form-r.component.scss']
})
export class FormRComponent implements OnInit {

    form!: FormGroup;
    nameProibiti = ["Superman", "Spiderman", "Batman"];

    hero: any = {
        name: "",
        alter: "",
        power: "",
        enemy: "",
        planet: "",
        weakness: ""
    }

    constructor(private fb: FormBuilder) {}

    validName = (formC: FormControl) => {
        if (this.nameProibiti.includes(formC.value)) {
            return {"nameProibito":true}
        } else{
            return null;
        }
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            heroInfo: this.fb.group({
                name: this.fb.control(null, [ Validators.required, this.validName ]),
                alter: this.fb.control(null, [ Validators.required, this.validName ]),
                enemy: this.fb.control(null, [ Validators.required, this.validName ]),
                planet: this.fb.control(null, [ Validators.required, this.validName ]),
                weakness: this.fb.control(null, [ Validators.required, this.validName ])
            }),
            powers: this.fb.array([])
        });

        this.form.valueChanges.subscribe(value => {
            console.log(value);
        })
    }

    getErrorsC(name: string, error: string) {
        return this.form.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.form.get(name);
    }

    getPowersF() {
        return (this.form.get("powers") as FormArray).controls;
    }

    addPowers() {
        const control = this.fb.control(null);
        (this.form.get("powers") as FormArray).push(control);
    }

    submit(form: any) {
        console.log("------------------------------");
        console.log("FORM INVIATO: ", form.value);
        console.log("Form correttamente inviato.");

        // this.hero.name = this.form.value.heroInfo.name;
        // this.hero.alter = this.form.value.heroInfo.alter;
        // this.hero.power = this.form.value.power;
        // this.hero.enemy = this.form.value.heroInfo.enemy;
        // this.hero.planet = this.form.value.heroInfo.planet;
        // this.hero.weakness = this.form.value.heroInfo.weakness;

        this.form.reset();
    }

}
