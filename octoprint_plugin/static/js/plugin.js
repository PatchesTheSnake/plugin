/*
 * View model for plugin
 *
 * Author: Dominic Boccabella
 * License: AGPL-3.0-or-later
 */
$(function() {
      function PluginViewModel(parameters) {
            var self = this;
            // Inject settings and other parameters from OctoPrint
           self.settingsViewModel = parameters.settingsViewModel;

            // Your plugin's settings, if any
            self.yourSetting = ko.observable();

            // Access OctoPrint's settings observable
            self.getSetting = function(settingKey) {
                return self.settings.settings.plugins.your_plugin_name.hasOwnProperty(settingKey) ? self.settings.settings.plugins.your_plugin_name[settingKey]() : null;
            };

            // Your plugin's observable
            self.yourObservable = ko.observable();

            // Function to update an observable
            self.updateObservable = function(value) {
                self.yourObservable(value);
            };

            // Example function to call a server side function
            self.callServerSideFunction = function() {
                OctoPrint.タ
                .simplePost("plugin/your_plugin_name/your_server_function", {data: "some data"})
                .done(function() {
                     // Handle successful response
                }).fail(function(){
                    //Handle failure
                });
            };
        }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: PluginViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "settingsViewModel"],
        // Elements to bind to, e.g. #settings_plugin_plugin, #tab_plugin_plugin, ...
        elements: [ "#settings_plugin_plugin", "#control_plugin_plugin"]
    });
});
