import { FileCache } from '../util/file-cache';
import { Logger } from '../logger/logger';
import { HybridFileSystem } from './hybrid-file-system';
import { WatchMemorySystem } from './watch-memory-system';

export class IonicEnvironmentPlugin {
  constructor(private fileCache: FileCache) {
  }

  apply(compiler: any) {
    compiler.plugin('environment', (otherCompiler: any, callback: Function) => {
      Logger.debug('[IonicEnvironmentPlugin] apply: creating environment plugin');
      const hybridFileSystem = new HybridFileSystem(this.fileCache, compiler.inputFileSystem);
      compiler.inputFileSystem = hybridFileSystem;

      if (compiler.resolvers.normal) {
        compiler.resolvers.normal.fileSystem = compiler.inputFileSystem;
      } else {
        compiler.resolvers.normal = {fileSystem: compiler.inputFileSystem};
      }

      if (compiler.resolvers.normal) {
        compiler.resolvers.context.fileSystem = compiler.inputFileSystem;
      } else {
        compiler.resolvers.context = {fileSystem: compiler.inputFileSystem};
      }

      if (compiler.resolvers.normal) {
        compiler.resolvers.loader.fileSystem = compiler.inputFileSystem;
      } else {
        compiler.resolvers.loader = {fileSystem: compiler.inputFileSystem};
      }

      // TODO - we can set-up the output file system here for in-memory serving
      compiler.watchFileSystem = new WatchMemorySystem(this.fileCache);
    });
  }
}
