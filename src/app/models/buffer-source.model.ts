import { NodeService } from "../node.service";
import { Node2 } from "./node.model";

export class BufferSource extends Node2<AudioBufferSourceNode> {
    static count = 0;
    constructor(service: NodeService) {
        super(
            service,
            `BufferSource${++BufferSource.count}`,
            Node2.context.createBufferSource()
        );
    }

    override restore(node: AudioBufferSourceNode) {
        const newNode = Node2.context.createBufferSource();
        newNode.buffer = node.buffer;
        newNode.playbackRate.value = node.playbackRate.value;
        newNode.detune.value = node.detune.value;
        newNode.loop = node.loop;
        newNode.loopStart = node.loopStart;
        newNode.loopEnd = node.loopEnd;
        return newNode;
    }
}
