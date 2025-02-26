import { Component, Input } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { StereoPanner } from '../../models/stereo-panner.model';

@Component({
  selector: 'app-stereo-panner-options',
  imports: [FormsModule],
  templateUrl: './stereo-panner-options.component.html'
})
export class StereoPannerOptionsComponent {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;

  modelAs!: StereoPanner;

  ngOnInit(): void {
    this.modelAs = this.model as StereoPanner;
  }
}
