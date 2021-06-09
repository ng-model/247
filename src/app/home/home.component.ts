import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import data from './one.json';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date: string;
  questions = data;
  answers = [];
  selected = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.date = format(new Date(2021, 5, 7), 'dd/MM/yyyy');
    alert('h')
    this.getAnswers();
  }

  getAnswers() {
    this.questions.forEach(element => {
      this.answers.push(element.answer);
    });
    console.log(this.answers);
  }

  changeSelection(value) {
    this.selected.push(value);
  }

  submit() {
    const ans = this.answers.filter(element => this.selected.includes(element));
    console.log(ans);
    this.toastr.success(`${ans.length} were right!`, 'Successful');
    this.selected = [];
  }

}
