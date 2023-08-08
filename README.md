# HydrogenServer

This is an app example that would be the wrapper app. A shopify hydrogen app to connect to the the shopify backend. It would also supply an sdk including a pre-authorized fetch function so each child app / components would not need to deal with it.

## Components

The server app supplies some very general components that are only used in base app constuction and are not shared to child apps. These components are: `Loader` and `ErrorBoundry`.

## SDK

The server supplies the SDK to child components. This could also be split off to another repo / team

## Translations

Under the current setup, the server holds the translations file. This could be hosted elsewhere or completely replaced with an external service (contentful, etc)
