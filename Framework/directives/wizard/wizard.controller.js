'use strict';

angular.module('duerrDiagnoseApp')
        .controller('WizardCtrl', function ($scope, dataFactory, $q, $stateParams) {
            var self = this;
            $scope.showOverview = false;
            $scope.ServerError = false;
            $scope.TrendPage = null;
            var overlay = document.getElementsByClassName('overlay');
            var relatedOverlay = document.getElementsByClassName('related-container');
            var solutionsOverlay = document.getElementsByClassName('solutions-container');
            var trendingOverlay = document.getElementsByClassName('trending-container');
            var trendingOverlayHtml = document.getElementsByClassName('trending-container html');
            var trendSwitch = document.getElementsByClassName('link');
            var qrcode;
            $scope.displayedCharts = [];

            document.addEventListener("load", function () {
                emosWS.connect();
            }, false);
            $scope.relatedErrors = [];
            $scope.areInfoButtonsDisabled = false;

            $scope.toggleHandling = function (_functionGroupId) {
                dataFactory.toggleFunctionGroupHandling(_functionGroupId);
            };

            $scope.closeSolutionOverlay = function (toClose) {
                solutionsOverlay[0].classList.remove('open');
                overlay[0].classList.remove('open');

                if (qrcode)
                    qrcode.clear();

                if (!toClose) {
                    $scope.openSolution = false;
                }
                var forEach = Array.prototype.forEach;
                var className = "active";

                forEach.call(document.querySelectorAll("." + className), function (node) {
                    node.classList.remove(className);
                });
            };
            $scope.closeTrendingOverlay = function () {
                trendingOverlay[0].classList.remove('open');
                trendingOverlayHtml[0].classList.remove('open');
                //buttonTrending[0].classList.remove('active');

                var eleConnection = document.getElementsByClassName('info connection-element open');
                if (eleConnection[0])
                    eleConnection[0].classList.remove('open');

                var bridgeElem = document.getElementsByClassName('bridge');
                if (bridgeElem[0])
                    bridgeElem[0].parentElement.removeChild(bridgeElem[0]);

                var eleClose = document.getElementsByClassName('button info closeConnector');
                if (eleClose[0])
                    eleClose[0].classList.remove('closeConnector');

                var myNode = document.getElementById("TrendPageContainer");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            };

            $scope.openTrending = function ($event, $index) {

                $scope.openSolution = $scope.wizardData[$index];

                var bridgeElem = document.getElementsByClassName('bridge');
                if (bridgeElem[0])
                    bridgeElem[0].parentElement.removeChild(bridgeElem[0]);

                var eleConnection = document.getElementsByClassName('info connection-element open');

                if (eleConnection.length !== 0)
                    eleConnection[0].classList.remove('open');

                var eleClose = document.getElementsByClassName('button info closeConnector');

                if (eleClose.length !== 0)
                    eleClose[0].classList.remove('closeConnector');

                var eleSel = document.getElementById("chartSelection");
                if (eleSel.classList.contains('active'))
                    eleSel.classList.remove('active');

                var myNode = document.getElementById("TrendPageContainer");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
                [].forEach.call(trendSwitch, function (el) {
                    el.classList.remove('active');
                });

                var value;
                if ($event.target.className === "button info") {
                    $event.target.classList.add('closeConnector');
                    $event.target.nextElementSibling.classList.add('open');
                    value = $event.target.nextElementSibling.getBoundingClientRect().top;
                } else {
                    $event.target.parentElement.classList.add('closeConnector');
                    $event.target.parentElement.nextElementSibling.classList.add('open');
                    value = $event.target.parentElement.nextElementSibling.getBoundingClientRect().top;
                }

                var panelElem = document.getElementsByClassName('panel');
                var bridge = document.createElement('div');
                bridge.className = "bridge";
                bridge.style.top = (value - 95) + "px";
                panelElem[0].appendChild(bridge);

                if ($scope.openSolution.dashboardUrl) {
                    trendingOverlayHtml[0].classList.add('open');
                } else {
                    trendingOverlay[0].classList.add('open');

                    var charts = [];
                    for (var i = 0; i < $scope.selectedTile.additionalInfo.length; i++) {
                        if ($scope.selectedTile.additionalInfo[i].metaData !== '') {
                            charts.push($scope.selectedTile.additionalInfo[i]);
                        }
                    }
                    $scope.showTrendingCharts(charts);
                }

                $event.stopPropagation();
            };

            $scope.showTrendingCharts = function (charts) {

                $scope.displayedCharts = [];
                $scope.TrendPage = null;
                var startTime = $scope.selectedTile.trendTimestampStart - 600000;
                var endTime = $scope.selectedTile.trendTimestampEnd;

                console.log("start: " + new Date(startTime));
                console.log("end: " + new Date(endTime));

                if (charts.length === 1 && charts[0].plcTags) {
                    $scope.TrendPage = new emosWS.TrendPage({
                        'uiID': 'TrendPageContainer',
                        'data': [
                            charts[0].plcTags
                        ],
                        'setting': {
                            'posTol': charts[0].upperLimit,
                            'negTol': charts[0].lowerLimit,
                            'trendTimestampStart': startTime, //$scope.selectedTile.trendTimestampStart,
                            'trendTimestampEnd': endTime, //$scope.selectedTile.trendTimestampEnd,
                            'showControl': false
                        }
                    });
                    //$scope.TrendPage.setLive(false);
                    charts[0].selected = true;
                    $scope.displayedCharts.push(charts[0]);
                } else if (charts.length > 1 && charts[0].plcTags && charts[1].plcTags) {
                    $scope.TrendPage = new emosWS.TrendPage({
                        'uiID': 'TrendPageContainer',
                        'data': [
                            charts[0].plcTags,
                            charts[1].plcTags
                        ],
                        'setting': {
                            'posTol': [charts[0].upperLimit, charts[1].upperLimit],
                            'negTol': [charts[0].lowerLimit, charts[1].lowerLimit],
                            'trendTimestampStart': startTime, //$scope.selectedTile.trendTimestampStart,
                            'trendTimestampEnd': endTime, //$scope.selectedTile.trendTimestampEnd,
                            'showControl': false
                        }
                    });

                    charts[0].selected = true;
                    charts[1].selected = true;
                    $scope.displayedCharts.push(charts[0]);
                    $scope.displayedCharts.push(charts[1]);
                }
            };

            $scope.formatNumber = function (i) {
                return Math.round(i * 1000) / 1000;
            };

            $scope.isSelected = function () {
                return $scope.openSolution ? true : false;
            };

            this.getRelatedErrors = function () {
                var defer = $q.defer();
                $scope.relatedErrors = [];

                $scope.selectedTile.relatesTo.forEach(function (_errorId) {
                    dataFactory.getErrorById(_errorId).then(function (_error) {
                        if (_error) {
                            $scope.relatedErrors.push(_error);

                            if ($scope.relatedErrors.length === $scope.selectedTile.relatesTo.length) {
                                defer.resolve();
                            }
                        }
                    });
                });

                return defer.promise;
            };

            this.getRelatedMainCauses = function () {
                var defer = $q.defer();
                $scope.relatedMainCauses = [];

                $scope.selectedTile.relatesTo.forEach(function (_error) {
                    dataFactory.getMainCausesFromErrors(_error).then(function (_mainCause) {
                        if (_mainCause) {
                            $scope.relatedMainCauses.push(_mainCause);

                            if ($scope.relatedMainCauses.length === $scope.selectedTile.relatesTo.length) {
                                defer.resolve(_error);
                            }
                        }
                    });
                });

                return defer.promise;
            };

            $scope.closeRelatedOverlay = function () {
                overlay[0].classList.remove('open');
                relatedOverlay[0].classList.remove('open');
                $scope.areInfoButtonsDisabled = false;
            };

            $scope.openRelatedGroups = function (_id) {

                if (relatedOverlay[0].classList.contains('open')) {
                    $scope.closeRelatedOverlay();
                } else {
                    self.getRelatedErrors()
                            .then(self.getRelatedMainCauses)
                            .then(function () {
                                $scope.closeSolutionOverlay();
                                $scope.areInfoButtonsDisabled = true;
                                $scope.functionGroupId = _id;

                                overlay[0].classList.add('open');
                                relatedOverlay[0].classList.add('open');

                                $scope.showOverview = true;
                            });
                }
            };

            $scope.closeAllOverlays = function () {
                if (solutionsOverlay[0].classList.contains('open')) {
                    $scope.closeSolutionOverlay();
                }
                if (relatedOverlay[0].classList.contains('open')) {
                    $scope.closeRelatedOverlay();
                }
            };

            $scope.chartOverlay = function ($event) {
                var elem = document.getElementById("chartSelection");
                var eleButton = document.getElementById("dropdownFilterChart");

                elem.style.left = eleButton.offsetLeft + 'px';
                elem.style.top = (eleButton.offsetTop + 44) + 'px';

                if (elem.classList.contains('active')) {
                    elem.classList.remove('active');

                    var chartList = [];
                    angular.forEach($scope.selectedTile.additionalInfo, function (chart) {
                        if (chart.selected)
                            chartList.push(chart);
                    });

                    if (!angular.equals($scope.displayedCharts, chartList)) {
                        var myNode = document.getElementById("TrendPageContainer");
                        while (myNode.firstChild) {
                            myNode.removeChild(myNode.firstChild);
                        }

                        $scope.showTrendingCharts(chartList);
                    }

                } else {
                    elem.classList.add('active');
                }
                $event.stopPropagation();
            };

            $scope.changeCheckbox = function (selectedChart) {
                var index = 0;
                angular.forEach($scope.selectedTile.additionalInfo, function (chart) {
                    if (chart.selected)
                        index++;
                });

                if (index > 2)
                    selectedChart.selected = false;
            };

            $scope.initCheckbox = function (selectedChart) {
                angular.forEach($scope.displayedCharts, function (chart) {
                    if (chart.name === selectedChart.name && chart.selected) {
                        selectedChart.selected = true;
                    }
                });
            };

            $scope.selectError = function (item, index) {

                if (item.selected) {
                    var element = document.getElementById('gridplant').children[index];
                    element.style.display = 'block';
                } else {
                    var element = document.getElementById('gridplant').children[index];
                    element.style.display = 'none';
                }
            };

            $scope.openWindow = function ($event, $index) {

                $scope.closeTrendingOverlay();

                var semPanel = document.getElementById('SEMcontrol');
                semPanel.classList.add('open');

                var PNS = $scope.selectedTile.name;
                var time = $scope.selectedTile.trendTimestampStart;
                var URL = appConfig.serverUrl + "api/plants/" + $stateParams.id + "/errors";
                var fault = $scope.selectedTile.id;

                var iFrame = document.getElementById('frameSAM');
                iFrame.src = appConfig.SEMUrl + "?PNS=" + PNS + "&TIMESTAMP=" + time + "&FAULTID=" + fault + "&URL=" + URL;
            };

            $scope.closeWindow = function () {
                var semPanel = document.getElementById('SEMcontrol');
                semPanel.classList.remove('open');
            };
        });
