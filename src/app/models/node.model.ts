import { NodeService } from "../node.service";

interface Connection {
    from: Node2<AudioNode | AudioContext>,
    to: Node2<AudioNode | AudioContext>
}

export class Node2<T extends AudioNode | AudioContext> {
    running: boolean = false;
    static context = new AudioContext();

    static connectionsMap: Connection[] = [];

    constructor(
        public service: NodeService,
        public name: string,
        public node: T,
        public main = false) {

    }

    get connectionsFrom() {
        return Node2.connectionsMap
            .filter(o => o.to === this)
            .map(o => o.from.name);
    }

    get connector(): AudioNode {
        return this.node instanceof AudioContext
            ? this.node.destination
            : this.node;
    }

    get runnable() {
        return this.node instanceof AudioScheduledSourceNode;
    }

    connectFrom(fromNode: Node2<T>) {
        fromNode.connector.connect(this.connector);
        Node2.connectionsMap.push({ from: fromNode, to: this })
    }

    disconnect() {
        for (let i = Node2.connectionsMap.length - 1; i >= 0; i--) {
            const connection = Node2.connectionsMap[i];
            if (connection.from === this) {
                connection.from.connector.disconnect();
                Node2.connectionsMap.splice(i, 1);
            }
        }
    }

    start() {
        if (!(this.node instanceof AudioScheduledSourceNode)) return;
        this.running = true;
        this.node.start();
        this.node.onended = e => this.onStop();
    }

    stop() {
        if (!(this.node instanceof AudioScheduledSourceNode)) return;
        this.node.stop();
    }

    onStop() {
        if (!(this.node instanceof AudioScheduledSourceNode)) return;
        this.running = false;
        const newNode = this.restore(this.node);
        for (const connection of Node2.connectionsMap)
            if (connection.from === this)
                newNode.connect(connection.to.connector);
        this.node = newNode as T;
    }

    restore(node: AudioNode): AudioNode {
        return node
    }

    dispose() {
        if (!this.node) return;
        this.service.dispose(this);
    }
}
