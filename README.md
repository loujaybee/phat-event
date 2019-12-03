**PLEASE NOTE** Phat-event is a beta library, currently under development.

Opinionated helper library fr constructing one-per-service log events.

## Motivation

There are many disadvantages of logging across many log lines. 

Phat events solves this and gives the following advantages...

* Easily to correlate data (Do users in X region correlate with an integration failure)
* Less log data (one emit per service request)
* Easier to read in log files (one emit per service request)
* Opinionated structure (less endless debates about log structure)

## Getting Started

Install: `npm install phat-event`

```javascript
const PhatEvent = require("phat-event");
const phatEvent = new PhatEvent();

phatEvent.configure({ log: console.log })

phatEvent
    .addKey('key', true)

phatEvent
    .emit();
```

## What is a log event?

A log event is a form of structured log, that is updated throughout the lifecycle of a service and a single structured event is emitted at the end of the service.

Rather than this:

```javascript
{ "timestamp": "X", "message": "Something" }
```

You have this:

```javascript
{
    "timestamp": "X",
    "step1": {
        "input": {
            ...
        }
        "output": {
            ...
        }
    }
}
 ```

## The difficulty with log events

But log events have downsides.

* If the service fails unexpectedly, the event might not be emitted.
* Each emitted property is not timestamped by default
* Poor naming of properties makes it harder to understand property meanings
* There is no "standard" way to structure these fat log events

## What's the difference between phat-event and Winston, Bunyan, etc

phat-event is not a logging library. Phat event is primarily for the _opinionated_ construction of a fat single log line entry, it is not for the act of logging, you decide the logger you want to use. 

## API

Documentation for the public API of phat-event.

### .configure({ log })

The configure method takes an object of configuration properties, such as:

* `log` — The method that is called when the `emit` event is triggered.

### .addKey(String, Any)

Adds a key and value to the event object.

Nested properties can be passed by using dot delimiters between keys `prop.prop.prop`.

### .sanitise(String)

Convers

### .emit()

Invokes the configured `log` method and applies the event as the first argument.

This method allows the log entry to be emitted at the end of service processing.

## Releases

### 1.1.2

* Return the constructor, rather than the object instance

### 1.1.1

* Bugfix to allow `.sanitise` to access deeply nested properties.

### 1.1.0

* Implements `.sanitise`
    * A helper method which implements method to block out large or sensitive properties.

### 1.0.0

* Implements `push` method

## Where does the name come from?

Naming things is hard. And something dry like "event emitter" or similiar isn't noteworthy enough.

As a topic discussed heavily by Charity Majors, I stole the name from her tweet thread: [this tweet thread comment](https://twitter.com/mipsytipsy/status/1042978722645569537) where she refers to the event objects as "phat", which made me laugh and is now the name of this library.
