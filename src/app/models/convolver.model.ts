import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class Convolver extends Node2<ConvolverNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `Convolver${++Convolver.count}`,
            Node2.context.createConvolver()
        );
    }
}
