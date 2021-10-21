# DDEV-Cypress

- [DDEV-Cypress](#ddev-cypress)
  - [Goal](#goal)
  - [Setup](#setup)
  - [Recipe](#recipe)
    - [Steps](#steps)
      - [A note about the Cypress image](#a-note-about-the-cypress-image)
    - [Commands](#commands)
      - [`cypress-open`](#cypressopen)
      - [`cypress-run`](#cypressrun)
    - [Notes](#notes)
    - [Troubleshooting](#troubleshooting)
      - ["Could not find a Cypress configuration file, exiting."](#could-not-find-a-cypress-configuration-file-exiting)
      - [`Unable to open X display.`](#unable-to-open-x-display)

## Goal

- Generate DDEV reciepe for running Cypress E2E

## Setup

- This project uses Laravel as a base

    ```bash
    laravel new ddev-cypress
    ```

- Configure DDEV server and accept defaults

    ```bash
    ddev condig

    Project name (ddev-cypress)
    Docroot Location (public)
    Project Type [...] (laravel)
    ```

- Confirm project is setup by starting the DDEV server and accessing the homepage:

    ```bash
    ddev start
    ```

## Recipe

[Cypress](https://www.cypress.io/) is a "complete end-to-end testing experience". It allows you to write Javascript test files that automate real browsers.  For more details, see the [Cypress Overview](https://docs.cypress.io/guides/overview/why-cypress) page.

This recipe integrates a Cypress docker image with your DDEV project.

### Steps

- Copy the `docker-compose.cypress.yaml` file into your project's `./.ddev' directory.
- Copy the `commands` directory into your project's `./.ddev/commands` directory
- Restart DDEV to begin using the this service.

    ```shell
    ddev restart
    ```

#### A note about the Cypress image

This recipe uses the latest `cypress/include` image (`8.6.0`) which includes the following browsers:

- Chrome 91
- Firefox 89
- Electron 91

- It is considered best practice to use a [specific image tag](https://github.com/cypress-io/cypress-docker-images#best-practice).
- If you require a specific browser, update the `image` used in your `./.ddev/docker-compose.cypress.yaml`
- Available images and versions can be found on the [cypress-docker-images](https://github.com/cypress-io/cypress-docker-images) page.

### Commands

Cypress can run into 2 different modes: interactive and runner.
This recipe includes 2 shortcut commands to help you use Cypress.

#### `cypress-open`

To open cypress in "interactive" mode, run the following command:

```shell
ddev cypress-open
```

This command also accepts arguments. Refer to the ["#cyress open" documentation](https://docs.cypress.io/guides/guides/command-line#cypress-open) for further details.

Example: To open Cypress in interactive mode, and specify a config file

```shell
ddev cypress-open --config cypress.json
```

#### `cypress-run`

To run Cypress in "runner" mode, run the following command:

```shell
ddev cypress-run
```

This command also accepts arguments. Refer to [#cypress run](https://docs.cypress.io/guides/guides/command-line#cypress-run) page for a full list of available arguments.

Example: To run all Cypress tests, using Chrome in headless mode

```shell
ddev cypress-run --browser chrome
```

### Notes

- The dockerized Cypress *should* find any locally installed plugins in your project's `node_modules`.
- Some plugins may require additional settings or environmental variables. These can be passed through via command arguments.

### Troubleshooting

#### "Could not find a Cypress configuration file, exiting."

Cypress expects a directory strutures containing the tests, plugins and support files.

- If the `./cypress` directory does not exist, it will scaffold out these directories, including a default `cypress.json` setting file and example tests when you first run `ddev cypress-open`.
- Make sure you have a `cypress.json` file in your project root, or use `--config [file]` argument to specify one.

#### `Unable to open X display.`

- This recipe forwards the Cypress GUI via an X11 server. Please ensure you have this working on your host system.
