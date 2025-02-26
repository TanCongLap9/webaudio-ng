import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyserOptionsComponent } from "./options/analyser-options/analyser-options.component";
import { BiquadFilterOptionsComponent } from "./options/biquad-filter-options/biquad-filter-options.component";
import { BufferSourceOptionsComponent } from "./options/buffer-source-options/buffer-source-options.component";
import { ConstantSourceOptionsComponent } from "./options/constant-source-options/constant-source-options.component";
import { ConvolverOptionsComponent } from "./options/convolver-options/convolver-options.component";
import { DynamicsCompressorOptionsComponent } from "./options/dynamics-compressor-options/dynamics-compressor-options.component";
import { DelayOptionsComponent } from "./options/delay-options/delay-options.component";
import { GainOptionsComponent } from "./options/gain-options/gain-options.component";
import { OscillatorOptionsComponent } from "./options/oscillator-options/oscillator-options.component";
import { PannerOptionsComponent } from "./options/panner-options/panner-options.component";
import { StereoPannerOptionsComponent } from "./options/stereo-panner-options/stereo-panner-options.component";
import { NodeComponent } from "./comps/node/node.component";
import { CommonModule } from '@angular/common';
import { NodeService } from './node.service';
import { ButtonsComponent } from "./comps/buttons/buttons.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, AnalyserOptionsComponent, BiquadFilterOptionsComponent, BufferSourceOptionsComponent, ConstantSourceOptionsComponent, ConvolverOptionsComponent, DynamicsCompressorOptionsComponent, DelayOptionsComponent, GainOptionsComponent, OscillatorOptionsComponent, PannerOptionsComponent, StereoPannerOptionsComponent, NodeComponent, ButtonsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public service: NodeService) { }
}
