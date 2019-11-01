
## What is it?

Phat event is a JavaScript based library designed for the creation of log events.

A log event is a structured log, that is updated throughout the lifecycle of a service.

At the end of the services life, the event is emitted.

And large events allow for easier cross analysis across data points.

Rather than this:

`{ "timestamp": "X", "message": "Something" }`

You have this:

```
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

## Why?

The motivation was to have some sort of opinionated logger that is designed to push items into a log event object.

## Where does the name come from? Well

Naming things is hard.

And "event emitter" or similiar isn't noteworth enough.

So basically...

Essentially from [this tweet thread comment](https://twitter.com/mipsytipsy/status/1042978722645569537).

## Getting Started

Coming Soon...
