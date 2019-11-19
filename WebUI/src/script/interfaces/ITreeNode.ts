import { TreeNode } from '@/script/types/TreeNode';

export interface ITreeNode {
	id: string;
	name: string;
	type: string;
	children?: ITreeNode[];
	state?: ITreeNodeState;
	content?: any[];
	parent?: TreeNode;
	props?: any;
	data?: any;
	loadOnDemand?: boolean;
}

export interface ITreeNodeState {
	collapsing?: boolean;
	depth: number;
	expanding?: boolean;
	open?: boolean;
	path?: string;
	prefixMask?: string;
	selected?: boolean;
	total?: number;
}
