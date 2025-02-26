import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Analyser } from '../../models/analyser.model';
import { Node2 } from '../../models/node.model';

@Component({
  selector: 'app-analyser-options',
  imports: [FormsModule],
  templateUrl: './analyser-options.component.html'
})
export class AnalyserOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;
  
  modelAs!: Analyser;

  ngOnInit(): void {
    this.modelAs = this.model as Analyser;
  }
}
