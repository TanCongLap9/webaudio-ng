import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { BiquadFilter } from '../../models/biquad-filter.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biquad-filter-options',
  imports: [FormsModule],
  templateUrl: './biquad-filter-options.component.html'
})
export class BiquadFilterOptionsComponent implements OnInit {
  @Input({required: true})
  model!: Node2<AudioNode | AudioContext>;
  
  modelAs!: BiquadFilter;

  ngOnInit(): void {
    this.modelAs = this.model as BiquadFilter;
  }
}
