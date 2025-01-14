import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ILinkInformation} from '../interfaces/IGigyaModuleItem';

@Component({
  selector: 'app-gigya-screen-instructions',
  templateUrl: './gigya-screen-instructions.component.html',
  styleUrl: './gigya-screen-instructions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GigyaScreenInstructionsComponent implements OnInit{
  @Input() instructions? : Array<string | ILinkInformation>;

  ngOnInit(): void {
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }
}
