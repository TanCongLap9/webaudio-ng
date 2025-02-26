import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class IIRFilter extends Node2<IIRFilterNode> {
    static count = 0;
    constructor(service: NodeService, feedforward: Iterable<number>, feedback: Iterable<number>) {
        super(
            service,
            `IIRFilter${++IIRFilter.count}`,
            Node2.context.createIIRFilter(feedforward, feedback)
        );
    }
}
