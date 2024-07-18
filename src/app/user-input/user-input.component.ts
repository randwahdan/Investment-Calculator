import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enterdIntialInvestment= signal('0');
  enteredAnnualInvestment= signal ('0');
  enteredExpectedReturn= signal('5');
  enteredDuration= signal('10');

constructor(private investmentService:InvestmentService){}
  onSubmit(){
    this.investmentService.oncalculateInvestmentResults({
      initialInvestment: +this.enterdIntialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enterdIntialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

  }
}
