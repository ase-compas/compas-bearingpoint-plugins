# Changelog

All notable changes to the **plugins-hub** application are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.3]

### Added

- Implements [Issue #9](https://github.com/ase-compas/compas-bearingpoint-plugins/issues/9): Show **built-in** host plugins and **custom** configured plugins in the Plugins Hub.

**Built-in providers (Open-SCD / CoMPAS)**

- Discover host `officialPlugins` at runtime (`/public/js/plugins.js`, Open-SCD `src/plugins.js` paths).
- Show each reachable catalogue as its own provider; enable/disable only (no install/remove).
- Provider logos shipped in the hub bundle (`compas.png` / `openscd.png`).

![Built-in CoMPAS plugins](doc/img/0.0.3_Built-In_CoMPAS_Plugins.png)
![Built-in Open-SCD plugins](doc/img/0.0.3_Built-In_Open-SCD_Plugins.png)

**Custom provider**

- List manually stored plugins whose `src` is not covered by any remote or built-in catalogue.
- Description is the plugin source URL; support enable, disable, and uninstall.

![Custom plugins](doc/img/0.0.3_Custom-Plugins.png)

## [0.0.2]

### Added

- Implements [Issue #5](https://github.com/ase-compas/compas-bearingpoint-plugins/issues/5): Update Plugins Hub (apply mockup styling and related UX).

![Styling update](doc/img/0.0.2_Styling-Update.png)

## [0.0.1]

### Added

- Implements [Issue #1](https://github.com/ase-compas/compas-bearingpoint-plugins/issues/1): Create Plugins Hub plugin.
