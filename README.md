# DDEV-Cypress

- [DDEV-Cypress](#ddev-cypress)
  - [Goal](#goal)
  - [Setup](#setup)

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
