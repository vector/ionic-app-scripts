import { BuildContext, ChangedFile } from './util/interfaces';
export declare function webpack(context: BuildContext, configFile: string): Promise<void>;
export declare function webpackUpdate(changedFiles: ChangedFile[], context: BuildContext, configFile: string): Promise<void>;
export declare function webpackWorker(context: BuildContext, configFile: string): Promise<any>;
export declare function getWebpackConfig(context: BuildContext, configFile: string): WebpackConfig;
export declare function getOutputDest(context: BuildContext, webpackConfig: WebpackConfig): string;
export interface WebpackConfig {
    devtool: string;
    entry: string;
    output: WebpackOutputObject;
    resolve: WebpackResolveObject;
}
export interface WebpackOutputObject {
    path: string;
    filename: string;
}
export interface WebpackResolveObject {
    extensions: string[];
    modules: string[];
}