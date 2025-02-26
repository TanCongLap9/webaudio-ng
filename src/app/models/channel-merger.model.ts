import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class ChannelMerger extends Node2<ChannelMergerNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `ChannelMerger${++ChannelMerger.count}`,
            Node2.context.createChannelMerger()
        );
    }
}