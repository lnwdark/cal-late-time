import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'คำนวนเงินมาสาย';

  total: number = 0;
  salary: number;
  amount: number;

  cal(): void {
    if (this.salary && this.amount) {
      const sum = (this.salary / 30) / 8 * this.amount;
      console.log(sum);
      this.total = sum;
    }

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
