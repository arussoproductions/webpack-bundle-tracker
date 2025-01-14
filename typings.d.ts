import { Compiler } from 'webpack';

export = BundleTrackerPlugin;

declare class BundleTrackerPlugin {
  constructor(options?: BundleTrackerPlugin.Options);
  apply(compiler: Compiler): void;
}
declare namespace BundleTrackerPlugin {
  interface Options {
    /**
     * Output directory of the bundle tracker JSON file
     * Default: `'.'`
     */
    path?: string;
    /**
     * Name of the bundle tracker JSON file.
     * Default: `'webpack-stats.json'`
     */
    filename?: string;
    /**
     * Property to override default `output.publicPath` from Webpack config file.
     */
    publicPath?: string;
    /**
     * Output `startTime` and `endTime` properties to JSON file.
     * Default: `false`
     */
    logTime?: boolean;
    /**
     * Output relative path from JSON file into `path` properties.
     * Default: `false`
     */
    relativePath?: boolean;
    /**
     * Indent JSON output file
     */
    indent?: number;
    /**
     * Enable subresources integrity
     * Default: `false`
     */
    integrity?: boolean;
    /**
     * Set subresources integrity hashes
     * Default: `[ 'sha256', 'sha384', 'sha512' ]`
     */
    integrityHashes?: string[];
    /**
     * Like (use instead of) publicPath but takes a function that's passed assetName
     * Default: `false`
     */
    assetNameAsPublicPath?: (assetName: Options) => string;
  }
  interface Contents {
    /**
     * Status of webpack
     */
    status: string;
    /**
     * Error when webpack has failure from compilation
     */
    error?: string;
    /**
     * Error message when webpack has failure from compilation
     */
    message?: string;
    /**
     * File information
     */
    assets: {
      [name: string]: {
        name: string;
        integrity?: string;
        publicPath?: string;
        path: string;
      };
    };
    /**
     * List of chunks builded
     */
    chunks: {
      [name: string]: [
        {
          name: string;
          publicPath?: string;
          path: string;
        },
      ];
    };
    /**
     * Public path of chunks
     */
    publicPath?: string;
    /**
     * Start time of webpack compilation
     */
    startTime?: number;
    /**
     * End time of webpack compilation
     */
    endTime?: number;
  }
}
