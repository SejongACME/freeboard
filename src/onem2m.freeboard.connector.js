(function () {
    freeboard.loadWidgetPlugin({
        type_name: "acmeResourceTree",
        display_name: "ACME Resource Tree",
        description: "Displays text in a black-bordered box.",
        settings: [
            // {
            //     name: "title",
            //     display_name: "Title",
            //     type: "text"
            // },
            {
                name: "Container1",
                display_name: "Container 1",
                type: "text",
                default_value: "CO2"
            },
            {
                name: "Container2",
                display_name: "Container 2",
                type: "text",
                default_value: "O3"
            },
            // 여기에 필요한 만큼 컨테이너 추가 예정
        ],
        newInstance: function (settings, newInstanceCallback) {
            console.log(settings);
            newInstanceCallback(new AcmeResourceTree(settings));
        }
    });

    freeboard.addStyle('.acme-container-box',
        'border: 2px solid yellow;' +
        'padding: 10px;' +
        'position: relative;' +
        'display: inline-block;' +
        'vertical-align: middle;' +
        'height: auto;' +
        'overflow: visible;'
    );

    freeboard.addStyle('.acme-resource-tree-pane',
        'border: 2px solid black;' +
        'padding: 10px;' +
        'position: relative;' +
        'display: inline-block;' +
        'height: 800px; overflow: visible;' 
    );

    var AcmeResourceTree = function (settings) {
        var self = this;
        var currentSettings = settings;
        // var titleElement = $('<div class="acme-resource-tree-pane"></div>');
        var container1Element = $('<div class="acme-container-box"></div>').append('<div class="acme-content">' + currentSettings.Container1 + '</div>');
        var container2Element = $('<div class="acme-container-box"></div>').append('<div class="acme-content">' + currentSettings.Container2 + '</div>');
        // container3Element, container4Element, ... 추가 예정

        this.render = function (element) {
            // $(element).append(titleElement);
            $(element).append(container1Element);
            $(element).append(container2Element);
            // container3Element, container4Element, ... 추가 예정

            self.updateDisplay();
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
            self.updateDisplay();
        }

        this.onDispose = function () {
            // cancel 버튼 클릭 시 모달창 닫혀야 해서 onDispose 코드가 반드시 필요했음
        }

        this.getHeight = function () {
            return 1;
        }

        this.updateDisplay = function () {
            // title과 Container 데이터 값 표시 
            // titleElement.text(currentSettings.title);
            container1Element.find('.acme-content').text(currentSettings.Container1);
            container2Element.find('.acme-content').text(currentSettings.Container2);
            // container3Element, container4Element, ... 추가 예정
        };

        this.onSettingsChanged(settings);
    };
}());
