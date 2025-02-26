import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class Delay extends Node2<DelayNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `Delay${++Delay.count}`,
            Node2.context.createDelay()
        );
    }
}
