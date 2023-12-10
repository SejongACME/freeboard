// ACME와 연동하여 ACME의 resource tree를 보여주기 위해 freeboard 환경에 적합한 위젯을 구현
(function () { 
    freeboard.loadWidgetPlugin({
        type_name: "acmeResourceTree",
        display_name: "ACME Resource Tree", // 위젯 선택 메뉴에 뜨는 설명 초기화
        description: "Displays text in a black-bordered box.",
        settings: [
            {
                name: "title",
                display_name: "SAVE 후 위젯을 클릭해야 확인가능합니다.",
                type: "text",
                default_value: "ACME resource tree 확인하기"
            },
           
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

    freeboard.addStyle('.acme-resource-tree-pane', // 안내 문구에 대한 css 구성
        'padding: 10px;' +
        'position: fixed;' +
        'display: inline-block;' +
        'height: 100%; overflow: visible;' +
        'text-align: center;'
    );

    var AcmeResourceTree = function (settings) {
        var self = this;
        var currentSettings = settings;
        var titleElement = $('<div class="acme-resource-tree-pane"></div>');

        this.render = function (element) {
            $(element).append(titleElement);

            // ACME Resource Tree 위젯 클릭 시 리액트 서버로 이동 처리 구현
            $(element).on('click', function () {
                window.location.href = 'http://localhost:8081';
            });

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
            // title 값 표시 
            titleElement.text(currentSettings.title);
        };

        this.onSettingsChanged(settings);
    };
}());