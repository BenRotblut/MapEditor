class GameObject {
	constructor(id, name, type, transform, instance, webObject) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.transform = transform;
		this.instance = instance;
		this.webObject = webObject;
	}
}

class Group extends GameObject{
	constructor(id, name, children) {
		super(id, name, "group");
		this.children = children;
	}
}
class Vec3 {
	constructor(x,y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

class Blueprint {
	constructor(partitionGuid, instanceGuid, name, variations) {
		this.partitionGuid = partitionGuid;
		this.instanceGuid = instanceGuid;
		this.name = name;
		this.variations = variations;
	}
}

class LinearTransform {
	constructor(left, up, forward, trans) {
		this.left = left;
		this.up = up;
		this.forward = forward;
		this.trans = trans;
	}

	getMatrix() {
		return [this.left.x, this.left.y, this.left.z, this.up.x, this.up.y, this.up.z, this.forward.x, this.forward.y, this.forward.z, this.trans.x, this.trans.y, this.trans.z];
	}

	setMatrixFromString(matrixString) {
		let matrix = matrixString.split(",");
		this.left = new Vec3(
			Number(matrix[0]),
			Number(matrix[1]),
			Number(matrix[2]));
		
		this.up = new Vec3(
			Number(matrix[3]),
			Number(matrix[4]),
			Number(matrix[5]));

		this.forward = new Vec3(
			Number(matrix[6]),
			Number(matrix[7]),
			Number(matrix[8]));

		this.trans = new Vec3(
			Number(matrix[9]),
			Number(matrix[10]),
			Number(matrix[11]));
		return this;
	}
}


class Variation {
	constructor(name, nameHash) {
		this.name = name;
		this.nameHash = nameHash;
	}
}


class Camera {
	constructor(transform, fov) {
		this.transform = transform;
		this.fov = fov;
	}

	SetFov(fov) {
		this.fov = fov
		//Update the three stuff
	}

	SetTransform(transform) {
		this.transform = transform
		//Update the three stuff
	}
}