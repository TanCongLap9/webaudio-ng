import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class StereoPanner extends Node2<StereoPannerNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `StereoPanner${++StereoPanner.count}`,
            Node2.context.createStereoPanner()
        );
    }
}
