import { BufferReader } from "../../BufferReader";
import { ActorControlTarget } from "../../definitions";

export function actorControlTarget(reader: BufferReader): ActorControlTarget {
	return {
		category: reader.nextUInt16(),
		padding: reader.nextUInt16(),
		param1: reader.nextUInt32(),
		param2: reader.nextUInt32(),
		param3: reader.nextUInt32(),
		param4: reader.nextUInt32(),
		padding1: reader.nextUInt32(),
		targetId: reader.nextUInt64(),
	};
}
