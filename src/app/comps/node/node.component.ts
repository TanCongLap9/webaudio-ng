import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NodeService } from '../../node.service';
import { Node2 } from '../../models/node.model';

@Component({
  selector: 'app-node',
  imports: [CommonModule],
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent {
  @Input({ required: true })
  model!: Node2<AudioNode | AudioContext>;
  displayingSettings = false;

  @Input()
  main = false;

  left = 300;
  top = 200;

  constructor(protected service: NodeService) { }

  handleDown = (e: any) => {
    if (e.target instanceof HTMLInputElement) return;
    switch (this.service.selectMode) {
      case 1:
        if (!this.service.nodeToConnect) {
          this.service.nodeToConnect = this.model;
        }
        else {
          this.model.connectFrom(this.service.nodeToConnect);
          this.service.nodeToConnect = null;
        }
        break;
      case 2:
        this.model.disconnect();
        break;
      default:
        if (e.type === "touchstart") {
          this.service.initialX = e.touches[0].clientX - this.left;
          this.service.initialY = e.touches[0].clientY - this.top;
        }
        else {
          this.service.initialX = e.clientX - this.left;
          this.service.initialY = e.clientY - this.top;
        }
        this.service.holding = true;
        break;
    }
  }

  handleMove(e: any) {
    if (!this.service.holding) return;
    if (e.type === "touchmove") {
      this.left = e.touches[0].clientX - this.service.initialX;
      this.top = e.touches[0].clientY - this.service.initialY;
    } else {
      this.left = e.clientX - this.service.initialX;
      this.top = e.clientY - this.service.initialY;
    }
  }

  handleUp(e: any) {
    this.service.holding = false;
    this.service.initialX = this.left;
    this.service.initialY = this.top;
  }

  settings() {
    this.displayingSettings = !this.displayingSettings;
  }
}
