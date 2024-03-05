import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';
  name = "sample app"
}


function getChatBot(window: any, document: any, renderer2: any, userName: any) {

  (function(w, d, s, u) {
      w.Verloop = function(c:any) { w.Verloop._.push(c) }; 
      w.Verloop._ = []; 
      w.Verloop.url = u;
      var h = d.getElementsByTagName(s)[0], j = d.createElement(s); 
      j.async = true;
      j.src = 'https://jarvis.verloop.io/livechat/script.min.js';
      h.parentNode.insertBefore(j, h);
  })
  (window, document, 'script', 'https://jarvis.verloop.io/livechat');
  
  
  localStorage.setItem("user_name",userName)
  localStorage.setItem("user_lang", "English")
  localStorage.setItem("userID","103")
  
  window.Verloop(function(this:any){
    this.setUserId(localStorage.getItem("userID"))
    this.setRecipe("1e929168-7d15-44d4-b2e3-10e50d7ad416")
    this.setCustomField('user_name', localStorage.getItem("user_name"), {scope: 'user'})
    this.setCustomField('user_lang', localStorage.getItem("user_lang"), {scope: 'user'})
  })
  
  }
  getChatBot(window,document,Renderer2,'user12')




