import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class Gain extends Node2<GainNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `Gain${++Gain.count}`,
            Node2.context.createGain()
        );
    }
}
