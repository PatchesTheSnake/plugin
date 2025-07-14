
import octoprint.plugin

class HelloWorldPlugin(octoprint.plugin.StartupPlugin,
                       octoprint.plugin.TemplatePlugin,
                       octoprint.plugin.SettingsPlugin,
                       octoprint.plugin.UiPlugin,
                       octoprint.plugin.AssetPlugin):
    def on_after_startup(self):
        self._logger.info("Hello World! (more: %s)" % self._settings.get(["url"]))
    def get_settings_defaults(self):
        return dict(url="https://en.wikipedia.org/wiki/Hello_world")
    def get_template_vars(self):
        return dict(url=self._settings.get(["url"]))
    def get_assets(self):
        return dict(
            js=["js/plugin.js"],
        )
    def get_template_configs(self):
        return [
            
            dict(type="control",template="plugin_control.jija2", custom_bindings=False)
        ]
__plugin_name__ = "plugin"
__plugin_pythoncompat__ = ">=3.7,<4"
__plugin_implementation__ = HelloWorldPlugin()