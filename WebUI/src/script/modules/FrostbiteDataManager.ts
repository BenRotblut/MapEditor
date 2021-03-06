import { signals } from '@/script/modules/Signals';
import * as JSZip from 'jszip';
import { JSZipUtils } from '@/script/libs/jszip-utils';
import { FBBundle } from '@/script/types/gameData/FBBundle';
import { FBSuperBundle } from '@/script/types/gameData/FBSuperBundle';

export class FrostbiteDataManager {
	private superBundles: { all: FBSuperBundle };
	private bundles: { all: FBBundle };
	private partitions: object;
	private files: object;
	private data: object;

	constructor() {
		// this.window = new ImportWindow();

		this.superBundles = {
			all: new FBSuperBundle({
				name: 'all',
				chunkCount: 0,
				bundleCount: 0
			})
		};
		this.bundles = {
			all: new FBBundle({
				name: 'all',
				partitionCount: 0,
				size: 0
			})
		};
		this.partitions = {};

		this.files = {};
		this.data = {};

		signals.editor.Initializing.connect(this._onEditorInitializing.bind(this));
		signals.editor.Ready.connect(this._onEditorReady.bind(this));

		// this._Init();
	}

	public _Init() {
		const scope = this;
		const jszu = new JSZipUtils();
		jszu.getBinaryContent('data/data.zip', (err: any, data: any) => {
			if (err) {
				throw err; // or handle err
			}
			JSZip.loadAsync(data).then((zip) => {
				scope.data = zip;
				scope._ExtractFiles();
			});
		});
	}

	public _onEditorInitializing() {
		// editor.ui.RegisterWindow("ImportWindow", "Import bundle", this.window, false);
	}

	public _onEditorReady() {
		/* let scope = this;

		editor.ui.RegisterMenubarEntry(["Edit", "Import"], function () {
			editor.ui.OpenWindow("importwindow");
			scope.window.dom.dispatchEvent(new Event('resize')); // fix GoldenLayout having invalid sizes
			scope.window.Update();
		} );

		 */
	}

	public _ExtractFiles() {
		/*
		const scope = this;
		if (scope._data === null) {
			return false;
		}
		Object.keys(scope._data.files).forEach(function(fileNameJson) {
			// Add filetype check here maybe?
			const fileName = fileNameJson.replace('.json', '');
			scope._data.file(fileNameJson).async('string').then(function(text) {
				scope._files[fileName.toLowerCase()] = JSON.parse(text);
				console.log('Loading ' + fileName);
				scope._HandleFile(fileName.toLowerCase());
			});
		});
		 */
	}

	public async _HandleFile(fileName: string) {
		/*
		p_FileName = p_FileName.toLowerCase();
		const scope = this;
		const file = scope._files[p_FileName];
		Object.keys(file).forEach(function(entryName) {
			const entry = file[entryName];
			switch (p_FileName) {
				case 'superbundles':
					scope.superBundles[entryName] = new FBSuperBundle(entry);
					break;
				case 'bundles':
					scope.bundles[entryName] = new FBBundle(entry);
					break;
				case 'partitions':
					scope.partitions[entryName] = new FBPartition(entry);
					break;
				default:
				// code block
			}
		});
		console.log('Loaded ' + p_FileName);
		 */
	}

	public getBundle(path: string) {
		/*
		return this.bundles[path];
		 */
	}

	public getSuperBundles() {
		/*
		const scope = this;
		const superBundles = {};
		Object.keys(scope._files.superbundles).forEach(function(superBundleName) {
			superBundles[superBundleName] = scope.superBundles[superBundleName];
		});
		return superBundles;

		 */
	}

	public getBundles(superBundleName?: string) {
		/*
		const scope = this;
		const bundles = [];

		if (p_SuperBundleName === undefined || p_SuperBundleName.toLowerCase() === 'all') {
			return scope.bundles;
		} else if (scope.superBundles[p_SuperBundleName.toLowerCase()] !== undefined) {
			const bundlesRaw = scope.getBundlesRaw(p_SuperBundleName);
			Object.values(bundlesRaw).forEach((bundle) => {
				bundles.push(scope.getBundle(bundle));
			});
		}
		return bundles;

		 */
	}

	public getBundlesRaw(superBundleName?: string) {
		/*
		const scope = this;
		return scope._files.superbundles[p_SuperBundleName.toLowerCase()].bundles;

		 */
	}

	public getPartition(partitionName: string) {
		// return this.partitions[p_PartitionName.toLowerCase()];
	}

	public getSuperBundle(superBundleName: string) {
		// return this.superBundles[p_SuperBundleName.toLowerCase()];
	}

	public getPartitions(bundleName?: string) {
		/*
		const scope = this;
		const partitions = {};

		if (p_BundleName === undefined || p_BundleName.toLowerCase() === 'all') {
			Object.keys(scope._files.bundles).forEach(function(bundleName) {
				const bundle = scope._files.bundles[bundleName.toLowerCase()];
				Object.values(bundle.partitions).forEach(function(partitionName) {
					const partition = scope.getPartition(partitionName);
					if (partition !== undefined) {
						partitions[partitionName] = scope.partitions[partitionName];
					}
				});
			});
		} else if (scope._files.bundles[p_BundleName.toLowerCase()] !== undefined) {
			const bundle = scope._files.bundles[p_BundleName.toLowerCase()];
			Object.values(bundle.partitions).forEach(function(partitionName) {
				const partition = scope.getPartition(partitionName);
				if (partition !== undefined) {
					partitions[partitionName] = scope.partitions[partitionName];
				}
			});
		} else {
			for (const key of Object.keys(scope._files.bundles)) {
				if (key.startsWith(p_BundleName)) {
					const bundle = scope._files.bundles[key];
					Object.values(bundle.partitions).forEach( (partitionName) => {
						const partition = scope.getPartition(partitionName);
						if (partition !== undefined) {
							partitions[partition.name] = partition;
						}
					});
				}
			}
		}
		return partitions;
		 */
	}

	public getBundlesReferencedIn(partitionName: string) {
		/*
		const superBundle = this._files.partitions[p_PartitionName.toLowerCase()];
		return superBundle.bundlesReferencedIn;

		 */
	}
}
