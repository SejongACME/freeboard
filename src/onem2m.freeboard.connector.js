(function () {
    freeboard.loadWidgetPlugin({
        type_name: "acmeResourceTree",
        display_name: "ACME Resource Tree",
        description: "Displays a white box when the ACME resource tree menu is clicked.",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            

        ],
        newInstance: function (settings, newInstanceCallback) {
            console.log(settings)
            newInstanceCallback(new AcmeResourceTree(settings));
        }
    });

    freeboard.addStyle('.acme-resource-tree-pane', 'border: 2px solid black; padding: 10px;');


    var AcmeResourceTree = function (settings) {
        var self = this;
        var currentSettings = settings;
        var textElement = $('<div class="acme-resource-tree-pane"></div>');

        this.render = function (element) {
            $(element).append(textElement);
            self.updateDisplay();
        }


        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
            self.updateDisplay();
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return 1;
        }

        this.updateDisplay = function () {
            textElement.text(_.isUndefined(currentSettings.title) ? "" : currentSettings.title);
        };

        this.onSettingsChanged(settings);
    };

    
}());


