import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class AudioContext2 extends Node2<AudioContext> {
    static count = 0;
    constructor(service: NodeService, main = false) {
        super(
            service,
            `AudioContext${++AudioContext2.count}`,
            main ? Node2.context : new window.AudioContext(),
            main
        );
    }
}
