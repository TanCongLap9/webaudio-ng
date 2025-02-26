import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class BiquadFilter extends Node2<BiquadFilterNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `BiquadFilter${++BiquadFilter.count}`,
            Node2.context.createBiquadFilter()
        );
    }
}
