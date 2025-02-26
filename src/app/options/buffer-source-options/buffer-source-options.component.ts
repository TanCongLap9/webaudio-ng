import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { BufferSource } from '../../models/buffer-source.model';

@Component({
  selector: 'app-buffer-source-options',
  imports: [FormsModule],
  templateUrl: './buffer-source-options.component.html'
})
export class BufferSourceOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;

  modelAs!: BufferSource;
  isBufferLoading = false;

  ngOnInit(): void {
    this.modelAs = this.model as BufferSource;
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
