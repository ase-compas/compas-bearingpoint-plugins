# Plugins-Hub Plugin

When opening the plugin the plugin shows a list of official plugins provider which support OpenSCD/CoMPAS. For each provider following information can be set:

- Provider name
- Logo
- List of provided plugins

<img src="img/plugins-hub.png" alt="Plugins-Hub" width="1000">

Each plugin can be managed within this overview, which means a plugin can be installed, enabled and disabled if needed. Further each plugin provides informations about the minimal required OpenSCD/CoMPAS core version to provide you to install incompatible plugins.

Further each plugin should provide a short documentation which will be shown inline in Plugins-Hub plugin. Additional to that a link can be provided so that additional plugin documentation can be provided.

<img src="img/plugins-hub-help.png" alt="Plugins-Hub help" width="1000">

## Distributed plugins maintenance

The Plugin is organised as following:

<img src="img/organisation.png" alt="Plugins-Hub help" width="500">

The plugin can load plugins from a JSON file (for example, plugins.json) provided by one or more plugin providers. The distributor can centrally define the list of supported plugin providers for their distribution, allowing the plugin to discover and load all plugins they publish.

The json file structure a provider needs to provide looks as following:
```
    {
        "plugins": [
            {
                "name": "PluginHub",
                "kind": "editor",
                "description": "BearingPoint Plugin Hub – Central plugin for integrating and managing plugins from multiple providers",
                "src": "https://ase-compas.github.io/compas-bearingpoint-plugins/compas/plugins/plugins-hub/index.js",
                "documentationUrl": "https://ase-compas.github.io/compas-bearingpoint-plugins/plugins/plugins-hub",
                "icon": "hub",
                "supportedCoreVersion": {
                    "from": "0.44.0"
                }
            }
        ]
    }
```

Except the `documentationUrl` all fields are required, if the Plugins-Hub has parsing error, the full file will be skipped.

If a plugins provider wants to be added to the trusted plugins provider list of an distributor each distributor might have different processes on how to be added.

## Manual installation

BearingPoint Plugin Hub – Central plugin for integrating and managing plugins from multiple providers

GOTO: [demo.compas.energy](https://demo.compas.energy/) or any other OpenSCD or Compas Instance and add the Plugin:

* **Name:** BP-PluginHub
* **URL:** https://ase-compas.github.io/compas-bearingpoint-plugins/compas/plugins/plugins-hub/index.js

![Install PluginHub](img/install-pluginhub.png)
