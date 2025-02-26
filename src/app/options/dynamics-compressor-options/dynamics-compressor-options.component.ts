import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { DynamicsCompressor } from '../../models/dynamics-compressor.model';

@Component({
  selector: 'app-dynamics-compressor-options',
  imports: [FormsModule],
  templateUrl: './dynamics-compressor-options.component.html'
})
export class DynamicsCompressorOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;

  modelAs!: DynamicsCompressor;

  ngOnInit(): void {
    this.modelAs = this.model as DynamicsCompressor;
  }
}
