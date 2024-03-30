import { Component } from '@angular/core';
import {ServiceQuality} from "../service-quality";
import {UserPreference} from "../user-preference";
import {ServicePreferenceService} from "../service-preference.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  userPreference: UserPreference;
  constructor(service: ServicePreferenceService) {
    this.userPreference = service.userPreference;
  }
}
