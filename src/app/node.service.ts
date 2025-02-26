import { Injectable } from '@angular/core';
import { Node2 } from './models/node.model';
import { AudioContext2 } from './models/audio-context.model';
import { BiquadFilter } from './models/biquad-filter.model';
import { BufferSource } from './models/buffer-source.model';
import { Delay } from './models/delay.model';
import { ConstantSource } from './models/constant-source.model';
import { Convolver } from './models/convolver.model';
import { DynamicsCompressor } from './models/dynamics-compressor.model';
import { Gain } from './models/gain.model';
import { Oscillator } from './models/oscillator.model';
import { Panner } from './models/panner.model';
import { StereoPanner } from './models/stereo-panner.model';
import { Analyser } from './models/analyser.model';
import { IIRFilter } from './models/iir-filter.model';
import { ChannelMerger } from './models/channel-merger.model';
import { ChannelSplitter } from './models/channel-splitter.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  context = new AudioContext();
  nodes: Node2<AudioNode | AudioContext>[] = [
    new AudioContext2(this, true)
  ];

  static {
    (window as any).nodes = {};
  }
  
  // 0: Click & Drag
  // 1: Connect
  // 2: Disconnect
  selectMode = 0;

  holding?: any;
  initialX: number = 0;
  initialY: number = 0;
  nodeToConnect: Node2<AudioNode | AudioContext> | null = null;
  currentToSettings: object | null = null;
  connectionsMap = Node2.connectionsMap;

  createAudioContext() {
    const audioContext = new AudioContext2(this);
    (window as any).nodes[audioContext.name] = audioContext.node;
    this.nodes.push(audioContext);
  }

  createBiquadFilter() {
    const biquadFilter = new BiquadFilter(this);
    (window as any).nodes[biquadFilter.name] = biquadFilter.node;
    this.nodes.push(biquadFilter)
  }

  createBufferSource() {
    const bufferSource = new BufferSource(this);
    (window as any).nodes[bufferSource.name] = bufferSource.node;
    this.nodes.push(bufferSource);
  }

  createDelay() {
    const delay = new Delay(this);
    (window as any).nodes[delay.name] = delay.node;
    this.nodes.push(delay);
  }

  createChannelMerger() {
    const channelMerger = new ChannelMerger(this);
    (window as any).nodes[channelMerger.name] = channelMerger.node;
    this.nodes.push(channelMerger);
  }

  createChannelSplitter() {
    const channelSplitter = new ChannelSplitter(this);
    (window as any).nodes[channelSplitter.name] = channelSplitter.node;
    this.nodes.push(channelSplitter);
  }

  createConstantSource() {
    const constantSource = new ConstantSource(this);
    (window as any).nodes[constantSource.name] = constantSource.node;
    this.nodes.push(constantSource);
  }

  createConvolver() {
    const convolver = new Convolver(this);
    (window as any).nodes[convolver.name] = convolver.node;
    this.nodes.push(convolver);
  }

  createDynamicsCompressor() {
    const dynamicsCompressor = new DynamicsCompressor(this);
    (window as any).nodes[dynamicsCompressor.name] = dynamicsCompressor.node;
    this.nodes.push(dynamicsCompressor);
  }

  createGain() {
    const gain = new Gain(this);
    (window as any).nodes[gain.name] = gain.node;
    this.nodes.push(gain);
  }

  createOscillator() {
    const oscillator = new Oscillator(this);
    (window as any).nodes[oscillator.name] = oscillator.node;
    this.nodes.push(oscillator);
  }

  createPanner() {
    const panner = new Panner(this);
    (window as any).nodes[panner.name] = panner.node;
    this.nodes.push(panner);
  }

  createStereoPanner() {
    const stereoPanner = new StereoPanner(this);
    (window as any).nodes[stereoPanner.name] = stereoPanner.node;
    this.nodes.push(stereoPanner);
  }

  createAnalyser() {
    const analyser = new Analyser(this);
    (window as any).nodes[analyser.name] = analyser.node;
    this.nodes.push(analyser);
  }

  // TODO: Initialization Dialog
  createIIRFilter() {
    const iirFilter = new IIRFilter(this, [2,3], [4,5]);
    (window as any).nodes[iirFilter.name] = iirFilter.node;
    this.nodes.push(iirFilter);
  }

  dispose(node: Node2<AudioNode | AudioContext>) {
    if (node.node instanceof AudioNode)
      node.disconnect();
    const found = this.nodes.findIndex(o => o === node);
    if (found !== -1) this.nodes.splice(found, 1);
    delete (window as any).nodes[node.name];
  }

  // getDialog(node: object) {
  //   switch (node.constructor.name) {
  //     case AnalyserNode.name:
  //       return "#dialog-analyser";
  //     case AudioContext.name:
  //       return "#dialog-audiocontext";
  //     case BiquadFilterNode.name:
  //       return "#dialog-biquadfilter";
  //     case AudioBufferSourceNode.name:
  //       return "#dialog-buffersource";
  //     case ConstantSourceNode.name:
  //       return "#dialog-constantsource";
  //     case ConvolverNode.name:
  //       return "#dialog-convolver";
  //     case DelayNode.name:
  //       return "#dialog-delay";
  //     case DynamicsCompressorNode.name:
  //       return "#dialog-dynamicscompressor";
  //     case GainNode.name:
  //       return "#dialog-gain";
  //     case OscillatorNode.name:
  //       return "#dialog-oscillator";
  //     case PannerNode.name:
  //       return "#dialog-panner";
  //     case StereoPannerNode.name:
  //       return "#stereodialog-panner";
  //   }
  //   return undefined;
  // }

  getType(node: AudioNode | AudioContext) {
    return node.constructor.name;
  }
}
