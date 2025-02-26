import { Component, Input, OnInit } from '@angular/core';
import { Node2 } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { ConstantSource } from '../../models/constant-source.model';

@Component({
  selector: 'app-constant-source-options',
  imports: [FormsModule],
  templateUrl: './constant-source-options.component.html'
})
export class ConstantSourceOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;

  modelAs!: ConstantSource;

  ngOnInit(): void {
    this.modelAs = this.model as ConstantSource;
  }
}
