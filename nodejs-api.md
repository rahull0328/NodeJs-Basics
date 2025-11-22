# Node APIs List

- [Global Objects](#global-objects)
- [Console](#console)
- [Timers](#timers)
- [Modules](#modules)
- [Process](#process)
- [Child Process](#child-process)
- [Util](#util)
- [Events](#events)
- [Stream](#stream)
- [File System](#file-system)
- [Path](#path)
- [HTTP](#http)
- [URL](#url)
- [Query String](#query-string)
- [Assert](#assert)
- [OS](#os)
- [Buffer](#buffer)

## Global Objects

In browsers, the top-level scope is the global scope.
That means that in browsers if you're in the global scope var something will define a global variable.
In Node this is different. The top-level scope is not the global scope; var something inside a Node module will be local to that module.

|  API        |  Description |
|-------------|--------------|
|__filename;  | The filename of the code being executed. (absolute path)|
|__dirname;   | The name of the directory that the currently executing script resides in. (absolute path)|
|module;      | A reference to the current module. In particular module.exports is used for defining what a module exports and makes available through require().
|exports;     | A reference to the module.exports that is shorter to type.|
|process;     | The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.|
|Buffer;      | The Buffer class is a global type for dealing with binary data directly.|

## Console

|  API                                  |  Description   |
|---------------------------------------|---------------------------------|
|console.log([data], [...]);            |Prints to stdout with newline.|
|console.info([data], [...]);           |Same as console.log.|
|console.error([data], [...]);          |Same as console.log but prints to stderr.|
|console.warn([data], [...]);           |Same as console.error.|
|console.dir(obj);                      |Uses util.inspect on obj and prints resulting string to stdout.|
|console.time(label);                   |Mark a time.|
|console.timeEnd(label);                |Finish timer, record output.|
|console.trace(label);                  |Print a stack trace to stderr of the current position.|
|console.assert(expression, [message]); |Same as assert.ok() where if the expression evaluates as false throw an AssertionError with message.|

## Timers

|  API                                        |  Description                        |
|---------------------------------------------|-------------------------------------|
|setTimeout(callback, delay, [arg], [...]);   | To schedule execution of a one-time callback after delay milliseconds. Optionally you can also pass arguments to the callback.|
|clearTimeout(t);                             | Stop a timer that was previously created with setTimeout().|
|setInterval(callback, delay, [arg], [...]);  | To schedule the repeated execution of callback every delay milliseconds. Optionally you can also pass arguments to the callback.|
|clearInterval(t);                            | Stop a timer that was previously created with setInterval().|
|setImmediate(callback, [arg], [...]);        | To schedule the "immediate" execution of callback after I/O events callbacks and before setTimeout and setInterval.|
|clearImmediate(immediateObject);             | Stop a timer that was previously created with setImmediate().|
|unref();  | Allow you to create a timer that is active but if it is the only item left in the event loop, node won't keep the program running.|
|ref();    | If you had previously unref()d a timer you can call ref() to explicitly request the timer hold the program open.

## Modules

```javascript
var module = require('./module.js');    // Loads the module module.js in the same directory.
module.require('./another_module.js');  // load another_module as if require() was called from the module itself.
```

|  API                                        |  Description                        |
|---------------------------------------------|-------------------------------------|
|module.id;       |The identifier for the module. Typically this is the fully resolved filename.|
|module.filename; |The fully resolved filename to the module.|
|module.loaded;   |Whether or not the module is done loading, or is in the process of loading.|
|module.parent;   |The module that required this one.|
|module.children; |The module objects required by this one.|

```javascript
exports.area = function (r) {
  return 3.14 * r * r;
};

// If you want the root of your module's export to be a function (such as a constructor)
// or if you want to export a complete object in one assignment instead of building it one property at a time,
// assign it to module.exports instead of exports.
module.exports = function(width) {
  return {
    area: function() {
      return width * width;
    }
  };
}
```

## Process

```javascript
process.on('exit', function(code) {});              // Emitted when the process is about to exit
process.on('uncaughtException', function(err) {});  // Emitted when an exception bubbles all the way back to the event loop. (should not be used)
```

|  API                     |  Description                        |
|--------------------------|-------------------------------------|
|process.stdout;           |A writable stream to stdout.|
|process.stderr;           |A writable stream to stderr.|
|process.stdin;            |A readable stream for stdin.|
|process.argv;             |An array containing the command line arguments.|
|process.env;              |An object containing the user environment.|
|process.execPath;         |This is the absolute pathname of the executable that started the process.|
|process.execArgv;         |This is the set of node-specific command line options from the executable that started the process.|
|process.arch;             |What processor architecture you're running on: 'arm', 'ia32', or 'x64'.|
|process.config;           |An Object containing the JavaScript representation of the configure options that were used to compile the current node executable.|
|process.pid;              |The PID of the process.|
|process.platform;         |What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'.|
|process.title;            |Getter/setter to set what is displayed in 'ps'.|
|process.version;          |A compiled-in property that exposes NODE_VERSION.|
|process.versions;         |A property exposing version strings of node and its dependencies.|
|process.abort();          |This causes node to emit an abort. This will cause node to exit and generate a core file.|
|process.chdir(dir);       |Changes the current working directory of the process or throws an exception if that fails.|
|process.cwd();            |Returns the current working directory of the process.|
|process.exit([code]);     |Ends the process with the specified code. If omitted, exit uses the 'success' code 0.|
|process.getgid();         |Gets the group identity of the process.|
|process.setgid(id);       |Sets the group identity of the process.|
|process.getuid();         |Gets the user identity of the process.|
|process.setuid(id);       |Sets the user identity of the process.|
|process.getgroups();      |Returns an array with the supplementary group IDs.|
|process.setgroups(grps);  |Sets the supplementary group IDs.|
|process.initgroups(user, extra_grp); | Reads /etc/group and initializes the group access list, using all groups of which the user is a member.|
|process.kill(pid, [signal]);   |Send a signal to a process. pid is the process id and signal is the string describing the signal to send.|
|process.memoryUsage();       |Returns an object describing the memory usage of the Node process measured in bytes.|
|process.nextTick(callback);  |On the next loop around the event loop call this callback.|
|process.maxTickDepth;        |Callbacks passed to process.nextTick will usually be called at the end of the current flow of execution, and are thus approximately as fast as calling a function synchronously.|
|process.umask([mask]);       |Sets or reads the process's file mode creation mask.|
|process.uptime();            |Number of seconds Node has been running.|
|process.hrtime();            |Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.|
# Node APIs List

- [Global Objects](#global-objects)
- [Console](#console)
- [Timers](#timers)
- [Modules](#modules)
- [Process](#process)
- [Child Process](#child-process)
- [Util](#util)
- [Events](#events)
- [Stream](#stream)
- [File System](#file-system)
- [Path](#path)
- [HTTP](#http)
- [URL](#url)
- [Query String](#query-string)
- [Assert](#assert)
- [OS](#os)
- [Buffer](#buffer)

## Global Objects

In browsers, the top-level scope is the global scope.
That means that in browsers if you're in the global scope var something will define a global variable.
In Node this is different. The top-level scope is not the global scope; var something inside a Node module will be local to that module.

|  API        |  Description |
|-------------|--------------|
|__filename;  | The filename of the code being executed. (absolute path)|
|__dirname;   | The name of the directory that the currently executing script resides in. (absolute path)|
|module;      | A reference to the current module. In particular module.exports is used for defining what a module exports and makes available through require().
|exports;     | A reference to the module.exports that is shorter to type.|
|process;     | The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.|
|Buffer;      | The Buffer class is a global type for dealing with binary data directly.|

## Console

|  API                                  |  Description   |
|---------------------------------------|---------------------------------|
|console.log([data], [...]);            |Prints to stdout with newline.|
|console.info([data], [...]);           |Same as console.log.|
|console.error([data], [...]);          |Same as console.log but prints to stderr.|
|console.warn([data], [...]);           |Same as console.error.|
|console.dir(obj);                      |Uses util.inspect on obj and prints resulting string to stdout.|
|console.time(label);                   |Mark a time.|
|console.timeEnd(label);                |Finish timer, record output.|
|console.trace(label);                  |Print a stack trace to stderr of the current position.|
|console.assert(expression, [message]); |Same as assert.ok() where if the expression evaluates as false throw an AssertionError with message.|

## Timers

|  API                                        |  Description                        |
|---------------------------------------------|-------------------------------------|
|setTimeout(callback, delay, [arg], [...]);   | To schedule execution of a one-time callback after delay milliseconds. Optionally you can also pass arguments to the callback.|
|clearTimeout(t);                             | Stop a timer that was previously created with setTimeout().|
|setInterval(callback, delay, [arg], [...]);  | To schedule the repeated execution of callback every delay milliseconds. Optionally you can also pass arguments to the callback.|
|clearInterval(t);                            | Stop a timer that was previously created with setInterval().|
|setImmediate(callback, [arg], [...]);        | To schedule the "immediate" execution of callback after I/O events callbacks and before setTimeout and setInterval.|
|clearImmediate(immediateObject);             | Stop a timer that was previously created with setImmediate().|
|unref();  | Allow you to create a timer that is active but if it is the only item left in the event loop, node won't keep the program running.|
|ref();    | If you had previously unref()d a timer you can call ref() to explicitly request the timer hold the program open.

## Modules

```javascript
var module = require('./module.js');    // Loads the module module.js in the same directory.
module.require('./another_module.js');  // load another_module as if require() was called from the module itself.
```

|  API                                        |  Description                        |
|---------------------------------------------|-------------------------------------|
|module.id;       |The identifier for the module. Typically this is the fully resolved filename.|
|module.filename; |The fully resolved filename to the module.|
|module.loaded;   |Whether or not the module is done loading, or is in the process of loading.|
|module.parent;   |The module that required this one.|
|module.children; |The module objects required by this one.|

```javascript
exports.area = function (r) {
  return 3.14 * r * r;
};

// If you want the root of your module's export to be a function (such as a constructor)
// or if you want to export a complete object in one assignment instead of building it one property at a time,
// assign it to module.exports instead of exports.
module.exports = function(width) {
  return {
    area: function() {
      return width * width;
    }
  };
}
```

## Process

```javascript
process.on('exit', function(code) {});              // Emitted when the process is about to exit
process.on('uncaughtException', function(err) {});  // Emitted when an exception bubbles all the way back to the event loop. (should not be used)
```

|  API                     |  Description                        |
|--------------------------|-------------------------------------|
|process.stdout;           |A writable stream to stdout.|
|process.stderr;           |A writable stream to stderr.|
|process.stdin;            |A readable stream for stdin.|
|process.argv;             |An array containing the command line arguments.|
|process.env;              |An object containing the user environment.|
|process.execPath;         |This is the absolute pathname of the executable that started the process.|
|process.execArgv;         |This is the set of node-specific command line options from the executable that started the process.|
|process.arch;             |What processor architecture you're running on: 'arm', 'ia32', or 'x64'.|
|process.config;           |An Object containing the JavaScript representation of the configure options that were used to compile the current node executable.|
|process.pid;              |The PID of the process.|
|process.platform;         |What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'.|
|process.title;            |Getter/setter to set what is displayed in 'ps'.|
|process.version;          |A compiled-in property that exposes NODE_VERSION.|
|process.versions;         |A property exposing version strings of node and its dependencies.|
|process.abort();          |This causes node to emit an abort. This will cause node to exit and generate a core file.|
|process.chdir(dir);       |Changes the current working directory of the process or throws an exception if that fails.|
|process.cwd();            |Returns the current working directory of the process.|
|process.exit([code]);     |Ends the process with the specified code. If omitted, exit uses the 'success' code 0.|
|process.getgid();         |Gets the group identity of the process.|
|process.setgid(id);       |Sets the group identity of the process.|
|process.getuid();         |Gets the user identity of the process.|
|process.setuid(id);       |Sets the user identity of the process.|
|process.getgroups();      |Returns an array with the supplementary group IDs.|
|process.setgroups(grps);  |Sets the supplementary group IDs.|
|process.initgroups(user, extra_grp); | Reads /etc/group and initializes the group access list, using all groups of which the user is a member.|
|process.kill(pid, [signal]);   |Send a signal to a process. pid is the process id and signal is the string describing the signal to send.|
|process.memoryUsage();       |Returns an object describing the memory usage of the Node process measured in bytes.|
|process.nextTick(callback);  |On the next loop around the event loop call this callback.|
|process.maxTickDepth;        |Callbacks passed to process.nextTick will usually be called at the end of the current flow of execution, and are thus approximately as fast as calling a function synchronously.|
|process.umask([mask]);       |Sets or reads the process's file mode creation mask.|
|process.uptime();            |Number of seconds Node has been running.|
|process.hrtime();            |Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.|
