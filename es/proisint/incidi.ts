class BonusProperty {
  private _prop3: string;

  constructor() {
    this._prop3 = "bonus";
  }

  get prop3(): string {
    return this._prop3;
  }

  set prop3(value: string) {
    if (value && typeof value === 'string') {
      this._prop3 = value;
    }
  }
}

// Usage
const bonusProperty = new BonusProperty();
console.log(bonusProperty.prop3); // Output: bonus
bonusProperty.prop3 = "updated bonus";
console.log(bonusProperty.prop3); // Output: updated bonus
