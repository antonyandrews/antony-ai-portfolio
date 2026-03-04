import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ai-live-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './ai-live-demo.component.html',
  styleUrls: ['./ai-live-demo.component.scss']
})
export class AiLiveDemoComponent {

  prompt = '';
  response = '';
  displayedText = '';
  loading = false;

  async streamAI(customPrompt?: string) {
    const finalPrompt = customPrompt || this.prompt;
    if (!finalPrompt) return;

    this.response = '';
    this.displayedText = '';
    this.loading = true;

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: finalPrompt }),
      headers: { 'Content-Type': 'application/json' }
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;

      const chunk = decoder.decode(value);
      this.response += chunk;
      this.typeWriterEffect();
    }

    this.loading = false;
  }

  typeWriterEffect() {
    let i = this.displayedText.length;
    const interval = setInterval(() => {
      if (i < this.response.length) {
        this.displayedText += this.response[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  }

  explainCode() {
    this.streamAI(`Explain this Angular code:\n\n${this.prompt}`);
  }

  analyzeResume(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.streamAI(`Analyze this resume and suggest improvements for freelancing: ${file.name}`);
  }
}