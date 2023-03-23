# Purpose

This repo reproduces the bug reported in https://github.com/newrelic/node-newrelic-aws-sdk/issues/175

Based on Newrelic's example node repo

#To Run

Use node 14+

    cd library && npm i && npm link && cd ..
    cd main && npm link @example/newrelic-node-bug-example-library && npm i

    npm run start

#Example output


```
> newrelic-node-bug-example-main@1.0.0 start newrelic-node-bug-example/main
> node -r ./instrumentation index.js

[NEWRELIC] instrumenting ./nifty-messages
[NEWRELIC] instrumenting method 'publish'
[NEWRELIC] instrumenting method 'purge'
[NEWRELIC] instrumenting callbacks of method 'getMessage'
[NEWRELIC] instrumenting callbacks of method 'subscribe'
newrelic-node-bug-example/library/node_modules/@aws-sdk/middleware-stack/dist-cjs/MiddlewareStack.js:130
                        throw new Error(`Duplicate middleware name '${name}'`);
                        ^

Error: Duplicate middleware name 'NewRelicHeader'
    at Object.add (newrelic-node-bug-example/library/node_modules/@aws-sdk/middleware-stack/dist-cjs/MiddlewareStack.js:130:31)
    at Object.applyToStack (newrelic-node-bug-example/library/node_modules/@newrelic/aws-sdk/lib/v3/smithy-client.js:33:19)
    at Object.use (newrelic-node-bug-example/library/node_modules/@aws-sdk/middleware-stack/dist-cjs/MiddlewareStack.js:167:20)
    at S3Client.wrapShim (newrelic-node-bug-example/library/node_modules/@newrelic/aws-sdk/lib/v3/util.js:33:26)
    at new WrappedClass (newrelic-node-bug-example/library/node_modules/newrelic/lib/shim/shim.js:2048:30)
    at new S3Client (newrelic-node-bug-example/library/node_modules/@aws-sdk/client-s3/dist-cjs/S3Client.js:31:9)
    at new S3StreamLogger (newrelic-node-bug-example/library/node_modules/s3-streamlogger/index.js:69:25)
    at new Logger (newrelic-node-bug-example/library/log-generator.js:28:23)
    at Object.<anonymous> (newrelic-node-bug-example/main/index.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! newrelic-node-bug-example-main@1.0.0 start: `node -r ./instrumentation index.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the newrelic-node-bug-example-main@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

```