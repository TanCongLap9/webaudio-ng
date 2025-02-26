import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class DynamicsCompressor extends Node2<DynamicsCompressorNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `DynamicsCompressor${++DynamicsCompressor.count}`,
            Node2.context.createDynamicsCompressor()
        );
    }
}
