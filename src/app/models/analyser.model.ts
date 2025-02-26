import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class Analyser extends Node2<AnalyserNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `Analyser${++Analyser.count}`,
            Node2.context.createAnalyser()
        );
    }
}
