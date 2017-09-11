import { BuildContext } from './util/interfaces';
import * as cleanCss from 'clean-css';
export declare function cleancss(context?: BuildContext, configFile?: string): Promise<void>;
export declare function cleancssWorker(context: BuildContext, configFile: string): Promise<any>;
export interface CleanCssConfig {
    sourceFileName: string;
    destFileName: string;
    options?: cleanCss.Options;
}
