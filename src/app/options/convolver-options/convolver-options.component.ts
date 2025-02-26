import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { Convolver } from '../../models/convolver.model';

@Component({
  selector: 'app-convolver-options',
  imports: [FormsModule],
  templateUrl: './convolver-options.component.html'
})
export class ConvolverOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;
  
  modelAs!: Convolver;
  isBufferLoading = false;

  ngOnInit(): void {
    this.modelAs = this.model as Convolver;
  }

  async handleBufferChange(e: EventTarget) {
    const elem = e as HTMLInputElement;

    this.isBufferLoading = true;
    if (elem.files![0]) {
      this.modelAs.node.buffer = await elem.files![0]
        .arrayBuffer()
        .then(buf => Node2.context.decodeAudioData(buf));
    }
    else this.modelAs.node.buffer = null;
    this.isBufferLoading = false;
  }
}
