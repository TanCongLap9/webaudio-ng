import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class Panner extends Node2<PannerNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `Panner${++Panner.count}`,
            Node2.context.createPanner()
        );
    }
}
