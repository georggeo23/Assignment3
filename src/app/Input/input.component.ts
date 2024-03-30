import { Component } from '@angular/core';
import {ServicePreferenceService} from "../service-preference.service";
import {UserPreference} from "../user-preference";
import {ServiceQuality} from "../service-quality";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  userPreference: UserPreference = new UserPreference();

  constructor(private service: ServicePreferenceService, private router: Router) {
  }

  protected readonly MealChoice = ServiceQuality;

  onSubmit(): void {
    this.service.submitUserPreference(this.userPreference);
    this.router.navigate(["/output"]);
  }

  protected readonly ServiceQuality = ServiceQuality;
}
