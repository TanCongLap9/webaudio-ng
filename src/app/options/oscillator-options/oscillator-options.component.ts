import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Node2 } from '../../models/node.model';
import { Oscillator } from '../../models/oscillator.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oscillator-options',
  imports: [FormsModule, CommonModule],
  templateUrl: './oscillator-options.component.html',
  styleUrl: "./oscillator.options.component.css"
})
export class OscillatorOptionsComponent implements OnInit {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>

  type: OscillatorType = "sine";
  modelAs!: Oscillator;
  periodicWaveLength: number = 5;

  createArray(length: number) {
    return new Array(length).fill(0);
  }

  ngOnInit(): void {
    this.modelAs = this.model as Oscillator;
  }

  set(array: Array<number>, i: number, target: EventTarget) {
    const elem = target as HTMLInputElement;
    array[i] = Number(elem.value);
    this.modelAs.periodicWave = Node2.context.createPeriodicWave(this.modelAs.real, this.modelAs.imag);
    this.modelAs.node.setPeriodicWave(this.modelAs.periodicWave);
  }

  handleTypeInput(target: EventTarget) {
    const elem = target as HTMLInputElement;
    if (elem.value !== "custom") {
      this.modelAs.node.type = elem.value as OscillatorType;
    }
    else {
      this.modelAs.node.setPeriodicWave(this.modelAs.periodicWave);
    }
  }

  handlePeriodicWaveLengthInput(target: EventTarget) {
    const elem = target as HTMLInputElement;
    if (Number(elem.value) < 0) return;
    console.log("length");
    
    const delta = Number(elem.value) - this.modelAs.real.length;
    if (delta < 0) {
      this.modelAs.real.splice(this.modelAs.real.length + delta, -delta);
      this.modelAs.imag.splice(this.modelAs.imag.length + delta, -delta);
    }
    else {
      const a = new Array<number>(delta).fill(0);
      this.modelAs.real.splice(this.modelAs.real.length, 0, ...a);
      this.modelAs.imag.splice(this.modelAs.imag.length, 0, ...a);
    }
  }
}
