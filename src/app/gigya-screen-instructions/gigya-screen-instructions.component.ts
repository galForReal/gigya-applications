import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gigya-screen-instructions',
  templateUrl: './gigya-screen-instructions.component.html',
  styleUrl: './gigya-screen-instructions.component.css'
})
export class GigyaScreenInstructionsComponent {
  @Input() instructions? : string;
}
