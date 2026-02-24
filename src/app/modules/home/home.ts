import { Component } from '@angular/core';
import { NoteCard } from "../../shared/note-card/note-card";

@Component({
  selector: 'app-home',
  imports: [NoteCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
