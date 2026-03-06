import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-portfolio-ai',
  templateUrl: './portfolio-ai.component.html'
})
export class PortfolioAiComponent {

  message = '';
  response = '';

  constructor(private http: HttpClient) {}

  askAI() {

    this.http.post('/api/chat', {
      message: this.message
    }).subscribe((res: any) => {
      this.response = res.reply;
    });

  }

}