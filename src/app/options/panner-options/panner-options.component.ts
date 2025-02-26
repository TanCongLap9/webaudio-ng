import { Component, Input } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { Panner } from '../../models/panner.model';

@Component({
  selector: 'app-panner-options',
  imports: [FormsModule],
  templateUrl: './panner-options.component.html'
})
export class PannerOptionsComponent {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;

  modelAs!: Panner;

  ngOnInit(): void {
    this.modelAs = this.model as Panner;
  }
}
