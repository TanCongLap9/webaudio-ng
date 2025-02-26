import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { Gain } from '../../models/gain.model';

@Component({
  selector: 'app-gain-options',
  imports: [FormsModule],
  templateUrl: './gain-options.component.html'
})
export class GainOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;
  
  modelAs!: Gain;

  ngOnInit(): void {
    this.modelAs = this.model as Gain;
  }
}
