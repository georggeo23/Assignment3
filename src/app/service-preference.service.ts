import { Injectable } from '@angular/core';
import {UserPreference} from "./user-preference";

@Injectable({
  providedIn: 'root'
})
export class ServicePreferenceService {

  userPreference: UserPreference = new UserPreference();

  submitUserPreference(userPreference: UserPreference): void {
    this.userPreference = userPreference;
    console.log("submitted user preference: ", userPreference);
  }
}
