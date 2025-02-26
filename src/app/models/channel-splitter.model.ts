import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class ChannelSplitter extends Node2<ChannelSplitterNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `ChannelSplitter${++ChannelSplitter.count}`,
            Node2.context.createChannelMerger()
        );
    }
}