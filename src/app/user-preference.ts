import {ServiceQuality} from "./service-quality";
class TipCalculator {
  private userPreference: UserPreference;

  constructor(userPreference: UserPreference) {
    this.userPreference = userPreference;
  }

  calculateTip(): number {
    let tipAmount = this.userPreference.costOfService * this.userPreference.serviceQuality;
    if (this.userPreference.roundTip) {
      tipAmount = Math.ceil(tipAmount);
    } else {
      tipAmount = Math.ceil(tipAmount * 100) / 100; // rounding up to nearest cent
    }
    return tipAmount;
  }

  calculateTotalBill(): number {
    return this.userPreference.costOfService + this.calculateTip();
  }
}
export class UserPreference {
  userName: string = "";
  costOfService: number=0;
  serviceQuality: ServiceQuality = ServiceQuality.GOOD;
  roundTip: boolean = false;
  calculateTip(): number {
    let tipAmount = this.costOfService * this.serviceQuality;
    if (this.roundTip) {
      tipAmount = Math.ceil(tipAmount);
    } else {
      tipAmount = Math.ceil(tipAmount * 100) / 100; // rounding up to nearest cent
    }
    return tipAmount;
  }
  calculateTotalBill(): number {
    return this.costOfService + this.calculateTip();
  }
}
