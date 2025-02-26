import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { Delay } from '../../models/delay.model';

@Component({
  selector: 'app-delay-options',
  imports: [FormsModule],
  templateUrl: './delay-options.component.html'
})
export class DelayOptionsComponent implements OnInit {
  @Input({ required: true })
  model?: Node2<AudioNode | AudioContext>;

  modelAs!: Delay;

  ngOnInit(): void {
    this.modelAs = this.model as Delay;
  }
}
