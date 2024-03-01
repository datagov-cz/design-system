# Vue wrapper for @gov-design-system-ce/components

This package contains a wrapper that is specific to Vue and is designed for use with Gov Design System CE Components.

## Usage

For usage instructions, please see Gov Design System CE [documentation](https://designsystem.gov.cz/guidelines/wrapper/vue).

## Architecture

The components package's build process generates all files located in the `src/` directory, except for index.ts. These
files are automatically generated by the `vue-output-target`.
During the build process, the auto-generated Typescript files are compiled into both **ES Modules** and **CommonJS
modules**.

## Copyright

Copyright(c) 2020 - 2023 Digitální a informační agentura