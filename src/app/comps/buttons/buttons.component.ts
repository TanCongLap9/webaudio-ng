import { Component } from "@angular/core";
import { NodeService } from "../../node.service";

@Component({
    selector: "app-buttons",
    templateUrl: "./buttons.component.html"
})
export class ButtonsComponent {
    toggleConnect() {
        if (this.service.selectMode === 1) {
            this.service.nodeToConnect = null;
            this.service.selectMode = 0;
        }
        else {
            this.service.selectMode = 1;
        }
    }
    toggleDisconnect() {
        if (this.service.selectMode === 2) {
            this.service.nodeToConnect = null;
            this.service.selectMode = 0;
        }
        else {
            this.service.selectMode = 2;
        }
    }
    constructor(protected service: NodeService) { }
}