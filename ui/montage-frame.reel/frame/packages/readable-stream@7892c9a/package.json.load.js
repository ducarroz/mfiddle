montageDefine("7892c9a","package.json",{exports:{name:"readable-stream",version:"1.0.15",description:"An exploration of a new kind of readable streams for Node.js",main:"readable.js",dependencies:{},devDependencies:{tap:"~0.2.6"},scripts:{test:"tap test/simple/*.js"},repository:{type:"git",url:"git://github.com/isaacs/readable-stream"},keywords:["readable","stream","pipe"],author:{name:"Isaac Z. Schlueter",email:"i@izs.me",url:"http://blog.izs.me/"},license:"BSD",readme:"# readable-stream\n\nA new class of streams for Node.js\n\nThis module provides the new Stream base classes introduced in Node\nv0.10, for use in Node v0.8.  You can use it to have programs that\nhave to work with node v0.8, while being forward-compatible for v0.10\nand beyond.  When you drop support for v0.8, you can remove this\nmodule, and only use the native streams.\n\nThis is almost exactly the same codebase as appears in Node v0.10.\nHowever:\n\n1. The exported object is actually the Readable class.  Decorating the\n   native `stream` module would be global pollution.\n2. In v0.10, you can safely use `base64` as an argument to\n   `setEncoding` in Readable streams.  However, in v0.8, the\n   StringDecoder class has no `end()` method, which is problematic for\n   Base64.  So, don't use that, because it'll break and be weird.\n\nOther than that, the API is the same as `require('stream')` in v0.10,\nso the API docs are reproduced below.\n\n----------\n\n    Stability: 2 - Unstable\n\nA stream is an abstract interface implemented by various objects in\nNode.  For example a request to an HTTP server is a stream, as is\nstdout. Streams are readable, writable, or both. All streams are\ninstances of [EventEmitter][]\n\nYou can load the Stream base classes by doing `require('stream')`.\nThere are base classes provided for Readable streams, Writable\nstreams, Duplex streams, and Transform streams.\n\n## Compatibility\n\nIn earlier versions of Node, the Readable stream interface was\nsimpler, but also less powerful and less useful.\n\n* Rather than waiting for you to call the `read()` method, `'data'`\n  events would start emitting immediately.  If you needed to do some\n  I/O to decide how to handle data, then you had to store the chunks\n  in some kind of buffer so that they would not be lost.\n* The `pause()` method was advisory, rather than guaranteed.  This\n  meant that you still had to be prepared to receive `'data'` events\n  even when the stream was in a paused state.\n\nIn Node v0.10, the Readable class described below was added.  For\nbackwards compatibility with older Node programs, Readable streams\nswitch into \"old mode\" when a `'data'` event handler is added, or when\nthe `pause()` or `resume()` methods are called.  The effect is that,\neven if you are not using the new `read()` method and `'readable'`\nevent, you no longer have to worry about losing `'data'` chunks.\n\nMost programs will continue to function normally.  However, this\nintroduces an edge case in the following conditions:\n\n* No `'data'` event handler is added.\n* The `pause()` and `resume()` methods are never called.\n\nFor example, consider the following code:\n\n```javascript\n// WARNING!  BROKEN!\nnet.createServer(function(socket) {\n\n  // we add an 'end' method, but never consume the data\n  socket.on('end', function() {\n    // It will never get here.\n    socket.end('I got your message (but didnt read it)\\n');\n  });\n\n}).listen(1337);\n```\n\nIn versions of node prior to v0.10, the incoming message data would be\nsimply discarded.  However, in Node v0.10 and beyond, the socket will\nremain paused forever.\n\nThe workaround in this situation is to call the `resume()` method to\ntrigger \"old mode\" behavior:\n\n```javascript\n// Workaround\nnet.createServer(function(socket) {\n\n  socket.on('end', function() {\n    socket.end('I got your message (but didnt read it)\\n');\n  });\n\n  // start the flow of data, discarding it.\n  socket.resume();\n\n}).listen(1337);\n```\n\nIn addition to new Readable streams switching into old-mode, pre-v0.10\nstyle streams can be wrapped in a Readable class using the `wrap()`\nmethod.\n\n## Class: stream.Readable\n\n<!--type=class-->\n\nA `Readable Stream` has the following methods, members, and events.\n\nNote that `stream.Readable` is an abstract class designed to be\nextended with an underlying implementation of the `_read(size)`\nmethod. (See below.)\n\n### new stream.Readable([options])\n\n* `options` {Object}\n  * `highWaterMark` {Number} The maximum number of bytes to store in\n    the internal buffer before ceasing to read from the underlying\n    resource.  Default=16kb\n  * `encoding` {String} If specified, then buffers will be decoded to\n    strings using the specified encoding.  Default=null\n  * `objectMode` {Boolean} Whether this stream should behave\n    as a stream of objects. Meaning that stream.read(n) returns\n    a single value instead of a Buffer of size n\n\nIn classes that extend the Readable class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n### readable.\\_read(size)\n\n* `size` {Number} Number of bytes to read asynchronously\n\nNote: **This function should NOT be called directly.**  It should be\nimplemented by child classes, and called by the internal Readable\nclass methods only.\n\nAll Readable stream implementations must provide a `_read` method\nto fetch data from the underlying resource.\n\nThis method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you **are** expected to override this method in\nyour own extension classes.\n\nWhen data is available, put it into the read queue by calling\n`readable.push(chunk)`.  If `push` returns false, then you should stop\nreading.  When `_read` is called again, you should start pushing more\ndata.\n\nThe `size` argument is advisory.  Implementations where a \"read\" is a\nsingle call that returns data can use this to know how much data to\nfetch.  Implementations where that is not relevant, such as TCP or\nTLS, may ignore this argument, and simply provide data whenever it\nbecomes available.  There is no need, for example to \"wait\" until\n`size` bytes are available before calling `stream.push(chunk)`.\n\n### readable.push(chunk)\n\n* `chunk` {Buffer | null | String} Chunk of data to push into the read queue\n* return {Boolean} Whether or not more pushes should be performed\n\nNote: **This function should be called by Readable implementors, NOT\nby consumers of Readable subclasses.**  The `_read()` function will not\nbe called again until at least one `push(chunk)` call is made.  If no\ndata is available, then you MAY call `push('')` (an empty string) to\nallow a future `_read` call, without adding any data to the queue.\n\nThe `Readable` class works by putting data into a read queue to be\npulled out later by calling the `read()` method when the `'readable'`\nevent fires.\n\nThe `push()` method will explicitly insert some data into the read\nqueue.  If it is called with `null` then it will signal the end of the\ndata.\n\nIn some cases, you may be wrapping a lower-level source which has some\nsort of pause/resume mechanism, and a data callback.  In those cases,\nyou could wrap the low-level source object by doing something like\nthis:\n\n```javascript\n// source is an object with readStop() and readStart() methods,\n// and an `ondata` member that gets called when it has data, and\n// an `onend` member that gets called when the data is over.\n\nvar stream = new Readable();\n\nsource.ondata = function(chunk) {\n  // if push() returns false, then we need to stop reading from source\n  if (!stream.push(chunk))\n    source.readStop();\n};\n\nsource.onend = function() {\n  stream.push(null);\n};\n\n// _read will be called when the stream wants to pull more data in\n// the advisory size argument is ignored in this case.\nstream._read = function(n) {\n  source.readStart();\n};\n```\n\n### readable.unshift(chunk)\n\n* `chunk` {Buffer | null | String} Chunk of data to unshift onto the read queue\n* return {Boolean} Whether or not more pushes should be performed\n\nThis is the corollary of `readable.push(chunk)`.  Rather than putting\nthe data at the *end* of the read queue, it puts it at the *front* of\nthe read queue.\n\nThis is useful in certain use-cases where a stream is being consumed\nby a parser, which needs to \"un-consume\" some data that it has\noptimistically pulled out of the source.\n\n```javascript\n// A parser for a simple data protocol.\n// The \"header\" is a JSON object, followed by 2 \\n characters, and\n// then a message body.\n//\n// Note: This can be done more simply as a Transform stream.  See below.\n\nfunction SimpleProtocol(source, options) {\n  if (!(this instanceof SimpleProtocol))\n    return new SimpleProtocol(options);\n\n  Readable.call(this, options);\n  this._inBody = false;\n  this._sawFirstCr = false;\n\n  // source is a readable stream, such as a socket or file\n  this._source = source;\n\n  var self = this;\n  source.on('end', function() {\n    self.push(null);\n  });\n\n  // give it a kick whenever the source is readable\n  // read(0) will not consume any bytes\n  source.on('readable', function() {\n    self.read(0);\n  });\n\n  this._rawHeader = [];\n  this.header = null;\n}\n\nSimpleProtocol.prototype = Object.create(\n  Readable.prototype, { constructor: { value: SimpleProtocol }});\n\nSimpleProtocol.prototype._read = function(n) {\n  if (!this._inBody) {\n    var chunk = this._source.read();\n\n    // if the source doesn't have data, we don't have data yet.\n    if (chunk === null)\n      return this.push('');\n\n    // check if the chunk has a \\n\\n\n    var split = -1;\n    for (var i = 0; i < chunk.length; i++) {\n      if (chunk[i] === 10) { // '\\n'\n        if (this._sawFirstCr) {\n          split = i;\n          break;\n        } else {\n          this._sawFirstCr = true;\n        }\n      } else {\n        this._sawFirstCr = false;\n      }\n    }\n\n    if (split === -1) {\n      // still waiting for the \\n\\n\n      // stash the chunk, and try again.\n      this._rawHeader.push(chunk);\n      this.push('');\n    } else {\n      this._inBody = true;\n      var h = chunk.slice(0, split);\n      this._rawHeader.push(h);\n      var header = Buffer.concat(this._rawHeader).toString();\n      try {\n        this.header = JSON.parse(header);\n      } catch (er) {\n        this.emit('error', new Error('invalid simple protocol data'));\n        return;\n      }\n      // now, because we got some extra data, unshift the rest\n      // back into the read queue so that our consumer will see it.\n      var b = chunk.slice(split);\n      this.unshift(b);\n\n      // and let them know that we are done parsing the header.\n      this.emit('header', this.header);\n    }\n  } else {\n    // from there on, just provide the data to our consumer.\n    // careful not to push(null), since that would indicate EOF.\n    var chunk = this._source.read();\n    if (chunk) this.push(chunk);\n  }\n};\n\n// Usage:\nvar parser = new SimpleProtocol(source);\n// Now parser is a readable stream that will emit 'header'\n// with the parsed header data.\n```\n\n### readable.wrap(stream)\n\n* `stream` {Stream} An \"old style\" readable stream\n\nIf you are using an older Node library that emits `'data'` events and\nhas a `pause()` method that is advisory only, then you can use the\n`wrap()` method to create a Readable stream that uses the old stream\nas its data source.\n\nFor example:\n\n```javascript\nvar OldReader = require('./old-api-module.js').OldReader;\nvar oreader = new OldReader;\nvar Readable = require('stream').Readable;\nvar myReader = new Readable().wrap(oreader);\n\nmyReader.on('readable', function() {\n  myReader.read(); // etc.\n});\n```\n\n### Event: 'readable'\n\nWhen there is data ready to be consumed, this event will fire.\n\nWhen this event emits, call the `read()` method to consume the data.\n\n### Event: 'end'\n\nEmitted when the stream has received an EOF (FIN in TCP terminology).\nIndicates that no more `'data'` events will happen. If the stream is\nalso writable, it may be possible to continue writing.\n\n### Event: 'data'\n\nThe `'data'` event emits either a `Buffer` (by default) or a string if\n`setEncoding()` was used.\n\nNote that adding a `'data'` event listener will switch the Readable\nstream into \"old mode\", where data is emitted as soon as it is\navailable, rather than waiting for you to call `read()` to consume it.\n\n### Event: 'error'\n\nEmitted if there was an error receiving data.\n\n### Event: 'close'\n\nEmitted when the underlying resource (for example, the backing file\ndescriptor) has been closed. Not all streams will emit this.\n\n### readable.setEncoding(encoding)\n\nMakes the `'data'` event emit a string instead of a `Buffer`. `encoding`\ncan be `'utf8'`, `'utf16le'` (`'ucs2'`), `'ascii'`, or `'hex'`.\n\nThe encoding can also be set by specifying an `encoding` field to the\nconstructor.\n\n### readable.read([size])\n\n* `size` {Number | null} Optional number of bytes to read.\n* Return: {Buffer | String | null}\n\nNote: **This function SHOULD be called by Readable stream users.**\n\nCall this method to consume data once the `'readable'` event is\nemitted.\n\nThe `size` argument will set a minimum number of bytes that you are\ninterested in.  If not set, then the entire content of the internal\nbuffer is returned.\n\nIf there is no data to consume, or if there are fewer bytes in the\ninternal buffer than the `size` argument, then `null` is returned, and\na future `'readable'` event will be emitted when more is available.\n\nCalling `stream.read(0)` will always return `null`, and will trigger a\nrefresh of the internal buffer, but otherwise be a no-op.\n\n### readable.pipe(destination, [options])\n\n* `destination` {Writable Stream}\n* `options` {Object} Optional\n  * `end` {Boolean} Default=true\n\nConnects this readable stream to `destination` WriteStream. Incoming\ndata on this stream gets written to `destination`.  Properly manages\nback-pressure so that a slow destination will not be overwhelmed by a\nfast readable stream.\n\nThis function returns the `destination` stream.\n\nFor example, emulating the Unix `cat` command:\n\n    process.stdin.pipe(process.stdout);\n\nBy default `end()` is called on the destination when the source stream\nemits `end`, so that `destination` is no longer writable. Pass `{ end:\nfalse }` as `options` to keep the destination stream open.\n\nThis keeps `writer` open so that \"Goodbye\" can be written at the\nend.\n\n    reader.pipe(writer, { end: false });\n    reader.on(\"end\", function() {\n      writer.end(\"Goodbye\\n\");\n    });\n\nNote that `process.stderr` and `process.stdout` are never closed until\nthe process exits, regardless of the specified options.\n\n### readable.unpipe([destination])\n\n* `destination` {Writable Stream} Optional\n\nUndo a previously established `pipe()`.  If no destination is\nprovided, then all previously established pipes are removed.\n\n### readable.pause()\n\nSwitches the readable stream into \"old mode\", where data is emitted\nusing a `'data'` event rather than being buffered for consumption via\nthe `read()` method.\n\nCeases the flow of data.  No `'data'` events are emitted while the\nstream is in a paused state.\n\n### readable.resume()\n\nSwitches the readable stream into \"old mode\", where data is emitted\nusing a `'data'` event rather than being buffered for consumption via\nthe `read()` method.\n\nResumes the incoming `'data'` events after a `pause()`.\n\n\n## Class: stream.Writable\n\n<!--type=class-->\n\nA `Writable` Stream has the following methods, members, and events.\n\nNote that `stream.Writable` is an abstract class designed to be\nextended with an underlying implementation of the\n`_write(chunk, encoding, cb)` method. (See below.)\n\n### new stream.Writable([options])\n\n* `options` {Object}\n  * `highWaterMark` {Number} Buffer level when `write()` starts\n    returning false. Default=16kb\n  * `decodeStrings` {Boolean} Whether or not to decode strings into\n    Buffers before passing them to `_write()`.  Default=true\n\nIn classes that extend the Writable class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n### writable.\\_write(chunk, encoding, callback)\n\n* `chunk` {Buffer | String} The chunk to be written.  Will always\n  be a buffer unless the `decodeStrings` option was set to `false`.\n* `encoding` {String} If the chunk is a string, then this is the\n  encoding type.  Ignore chunk is a buffer.  Note that chunk will\n  **always** be a buffer unless the `decodeStrings` option is\n  explicitly set to `false`.\n* `callback` {Function} Call this function (optionally with an error\n  argument) when you are done processing the supplied chunk.\n\nAll Writable stream implementations must provide a `_write` method to\nsend data to the underlying resource.\n\nNote: **This function MUST NOT be called directly.**  It should be\nimplemented by child classes, and called by the internal Writable\nclass methods only.\n\nCall the callback using the standard `callback(error)` pattern to\nsignal that the write completed successfully or with an error.\n\nIf the `decodeStrings` flag is set in the constructor options, then\n`chunk` may be a string rather than a Buffer, and `encoding` will\nindicate the sort of string that it is.  This is to support\nimplementations that have an optimized handling for certain string\ndata encodings.  If you do not explicitly set the `decodeStrings`\noption to `false`, then you can safely ignore the `encoding` argument,\nand assume that `chunk` will always be a Buffer.\n\nThis method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you **are** expected to override this method in\nyour own extension classes.\n\n\n### writable.write(chunk, [encoding], [callback])\n\n* `chunk` {Buffer | String} Data to be written\n* `encoding` {String} Optional.  If `chunk` is a string, then encoding\n  defaults to `'utf8'`\n* `callback` {Function} Optional.  Called when this chunk is\n  successfully written.\n* Returns {Boolean}\n\nWrites `chunk` to the stream.  Returns `true` if the data has been\nflushed to the underlying resource.  Returns `false` to indicate that\nthe buffer is full, and the data will be sent out in the future. The\n`'drain'` event will indicate when the buffer is empty again.\n\nThe specifics of when `write()` will return false, is determined by\nthe `highWaterMark` option provided to the constructor.\n\n### writable.end([chunk], [encoding], [callback])\n\n* `chunk` {Buffer | String} Optional final data to be written\n* `encoding` {String} Optional.  If `chunk` is a string, then encoding\n  defaults to `'utf8'`\n* `callback` {Function} Optional.  Called when the final chunk is\n  successfully written.\n\nCall this method to signal the end of the data being written to the\nstream.\n\n### Event: 'drain'\n\nEmitted when the stream's write queue empties and it's safe to write\nwithout buffering again. Listen for it when `stream.write()` returns\n`false`.\n\n### Event: 'close'\n\nEmitted when the underlying resource (for example, the backing file\ndescriptor) has been closed. Not all streams will emit this.\n\n### Event: 'finish'\n\nWhen `end()` is called and there are no more chunks to write, this\nevent is emitted.\n\n### Event: 'pipe'\n\n* `source` {Readable Stream}\n\nEmitted when the stream is passed to a readable stream's pipe method.\n\n### Event 'unpipe'\n\n* `source` {Readable Stream}\n\nEmitted when a previously established `pipe()` is removed using the\nsource Readable stream's `unpipe()` method.\n\n## Class: stream.Duplex\n\n<!--type=class-->\n\nA \"duplex\" stream is one that is both Readable and Writable, such as a\nTCP socket connection.\n\nNote that `stream.Duplex` is an abstract class designed to be\nextended with an underlying implementation of the `_read(size)`\nand `_write(chunk, encoding, callback)` methods as you would with a Readable or\nWritable stream class.\n\nSince JavaScript doesn't have multiple prototypal inheritance, this\nclass prototypally inherits from Readable, and then parasitically from\nWritable.  It is thus up to the user to implement both the lowlevel\n`_read(n)` method as well as the lowlevel `_write(chunk, encoding, cb)` method\non extension duplex classes.\n\n### new stream.Duplex(options)\n\n* `options` {Object} Passed to both Writable and Readable\n  constructors. Also has the following fields:\n  * `allowHalfOpen` {Boolean} Default=true.  If set to `false`, then\n    the stream will automatically end the readable side when the\n    writable side ends and vice versa.\n\nIn classes that extend the Duplex class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n## Class: stream.Transform\n\nA \"transform\" stream is a duplex stream where the output is causally\nconnected in some way to the input, such as a zlib stream or a crypto\nstream.\n\nThere is no requirement that the output be the same size as the input,\nthe same number of chunks, or arrive at the same time.  For example, a\nHash stream will only ever have a single chunk of output which is\nprovided when the input is ended.  A zlib stream will either produce\nmuch smaller or much larger than its input.\n\nRather than implement the `_read()` and `_write()` methods, Transform\nclasses must implement the `_transform()` method, and may optionally\nalso implement the `_flush()` method.  (See below.)\n\n### new stream.Transform([options])\n\n* `options` {Object} Passed to both Writable and Readable\n  constructors.\n\nIn classes that extend the Transform class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n### transform.\\_transform(chunk, encoding, callback)\n\n* `chunk` {Buffer | String} The chunk to be transformed.  Will always\n  be a buffer unless the `decodeStrings` option was set to `false`.\n* `encoding` {String} If the chunk is a string, then this is the\n  encoding type.  (Ignore if `decodeStrings` chunk is a buffer.)\n* `callback` {Function} Call this function (optionally with an error\n  argument) when you are done processing the supplied chunk.\n\nNote: **This function MUST NOT be called directly.**  It should be\nimplemented by child classes, and called by the internal Transform\nclass methods only.\n\nAll Transform stream implementations must provide a `_transform`\nmethod to accept input and produce output.\n\n`_transform` should do whatever has to be done in this specific\nTransform class, to handle the bytes being written, and pass them off\nto the readable portion of the interface.  Do asynchronous I/O,\nprocess things, and so on.\n\nCall `transform.push(outputChunk)` 0 or more times to generate output\nfrom this input chunk, depending on how much data you want to output\nas a result of this chunk.\n\nCall the callback function only when the current chunk is completely\nconsumed.  Note that there may or may not be output as a result of any\nparticular input chunk.\n\nThis method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you **are** expected to override this method in\nyour own extension classes.\n\n### transform.\\_flush(callback)\n\n* `callback` {Function} Call this function (optionally with an error\n  argument) when you are done flushing any remaining data.\n\nNote: **This function MUST NOT be called directly.**  It MAY be implemented\nby child classes, and if so, will be called by the internal Transform\nclass methods only.\n\nIn some cases, your transform operation may need to emit a bit more\ndata at the end of the stream.  For example, a `Zlib` compression\nstream will store up some internal state so that it can optimally\ncompress the output.  At the end, however, it needs to do the best it\ncan with what is left, so that the data will be complete.\n\nIn those cases, you can implement a `_flush` method, which will be\ncalled at the very end, after all the written data is consumed, but\nbefore emitting `end` to signal the end of the readable side.  Just\nlike with `_transform`, call `transform.push(chunk)` zero or more\ntimes, as appropriate, and call `callback` when the flush operation is\ncomplete.\n\nThis method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you **are** expected to override this method in\nyour own extension classes.\n\n### Example: `SimpleProtocol` parser\n\nThe example above of a simple protocol parser can be implemented much\nmore simply by using the higher level `Transform` stream class.\n\nIn this example, rather than providing the input as an argument, it\nwould be piped into the parser, which is a more idiomatic Node stream\napproach.\n\n```javascript\nfunction SimpleProtocol(options) {\n  if (!(this instanceof SimpleProtocol))\n    return new SimpleProtocol(options);\n\n  Transform.call(this, options);\n  this._inBody = false;\n  this._sawFirstCr = false;\n  this._rawHeader = [];\n  this.header = null;\n}\n\nSimpleProtocol.prototype = Object.create(\n  Transform.prototype, { constructor: { value: SimpleProtocol }});\n\nSimpleProtocol.prototype._transform = function(chunk, encoding, done) {\n  if (!this._inBody) {\n    // check if the chunk has a \\n\\n\n    var split = -1;\n    for (var i = 0; i < chunk.length; i++) {\n      if (chunk[i] === 10) { // '\\n'\n        if (this._sawFirstCr) {\n          split = i;\n          break;\n        } else {\n          this._sawFirstCr = true;\n        }\n      } else {\n        this._sawFirstCr = false;\n      }\n    }\n\n    if (split === -1) {\n      // still waiting for the \\n\\n\n      // stash the chunk, and try again.\n      this._rawHeader.push(chunk);\n    } else {\n      this._inBody = true;\n      var h = chunk.slice(0, split);\n      this._rawHeader.push(h);\n      var header = Buffer.concat(this._rawHeader).toString();\n      try {\n        this.header = JSON.parse(header);\n      } catch (er) {\n        this.emit('error', new Error('invalid simple protocol data'));\n        return;\n      }\n      // and let them know that we are done parsing the header.\n      this.emit('header', this.header);\n\n      // now, because we got some extra data, emit this first.\n      this.push(b);\n    }\n  } else {\n    // from there on, just provide the data to our consumer as-is.\n    this.push(b);\n  }\n  done();\n};\n\nvar parser = new SimpleProtocol();\nsource.pipe(parser)\n\n// Now parser is a readable stream that will emit 'header'\n// with the parsed header data.\n```\n\n\n## Class: stream.PassThrough\n\nThis is a trivial implementation of a `Transform` stream that simply\npasses the input bytes across to the output.  Its purpose is mainly\nfor examples and testing, but there are occasionally use cases where\nit can come in handy.\n\n\n[EventEmitter]: events.html#events_class_events_eventemitter\n",readmeFilename:"README.md",bugs:{url:"https://github.com/isaacs/readable-stream/issues"},_id:"readable-stream@1.0.15",_from:"readable-stream@1.0",directories:{lib:"./"},hash:"7892c9a",mappings:{},production:!0,useScriptInjection:!0}});