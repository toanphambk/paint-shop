/*!
 * emos-ui-trendpage.js v1.0.1-4
 * http://durr.com/
 *
 * Copyright 2016 Dürr Systems GmbH
 *
 * Date: 2018-08-28T06:12Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "emosWS requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    
    /** 
     * This class provides the functions to read and write trend data to the 
     * local storage.
     * 
     * @class
     * @alias VariableDialog
     * @param {TrendPage} trendPage - trend page which includes the trend chart
     * 
     * @license
     * Copyright (c) 2016 Dürr System AG
     * @author Khanh Do <NguyenDongKhanh.Do@durr.com>
     */

        function VariableDialog(trendPage) {
        /** 
         * The trend page which includes this variable dialog
         * @type {TrendPage}          
         */
        this.trendPage = trendPage;
        this.divElement = null;
        this.ui = null;
        this.tree = null;
        this.treeId = null;
        this.trendId = null;
        this.PLCListName = "emosTrendPLCList";
        this.PLCList = this.retrievePLCList();
    }

    /**
     * Set id of trend and get plant list from server
     * 
     * @param {String} trendId - id of trend
     */
    VariableDialog.prototype.setTrendId = function (trendId) {
        if (!this.trendId) {
            this.trendId = trendId;
            this.getPlanList();
        }
    };

    /**
     * Store PLC list to the local storage     * 
     */
    VariableDialog.prototype.storePLCList = function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.PLCListName, JSON.stringify(this.PLCList));
        }
    };

    /**
     * Retrieve the PLC list from the local storage
     */
    VariableDialog.prototype.retrievePLCList = function () {
        if (typeof (Storage) !== "undefined") {
            return JSON.parse(localStorage.getItem(this.PLCListName)) || {};
        }
    };

    /**
     * Send request to get plant list from server
     * 
     */
    VariableDialog.prototype.getPlanList = function () {
        emosWS.sendTrendGetPlantList(this.trendId);
    };

    /**
     * Handler when data of trend plant list coming
     * 
     * @param {Object} msg - store trend plant list data
     */
    VariableDialog.prototype.onDataTrendPlantList = function (msg) {
        try {
            var
                    showControl = true,
                    setting = this.trendPage.setting;
            if (setting &&
                    typeof setting.showControl !== "undefined") {
                showControl = setting.showControl;
            }
            if (showControl) {
                var PLC = JSON.parse(msg.data).PLC;
                PLC.forEach(function (plc) {
                    this.PLCList[plc] = this.PLCList[plc] || {};
                    emosWS.sendTrendGetItemList(this.trendId, plc);
                }.bind(this));
                for (var plc in this.PLCList) {
                    if (PLC.indexOf(plc) === -1) {
                        delete this.PLCList[plc];
                    }
                }
            }

            this.storePLCList();
        } catch (err) {
            console.log("VariableDialog onDataTrendPlantList() failed: " + err);
        }
    };

    /**
     * Handler when data of trend item list coming
     * 
     * @param {Object} msg - store trend item list data
     */
    VariableDialog.prototype.onDataTrendItemList = function (msg) {
        try {
            var
                    data = JSON.parse(msg.data),
                    Items = data.Items,
                    plc = data.PLC;

            for (var i = 0, len = Items.length; i < len; i++) {
                var
                        item = Items[i],
                        plctag = plc + item.Tag,
                        plant = this.PLCList[plc];

                plant[plctag] = item;
            }
            this.storePLCList();
            this.trendPage.onPlantData(plc);
        } catch (err) {
            console.error("VariableDialog onDataTrendItemList() failed: " + err);
        }
    };

    emosWS.VariableDialog = VariableDialog;


    
    function TrendWorker() {
    }

    TrendWorker.prototype.getWorker = function (WorkerClass) {
        // URL.createObjectURL
        window.URL = window.URL || window.webkitURL;

        // "Server response", used in all examples
        var
                blob,
                workerString = "(" + String((new WorkerClass()).main) + ")(self)";

        try {
            blob = new Blob([workerString], {type: 'application/javascript'});
        } catch (e) { // Backwards-compatibility
            window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
            blob = new BlobBuilder();
            blob.append(response);
            blob = blob.getBlob();
        }

        return new Worker(URL.createObjectURL(blob));
    };


    
    function TrendChartWorker() {
    }

    TrendChartWorker.prototype.main = function (self) {
        var
                getTS = function (tsString) {
                    var date = new Date(tsString);
                    var time = date.getTime();
                    //console.log("getTS: " + tsString + " -> " + time);
                    return parseInt(time);
                },
                getValue = function (valueString) {
                    return parseFloat(valueString);
                },
                joinDataF = function (oData, newData, tagIndex, plctag) {
                    var data = {};
                    newData.x.forEach(function (item, index) {
                        data[item.toString()] = {x: item, y: newData.y[index]};
                    });
                    this.testData[plctag].forEach(function (item) {
                        var ts = item.date.getTime();
                        data[ts.toString()] = {x: ts, y: item.v0};
                    });
                    var sortTSList = [];
                    for (var tsString in data) {
                        sortTSList.push(tsString);
                    }
                    sortTSList.sort();
                    this.testData[plctag].length = 0;
                    sortTSList.forEach(function (item) {
                        var obj = {};
                        obj["date"] = new Date(data[item].x);
                        obj["v0"] = data[item].y;
                        this.testData[plctag].push(obj);

                    }.bind(this));

                    return {x: [], y: []};
                },
                onAddNewTagValues = function (plctag, data) {
                    var newData = {x: [], y: []};
                    data.Values.forEach(function (item) {
                        newData.x.push(getTS(item.TS));
                        newData.y.push(getValue(item.Value));
                    });
                    var tsList = this.chartData.columns[this.tagDataIndex[plctag].x].slice();
                    var valueList = this.chartData.columns[this.tagDataIndex[plctag].y].slice();
                    var oData = {x: tsList, y: valueList};
                    var joinData = joinDataF.call(this, oData, newData, this.tagDataIndex[plctag].x, plctag);

                    this.chartData.columns[this.tagDataIndex[plctag].x] = joinData.x;
                    this.chartData.columns[this.tagDataIndex[plctag].y] = joinData.y;
                };

        self.onmessage = function (e) {
            var
                    d = e.data,
                    msg = d.msg;
            switch (d.type) {
                case "addNewTagValues":
                    onAddNewTagValues.call(msg, msg.plctag, msg.data);
                    postMessage(d);
                    break;

                case "C2":
                    postMessage({type: "C2", msg: "C2 finished!"});
                    break;

                default:
                    postMessage({type: "unknown", msg: "Unknown command: " + e.type});
                    break;
            }
        };
    };


     
    /** 
     * This class is built on top of {@link https://www.amcharts.com|Amcharts} to 
     * to visualize, print and export PLC data.
     * 
     * @class
     * @alias TrendChart
     * @param {TrendPage} trendPage - trend page which includes the trend chart
     * @param {Map} config - The configuration of the trend chart     
     * 
     * @license
     * Copyright (c) 2016 Dürr System AG
     * @author Khanh Do <NguyenDongKhanh.Do@durr.com>
     */
function TrendChart(trendPage, config) {
        this.QUALITY_FAKED = -1;
        this.FORCE = true;
        this.NO_FORCE = false;
        this.HAS_DATACHANGE = true;
        this.HAS_NO_DATACHANGE = false;
        this.hasDataChange = false;
        this.SPINNER_MAX_DURATION = 30; //s
        this.divElement = null;
        //1s for desktop, else mobile, tablet is 5s
        this.liveInterval = trendPage.isMobile ? 5000 : 1000; //miliseconds
        this.nullValue = 0.1122;
        this.legends = ['x'];
        this.rowsData = [this.legends];
        this.liveDuration = 1; //minutes        
        this.useLive = false;
        this.trendServer = null;
        this.useShowAllData = true;
        this.validateDataQueue = 0;
        // Configuration
        this.config = this.getConfig(config);
        /**
         * Variables set and used in TrendChart.prototype.createGUI method
         */
        this.id = null;
        this.chartId = null;
        this.backId = null;
        this.nextId = null;
        this.ui = null;
        this.spinner = null;
        this.backgroundColor = "transparent";
        this.chart = null;
        this.trendPage = trendPage;
        this.graphId = null;
        this.selected = false;
        this.hasNewData = false;
        this.livePeriod = 5 * 60000; //5 minutes
        this.interval = null;
        this.liveObserverInterval = null;
        /**
         * Variables checked in TrendChart.prototype.initializeChart method
         * this.taglist set in TrendChart.prototype.adviseData method. ! Setting may be unnecessary. !
         */
        this.createdChart = null;
        this.tagList = {};
        this.selectedPeriod = {};
        /**
         * Variables used in TrendChart.prototype.adviseData method.
         */
        this.historicInterval = 5; //120; //minutes
        this.jitter = 5; //minutes
        this.serverJitter = null;
        this.callbackList = {};
        /**
         *  Variables set in TrendChart.prototype.addNewTag method
         */
        this.chartData = {xs: {}, columns: []};
        this.testData = {};
        this.tempData = {};
        this.tagDataLength = 0;
        this.tagDataIndex = {};
        /**
         *  Variables used in TrendChart.prototype.getDataDate method
         */
        this.resolution = 1; //miliseconds

        /**
         *  Variables used in TrendChart.prototype.setPoint method
         */
        this.usePoint = trendPage.usePoint;
        /**
         *  Variables used in TrendChart.prototype.setDataInterpolated method
         */
        this.useDataInterpolated = trendPage.useDataInterpolated;
        /**
         * Variables set in TrendChart.prototype.addTrendRegisteredListener method
         * Variables used in TrendChart.prototype.onTrendRegistered method
         * @type {Array}
         */
        this.trendRegisteredListeners = [];
        
        this.synchronized = [];
        this.synchronizedTimeRange = { from: null, to: null };
        /**
         *  Variables used in TrendPage object
         */
        this.trendPage.createdChartList.push(this);
        this.handleLegendClick = this.handleLegendClick.bind(this);
        this.createGUI();
        this.createGraphs();
        this.trendPage.updateTitleBar();
    }

    /*
     * Update the start and end time of the chart 
     * @returns {undefined}
     */
    TrendChart.prototype.updateTimeRange = function () {
        var
                start = null,
                end = null;
        try {
            for (var tag in this.testData) {
                var dataProvider = this.testData[tag];
                if (dataProvider.length === 0)
                    continue;
                var
                        tagStart = new Date(dataProvider[0].date),
                        tagEnd = new Date(dataProvider[dataProvider.length - 1].date);
                start = start ? (tagStart < start ? tagStart : start) : tagStart;
                end = end ? (tagEnd > end ? tagEnd : end) : tagEnd;
            }
            this.setStart(start);
            this.setEnd(end);
        } catch (e) {
        }
    };
    /*
     * Prepare chart data to display:
     *  1.  Remove old faked data items (quality = this.QUALITY_FAKED)
     *  2.  Remove new faked data items (quality = this.QUALITY_FAKED) 
     *      according to the current time range
     * 
     * @returns {undefined}
     */
    TrendChart.prototype.prepareDataToDisplay = function () {
        this.removeOldFakedData();
        this.addNewFakedData();
    };
    TrendChart.prototype.removeOldFakedData = function () {
        for (var tag in this.testData) {
            this.removeOldFakedTagData(tag);
        }
    };
    TrendChart.prototype.removeOldFakedTagData = function (tag) {
        try {
            if (!tag)
                return;
            var
                    dataProvider = this.testData[tag],
                    i = dataProvider.length;
            while (i--) {
                if (dataProvider[i].quality === this.QUALITY_FAKED) {
                    dataProvider.splice(i, 1);
                }
            }
        } catch (e) {
            console.error(e);
        }
    };
    TrendChart.prototype.addNewFakedData = function () {
        try {
            this.updateTimeRange();
            for (var tag in this.testData) {
                var startFakedItem = {
                    date: this.start.getTime(),
                    value: 0,
                    quality: this.QUALITY_FAKED
                },
                        stopFakedItem = {
                            date: this.end.getTime(),
                            value: 0,
                            quality: this.QUALITY_FAKED
                        };
                try {
                    var
                            dataProvider = this.testData[tag],
                            tagStartItem = dataProvider[0],
                            tagEndItem = dataProvider[dataProvider.length - 1],
                            tagStartValue = tagStartItem.value,
                            tagEndValue = tagEndItem.value;
                    startFakedItem.value = tagStartValue;
                    stopFakedItem.value = tagEndValue;

                } catch (e) {
                }

                //add new faked data
                if (startFakedItem)
                    dataProvider.unshift(startFakedItem);
                if (stopFakedItem)
                    dataProvider.push(stopFakedItem);
                this.hasNewData = true;
            }
        } catch (e) {
            console.error(e);
        }
    };
    TrendChart.prototype.getConfig = function (config) {
        var templateConfig = {
            "isPublic": null,
            "fileId": null,
            "createdDate": null,
            "modifiedDate": null,
            "createdPerson": null,
            "modifiedPerson": null,
            "title": "",
            "properties": null,
            "graphs": []
        };
        if (config) {
            if (config.graphs) {
                templateConfig.graphs = config.graphs;
                templateConfig.title = config.title;
            } else {
                templateConfig.graphs = config;
            }
        }
        return templateConfig;
    };

    /**
     * FIRST STEP: Create Chart-GUI.
     * Trendchart-Container with config;
     * Div-Listener for "Previous Data", "New Data";
     * Drag and Drop-Area for adding new PLC-Tags;
     */
    TrendChart.prototype.createGUI = function () {
        try {
            this.id = getElementGlobalID();
            this.chartId = this.id + "chart";
            this.backId = this.id + "back";
            this.nextId = this.id + "next";
            this.selectId = getElementGlobalID();
            var s = '<div id="' + this.id + '" class="TrendChart">\n\
                        <div id="' + this.backId + '" class="TrendPageDiagramBackNext TrendPageDiagramBack"></div>\
                        <div id="' + this.nextId + '" class="TrendPageDiagramBackNext TrendPageDiagramNext"></div>\
                        <div id="' + this.chartId + '" class="TrendPageDiagramChart"></div>\
                        <span id="' + this.selectId + '" class="emosbutton buttonEdit"></span>\
                        <div class="trendBall"></div>\
                        <div class="trendBall1"></div>\
                    </div>';
            var $guiHTML = $(s);
            this.trendPage.diagrams.append($guiHTML);
            this.ui = document.getElementById(this.id);
            this.backgroundColor = this.ui.style.backgroundColor;
            this.chart = document.getElementById(this.chartId);
            var self = this;
            this.spinner = $('#' + this.id + ' > .trendBall' + ' , #' + this.id + ' > .trendBall1');
            this.ui.addEventListener("drop", function (event) {
                self.drop(event);
            }, false);
            this.ui.addEventListener("dragover", function (event) {
                self.allowDrop(event);
            }, false);
            this.ui.addEventListener("dragleave", function (event) {
                self.ui.style.backgroundColor = self.backgroundColor;
            }, false);

            this.chart.addEventListener("click", function () {
                if ($("#operationWrapper").hasClass("operationActive")) {
                } else {
                    $("#operationWrapper").addClass("operationActive");
                    $("#operationWrapper").animate({
                        left: "-=390"
                    }, 800);
                }

                if ($("#propsWrapper").hasClass("propsActive")) {
                    $("#propsWrapper").removeClass("propsActive");
                    $("#propsWrapper").animate({
                        left: "+=390"
                    }, 800);
                }

                $("#TrendPageToolbar").find(".ui-icon-minus").parent().button("enable");
                this.trendPage.selectedChart = this;
            }.bind(this), false);
            document.getElementById(this.backId).addEventListener("click", function () {
                this.loadDataBack();
            }.bind(this), false);
            document.getElementById(this.nextId).addEventListener("click", function () {
                this.loadDataNext();
            }.bind(this), false);
            $("#" + this.selectId).click(function () {
                this.select();
            }.bind(this));
            this.select();
        } catch (err) {
            console.log("TrendChart createGUI() failed: " + err);
        }
    };
    TrendChart.prototype.handleYAxisClick = function () {
        this.trendPage.generalYaxisOpen(this);
        $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
    };

    TrendChart.prototype.scaleFor = function (graphIndex) {
        try {
            var
                    chart = this.createdChart,
                    min = null,
                    max = null;
            if (graphIndex === -1) {
                min = -100000000000;
                max = 100000000000;
            } else {
                var set = chart.dataSets[graphIndex];
                set.dataProvider.forEach(function (item) {
                    var value = item.value;
                    if (min === null)
                        min = value;
                    if (max === null)
                        max = value;
                    if (min > value)
                        min = value;
                    if (max < value)
                        max = value;
                });
            }

            this.zoomToValues(min, max);
        } catch (e) {
            console.error(e);
        }
    };
    TrendChart.prototype.zoomToValues = function (min, max) {
        var
                chart = this.createdChart,
                valueAxis = chart.panels[0].valueAxes[0];
        valueAxis.zoomToValues(min, max);
        this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
    };
    TrendChart.prototype.select = function () {
        this.selected = !this.selected;
        if (this.selected)
            $("#" + this.selectId).removeClass("NoChartSelected").addClass("ChartSelected");
        else
            $("#" + this.selectId).removeClass("ChartSelected").addClass("NoChartSelected");
        this.trendPage.updateChartsRemoveSelectedButton();
        this.trendPage.updateGraphsAddNewGraphButton();
        this.trendPage.updateGraphsRemoveGraphButton();
        this.trendPage.updateTimeRangeButton();
    };
    /**
     * SECOND STEP: If Chart is not created already -> Create Chart.
     * Then advise Data to the created Chart
     * @param plctag
     */
    TrendChart.prototype.initializeChart = function (plctag, properties) {
        if (plctag)
            if (!this.createdChart) {
                this.createChart();
            }
        if (!this.tagList[plctag]) {
            this.adviseData(plctag);
            this.addGraph(plctag, properties);
        }
    };
    TrendChart.prototype.createChart = function () {
        try {
            var
                    valueAxe = {
                        "id": "default",
                        "axisAlpha": 0,
                        "position": "left",
                        "includeGuidesInMinMax": true
                    },
                    valueAxes = [valueAxe];
            if (this.trendPage.setting
                    && this.trendPage.setting.negTol
                    && this.trendPage.setting.posTol
                    ) {

                var posTol = this.trendPage.setting.posTol;
                var negTol = this.trendPage.setting.negTol;
                if (Array.isArray(this.trendPage.setting.posTol)) {
                    posTol = this.trendPage.setting.posTol[this.trendPage.createdChartList.length - 1];
                }
                if (Array.isArray(this.trendPage.setting.negTol)) {
                    negTol = this.trendPage.setting.negTol[this.trendPage.createdChartList.length - 1];
                }

                valueAxe.guides = [
                    {
                        lineAlpha: 0.8,
                        lineColor: "#A5B200",
                        fillColor: "#A5B200",
                        fillAlpha: 0.1,
                        label: "Tol.",
                        position: "right",
                        toValue: posTol,
                        value: negTol
                    }];
            }
            this.createdChart = AmCharts.makeChart(this.chartId, {
                "path": "js/amstockchart/amcharts",
                "pathToImages": "js/amstockchart/amcharts/images/",
                "theme": "durr",
                "dataDateFormat": "YYYY-MM-DD HH:NN:SS",
                "type": "stock",
                //"type": "serial",
                "chartScrollbarSettings": {
                    "enabled": false
                },
                "categoryAxesSettings": {
                    "parseDates": true,
                    "dashLength": 1,
                    "minorGridEnabled": true,
                    "minPeriod": "ss",
                    "maxSeries": 50000
                },
                "valueAxesSettings": {
                    "ignoreAxisWidth": true,
                    "inside": false
                },
                "dataSets": [],
                "panelsSettings": {
                    "marginRight": 45,
                    "marginLeft": 15,
                    "marginTop": 50,
                    "recalculateToPercents": "never"
                },
                "panels": [{
                        "backgroundColor": "#D9DFE4",
                        "backgroundApha": 1,
                        "showCategoryAxis": true,
                        "title": "Value",
                        //"percentHeight": 70,
                        "stockGraphs": [{
                                "id": "g0",
                                "bullet": "none", // "none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond", "xError", "yError" and "custom".                                
                                "compareGraphBullet": "none",
                                "useLineColorForBulletBorder": false,
                                //"type": "step",
                                "valueAxis": "default",
                                "valueField": "value",
                                "comparable": true,
                                "compareField": "value",
                                //"balloonText": "<span style='font-size:14px;'>[[title]] :: Wert:[[value]]</span>"
                                //"balloonText": "<span style='font-size:14px;'>[[title]], [[date]], [[value]]</span>"
                                /*"balloonText": "<span style='font-size:14px;'>[[title]]</span><br>" +
                                 "<span style='font-size:14px;'>[[date]]</span><br>" +
                                 "<span style='font-size:14px;'>[[value]]</span>"*/
                                "balloonText": "[[value]]",
                                "balloonFunction": function (graphDataItem, graph) {
                                    var data = graphDataItem.dataContext;
                                    return "Tag: " + graph.title + "<br>" +
                                            "Date: " + data.date.toLocaleString() + "<br>" +
                                            "Value: " + data.value + "<br>" +
                                            "Quality:" + data.quality;
                                },
                                "lineColorField": "lineColor"
                            }],
                        "legend": {
                            "useGraphSettings": false,
                            "position": "absolute",
                            "left": 50,
                            "top": -15,
                            "valueFunction": function (graphDataItem, valueText) {
                                if (valueText !== " ") {
                                    return parseFloat(valueText).toFixed(2);
                                } else {
                                    return valueText;
                                }
                            },
                            "listeners": [{
                                    "event": "hideItem",
                                    "method": this.legendListener
                                }, {
                                    "event": "showItem",
                                    "method": this.legendListener
                                }]
                        },
                        "chartScrollbar": {
                            "graph": "g0"
                        },
                        "chartCursor": {
                            "pan": true,
                            //"valueZoomable": false,
                            //"categoryLineEnabled": true,
                            "valueLineBalloonEnabled": true,
                            //"valueLineEnabled": true,                            
                            //"cursorAlpha": 1,
                            "cursorColor": "#258cbb",
                            //"limitToGraph": "g0",
                            "valueLineAlpha": 0.2,
                            "selectWithoutZooming": true
                        },
                        "valueAxes": valueAxes,
                        "valueScrollbar": {
                            "oppositeAxis": false,
                            "offset": 50,
                            "scrollbarHeight": 10
                        }
                    }],
                "export": {
                 "enabled": true,
                 "menu": []
                 }
            });
        } catch (err) {
            console.log("TrendChart createChart() failed: " + err);
        }
    };
    
    TrendChart.prototype.legendListener = function () {
        
        var hidden = false;
        var charts = this.trendPage.createdChartList;
        for (var j = 0; j < charts.length; j++) {
            if (hidden)
                break;
            var graphs = charts[j].createdChart.panels[0].graphs;
            for (var i = 0; i < graphs.length; i++) {
                if (graphs[i].hidden) {
                    hidden = true;
                    break;
                }
            }
        }
        if (hidden){
            $('#operationWrapper #propsWrapper .TrendGroupbox .GraphRemove').removeClass('disabled');
        } else{
            $('#operationWrapper #propsWrapper .TrendGroupbox .GraphRemove').addClass('disabled');
        }
    };
    TrendChart.prototype.refreshSize = function (height) {
        this.ui.style["height"] = height + "%";
    };
    TrendChart.prototype.refresh = function () {
        this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
    };
    /**
     * THIRD STEP: Advice Data to chart
     * @param plctag
     */
    TrendChart.prototype.adviseData = function (plctag) {
        try {
            var
                    setting = this.trendPage.setting,
                    end = null,
                    begin = null;

            if (setting
                    && typeof setting.trendTimestampStart !== "undefined"
                    && typeof setting.trendTimestampEnd !== "undefined") {
                begin = new Date(parseInt(setting.trendTimestampStart));
                end = new Date(parseInt(setting.trendTimestampEnd));
            } else {
                end = new Date();
                begin = new Date(end);
                begin.setMinutes(end.getMinutes() - this.historicInterval);
                end.setMinutes(end.getMinutes());
                var dataBeginDate = this.getDataBeginDate();
                var dateEndDate = this.getDataEndDate();
                
                if (dataBeginDate && dateEndDate && dataBeginDate.getTime() !== dateEndDate.getTime()) {
                    begin = begin.getTime() > dataBeginDate.getTime() ? dataBeginDate : begin;
                    end = dateEndDate;
                } else if (localStorage.getItem('TimeRangeFrom') && localStorage.getItem('TimeRangeTo')){
                    begin = new Date(localStorage.getItem('TimeRangeFrom'));
                    end = new Date(localStorage.getItem('TimeRangeTo'));
                }
            }
            
            this.setDate(begin, end);
            //advise historic data
            this.loadMoreTagData(plctag, begin, end);
        } catch (err) {
            console.log("TrendChart adviseData() failed: " + err);
        }
    };
    /* Get date of begin time from current data
     * 
     * @returns {Date}
     */
    TrendChart.prototype.getDataBeginDate = function () {
        return this.getDataDate(true);
    };
    /* Get date of end time from current data
     * 
     * @returns {Date}
     */
    TrendChart.prototype.getDataEndDate = function () {
        return this.getDataDate(false);
    };
     /* Set date of begin time
      * 
      * @param {timestamp} date: start
     */
    TrendChart.prototype.setDate = function (start, end) {
        this.previousStartDate = this.createdChart.startDate;
        this.createdChart.startDate = this.createdChart.firstDate = start;
        this.previousEndDate = this.createdChart.endDate;
        this.createdChart.endDate = this.createdChart.lastDate = end;
    };
    /* Get date of begin or end time from current data
     * 
     * @param {boolean} begin: determine whether begin or end
     * @returns {Date}
     */
    TrendChart.prototype.getDataDate = function (begin) {
        var ts = null;
        for (var tag in this.testData) {
            //this.restoreData(tag);
            var
                    dataProvider = this.testData[tag],
                    tsTag = dataProvider[begin ? 0 : dataProvider.length - 1];
            if (tsTag) {
                tsTag = tsTag.date;
                if (ts === null)
                    ts = tsTag;
                ts = (begin ? tsTag < ts : tsTag > ts) ? tsTag : ts;
            }
        }
        return ts === null ? ts : new Date(tsTag);
    };
    TrendChart.prototype.showSpinner = function () {
        this.spinner.show();
        setTimeout(function () {
            this.hideSpinner();
        }.bind(this), this.SPINNER_MAX_DURATION * 1000);
    };
    TrendChart.prototype.hideSpinner = function () {
        this.spinner.hide();
    };
    TrendChart.prototype.loadMoreTagData = function (plctag, begin, end) {
        var plctagList = emosWS.getPLCTag(plctag);
       
        //advise historic data
        this.addTrendRegisteredListener(function () {
            console.log("sendTrendGetItemValueList: " + this.trendPage.trendId);
            this.showSpinner();
            emosWS.sendTrendGetItemValueList(
                    this.trendPage.trendId,
                    plctagList.plc,
                    plctagList.tag,
                    begin.getUTCFullYear(),
                    begin.getUTCMonth() + 1,
                    begin.getUTCDate(),
                    begin.getUTCHours(),
                    begin.getUTCMinutes(),
                    begin.getUTCSeconds(),
                    end.getUTCFullYear(),
                    end.getUTCMonth() + 1,
                    end.getUTCDate(),
                    end.getUTCHours(),
                    end.getUTCMinutes(),
                    end.getUTCSeconds());
        }.bind(this));
    };
    TrendChart.prototype.addTrendRegisteredListener = function (callback) {
        if (this.trendPage.trendId)
            callback();
        else
            this.trendRegisteredListeners.push(callback);
    };
    /**
     * Executed by TrendPage.js to get data by trendItemValueList
     * trendRegisteredListeners defined in TrendChart.prototype.addTrendRegisteredListener
     */
    TrendChart.prototype.onTrendRegistered = function () {
        this.trendRegisteredListeners.forEach(function (callback) {
            callback();
        });
    };
    TrendChart.prototype.getTS = function (tsString) {
        return parseInt(new Date(tsString).getTime() / this.resolution);
    };
    TrendChart.prototype.getValue = function (valueString) {
        return parseFloat(valueString);
    };
    TrendChart.prototype.addNewTagValue = function (plctag, msg) {
        this.removeFirstElementData(plctag);
        var data = {
            date: this.getTS(msg.ts),
            value: this.getValue(msg.value),
            quality: parseInt(msg.quality)
        };
        
        this.testData[plctag].shift();
        this.testData[plctag].push(data);
        this.hasNewData = true;
    };
    /**
     * Triggered by TrendPageSchell.prototype.initializeMore
     * @param data
     */
    TrendChart.prototype.onDataTrendItemValueList = function (data) {
        try {
            console.log(data);
            if (this.trendServer) {
                if (data.TrendServer !== this.trendServer)
                    return;
            } else {
                this.trendServer = data.TrendServer;
            }
            var plctag = data.PLC + data.Tag;
            if (this.testData[plctag]) {
                this.hideSpinner();
                this.addDataTrendItemValueList(plctag, data);
                this.hasNewData = true;
                this.loadChart();
                
                if (this.synchronized[plctag] && (new Date(this.getTS(data.Values[data.Values.length - 1].TS)).getTime() === this.synchronizedTimeRange.to.getTime())){
                    delete this.synchronized[plctag];
                }
                this.trendPage.updateGraphsRemoveGraphButton();
            }
        } catch (err) {
            console.log("TrendChart onDataTrendItemValueList() failed: " + err);
        }
    };
    TrendChart.prototype.addGraph = function (plctag, properties) {
        var dataProvider = this.testData[plctag] = [
            {
                date: this.createdChart.startDate.getTime(),
                value: 0,
                quality: -1,
                lineColor: "red"
            }
        ];
        try {
            if (this.createdChart) {
                var
                        index = this.createdChart.dataSets.length,
                        set = {
                            "plc": plctag,
                            "title": plctag,
                            "fieldMappings": [{
                                    "fromField": "value",
                                    "toField": "value"
                                }],
                            "dataProvider": dataProvider,
                            "compared": true,
                            "categoryField": "date"
                        };
                if (properties && properties.color)
                    set.color = properties.color;
                this.createdChart.dataSets.push(set);
                this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
                if (properties) {
                    var task = setInterval(function () {
                        var graph = this.getGraphs()[index];
                        if (graph) {
                            var
                                    propertyList = ["thickness", "link", "mark", "hidden"],
                                    graphPropertyList = ["lineThickness", "type", "bullet", "hidden"];
                            propertyList.forEach(function (name, index) {
                                if (properties[name])
                                    graph[graphPropertyList[index]] = properties[name];
                            });
                            this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
                            clearInterval(task);
                        }
                    }.bind(this), 1000);
                }
            }
        } catch (err) {
            console.log("addGraphToCreatedChart() failed: " + err);
        }
    };
    /**
     * Here comes the Data
     * @param plctag
     * @param data
     */

    TrendChart.prototype.addDataTrendItemValueList = function (plctag, data) {
        this.removeFirstElementData(plctag);

        if (this.createdChart.dataSets.length > 1) {
            var newData = [];
            data.Values.forEach(function (item) {
                newData.push({
                    "date": this.getTS(item.TS),
                    "value": this.getValue(item.Value),
                    "quality": parseInt(item.Quality)
                });
            }.bind(this));
            var data = {};


            if (this.testData[plctag].length === 0) {
                newData.forEach(function (d) {
                    data[d.date] = d;
                });
            } else {
                var dataDefault = false;
                for (var i = 0; i < this.testData[plctag].length; i++) {

                    for (var j = 0; j < newData.length; j++) {
                        if (this.testData[plctag][i].date === newData[j].date) {
                            data[newData[j].date] = newData[j];
                            newData.splice(j, 1);
                            dataDefault = newData.length === 0 ? false : true;
                            break;
                        }
                    }

                    if (!dataDefault || newData.length === 0)
                        data[this.testData[plctag][i].date] = this.testData[plctag][i];
                }

                for (var j = 0; j < newData.length; j++) {
                    data[newData[j].date] = newData[j];
                }
            }
            //sort the combined data
            var sortTSList = [];
            for (var tsString in data) {
                sortTSList.push(tsString);
            }
            sortTSList.sort();
            this.testData[plctag].length = 0;
            sortTSList.forEach(function (tsString) {
                this.testData[plctag].push(data[tsString]);
            }.bind(this));

            var patternList = this.mergeTimestamp(this.testData[plctag]);

            for (var k = 0; k < this.createdChart.dataSets.length; k++) {
                var dataPnt = this.createdChart.dataSets[k].dataProvider.slice();
                var lastData = false;
                var dataList = this.testData[this.createdChart.dataSets[k].plc] = this.createdChart.dataSets[k].dataProvider = [];

                for (var i = 0; i < patternList.length; i++) {

                    if (lastData) {
                        dataList.push({date: patternList[i]});
                        continue;
                    }

                    if (dataPnt[0] && dataPnt[0].quality !== -1) {
                        if (patternList[i] < dataPnt[0].date) {
                            dataList.push({date: patternList[i]});
                        } else {
                            dataList.push(dataPnt[0]);

                            if (dataPnt.length === 1)
                                lastData = true;

                            dataPnt.splice(0, 1);
                        }
                    }
                }
            }
            console.log(this.testData);
        } else {
            //parse new data
            var newData = [];
            data.Values.forEach(function (item) {
                newData.push({
                    "date": this.getTS(item.TS),
                    "value": this.getValue(item.Value),
                    "quality": parseInt(item.Quality)
                });
            }.bind(this));
            //commbine new data and old data to data hash array
            var data = {};
            [newData, this.testData[plctag]].forEach(function (d) {
                d.forEach(function (item) {
                    data[item.date] = item;
                });
            });
            //sort the combined data
            var sortTSList = [];
            for (var tsString in data) {
                sortTSList.push(tsString);
            }
            sortTSList.sort();
            //generate sorted combined data for Amchart
            this.testData[plctag].length = 0;
            sortTSList.forEach(function (tsString) {
                this.testData[plctag].push(data[tsString]);
            }.bind(this));
        }
    };

    TrendChart.prototype.mergeTimestamp = function (data) {

        var mergeArray = function (array1, array2) {
            var result_array = [];
            var arr = array1.concat(array2);
            var len = arr.length;
            var assoc = {};

            while (len--) {
                var item = arr[len];

                if (!assoc[item.date])
                {
                    result_array.unshift(item.date);
                    assoc[item.date] = true;
                }
            }
            return result_array;
        };

        var self = this;
        var mergeAllData = self.createdChart.dataSets[0].dataProvider.slice();
        for (var i = 1; i < self.createdChart.dataSets.length; i++) {
            mergeAllData = mergeAllData.concat(self.createdChart.dataSets[i].dataProvider);
        }
        var mergedList = mergeArray(mergeAllData, data);

        return mergedList.sort();
    };

    TrendChart.prototype.removeFirstElementData = function (plctag) {
        var dataProvider = this.testData[plctag];
        if (dataProvider.length === 1 && dataProvider[0].quality === -1)
            dataProvider.shift();
    };

    TrendChart.prototype.loadChart = function () {
        if (this.createdChart) {
            if (this.hasNewData) {
                this.validateData(this.NO_FORCE, this.HAS_DATACHANGE);
            }
        }
    };
    TrendChart.prototype.showAllData = function () {
        this.useShowAllData = true;
        this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
    };
    TrendChart.prototype.setLive = function (live) {
        if (this.useLive !== live) {
            this.useLive = live;
            
            var self = this;
            this.createdChart.dataSets.forEach(function (graph) {
                var plctag = graph.plc;
                self.callbackList[plctag] = (self.callbackList[plctag]) || (function (msg) {
                    self.addNewTagValue(plctag, msg);
                    self.trendPage.setButtonsTimeRange(self.getDataBeginDate(), new Date(msg.ts));
                    //self.setDate(self.getDataBeginDate(), new Date(msg.ts));
                    self.validateData(self.FORCE, self.HAS_NO_DATACHANGE);
                });

                if (self.useLive) {
                    var begin = self.getDataBeginDate();
                    var end = new Date();
                    var dif = end - begin;
                    if (dif > 1800000){ // > 30min
                        begin = new Date(end.getTime() - (self.historicInterval) * 60 * 1000);
                        self.loadData(begin, end, true);
                    } else {
                        self.loadMoreTagData(plctag, begin, end);
                    }
                    
                    emosWS.advise(plctag, self.callbackList[plctag], "", emosWS.tagType.IO);
                } else {
                    emosWS.unadvise(plctag + ".IO", self.callbackList[plctag]);
                }
            });
               
            
            /*if (this.useLive) {
                for (var plctag in this.testData) {
                    this.backupData(plctag);
                }
            } else {
                for (var plctag in this.testData) {
                    this.restoreData(plctag);
                }
                this.hasNewData = true;
                this.loadChart();
            }*/
            this.trendPage.updateChartsRemoveSelectedButton();
        }
    };
    /*TrendChart.prototype.backupData = function (plctag) {
        var
                endDate = new Date(),
                startDate = new Date(endDate.getTime() - this.livePeriod).getTime(),
                stop = false;
        while (!stop && this.testData[plctag].length > 0) {
            var zeroItem = this.testData[plctag][0];
            if (zeroItem.date < startDate) {
                if (!this.tempData[plctag])
                    this.tempData[plctag] = [];
                this.tempData[plctag].push(this.testData[plctag].shift());
            } else {
                stop = true;
            }
        }
    };*/
    /*TrendChart.prototype.restoreData = function (plctag) {
        while (this.tempData[plctag] && this.tempData[plctag].length > 0) {
            this.testData[plctag].unshift(this.tempData[plctag].pop());
        }
    };*/
    /**
     * Sets the type of graphs to line or step.
     * @param interpolated
     * @values true | false
     */
    TrendChart.prototype.setDataInterpolated = function (interpolated) {
        if (interpolated === true) {
            for (var i = 0; i < this.createdChart.graphs.length; i++) {
                this.createdChart.graphs[i].type = "line";
            }
        } else {
            for (var i = 0; i < this.createdChart.graphs.length; i++) {
                this.createdChart.graphs[i].type = "step";
            }
        }
        this.useDataInterpolated = interpolated;
        this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
    };
    TrendChart.prototype.loadMoreData = function (beginDate, endDate, deleteCurrentData, sychronized) {
        if (deleteCurrentData) {
            for (var plctag in this.testData) {
                this.testData[plctag].length = 0;
            }
            this.validateData(this.NO_FORCE, this.HAS_DATACHANGE);
        } else {
            var dataBeginDate = this.getDataBeginDate();
            //quit if (beginDate is after dataBeginDate) or (beginDate is after endDate) :)
            if (beginDate > dataBeginDate || beginDate > endDate)
                return;
            //if endDate is after dataBeginDate, set it as dataBeginDate
            endDate = endDate > dataBeginDate ? dataBeginDate : endDate;
        }
        for (var plctag in this.testData) {
            if (sychronized){
                this.synchronized[plctag] = true;
            }
            this.loadMoreTagData(plctag, beginDate, endDate);
        }
    };
    TrendChart.prototype.getExportSVG = function () {
        return this.ui.innerHTML;
    };
    /* Terminate the chart:
     *      - unadvise all plc
     *      - clear the interval
     *      - then clear the created amchart.
     * 
     * @returns {undefined}
     */
    TrendChart.prototype.reset = function () {
        for (var plctag in this.callbackList) {
            emosWS.unadvise(plctag + ".IO", this.callbackList[plctag]);
        }
        clearInterval(this.interval);
        //this.stopObserveDataForLiveMode();
        this.createdChart = null;
    };
    /* Remove all hidden graphs
     * 
     * @returns {none}
     */
    TrendChart.prototype.removeHiddenGraphs = function () {
        var graphs = this.getGraphs();
        if (graphs) {
            for (var i = graphs.length - 1; i >= 0; i--) {
                if (graphs[i].hidden) {
                    graphs[i].hidden = false;
                    var plctag = this.createdChart.dataSets[i].title;
                    emosWS.unadvise(plctag + ".IO", this.callbackList[plctag]);
                    this.createdChart.dataSets.splice(i, 1);
                    this.validateData(this.FORCE, this.HAS_DATACHANGE);
                }
            }
        }
    };
    /* Iterate every selected graph and call callback 
     * 
     * @param {function} callback
     * @returns {none}
     */
    TrendChart.prototype.forEachSelectedGraph = function (callback) {
        var graphs = this.getGraphs();
        if (graphs) {
            graphs.forEach(function (graph, index) {
                if (!graph.hidden) {
                    try {
                        callback(graph, index);
                    } catch (e) {
                        console.error(e);
                    }
                }
            }.bind(this));
            this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
        }
    };
    /* Set line color to all selected graphs
     * 
     * @param {string} color
     * @returns {none}
     */
    TrendChart.prototype.setLegend = function (type) {
        var self = this;
        this.forEachSelectedGraph(function (graph, index) {
            var
                    dataSet = this.createdChart.dataSets[index],
                    plc = dataSet.plc;
            var propertyCallback = function (msg) {
                if (msg.value) {
                    var
                            v = msg.value,
                            unit = "[" + v.plc_baseunit + "]",
                            textId = v.textkey,
                            getDescription = function (callback) {
                                emosWS.sendAdviseText(textId, "name", callback, this);
                            },
                            setTitle = function (iTitle, refresh) {
                                dataSet.title = iTitle;
                                if (refresh)
                                    self.validateData(self.FORCE, self.HAS_NO_DATACHANGE);
                            }.bind(this);
                    switch (type) {
                        //Name
                        case "0":
                            setTitle(plc);
                            break;
                            //Name Unit
                        case "1":
                            setTitle(plc + " " + unit);
                            break;
                            //Name Unit Description
                        case "2":
                            var title = plc + " " + unit;
                            setTitle(title);
                            getDescription(function (msg) {
                                setTitle(title + " : " + msg.value, true);
                            });
                            break;
                            //Description
                        case "3":
                            setTitle(plc);
                            getDescription(function (msg) {
                                setTitle(msg.value, true);
                            });
                            break;
                            //Description Unit
                        case "4":
                            d
                            setTitle(plc + " " + unit);
                            getDescription(function (msg) {
                                setTitle(msg.value + " " + unit, true);
                            });
                            break;
                    }
                    if (!msg.fromVariableDialog)
                        emosWS.unadvise(emosWS.getTagId(plc, emosWS.tagType.Property), propertyCallback);
                }
            };
            try {
                var
                        plctagList = emosWS.getPLCTag(plc),
                        properties = this.trendPage.variableDialog.PLCList[plctagList.plc][plc];
                propertyCallback({
                    value: {
                        plc_baseunit: properties.PLC_Baseunit,
                        textkey: properties.Textkey
                    },
                    fromVariableDialog: true
                });
            } catch (e) {
                emosWS.advise(plc, propertyCallback, "", emosWS.tagType.Property);
            }
        }.bind(this));
    };
    /* Set line color to all selected graphs
     * 
     * @param {string} color
     * @returns {none}
     */
    TrendChart.prototype.setColor = function (color) {
        this.forEachSelectedGraph(function (graph, index) {
            this.createdChart.dataSets[index].color = color;
        }.bind(this));
    };
    /* Set line thickness to all selected graphs
     *  
     * @param {integer} thickness
     * @returns {none}
     */
    TrendChart.prototype.setThickness = function (thickness) {
        this.forEachSelectedGraph(function (graph) {
            graph.lineThickness = thickness;
        });
    };
    /* Set line type (line|step) to all selected graphs
     * 
     * @param {string} type
     * @returns {none}
     */
    TrendChart.prototype.setLink = function (type) {
        this.forEachSelectedGraph(function (graph) {
            if (graph.compareGraphType)
                graph.compareGraphType = type;
            graph.type = type;
        });
    };
    /* Set line bullet to all selected graphs
     * 
     * @param {string} mark
     * @returns {none}
     */
    TrendChart.prototype.setMark = function (mark) {
        this.forEachSelectedGraph(function (graph) {
            /*  Type of the bullets: Possible values are: "none", "round",
             *  "square", "triangleUp", "triangleDown", "bubble", "custom".
             */
            if (graph.compareGraphBullet)
                graph.compareGraphBullet = mark ? "round" : "none";
            graph.bullet = mark ? "round" : "none";
        });
        this.validateData(this.FORCE, this.HAS_NO_DATACHANGE);
    };
    TrendChart.prototype.onFilterDateSelected = function (begin, end, deleteCurrentData) {
        this.loadData(begin, end, deleteCurrentData);
    };
    TrendChart.prototype.loadDataNext = function (minute) {
        var begin = this.getDataEndDate();
        var end = new Date(begin.getTime() + (minute || this.historicInterval) * 60 * 1000);
        this.loadData(begin, end);
    };
    TrendChart.prototype.loadDataBack = function (minute) {
        var end = this.getDataBeginDate();
        var begin = new Date(end.getTime() - (minute || this.historicInterval) * 60 * 1000);
        this.loadData(begin, end);
    };
    TrendChart.prototype.loadData = function (begin, end, deleteCurrentData, sychronized) {
        this.loadMoreData(begin, end, deleteCurrentData, sychronized);
    };
    /* onlick handler when user click the graph legend
     * 
     * @returns {none}
     */
    TrendChart.prototype.handleLegendClick = function () {
        this.trendPage.updateGraphsRemoveGraphButton();
    };
    /* Get array of graphs in the created amchart
     * 
     * @returns {Array}
     */
    TrendChart.prototype.getGraphs = function () {
        try {
            return this.createdChart.panels[0].graphs;
        } catch (e) {
            return [];
        }
    };
    /*  Get number of the graphs in the created amchart
     * 
     * @returns {TrendChart_L2.TrendChart.createdChart.dataSets.length|Number}
     */
    TrendChart.prototype.getNumberOfGraphs = function () {
        try {
            //return this.getGraphs().length;
            return this.createdChart.dataSets.length;
        } catch (e) {
            return 0;
        }
    };
    /* Check if chart has any hidden graph
     * 
     * @returns {Boolean}
     */
    TrendChart.prototype.hasHiddenGraph = function () {
        try {
            var graphs = this.getGraphs();
            for (var i = 0, len = graphs.length; i < len; i++) {
                if (graphs[i].hidden)
                    return true;
            }
        } catch (e) {
        }
        return false;
    };
    /* Check if there's only one selected graph, it mean can set the color.
     * 
     * @returns {Boolean}
     */
    TrendChart.prototype.colorable = function () {
        try {
            var
                    no = 0,
                    graphs = this.getGraphs();
            for (var i = 0, len = graphs.length; i < len; i++) {
                if (!graphs[i].hidden)
                    no++;
            }
            return no === 1;
        } catch (e) {
        }
        return false;
    };
    /* Check if chart has any visible graph
     * 
     * @returns {Boolean}
     */
    TrendChart.prototype.hasVisibleGraph = function () {
        try {
            var graphs = this.getGraphs();
            for (var i = 0, len = graphs.length; i < len; i++) {
                if (!graphs[i].hidden)
                    return true;
            }
        } catch (e) {
        }
        return false;
    };
    TrendChart.prototype.updateAndGetConfiguration = function () {
        var
                graphs = this.getGraphs(),
                config = this.config,
                cfgGraphs = config.graphs = [];
        for (var i = 0, len = graphs.length; i < len; i++) {
            var
                    graph = graphs[i],
                    dataSet = this.createdChart.dataSets[i];
            cfgGraphs.push({
                "plc": dataSet.plc,
                "properties": JSON.stringify({
                    "color": dataSet.color,
                    "thickness": graph.lineThickness,
                    "link": graph.type,
                    "mark": graph.bullet,
                    "hidden": graph.hidden,
                    "legend": 0
                })
            });
        }
        return config;
    };
    TrendChart.prototype.createGraphs = function () {
        this.config.graphs.forEach(function (graphConfig) {
            var
                    properties = graphConfig.properties ? JSON.parse(graphConfig.properties) : null,
                    plc = graphConfig.plc ? graphConfig.plc : graphConfig;
            this.initializeChart(plc, properties);
        }.bind(this));
    };
    TrendChart.prototype.validateData = function (force, hasDataChange) {
        var
                self = this,
                validateData = function () {
                    if (!self.createdChart)
                        return;
                    self.createdChart.validateData();
                    
                    var datebegin = self.getDataBeginDate();
                    var dateend = self.getDataEndDate();
                    if ( datebegin && dateend) {
                        setTimeout(function () {
                            //if (self) {
                                self.setDate(datebegin, dateend);
                                self.createdChart.zoomOut();
                            //}
                        }, 1000);
                    }
                    self.hasNewData = false;
                };
        this.hasDataChange = this.hasDataChange || hasDataChange;

        validateData();
    };
    TrendChart.prototype.getPLCList = function () {
        try {
            var list = [];
            this.createdChart.dataSets.forEach(function (set) {
                list.push(set.plc);
            });
            return list;
        } catch (e) {
            return [];
        }
    };
    TrendChart.prototype.getColorList = function () {
        try {
            var list = [];
            this.createdChart.dataSets.forEach(function (set) {
                list.push(set.color);
            });
            return list;
        } catch (e) {
            return [];
        }
    };
    /*  When user is idle in 5 minutes, the trendPage calls this function
     *  to delete the old history data which are older than 2 hours. 
     * 
     * @returns {undefined}
     */
    TrendChart.prototype.deleteOldData = function () {
        var startDate = new Date();
        startDate.setMinutes(startDate.getMinutes() - this.historicInterval);
        //console.log(this.chartId  + " [deleteOldData] Removing data older than " + startDate.toLocaleString());

        for (var tag in this.testData) {
            var dataProvider = this.testData[tag];
            for (var i = 0, len = dataProvider.length; i < len; i++) {
                var
                        dataItem = dataProvider[i],
                        dataItemDate = new Date(dataItem.date);
                if (dataItemDate > startDate) {
                    dataProvider.splice(0, i);
                    break;
                }
            }
        }
    };
    TrendChart.prototype.getChartData = function (charts, chartIndex) {
        var cfg = {
            data: [],
            titles: {},
            dateFields: [],
            dataFields: [],
            dataFieldsMap: {}
        };
        var chart = this.createdChart;
        var uid, i1, i2, i3;
        var lookupFields = ["valueField", "openField", "closeField", "highField", "lowField", "xField", "yField"];
        var buffer;
        // HANDLE FIELDS
        function addField(field, title, type) {

            function checkExistance(field, type) {
                if (cfg.dataFields.indexOf(field) !== -1) {
                    return checkExistance([field, ".", type].join(""));
                }
                return field;
            }

            if (field && chart.type !== "gantt") {
                uid = checkExistance(field, type);
                cfg.dataFieldsMap[ uid ] = field;
                cfg.dataFields.push(uid);
                cfg.titles[ uid ] = title || uid;
            }
        }

        if (cfg.data.length === 0 && chart.type === "stock") {

            cfg.data = JSON.parse(JSON.stringify(chart.dataSets[chartIndex].dataProvider));
            for (var j = 0; j < cfg.data.length; j++) {
                var obj = cfg.data[j];
                obj[chart.dataSets[chartIndex].title] = obj["value"];
                obj[chart.dataSets[chartIndex].title + "_quality"] = obj["quality"];
                delete(obj["value"]);
                delete(obj["quality"]);
            }

            // CATEGORY AXIS
            addField(chart.dataSets[chartIndex].categoryField);
            cfg.dateFields.push(chart.dataSets[chartIndex].categoryField);
            // WALKTHROUGH GRAPHS
            for (i1 = 0; i1 < chart.dataSets[chartIndex].fieldMappings.length; i1++) {
                var fieldMap = chart.dataSets[chartIndex].fieldMappings[ i1 ];
                for (i2 = 0; i2 < chart.panels.length; i2++) {
                    var panel = chart.panels[i2];
                    for (i3 = 0; i3 < panel.stockGraphs.length; i3++) {
                        var graph = panel.stockGraphs[i3];
                        for (i4 = 0; i4 < lookupFields.length; i4++) {
                            if (graph[ lookupFields[ i4 ] ] === fieldMap.toField) {
                                addField(fieldMap.fromField, graph.title, lookupFields[ i4 ]);
                            }
                        }
                    }
                }
            }

            // MERGE DATA OF COMPARED GRAPHS IN RIGHT PLACE
            if (chart.comparedGraphs.length) {

                // BUFFER DATES FROM MAIN DATA SET
                buffer = [];
                for (i1 = 0; i1 < cfg.data.length; i1++) {
                    buffer.push(cfg.data[ i1 ][chart.dataSets[chartIndex].categoryField ]);
                }

                // WALKTHROUGH COMPARISON AND MERGE IT'S DATA
                for (i1 = 0; i1 < charts.length; i1++) {
                    var graph = chart.dataSets[ charts[i1] ];
                    for (i2 = 0; i2 < graph.dataProvider.length; i2++) {
                        var categoryField = graph.categoryField;
                        var categoryValue = graph.dataProvider[ i2 ][ categoryField ];
                        var comparedIndex = buffer.indexOf(categoryValue);
                        // PLACE IN RIGHT PLACE
                        if (comparedIndex !== -1) {
                            for (i3 = 0; i3 < graph.fieldMappings.length; i3++) {
                                var fieldMap = graph.fieldMappings[ i3 ];
                                var uid, uidQ;
                                if (fieldMap.toField === "value") {
                                    uid = graph.plc;
                                    uidQ = graph.plc + "_quality";
                                } else {
                                    uid = graph.id + "_" + fieldMap.toField;
                                    uidQ = graph.id + "_quality";
                                }

                                cfg.data[ comparedIndex ][ uid ] = graph.dataProvider[ i2 ][ fieldMap.fromField ];
                                cfg.data[ comparedIndex ][ uidQ ] = graph.dataProvider[ i2 ]["quality"];
                                // UNIQUE TITLE
                                if (!cfg.titles[ uid ]) {
                                    addField(uid, graph.title);
                                }
                                if (!cfg.titles[ uidQ ]) {
                                    addField(uidQ, graph.title);
                                }
                            }
                        }
                    }
                }
            }
        }
        return cfg;
    };

    emosWS.TrendChart = TrendChart;


    
    function TrendList() {
        this.trendList = null;
        this.trendListSize = 10;
        this.createGUI();
        this.trendPage = null;
        window.TrendListDialog = this;
    }

    TrendList.prototype.createGUI = function () {
        try {
            var id = getElementGlobalID();
            var listId = getElementGlobalID();
            var s = '<div id="' + id + '">\n\
                        <form>\n\
                            <select id="' + listId + '" class="TrendListOption"></select>\n\
                            <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">\n\
                        </form>\n\
                    </div>';
            var $guiHTML = $(s);
            $("body").append($guiHTML);
            this.ui = $("#" + id).dialog({
                modal: true,
                autoOpen: false,
                title: "Select a trend",
                width: 400,
                resizable: true,
                buttons: {
                    Cancel: function () {
                        this.ui.dialog("close");
                    }.bind(this),
                    OK: this.onSelected.bind(this)
                }
            });
            this.ui.find("form").on("submit", function (event) {
                event.preventDefault();
                this.onSelected();
            }.bind(this));
            this.trendList = document.getElementById(listId);
            this.trendList.size = this.trendListSize;
            this.trendList.addEventListener("dblclick", function () {
                this.onSelected();
            }.bind(this), false);
        } catch (err) {
            console.log("TrendList createGUI() failed: " + err);
        }
    };
    TrendList.prototype.onSelected = function () {
        if (this.trendList.value)
            this.trendPage.openTrendFromLocalStorage(this.trendList.value);
        this.ui.dialog('close');
    };
    TrendList.prototype.show = function (trendPage) {
        try {
            this.trendPage = trendPage;
            //remove all options
            while (this.trendList.options.length > 0)
                this.trendList.remove(0);
            //add actual options
            var trends = trendPage.retrieveTrends();
            for (var diagramName in trends) {
                var option = document.createElement("option");
                option.text = diagramName;
                if (diagramName === trendPage.trendName) {
                    option.selected = "true";
                }
                this.trendList.add(option);
            }

            this.ui.dialog("open");
        } catch (err) {
            console.log("TrendList createGUI() failed: " + err);
        }
    };
    emosWS.TrendList = TrendList;


    
    function FilterDate() {
        this.trendPage = null;
        this.date1HTML = null;
        this.hour1HTML = null;
        this.minute1HTML = null;
        this.second1HTML = null;
        this.date2HTML = null;
        this.hour2HTML = null;
        this.minute2HTML = null;
        this.second2HTML = null;
        this.date1 = null;
        this.date2 = null;
        this.createGUI();
        //window.FilterDateDialog = this;
    }

    FilterDate.prototype.createGUI = function () {
        try {
            var id = getElementGlobalID();
            var date1Id = getElementGlobalID();
            var timePicker1Id = getElementGlobalID();
            var hour1Id = getElementGlobalID();
            var minute1Id = getElementGlobalID();
            var second1Id = getElementGlobalID();
            var date2Id = getElementGlobalID();
            var timePicker2Id = getElementGlobalID();
            var hour2Id = getElementGlobalID();
            var minute2Id = getElementGlobalID();
            var second2Id = getElementGlobalID();
            var s = '<div id="' + id + '">\n\
                        <form>\n\
                            <div class="FilterDateLeft">\n\
                                <div id="' + date1Id + '"></div>\n\
                                <div class="vertical controls" id="' + timePicker1Id + '">\n\
                                    <input id="' + hour1Id + '">h\n\
                                    <input id="' + minute1Id + '">m\n\
                                    <input id="' + second1Id + '">s\n\
                                </div>\n\
                            </div>\n\
                            <div class="FilterDateRight">\n\
                                <div id="' + date2Id + '"></div>\n\
                                <div class="vertical controls" id="' + timePicker2Id + '">\n\
                                    <input id="' + hour2Id + '">h\n\
                                    <input id="' + minute2Id + '">m\n\
                                    <input id="' + second2Id + '">s\n\
                                </div>\n\
                            </div>\n\
                            <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">\n\
                        </form>\n\
                    </div>';
            var $guiHTML = $(s);
            $("body").append($guiHTML);
            this.ui = $("#" + id).dialog({
                modal: true,
                autoOpen: false,
                title: "Select start and end date",
                width: 540,
                resizable: true,
                buttons: {
                    Cancel: function () {
                        this.ui.dialog("close");
                    }.bind(this),
                    OK: this.onSelected.bind(this)
                }
            });
            this.ui.find("form").on("submit", function (event) {
                event.preventDefault();
                this.onSelected();
            }.bind(this));

            this.date1HTML = $("#" + date1Id).datepicker({
                changeMonth: true,
                changeYear: true
            });
            this.date1HTML.datepicker("option", "firstDay", 1);
            this.date1HTML.datepicker("option", "yearRange", "0:3000");
            this.hour1HTML = $("#" + hour1Id).spinner({min: 0, max: 23, step: 1, start: 1});
            this.minute1HTML = $("#" + minute1Id).spinner({min: 0, max: 59, step: 1, start: 0});
            this.second1HTML = $("#" + second1Id).spinner({min: 0, max: 59, step: 1, start: 0});
            this.date1 = {date: this.date1HTML, hour: this.hour1HTML, minute: this.minute1HTML, second: this.second1HTML};

            this.date2HTML = $("#" + date2Id).datepicker({
                changeMonth: true,
                changeYear: true
            });
            this.date2HTML.datepicker("option", "firstDay", 1);
            this.date2HTML.datepicker("option", "yearRange", "0:3000");
            this.hour2HTML = $("#" + hour2Id).spinner({min: 0, max: 23, step: 1, start: 1});
            this.minute2HTML = $("#" + minute2Id).spinner({min: 0, max: 59, step: 1, start: 0});
            this.second2HTML = $("#" + second2Id).spinner({min: 0, max: 59, step: 1, start: 0});
            this.date2 = {date: this.date2HTML, hour: this.hour2HTML, minute: this.minute2HTML, second: this.second2HTML};
        } catch (err) {
            console.log("FilterDate createGUI() failed: " + err);
        }
    };

    FilterDate.prototype.onSelected = function () {
        var beginDate = this.getTime(this.date1);
        var endDate = this.getTime(this.date2);
        if (beginDate <= endDate)
            this.diagram.onFilterDateSelected(beginDate, endDate);

        this.ui.dialog('close');
    };

    FilterDate.prototype.show = function (diagram) {
        try {
            this.diagram = diagram;
            this.setTimeControl(this.date1, diagram.getDataBeginDate());
            this.setTimeControl(this.date2, new Date());
            this.ui.dialog("open");
        } catch (err) {
            console.log("FilterDate show() failed: " + err);
        }
    };

    FilterDate.prototype.setTimeControl = function (control, date) {
        try {
            control.date.datepicker("setDate", date);
            control.hour.val(date.getHours());
            control.minute.val(date.getMinutes());
            control.second.val(date.getSeconds());
        } catch (err) {
            console.log("FilterDate setTimeControl() failed: " + err);
        }
    };

    FilterDate.prototype.getTime = function (control) {
        try {
            var date = control.date.datepicker("getDate");
            date.setHours(control.hour.val());
            date.setMinutes(control.minute.val());
            date.setSeconds(control.second.val());
            date.setMilliseconds(0);
            return date;
        } catch (err) {
            console.log("FilterDate getTime() failed: " + err);
        }
    };

    emosWS.FilterDate = FilterDate;


    
    function TrendFileREST() {
        this.path = "trends";
        this.pathGetInfo = "getInfo";
        this.pathSaveDiagram = "saveChart";
        this.pathSaveSet = "saveSet";
        this.pathDeleteDiagram = "deleteChart";
        this.pathDeleteSet = "deleteSet";
    }

    TrendFileREST.prototype.getPath = function () {
        return emosWS.rest.getPath() + "/" + this.path;
    };

    TrendFileREST.prototype.getCookieParam = function () {
        var cas = emosWS.Cas;
        return "?" + cas.WS_SESSION_COOKIE_TEXT + "=" + cas.cookie.getItem(cas.WS_SESSION_COOKIE_TEXT);
    };

    TrendFileREST.prototype.getPathGetInfo = function () {
        return this.getPath() + "/" + this.pathGetInfo + this.getCookieParam();
    };

    TrendFileREST.prototype.getPathSaveDiagram = function () {
        return this.getPath() + "/" + this.pathSaveDiagram + this.getCookieParam();
        ;
    };

    TrendFileREST.prototype.getPathSaveSet = function () {
        return this.getPath() + "/" + this.pathSaveSet + this.getCookieParam();
        ;
    };

    TrendFileREST.prototype.getPathDeleteDiagram = function () {
        return this.getPath() + "/" + this.pathDeleteDiagram + this.getCookieParam();
        ;
    };

    TrendFileREST.prototype.getPathDeleteSet = function () {
        return this.getPath() + "/" + this.pathDeleteSet + this.getCookieParam();
        ;
    };

    TrendFileREST.prototype.getInfo = function (success) {
        $.get(this.getPathGetInfo(), success);
    };

    TrendFileREST.prototype.saveChart = function (diagramObject, success, failure) {

        $.ajax({
            type: "POST",
            url: this.getPathSaveDiagram(),
            data: JSON.stringify(diagramObject),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.onMessage.bind(this, success, failure),
            failure: this.onHTTPFailure.bind(this, failure)
        });
    };

    TrendFileREST.prototype.saveSet = function (setObject, success, failure) {

        $.ajax({
            type: "POST",
            url: this.getPathSaveSet(),
            data: JSON.stringify(setObject),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.onMessage.bind(this, success, failure),
            failure: this.onHTTPFailure.bind(this, failure)
        });
    };

    TrendFileREST.prototype.deleteChart = function (diagramObject, success, failure) {
        $.ajax({
            type: "POST",
            url: this.getPathDeleteDiagram(),
            data: JSON.stringify(diagramObject),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.onMessage.bind(this, success, failure),
            failure: this.onHTTPFailure.bind(this, failure)
        });
    };

    TrendFileREST.prototype.deleteSet = function (setObject, success, failure) {
        $.ajax({
            type: "POST",
            url: this.getPathDeleteSet(),
            data: JSON.stringify(setObject),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.onMessage.bind(this, success, failure),
            failure: this.onHTTPFailure.bind(this, failure)
        });
    };

    TrendFileREST.prototype.onMessage = function (onSuccess, onFailure, msg) {
        if (msg.success) {
            onSuccess();
        } else {
            onFailure(msg.msg);
        }
    };

    TrendFileREST.prototype.onHTTPFailure = function (onFailure) {
        onFailure("Request is unreachable!");
    };

    emosWS.TrendFileREST = TrendFileREST;
    emosWS.trendFileREST = new TrendFileREST();

/**
 * A module to visualize, print and export PLC data
 * @module emosWS/TrendPage
 * 
 * @license
 * Copyright (c) 2016 Dürr System AG
 * @author Khanh Do <NguyenDongKhanh.Do@durr.com> 
 * @author Markus Weiss <Markus.Weiss-External@durr.com>
 * @author Anastasia Medved <Anastasia.Medved@durr.com>
 */

    

    /**
     * A module to visualize, print and export PLC data
     * @module emosWS/TrendPage
     * 
     * @license
     * Copyright (c) 2016 Dürr System AG
     * @author Khanh Do <NguyenDongKhanh.Do@durr.com> 
     * @author Markus Weiss <Markus.Weiss-External@durr.com>
     * @author Anastasia Medved <Anastasia.Medved@durr.com>
     */



    /** 
     * TrendPage provides all functionalites to visualize, print and export PLC 
     * data. It includes multiple {@link TrendChart} and a toolbar for operating.
     * 
     * @class
     * @alias TrendPage
     * @param {Object} configuration - The configuration of the trend page     
     * @param {String} configuration.uiID - The id of HTML element to store the trend page
     * @param {Array[]} configuration.data - Array of trend chart config. Each trend chart config contains array of PLC strings.
     * @param {Object} setting - The setting of trend page
     * @param {Number} setting.posTol - The value of positive tolerance
     * @param {Number} setting.negTol - The value of negative tolerance
     * @param {Number} setting.trendTimestampStart - The timestamp of start data
     * @param {Number} setting.trendTimestampEnd - The timestamp of end data
     * @param {Boolean} setting.showControl - Determines whether to show control toolbar
     * 
     * 
     * @example <caption> 1. Create a blank trend page: </caption>
     * var trendPage1 = new emosWS.TrendPage({
     *      'uiID': id,
     *      'data': [[]]
     * });
     *         
     * @example <caption> 2. Create a trend page with predefined data and setting: </caption>
     * var trendPage2 = new emosWS.TrendPage({
     *      'uiID': 'TrendPageMaker',
     *      'data': [
     *                  [
     *                     "PLC1.Tag1"
     *                  ]
     *      ],
     *      'setting': {
     *          'posTol': 1500,
     *          'negTol': -1500,
     *          'trendTimestampStart': Date.now() - 3600000 * 8,    //8 hours before
     *          'trendTimestampEnd': Date.now(),                    //now
     *          'showControl': false
     *      }
     * });
     * 
     * @license
     * Copyright (c) 2016 Dürr System AG
     * @author Khanh Do <NguyenDongKhanh.Do@durr.com>
     */
    function TrendPage(configuration) {
        /** 
         * The version of trend page 
         * @type {String}          
         */
        this.version = "1.0.1-4";

        /** 
         * config of trend page 
         * @type {String}          
         */
        this.config = this.getDefaultConfig();

        /** 
         * Load without confirmation
         * @constant 
         * @type {Boolean} 
         * @default
         */
        this.LOAD_WITHOUT_CONFIRMATION = true;

        /** 
         * Load with confirmation
         * @constant 
         * @type {Boolean} 
         * @default
         */
        this.LOAD_WITH_CONFIRMATION = false;

        /** 
         * Reset to empty set
         * @constant 
         * @type {Boolean} 
         * @default
         */
        this.RESET_TO_EMPTY_SET = true;

        /** 
         * Reset to empty set
         * @constant 
         * @type {Boolean} 
         * @default
         */
        this.RESET_TO_PRESET_SET = false;

        /** 
         * Maximum number of charts
         * @constant 
         * @type {Number} 
         * @default
         */
        this.MAX_NUMBER_OF_CHARTS = 4;

        /** 
         * Maximum number of graphs per chart
         * @constant 
         * @type {Number} 
         * @default
         */
        this.MAX_NUMBER_OF_GRAPHS_PER_CHART = 16;

        /** 
         * Trigger duration to remove old data (in ms)
         * @constant 
         * @type {Number} 
         * @default
         */
        this.OLD_DATA_REMOVAL_TRIGGER_DURATION = 5 * 60000;

        /** 
         * Config PLC data of trend page
         * @type {Array}          
         */
        this.trendData = typeof configuration.data === "undefined" ? [] : configuration.data;

        //this.src = configuration.advanced;

        /** 
         * id of HTML placehold element to add this trend page inside
         * @type {String}          
         */
        this.targetId = configuration.uiID;

        /** 
         * id of HTML placehold element to add this trend page inside
         * @type {String}          
         */
        this.setting = configuration.setting;

        /** 
         * determines whether the control toolbar is displayed or not 
         * @type {Boolean}          
         * @default
         */
        this.controlDisplayed = true;

        /** 
         * Observe for the removal of the trendpage from the DOM
         * @type {Object}
         */
        this.DOMRemoveObserve = null;

        if (this.setting)
            console.info(this.setting);

        /** 
         * DOM id of trend page element
         * @type {String}
         */
        this.elementId = this.targetId + "_TrendPage";

        /** 
         * Name of the local Storage key of trend list
         * @type {String}
         * @default
         */
        this.trendListName = "emosCreatedChartList";

        /** 
         * Name of trend page
         * @type {String}
         */
        this.trendName = null;

        /** 
         * Variable diaglog of trend page
         * @type {VariableDialog}
         */
        this.variableDialog = new VariableDialog(this);


        /** 
         * Diagram list
         * @type {Array}
         */
        this.diagrams = null;

        this.diagramsElement = null;

        /** 
         * Chart list
         * @type {Array}         
         */
        this.createdChartList = [];

        /** 
         * id of trend page
         * @type {Array}
         * @default
         */
        this.trendId = null;

        /** 
         * determines whether trendpage is displayed in fullscreen mode
         * @type {Array}
         * @default
         */
        this.isFullscreen = false;

        this.usePoint = false;
        this.useDataInterpolated = true;
        this.tbRealtime = null;
        this.tbRealtimeId = null;
        this.tbDataInterpolated = null;
        this.tbDataInterpolatedId = null;
        this.tbDataPoint = null;
        this.tbDataPointId = null;

        /** 
         * the current selected chart
         * @type {TrendChart}
         */
        this.selectedChart = null;

        /** 
         * the current selected graphs
         * @type {Map}
         */
        this.selectedGraphs = {};

        this.selectedPLC = null;
        this.selectedSetFromDialog = null;
        this.selectedChartFromDialog = [];

        /** 
         * the current time range of trend page
         * @type {Map}
         */
        this.timeRange = {
            from: null,
            to: null
        };

        /** 
         * the hostname of active trend server
         * @type {String}
         */
        this.trendServer = null;

        /** 
         * determines if the target device is mobilephone/tablet or desktop
         * @type {String}
         */
        this.isMobile = this.checkIfMobile();

        this.oldDataRemoval = this.setOldDataRemoval();
        this.createGUI();
        this.initializeMore();
        this.createAllCharts();
    }

    TrendPage.prototype.constructor = TrendPage;

    /**
     * Get default config for a trend page
     * 
     * @returns {Map} default config
     */
    TrendPage.prototype.getDefaultConfig = function () {
        this.setting = null;
        return {
            "isPublic": null,
            "fileId": null,
            "createdDate": null,
            "modifiedDate": null,
            "createdPerson": null,
            "modifiedPerson": null,
            "title": "",
            "properties": null,
            charts: []
        };
    };

    /**
     * Creates the GUI for trend page
     */
    TrendPage.prototype.createGUI = function () {
        try {
            var setting = this.setting,
                    toolbarId = getElementGlobalID(),
                    diagramsID = getElementGlobalID(),
                    sToolbar = '<div class="TrendDiagnose" id="' + toolbarId + '">\
                            <div class="TrendDiagnoseHeader"><div id="diagnoseHeader">No set loaded</div><div id="diagnoseSubline"></div><span id="fullscreenBtn" class="emosbutton buttonFullscreenMax"></span></div>\
                            <div class="TrendDiagnosisContent">\
                            <div class="TrendDiagnoseBody" role="main">\
                            <div class="TrendDiagnosisPageControl diamodifier diatabs ui-tabs">\
                            <div class="operationHeader">\
                            <ul class="ui-tabs-nav"><li class="emosbutton Management ui-tabs-active" id="GeneralOperation"><span></span></li>\
                            <li class="emosbutton Chart" id="GeneralCharts"><span></span></li>\
                            <li class="emosbutton Graph" id="GeneralGraph"><span></span></li>\
                            <li class="emosbutton Time" id="GeneralOptions"><span></span></li></ul>\
                            </div>\
                            <div id="operationWrapper">\
                            </div>\
                            </div></div></div>\
                            </div>',
                    s = '<div class="TrendPageWrapper" id="' + this.elementId + '">\
                    <div id="TrendPageToolbar" class="diagnose tptoolbar">' + sToolbar + '</div>\
                    <div id="' + diagramsID + '" class="TrendCharts">\
                    </div>\
                    </div>',
                    $guiHTML = $(s),
                    self = this;
            this.divJElement = $("#" + this.targetId);
            this.divJElement.append($guiHTML);
            this.targetElement = document.getElementById(this.targetId);
            this.element = document.getElementById(this.elementId);
            this.diagrams = $("#" + diagramsID);
            
            var text = document.getElementById('diagnoseHeader');
            emosWS.sendAdviseText("T04_NoSet", "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);

            //handle remove element event
            try {
                var terminate = function () {
                    console.log("TrendPage element is removed from DOM!");
                    self.terminate();
                };
                this.divJElement.on("remove", function () {
                    terminate();
                });
                this.DOMRemoveObserve = new MutationObserver(function (mutations) {
                    for (var i = 0, len = mutations.length; i < len; i++) {
                        var mutation = mutations[i],
                                removedNodes = mutation.removedNodes;
                        if (removedNodes) {
                            for (var j = 0, leng = removedNodes.length; j < leng; j++) {
                                if (removedNodes[j] === self.element) {
                                    terminate();
                                    return;
                                }
                            }
                        }
                    }
                });
                this.DOMRemoveObserve.observe(this.targetElement, {childList: true});
            } catch (e) {
                console.error(e);
            }

            this.diagrams.on("dblclick", function () {
                if (this.controlDisplayed) {
                    this.closeControl();
                } else {
                    this.showControl();
                }
            }.bind(this));

            $('#fullscreenBtn').on("click", function () {
                this.isFullscreen = !this.isFullscreen;
                if (this.isFullscreen) {
                    
                    this.forEachNotSelectedChart(function (noSelchart) {
                        $(noSelchart.chart).closest('.TrendChart').css('display', 'none');
                    });
                    this.refreshSizeSelectedCharts();
                    
                    if (this.targetElement.children[0])
                        $(this.targetElement.children[0]).addClass("fullscreen");

                    $('#fullscreenBtn').removeClass('buttonFullscreenMax').addClass('buttonFullscreenMin');
                    if (this.targetElement.requestFullscreen) {
                        this.targetElement.requestFullscreen();
                    } else if (this.targetElement.webkitRequestFullscreen) {
                        this.targetElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    } else if (this.targetElement.mozRequestFullScreen) {
                        this.targetElement.mozRequestFullScreen();
                    } else if (this.targetElement.msRequestFullscreen) {
                        this.targetElement.msRequestFullscreen();
                    }
                } else {
                    if (this.targetElement.children[0])
                        $(this.targetElement.children[0]).removeClass("fullscreen");

                    this.forEachNotSelectedChart(function (noSelchart) {
                        $(noSelchart.chart).closest('.TrendChart').css('display', 'block');
                    });
                    this.refreshSize();
                    
                    $('#fullscreenBtn').removeClass('buttonFullscreenMin').addClass('buttonFullscreenMax');
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            }.bind(this));

            /**
             * Map functions to the buttons
             * @type {TrendPage}
             */
            
            if ($("#quickcontrol #TrendPageContainer").length !== 0){
                this.generalOptionsOpen();
            } else {
                this.generalOperationOpen();
            }

            closeOverlay = function () {
                $(".modalBg").remove();
                $("#openSets").remove();
                $("#openCharts").remove();
            };

            $("#GeneralOperation").click(function () {
                closeOverlay();
                this.generalOperationOpen();
                $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                $("#GeneralOperation").addClass("ui-tabs-active");
            }.bind(this));

            $("#GeneralGraph").click(function () {
                closeOverlay();
                this.generalGraphOpen();
                $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                $("#GeneralGraph").addClass("ui-tabs-active");
            }.bind(this));

            $("#GeneralCharts").click(function () {
                closeOverlay();
                this.generalChartsOpen();
                $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                $("#GeneralCharts").addClass("ui-tabs-active");
            }.bind(this));

            $("#GeneralOptions").click(function () {
                closeOverlay();
                this.generalOptionsOpen();
                $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                $("#GeneralOptions").addClass("ui-tabs-active");
            }.bind(this));

            $(".overlayClose").find(".closeModal").click(function () {
                $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                $("#loadOverlay").remove();
                $(".modalBg").remove();
            }.bind(this));

            if (setting && typeof setting.showControl !== "undefined") {
                var showControl = setting.showControl;
                if (!showControl) {
                    this.closeControl();
                }
            }
        } catch (err) {
            console.log("TrendPage createGUI() failed: " + err);
        }
    };

    /**
     * Initialize process to delete the old data frequenly     * 
     */
    TrendPage.prototype.setOldDataRemoval = function () {
        this.oldDataRemoval = emosWS.setUserIdle(
                this.OLD_DATA_REMOVAL_TRIGGER_DURATION,
                {
                    onInactive: function () {
                        this.createdChartList.forEach(function (chart) {
                            chart.deleteOldData();
                        });
                    }.bind(this),
                    recurrent: true
                }
        );
    };

    /**
     * Determines if the current user has admin right
     * 
     * @returns {Boolean} whether the user has admin right
     */
    TrendPage.prototype.hasAdminRight = function () {
        return CheckUserRight("sys_sr", 11);
    };
    
    TrendPage.prototype.hasSystemAccessRight = function () {
        return CheckUserRight("sys_sr", 12);
    };

    /**
     * Creates the Save Overlay
     */
    TrendPage.prototype.createOverlaySave = function () {
        var tbHeadline = getElementGlobalID(),
                set = getElementGlobalID(),
                chart1 = getElementGlobalID(),
                chart2 = getElementGlobalID(),
                chart3 = getElementGlobalID(),
                chart4 = getElementGlobalID(),
                idButtonPublic = getElementGlobalID(),
                idButtonPrivate = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="saveOverlay">\
                <div class="overlayClose">\
                <span class="icon"></span>\
                <span id="' + tbHeadline + '" class="pagerHeadLine">Save</span>\
                <span class="closeModal timebutton emosbutton"></span>\
                </div>\
                <div class="TrendGroupbox">\
                <span id="' + set + '" class="timetext">Set</span>\
                <span class="timebutton emosbutton openSet saveStatus ChartSelected"></span>\
                <input id="saveSetText" type="text">\
                </div>\
                <div class="TrendGroupbox">\
                <span id="' + chart1 + '" class="timetext">Chart 1</span>\
                <span class="timebutton emosbutton openChart saveStatus disabled ChartSelected"></span>\
                <input id="saveChartText0" type="text" readonly>\
                <span id="' + chart2 + '" class="timetext">Chart 2</span>\
                <span class="timebutton emosbutton openChart saveStatus disabled NoChartSelected"></span>\
                <input id="saveChartText1" type="text" readonly>\
                <span id="' + chart3 + '" class="timetext">Chart 3</span>\
                <span class="timebutton emosbutton openChart saveStatus disabled NoChartSelected"></span>\
                <input id="saveChartText2" type="text" readonly>\
                <span id="' + chart4 + '" class="timetext">Chart 4</span>\
                <span class="timebutton emosbutton openChart saveStatus disabled NoChartSelected"></span>\
                <input id="saveChartText3" type="text" readonly>\
                </div>\
                <span class="publicbutton timebutton emosbutton"></span>\
                <span id="' + idButtonPublic + '" class="buttonSaveOver">Public</span>\
                <span class="saveOk private timebutton emosbutton"></span>\
                <span id="' + idButtonPrivate + '" class="buttonSaveOver">Private</span>\
                </div>',
                $guiHTML = $(s),
                self = this,
                close = function () {
                    $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                    $(".modalBg").remove();
                    $("#saveOverlay").remove();
                    $('.overlayBridge.save').hide();
                };
        this.divJElement.append($guiHTML);
        if (!this.hasAdminRight()) {
            $(".publicbutton").remove();
        }
        
        var tmpIds = {};
        tmpIds[tbHeadline] = 'Save';
        tmpIds[set] = 'Set';
        tmpIds[chart1] = 'Chart1';
        tmpIds[chart2] = 'Chart2';
        tmpIds[chart3] = 'Chart3';
        tmpIds[chart4] = 'Chart4';
        tmpIds[idButtonPublic] = 'Public';
        tmpIds[idButtonPrivate] = 'Private';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });        
        
        var updateButtons = function () {
            $(".saveStatus").each(function () {
                if ($(this).hasClass("ChartSelected"))
                    $(this).removeClass("NoChartSelected").addClass("ChartSelected");
                else
                    $(this).removeClass("ChartSelected").addClass("NoChartSelected");
            });
        };
        var config = this.updateAndGetConfiguration();
        $("#saveSetText").val(config.title);
        config.charts.forEach(function (chart, index) {
            var $text = $("#saveChartText" + index);
            $text.val(chart.title);
            $text.prop('readonly', false);
            $text.prev().removeClass("NoChartSelected").addClass("ChartSelected");
            $text.prev().removeClass("disabled");
        });
        updateButtons();
        $(".saveStatus").click(function () {
            ($(this).hasClass("ChartSelected")) ? $(this).removeClass("ChartSelected").addClass("NoChartSelected") : $(this).removeClass("NoChartSelected").addClass("ChartSelected");
            updateButtons();
        });
        $("#saveOverlay").find(".closeModal").click(function () {
            close();
        }.bind(this));
        this.hideBridges();
        $('.overlayBridge.save').show();

        $(".saveOk").click(function () {
            
            $('#saveOverlay').find('input').removeClass('error');
            var empty = $('#saveOverlay').find('.ChartSelected').next('[value=""]');
            if (empty.length > 0){
                empty.addClass('error');
                return;
            }            
            self.saveFiles(false);
            close();
        });
        $(".publicbutton").click(function () {
            
            $('#saveOverlay').find('input').removeClass('error');
            var empty = $('#saveOverlay').find('.ChartSelected').next('[value=""]');
            if (empty.length > 0){
                empty.addClass('error');
                return;
            }
            self.saveFiles(true);
            close();
        });
    };

    /**
     * Creates the Load Overlay
     */
    TrendPage.prototype.createOverlayLoad = function () {
        var tbHeadline = getElementGlobalID(),
                set = getElementGlobalID(),
                chart1 = getElementGlobalID(),
                chart2 = getElementGlobalID(),
                chart3 = getElementGlobalID(),
                chart4 = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="loadOverlay">\
                <div class="overlayClose">\
                <span class="icon"></span>\
                <span id="' + tbHeadline + '" class="pagerHeadLine">Load</span>\
                <span class="closeModal timebutton emosbutton"></span>\
                </div>\
                <div class="TrendGroupbox">\
                <span id="' + set + '" class="timetext">Set</span>\
                <span class="timebutton emosbutton openSet">..</span>\
                <input id="loadSetText" type="text" readonly>\
                </div>\
                <div class="TrendGroupbox">\
                <span id="' + chart1 + '" class="timetext">Chart 1</span>\
                <span class="timebutton emosbutton openChart">..</span>\
                <input id="loadChartText0" type="text" readonly>\
                <span id="' + chart2 + '" class="timetext">Chart 2</span>\
                <span class="timebutton emosbutton openChart disabled">..</span>\
                <input id="loadChartText1" type="text" readonly>\
                <span id="' + chart3 + '" class="timetext">Chart 3</span>\
                <span class="timebutton emosbutton openChart disabled">..</span>\
                <input id="loadChartText2" type="text" readonly>\
                <span id="' + chart4 + '" class="timetext">Chart 4</span>\
                <span class="timebutton emosbutton openChart disabled">..</span>\
                <input id="loadChartText3" type="text" readonly>\
                </div>\
                <span class="loadOk timebutton emosbutton"></span>\
                <span class="clearSelection timebutton emosbutton"></span>\
                </div>',
                $guiHTML = $(s),
                self = this,
                close = function () {
                    $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                    $(".modalBg").remove();
                    $("#loadOverlay").remove();
                    $('.overlayBridge.load').hide();
                };
        this.divJElement.append($guiHTML);

        $("#loadOverlay").find(".closeModal").click(function () {
            close();
        }.bind(this));

        this.hideBridges();
        $('.overlayBridge.load').show();

        var tmpIds = {};
        tmpIds[tbHeadline] = 'Load';
        tmpIds[set] = 'Set';
        tmpIds[chart1] = 'Chart1';
        tmpIds[chart2] = 'Chart2';
        tmpIds[chart3] = 'Chart3';
        tmpIds[chart4] = 'Chart4';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });

        var config = this.updateAndGetConfiguration();
        $("#loadSetText").val(config.title);
        this.selectedSetFromDialog = config;

        $(".openChart").click(function (e) {
            $('#loadOverlay .emosbutton').removeClass('active');
            $(e.target).addClass('active');
            $("#openSets").remove();
            $("#openCharts").remove();
            var button = this;
            emosWS.trendFileREST.getInfo(function (data) {
                try {
                    var privateCharts = [],
                        publicCharts = [];
                        
                    data.charts.forEach(function (aChart) {
                        if (aChart.isPublic) {
                            publicCharts.push(aChart);
                        } else {
                            privateCharts.push(aChart);
                        }
                    });
                    
                    publicCharts.sort(function (a, b) {
                        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // namen müssen gleich sein
                        return 0;
                    });
                    privateCharts.sort(function (a, b) {
                        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // namen müssen gleich sein
                        return 0;
                    });                   
                    self.createOverlayOpenCharts(privateCharts, publicCharts, button.nextElementSibling);
                } catch (e) {
                    console.error('getInfo failed: ' + e);
                }
            });
        });
        $(".openSet").click(function () {
            this.prepareOverlayOpenSets();
        }.bind(this));
        
        $(".clearSelection").click(function () {
            $('#loadOverlay').find(":input").each(function (){
                this.value = "";
            });
            $('.openChart').each(function (index){
                if (index > 0) 
                    $(this).addClass('disabled');
            });
        }.bind(this));
        
        $(".loadOk").click(function () {
            this.setLive(false);
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            this.loadFiles(close);
        }.bind(this));
    };
    TrendPage.prototype.prepareOverlayOpenSets = function () {
        $('#loadOverlay .emosbutton').removeClass('active');
        $(".openSet").addClass('active');
        $("#openSets").remove();
        $("#openCharts").remove();

        emosWS.trendFileREST.getInfo(function (data) {
            try {
                var privateSets = [],
                        publicSets = [];

                data.sets.forEach(function (aSet) {
                    if (aSet.isPublic) {
                        publicSets.push(aSet);
                    } else {
                        privateSets.push(aSet);
                    }
                });
                
                publicSets.sort(function (a, b) {
                    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // namen müssen gleich sein
                    return 0;
                });
                privateSets.sort(function (a, b) {
                    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // namen müssen gleich sein
                    return 0;
                });
                    
                this.createOverlayOpenSets(privateSets, publicSets);
            } catch (e) {
                console.error('getInfo failed: ' + e);
            }
        }.bind(this));
    };
    /**
     * Creates the Delete Overlay
     */
    TrendPage.prototype.createOverlayDelete = function () {
        var tbHeadline = getElementGlobalID(),
                tbSubHead1 = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="deleteOverlay">\
                <div class="overlayClose">\
                <span class="icon"></span>\
                <span id="' + tbHeadline + '" class="pagerHeadLine">Delete</span>\
                <span class="closeModal timebutton emosbutton"></span>\
                </div>\
                <div class="TrendGroupbox">\
                <span id="' + tbSubHead1 + '" class="timetext">Set</span>\
                <span class="timebutton emosbutton openSet deleteStatus ChartSelected"></span>\
                <input id="deleteSetText" type="text">\
                </div>\
                <div class="TrendGroupbox">\
                <span class="timetext">Chart 1</span>\
                <span class="timebutton emosbutton openChart deleteStatus NoChartSelected disabled"></span>\
                <input id="deleteChartText0" type="text" readonly>\
                <span class="timetext">Chart 2</span>\
                <span class="timebutton emosbutton openChart deleteStatus NoChartSelected disabled"></span>\
                <input id="deleteChartText1" type="text" readonly>\
                <span class="timetext">Chart 3</span>\
                <span class="timebutton emosbutton openChart deleteStatus NoChartSelected disabled"></span>\
                <input id="deleteChartText2" type="text" readonly>\
                <span class="timetext">Chart 4</span>\
                <span class="timebutton emosbutton openChart deleteStatus NoChartSelected disabled"></span>\
                <input id="deleteChartText3" type="text" readonly>\
                </div>\
                 <span class="deleteOk private timebutton emosbutton"></span>\
                </div>',
                $guiHTML = $(s),
                self = this,
                close = function () {
                    $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                    $(".modalBg").remove();
                    $("#deleteOverlay").remove();
                    $('.overlayBridge.delete').hide();
                }; 
                
        this.divJElement.append($guiHTML);
        if (!this.hasAdminRight()) {
            $(".publicbutton").remove();
        }
        var tmpIds = {};
        tmpIds[tbHeadline] = 'Delete';
        tmpIds[tbSubHead1] = 'Set';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        var updateButtons = function () {
            if ($(".deleteStatus").hasClass("ChartSelected"))
                $(".deleteOk").removeClass("disabled");
            else
                $(".deleteOk").addClass("disabled");

            $(".deleteStatus").each(function () {
                if ($(this).hasClass("ChartSelected"))
                    $(this).removeClass("NoChartSelected").addClass("ChartSelected");
                else
                    $(this).removeClass("ChartSelected").addClass("NoChartSelected");
            });
        };
        var config = this.updateAndGetConfiguration();
        $("#deleteSetText").val(config.title);
        config.charts.forEach(function (chart, index) {
            var $text = $("#deleteChartText" + index);
            $text.val(chart.title);
            $text.prop('readonly', false);
            $text.prev().removeClass("NoChartSelected").addClass("ChartSelected");
            $text.prev().removeClass("disabled");
        });
        updateButtons();

        $(".deleteStatus").click(function () {
            ($(this).hasClass("ChartSelected")) ? $(this).removeClass("ChartSelected").addClass("NoChartSelected") : $(this).removeClass("NoChartSelected").addClass("ChartSelected");
            updateButtons();
        });

        $("#deleteOverlay").find(".closeModal").click(function () {
            close();
        }.bind(this));

        this.hideBridges();
        $('.overlayBridge.delete').show();

        $(".deleteOk").click(function () {
            self.setLive(false);
            self.deleteFiles(false);
            close();
        });

        $(".publicbutton").click(function () {
            self.deleteFiles(true);
        });
    };

    /**
     * Creates the Print-Overlay
     */
    TrendPage.prototype.createOverlayPrint = function () {
        var tbHeadline = getElementGlobalID(),
            tbSubHead2 = getElementGlobalID(),
            tbCharts = getElementGlobalID(),
            chart1 = getElementGlobalID(),
            chart2 = getElementGlobalID(),
            chart3 = getElementGlobalID(),
            chart4 = getElementGlobalID(),
            s = '<div class="modalBg">\
                <div id="printOverlay">\
                <div class="overlayClose">\
                <span class="icon"></span>\
                <span id="' + tbHeadline + '" class="pagerHeadLine">Print</span>\
                <span class="closeModal timebutton emosbutton"></span></div>\
                <div id="printOverflow" class="TrendGroupbox">\
                <span id="' + tbCharts + '" class="timetext">Charts</span>';

        this.createdChartList.forEach(function (chart, chartIndex) {
            var id = chart1;
            if (chartIndex === 1)
                id = chart2;
            else if (chartIndex === 2)
                id = chart3;
            else if (chartIndex === 3)
                id = chart4;
            
            s += '<span class="timebutton emosbutton printBtn' + (chart.selected ? ' ChartSelected' : '') + '" data-chartindex="' + chartIndex +
                    '"></span><span id="' + id + '" class="buttonDescription">Chart ' + (chartIndex + 1) + '</span>';
        });
        
        s += '</div>\
                <div class="TrendGroupbox">\
                <span id="' + tbSubHead2 + '" class="timetext">Format</span>\
                <span class="timebutton emosbutton printCharts"></span>\
                <span class="timebutton emosbutton printJpg">JPG</span>\
                <span class="timebutton emosbutton printPdf">PDF</span>\
                <span class="timebutton emosbutton printPng">PNG</span>\
                <span class="timebutton emosbutton printSvg">SVG</span>\
                </div>\
                </div>';
            var $guiHTML = $(s),
                self = this,
                close = function () {
                    $(".modalBg").remove();
                    $("#printOverlay").remove();
                    $('.overlayBridge.printer').hide();
                    $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                };
        this.divJElement.append($guiHTML);
        this.hideBridges();
        $('.overlayBridge.printer').show();
        $("#printOverlay").find(".closeModal").click(function () {
            close();
        }.bind(this));

        var tmpIds = {};
        tmpIds[tbHeadline] = 'Print';
        tmpIds[tbSubHead2] = 'Format';
        tmpIds[tbCharts] = 'Charts';
        tmpIds[chart1] = 'Chart1';
        tmpIds[chart2] = 'Chart2';
        tmpIds[chart3] = 'Chart3';
        tmpIds[chart4] = 'Chart4';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        var config = this.updateAndGetConfiguration();
        config.charts.forEach(function (chart, index) {
            var $text = $("#printChartText" + index);
            $text.val(chart.title);
            $text.prev().removeClass("disabled");
            if (self.createdChartList[index].selected) {
                $text.prev().removeClass("NoChartSelected").addClass("ChartSelected");
            }
        });
        
        $(".printBtn").click(function (e) {
            if ($(e.target).hasClass("ChartSelected")){
                $(e.target).removeClass("ChartSelected");
            } else {
                $(e.target).addClass("ChartSelected");
            }
        });

        $(".printCharts").click(function () {
            var mode = 'iframe'; // popup
            var closeM = (mode === "popup");
            var options = {mode: mode, popClose: closeM};
            $(".TrendCharts").printArea(options);
            close();
        });

        $(".printJpg").click(function () {
            this.toJPG();
            close();
        }.bind(this));

        $(".printPdf").click(function () {
            this.toPDF();
            close();
        }.bind(this));

        $(".printPng").click(function () {
            this.toPNG();
            close();
        }.bind(this));

        $(".printSvg").click(function () {
            this.toSVG();
            close();
        }.bind(this));

    };

    /**
     * Creates the Export-Overlay
     */
    TrendPage.prototype.createOverlayExport = function () {
        var tbHeadline = getElementGlobalID(),
                tbSubHead1 = getElementGlobalID(),
                tbChart1 = getElementGlobalID(),
                tbChart2 = getElementGlobalID(),
                tbChart3 = getElementGlobalID(),
                tbChart4 = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="exportOverlay">\
                <div class="overlayClose">\
                <span class="icon"></span>\
                <span id="' + tbHeadline + '" class="pagerHeadLine">Export</span>\
                <span class="closeModal timebutton emosbutton"></span></div>\
                <div id="exportOverflow" class="TrendGroupbox">';

        this.createdChartList.forEach(function (chart, chartIndex) {
            var idChart = tbChart1;
            if (chartIndex === 1){
                idChart = tbChart2;
            } else if (chartIndex === 2){
                idChart = tbChart3;
            } else if (chartIndex === 3){
                idChart = tbChart4;
            }
            
            var title = chart.config.title === "" ? "" : ' - ' + chart.config.title; 
            s += '<span id="' + idChart + '" class="timetext" title="' + title + '">Chart ' + (chartIndex + 1) + title + '</span>';
            //s += '<div class="exportLong">Chart ' + (chartIndex + 1) + title + '</div>';
            var graphs = chart.getGraphs();
            if (graphs) {
                graphs.forEach(function (graph, graphIndex) {
                    var dataSet = chart.createdChart.dataSets[graphIndex],
                            plc = dataSet.plc,
                            id = 'wert' + chartIndex + '.' + graphIndex;
                            
                            
                    s += '<span class="timebutton emosbutton printBtn' + (graph.hidden ? '' : ' ChartSelected') + '" data-chartindex="' + chartIndex + '" data-graphindex="' + graphIndex +
                        '"></span><span id="' + id + '" class="buttonDescription">' + plc + '</span>';
                }.bind(this));
            }
        });

        s += '</div>\
                <div class="TrendGroupbox">\
                <span id="' + tbSubHead1 + '" class="timetext">Format</span>\
                <span class="timebutton emosbutton exportCsv">CSV</span>\
                <span class="timebutton emosbutton exportJson">JSON</span>\
                <span class="timebutton emosbutton exportXlsx">XLSX</span>\
                </div>\
                </div>';

        var $guiHTML = $(s),
                self = this;

        this.divJElement.append($guiHTML);

        var close = function () {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#exportOverlay").remove();
            $('.overlayBridge.export').hide();
        };

        this.hideBridges();
        $('.overlayBridge.export').show();
        $(".overlayClose").find(".closeModal").click(function () {
            close();
        }.bind(this));

        var tmpIds = {};
        tmpIds[tbHeadline] = 'Export';
        tmpIds[tbSubHead1] = 'Format';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        
        $(".printBtn").click(function (e) {
            if ($(e.target).hasClass("ChartSelected")) {
                $(e.target).removeClass("ChartSelected");
            } else {
                $(e.target).addClass("ChartSelected");
            }
        });

        $(".exportCsv").click(function () {
            self.toCSV();
            close();
        }.bind(this));

        $(".exportJson").click(function () {
            self.toJSON();
            close();
        }.bind(this));

        $(".exportXlsx").click(function () {
            self.toXLSX();
            close();
        }.bind(this));

    };

    /**
     * Creates the openCharts-Overlay
     */
    TrendPage.prototype.createOverlayOpenCharts = function (privateCharts, publicCharts, textElement) {
        var s = '<div id="openCharts">\
                <div class="overlayClose"><span class="icon"></span>\
                <span class="pagerHeadLine">Load Charts</span>\
                <span class="closeModal timebutton emosbutton"></span></div>\
                <div class="TrendGroupbox">\
                <span class="timetext">Charts</span>\
                <table class="overlay">\
                    <tbody id="privateChartTable"></tbody>\
                </table>\
                <table class="overlay">\
                    <tbody id="publicChartTable"></tbody>\
                </table>\
                <br><br><br>\
                </div>\
                </div>',
                $guiHTML = $(s);
        
        if ($(this.divJElement).find('.modalBg').length === 0)
            return;
        
        $(this.divJElement).find('.modalBg').append($guiHTML);
        
        var publicTable = document.getElementById("publicChartTable"),
                privateTable = document.getElementById("privateChartTable"),
                fillTable = function (charts, table) {
                    charts.forEach(function (chart) {
                        var row = table.insertRow();
                        var titleCell = row.insertCell();
                        var modfiedDateCell = row.insertCell();
                        var modfiedPersonCell = row.insertCell();
                        titleCell.textContent = chart.title;
                        modfiedDateCell.textContent = this.getDateString(new Date(chart.modifiedDate));
                        modfiedPersonCell.textContent = chart.modifiedPerson;
                        row.addEventListener("click", function () {
                            textElement.value = chart.title;
                            textElement.dataChart = chart;
                            if (textElement.nextElementSibling !== null) {
                                textElement.nextElementSibling.nextElementSibling.classList.remove("disabled");
                            }
                            $('#loadOverlay .emosbutton').removeClass('active');
                            $('#openCharts').remove();
                        }.bind(this));
                    }.bind(this));
                }.bind(this);
        fillTable(privateCharts, privateTable);
        fillTable(publicCharts, publicTable);
        $(".overlayClose").find(".closeModal").click(function () {
            $('#loadOverlay .emosbutton').removeClass('active');
            $("#openCharts").remove();
        }.bind(this));
    };

    /**
     * Creates the openSets-Overlay
     */
    TrendPage.prototype.createOverlayOpenSets = function (privateSets, publicSets) {
        var headline = getElementGlobalID(),
                subHeadline = getElementGlobalID(),
                subHeadline2 = getElementGlobalID(),
                s = '<div id="openSets">\
                    <div class="overlayClose">\
                    <span class="icon"></span>\
                    <span id="' + headline + '" class="pagerHeadLine">Choose set</span>\
                    <span class="closeModal timebutton emosbutton"></span></div>\
                    <div class="TrendGroupbox">\
                    <table class="overlay">\
                    <thead><tr><th colspan="3" id="' + subHeadline + '">Private</th></tr></thead>\
                    <tbody id="privateTable"></tbody>\
                    </table>\
                    <table class="overlay">\
                    <thead><tr><th colspan="3" id="' + subHeadline2 + '">Public</th></tr></thead>\
                    <tbody id="publicTable"></tbody>\
                    </table>\
                    <br><br><br>\
                    </div>\
                    </div>',
                $guiHTML = $(s);
        
        if ($(this.divJElement).find('.modalBg').length === 0)
            return;
        
        $(this.divJElement).find('.modalBg').append($guiHTML);
        var publicTable = document.getElementById("publicTable"),
                privateTable = document.getElementById("privateTable"),
                fillTable = function (sets, table) {
                    sets.forEach(function (aSet) {
                        var row = table.insertRow();
                        var titleCell = row.insertCell();
                        var modfiedDateCell = row.insertCell();
                        var modfiedPersonCell = row.insertCell();
                        titleCell.textContent = aSet.title;
                        modfiedDateCell.textContent = this.getDateString(new Date(aSet.modifiedDate));
                        modfiedPersonCell.textContent = aSet.modifiedPerson;
                        row.addEventListener("click", function () {
                            $('#loadOverlay').find(":input").each(function () {
                                this.value = "";
                            });
                            $('.openChart').each(function (index) {
                                if (index > 0)
                                    $(this).addClass('disabled');
                            });
                            this.selectedSetFromDialog = aSet;
                            
                            $('#loadSetText').val(aSet.title);
                            aSet.charts.forEach(function (chart, index) {
                                var text = document.getElementById("loadChartText" + index);
                                text.value = chart.title;
                                text.dataChart = chart;
                                //enable the next InputField if available
                                if (text.nextElementSibling)
                                    text.nextElementSibling.nextElementSibling.classList.remove("disabled");
                            });
                            $('#loadOverlay .emosbutton').removeClass('active');
                            $('#openSets').remove();
                        }.bind(this));
                    }.bind(this));
                }.bind(this);
        fillTable(privateSets, privateTable);
        fillTable(publicSets, publicTable);
        $(".overlayClose").find(".closeModal").click(function () {
            $('#loadOverlay .emosbutton').removeClass('active');
            $("#openSets").remove();
        }.bind(this));

        var tmpIds = {};
        tmpIds[headline] = 'ChooseSet';
        tmpIds[subHeadline] = 'Private';
        tmpIds[subHeadline2] = 'Public';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
    };

    /**
     * Update the trend page config according to the selected chart from user
     */
    TrendPage.prototype.updateSelectedChartFromDialog = function () {
        if (this.selectedSetFromDialog)
            this.config = this.selectedSetFromDialog;
        var selectedChart = this.selectedChartFromDialog = [];
        for (var i = 0; i < 4; i++) {
            var text = document.getElementById("loadChartText" + i);
            if (text && text.dataChart)
                selectedChart.push(text.dataChart);
            else if (this.config && this.config.charts && this.config.charts[i]) {
                selectedChart.push(this.config.charts[i]);
            }
        }
        this.config.charts = selectedChart;
    };

    /**
     * Get user's selected sets and charts from Save Overlay
     * @returns {Map} selected sets and charts
     */
    TrendPage.prototype.getSelectedFromSaveDialog = function () {
        var text = document.getElementById("saveSetText");
        var selected = text.previousElementSibling.textContent === globalYes;
        var selectedSetFromDialog = selected ? this.selectedSetFromDialog : null;
        var selectedChart = [];
        this.selectedChartFromDialog.forEach(function (chart, i) {
            var text = document.getElementById("saveChartText" + i);
            var selected = text.previousElementSibling.textContent === globalYes;
            if (selected)
                selectedChart.push(chart);
        });
        return {set: selectedSetFromDialog, charts: selectedChart};
    };

    /**
     * Get string of a Date
     * @param {Date} d
     * @returns {String} String of the given data
     */
    TrendPage.prototype.getDateString = function (d) {
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    };

    /**
     * Handler when plan data coming.
     * @param {String} plc     
     */
    TrendPage.prototype.onPlantData = function (plc) {
        if ($("#plcTable").length) {
            var self = this,
                    data = {},
                    s = "";

            if (plc === "$System") {
                for (var plc in this.variableDialog.PLCList) {
                    for (var plctag in this.variableDialog.PLCList[plc]) {
                        data[plctag] = this.variableDialog.PLCList[plc][plctag];
                    }
                }
            } else if (plc === this.selectedPLC) {
                data = this.variableDialog.PLCList[plc];
            } else {
                return;
            }

            for (var tag in data) {
                var plcName = tag;
                s += '<tr>\
                        <td><input id="' + plcName + '" type="checkbox" data-plc="' + plcName + '"></td>\
                        <td><label for="' + plcName + '">' + plcName + '</label></td>\
                        </tr>';
            }
            $("#plcTable").empty();
            $("#plcTable").append($(s));

            //update selected plc
            var permanentList = this.selectedChart.getPLCList();
            $("#plcTable input").each(function (i, e) {
                var plc = e.dataset.plc;
                if (self.selectedGraphs[plc])
                    e.checked = true;
                if (permanentList.indexOf(plc) > -1)
                    e.disabled = true;
            });

            //handle input click
            $("#plcTable input").click(function () {
                var numberOfSelected = Object.keys(self.selectedGraphs).length,
                        plc = this.dataset.plc;
                if (this.checked) {
                    if (numberOfSelected === self.MAX_NUMBER_OF_GRAPHS_PER_CHART) {
                        this.checked = false;
                        this.getMessageBox("Information", "Information", "Sorry, you cannot select more than " + self.MAX_NUMBER_OF_GRAPHS_PER_CHART + " graphs per chart!", "InformationText");
                    } else {
                        self.selectedGraphs[plc] = true;
                    }
                } else {
                    delete self.selectedGraphs[plc];
                }

                self.updateTitleOfAddGraphOverlay();
            });
        }
    };

    /**
     * Callback for remove overlays after finish.
     * 
     * @callback removeOverlays
     */
    /**
     * Creates the addNewGraph-Overlay
     * 
     * 
     * @param {removeOverlays} callback - A callback to run
     */
    TrendPage.prototype.createAddNewGraph = function (removeOverlays) {
        this.selectedGraphs = {};
        this.selectedChart.getPLCList().forEach(function (plc) {
            this.selectedGraphs[plc] = true;
        }.bind(this));
        this.selectedPLC = null;
        var
                plcList = this.variableDialog.PLCList,
                tbHeadline = getElementGlobalID(),
                tbFilter = getElementGlobalID(),
                s = '<div class="modalBg">\
                    <div id="openNewGraph">\
                        <div class="overlayClose">\
                            <span class="icon"></span>\
                            <span id="' + tbHeadline + '" class="pagerHeadLine">Add graph</span>\
                            <span class="closeModal timebutton emosbutton"></span>\
                        </div>\
                        <div class="TrendGroupbox">\
                            <span id="' + tbFilter + '" class="timetext">Filter</span>\
                            <input class="trendPLCFilter" type="text">\
                        </div>\
                        <div class="TrendGroupbox data">\
                            <table id="overlayNewGraph">\
                                <tbody id="graphTable">\
                                    <tr>\
                                        <td valign="top">\
                                            <div class="plantTableOverflow">\
                                                    <table id="plantTable">';
        for (var plant in plcList) {
            s +=
                    '                                   <tr>\
                                                            <td valign="top"><span class="plantRow emosbutton" data-plant="' + plant + '">' + plant + '</span></td>\
                                                        </tr>';
        }
        s += '                                      </table>\
                                            </div>\
                                            <div class="scrollOverlayer"></div>\
                                        </td>\
                                        <td class="plcTableSpace">&nbsp;</td>\
                                        <td id="newGraphLeft" valign="top">\
                                            <div class="plcTableOverflow">\
                                                <table id="plcTable">\
                                                    <tr>\
                                                        <td class="firstempty">&nbsp;</td>\
                                                    </tr>\
                                                </table>\
                                            </div>\
                                            <div class="scrollOverlayerRight"></div>\
                                        </td>\
                                    </tr>\
                                    <tr>\
                                        <td class="transLeft"><div class="scrollRow"></div></td>\
                                        <td></td>\
                                        <td class="transRight"><div class="scrollRow"></div></td>\
                                    </tr>\
                                </tbody>\
                            </table>\
                        </div>\
                        <span class="addGraphOk timebutton emosbutton"></span><br class="cl">\
                    </div>\
                </div>';

        var
                $guiHTML = $(s),
                self = this;
        this.divJElement.append($guiHTML);
        this.hideBridges();
        
        
        var tmpIds = {};
        tmpIds[tbHeadline] = 'AddGraph';
        tmpIds[tbFilter] = 'Filter';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        
        $('.overlayBridge.newgraph').show();
        $(".plantRow").click(function (e) {
            $("#plcTable").empty();
            $('.transRight .scrollUp').remove();
            $('.transRight .scrollDown').remove();
            var plc = (e).target.dataset.plant;
            self.selectedPLC = plc;
            if (!plcList[plc]) {
                emosWS.sendTrendGetItemList(self.variableDialog.trendId, plc);
            } else {
                self.onPlantData(plc);
            }

            $("#plcTable").scrollTop(0);
            $('.plcTableOverflow').scrollTop(0);

            scrollUpDownButton('.transRight .scrollRow', null, null, 'scrollDown');
            scrollUpDownButton('.transRight .scrollRow', null, null, 'scrollUp');

        });
        $(".addGraphOk").click(function () {
            this.setLive(false);
            var permanentList = this.selectedChart.getPLCList();
            for (var plc in this.selectedGraphs) {
                if (permanentList.indexOf(plc) === -1)
                    this.selectedChart.initializeChart(plc);
            }
            this.selectedGraphs = {};
            this.updateGraphsAddNewGraphButton();
            removeOverlays();
        }.bind(this));
        var updatePLCTable = function (value) {
            $.uiTableFilter($('#plcTable'), value);
        };
        $(".trendPLCFilter").on("focus", function () {
            $("#plcTable").empty();
            self.onPlantData("$System");
            $("#plcTable").scrollTop(0);
            if (this.value !== "") {
                updatePLCTable(this.value);
            }
        });
        $(".trendPLCFilter").keyup(function () {
            updatePLCTable(this.value);
        });
        this.updateTitleOfAddGraphOverlay();

    };

    /**
     * Update the title of addNewGraph-Overlay
     */
    TrendPage.prototype.updateTitleOfAddGraphOverlay = function () {
        var title = $("#openNewGraph span.pagerHead");
        var addGraph = 'AddGraph';
        emosWS.sendAdviseText("T04_" + addGraph, "name", function (msg) {
            addGraph = msg.value;
        }, this);
        var graphSelected = 'graphs selected';
        emosWS.sendAdviseText("T04_" + graphSelected, "name", function (msg) {
            graphSelected = msg.value;
        }, this);
        title.text(
                addGraph + ": " + Object.keys(this.selectedGraphs).length + " / "
                + (this.MAX_NUMBER_OF_GRAPHS_PER_CHART)
                + " " + graphSelected
                );
    };

    /**
     * Creates the Line LineColor-Overlay
     */
    TrendPage.prototype.createOverlayLineColor = function (removeOverlays) {
        
        var noSelected = 0;
        var noColorable = 0;
        for (var i = 0, len = this.createdChartList.length; i < len; i++) {
            var chart = this.createdChartList[i];
            if (chart.selected) {
                noSelected++;
                if (chart.colorable()) {
                    noColorable++;
                }
            }
        }
        
        var
                denyColorList = this.selectedChart.getColorList(),
                headline = getElementGlobalID(),
                subHeadlineColor = getElementGlobalID(),
                subHeadlineThickness = getElementGlobalID(),
                s = '<div class="modalBg">\
                        <div id="lineColor">\
                            <div class="overlayClose">\
                                <span id="' + headline + '" class="pagerHeadLine">Line</span>\
                                <span class="closeModal timebutton emosbutton"></span>\
                            </div>\
                            <div class="TrendGroupbox">\
                                <span id="' + subHeadlineColor + '" class="timetext">Color</span>\
                                <br><br><br>';
        //only show unused color
        var keyColor = 0;
        AmCharts.themes.durr.AmStockChart.colors.forEach(function (color) {
            if (denyColorList.indexOf(color) === -1) {
                s += '<span class = "linecolorbutton emosbutton ' + ((keyColor % 3) === 2 ? 'noMarginRight' : '') + ((noColorable === 1 && noSelected === 1) ? '' : ' disabled' ) +  '" data-color="' + color + '" ><span class="selectLine" style="border-color:' + color + '"></span></span>';
                keyColor++;
            }
        });
        s += '</div>\
              <div class="TrendGroupbox">\
                <span id="' + subHeadlineThickness + '" class="timetext">Thickness</span>\
                <br><br><br>\
                <span class="linebutton emosbutton marginRight" data-thickness="1">1px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="2">2px</span>\
                <span class="linebutton emosbutton marginRight noMarginRight" data-thickness="3">3px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="4">4px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="5">5px</span>\
              </div>\
              <span class="addLineOk timebutton emosbutton"></span>\
              </div></div>';
        var
                $guiHTML = $(s);
        this.divJElement.append($guiHTML);
        this.hideBridges();
        $('.overlayBridgeGraphs.color').show();

        var tmpIds = {};
        tmpIds[headline] = 'Line';
        tmpIds[subHeadlineColor] = 'Color';
        tmpIds[subHeadlineThickness] = 'Thickness';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        /**
         * Change Line Thickness
         */
        
        $(".linecolorbutton").click(function (e) {
            $(".linecolorbutton").removeClass('ChartSelected');
            $(e.target).addClass('ChartSelected');
        }.bind(this));
        
        $(".linebutton").click(function (e) {
            $(".linebutton").removeClass('ChartSelected');
            $(e.target).addClass('ChartSelected');
        }.bind(this));
        
        $(".addLineOk").click(function (e) {
            var color = $(".linecolorbutton.ChartSelected").attr("data-color");
            var thickness = $(".linebutton.ChartSelected").attr("data-thickness");
            
            if (color)
                this.setColor(color, removeOverlays);

            if (thickness)
                this.setThickness(thickness, removeOverlays);
        }.bind(this));
    };

    /**
     * Creates the Line LineThickness-Overlay
     */
    /*TrendPage.prototype.createOverlayLineThickness = function (removeOverlays) {
        var headline = getElementGlobalID(),
                subHeadline = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="lineThickness">\
                <div class="overlayClose"><span id="' + headline + '" class="pagerHeadLine">Line</span>\
                <span class="closeModal timebutton emosbutton"></span></div>\
                <div class="TrendGroupbox">\
                <span id="' + subHeadline + '" class="timetext">Thickness</span>\
                <br><br><br>\
                <span class="linebutton emosbutton marginRight" data-thickness="1">1px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="2">2px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="3">3px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="4">4px</span>\
                <span class="linebutton emosbutton marginRight" data-thickness="5">5px</span>\
                </div>\
                </div>\
                </div>',
                $guiHTML = $(s);
        this.divJElement.append($guiHTML);
        this.hideBridges();
        $('.overlayBridgeGraphs.thickness').show();

        var tmpIds = {};
        tmpIds[headline] = 'Line';
        tmpIds[subHeadline] = 'Thickness';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '') {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
    };*/

    /**
     * Creates the Line Legend-Overlay
     */
    TrendPage.prototype.createOverlayLine = function (removeOverlays) {
        var headline = getElementGlobalID(),
                subHeadline = getElementGlobalID(),
                btnName = getElementGlobalID(),
                btnNameUnit = getElementGlobalID(),
                btnNameUnitDescription = getElementGlobalID(),
                btnDescription = getElementGlobalID(),
                btnDescriptionUnit = getElementGlobalID(),
                s = '<div class="modalBg">\
                <div id="lineLegend">\
                <div class="overlayClose"><span id="' + headline + '" class="pagerHeadLine">Line</span>\
                <span class="closeModal timebutton emosbutton"></span></div>\
                <div class="TrendGroupbox">\
                <span id="' + subHeadline + '" class="timetext">Legend</span>\
                <br><br><br>\
                <span id="' + btnName + '" class="linelegendbutton emosbutton" data-type="0" data-desc="Name">Name</span>\
                <span id="' + btnNameUnit + '" class="linelegendbutton emosbutton" data-type="1" data-desc="Name and unit">Name Unit</span>\
                <span id="' + btnNameUnitDescription + '" class="linelegendbutton emosbutton" data-type="2" data-desc="Name Unit Desc.">Name, unit and description</span>\
                <span id="' + btnDescription + '" class="linelegendbutton emosbutton" data-type="3" data-desc="Desc.">Description</span>\
                <span id="' + btnDescriptionUnit + '" class="linelegendbutton emosbutton" data-type="4" data-desc="Desc. Unit">Description and unit</span>\
                </div>\
                </div>\
                </div>',
                $guiHTML = $(s);
        this.divJElement.append($guiHTML);
        this.hideBridges();
        $('.overlayBridgeGraphs.legend').show();
        $(".linelegendbutton").click(function (e) {
            this.setLegend((e).target.dataset.type, (e).target.dataset.desc, removeOverlays);
        }.bind(this));

        var tmpIds = {};
        tmpIds[headline] = 'Line';
        tmpIds[subHeadline] = 'Legend';
        tmpIds[btnName] = 'Name';
        tmpIds[btnNameUnit] = 'NameUnit';
        tmpIds[btnNameUnitDescription] = 'NameUnitDes';
        tmpIds[btnDescription] = 'Des';
        tmpIds[btnDescriptionUnit] = 'DesUnit';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
    };  
    /**
     * Empty Operation tab
     */
    TrendPage.prototype.OperationEmpty = function () {
        $("#operationWrapper").empty();
    };

    /**
     * Create SetTime-Overlay
     * 
     * @param {Boolean} determines whether isFrom or isEnd selected
     */
    TrendPage.prototype.createOverlaySetDateTime = function () {
        var
                tbHeadline = getElementGlobalID(),
                dateIdFrom = getElementGlobalID(),
                tbDuration = getElementGlobalID(),
                tbFrom = getElementGlobalID(),
                tbTo = getElementGlobalID(),
                duration = getElementGlobalID(),
                dateIdTo = getElementGlobalID(),
                s = '<div class="modalBg">\
                        <div id="setTime">\
                            <div class="overlayClose"><span id="' + tbHeadline + '" class="pagerHeadLine">Time range</span>\
                                <span class="closeModal timebutton emosbutton"></span>\
                            </div>\
                            <div id="From" class="TrendGroupbox big Groupbox">\
                                <span id="' + tbFrom + '" class="timetext">From</span>\
                                <div id="' + dateIdFrom + '"></div>\
                                <br><br>\
                            </div>\
                            <div id="Dur" class="TrendGroupbox big Groupbox">\
                                <span id="' + tbDuration + '" class="timetext">Duration</span>\
                                <div id="' + duration + '">\
                                    <span class="timebutton emosbutton period first" data-period="15">15min</span>\
                                    <span class="timebutton emosbutton period" data-period=30>30min</span>\
                                    <span class="timebutton emosbutton period" data-period=120>2h</span>\
                                    <span class="timebutton emosbutton period" data-period=240>4h</span>\
                                    <span class="timebutton emosbutton period" data-period=480>8h</span>\
                                    <span class="timebutton emosbutton period" data-period=1440>1d</span>\
                                </div>\
                                <br><br>\
                            </div>\
                            <div id="To" class="TrendGroupbox big Groupbox">\
                                <span id="' + tbTo + '" class="timetext">To</span>\
                                <div id="' + dateIdTo + '"></div>\
                                <br><br>\
                            </div>\
                            <span class="accept closeboth timebutton emosbutton"></span>\
                        </div>\
                    </div>',
                $guiHTML = $(s),
                self = this;

        
        this.divJElement.append($guiHTML);
        
        var tmpIds = {};
        tmpIds[tbHeadline] = 'TimeRange';
        tmpIds[tbFrom] = 'From';
        tmpIds[tbDuration] = 'Duration';
        tmpIds[tbTo] = 'To';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        
        var
                fromDate = this.timeRange.from,
                myMobiscrollDateFrom = $('#' + dateIdFrom).mobiscroll().datetime({
            theme: 'wp',
            mode: 'mixed',
            display: 'inline',
            lang: 'de',
            scrollLock: false,
            dateOrder: 'ddmmyy',
            dateFormat: 'dd/mm/yy',
            timeFormat: 'HH:ii:ss',
            timeWheels: 'HHiiss',     
            maxDate: new Date(2040, 11, 31),
            showLabel: false
        }).mobiscroll('setValue', [fromDate.getDate(), fromDate.getMonth(), fromDate.getFullYear(), fromDate.getHours(), fromDate.getMinutes(), fromDate.getSeconds()]);

        var
                toDate = this.timeRange.to,
            myMobiscrollDateTo = $('#' + dateIdTo).mobiscroll().datetime({
            theme: 'wp',
            mode: 'mixed',
            display: 'inline',
            lang: 'de',
            scrollLock: false,
            dateOrder: 'ddmmyy',
            dateFormat: 'dd/mm/yy',
            timeFormat: 'HH:ii:ss',
            timeWheels: 'HHiiss',      
            maxDate: new Date(2030, 11, 31),
            showLabel: false
        }).mobiscroll('setValue', [toDate.getDate(), toDate.getMonth(), toDate.getFullYear(), toDate.getHours(), toDate.getMinutes(), toDate.getSeconds()]);


        var clickFrom = false;
        var clickTo = false;
        $(".accept").click(function () {
            var
                    dateNow = new Date(),
                    dateFrom = myMobiscrollDateFrom.mobiscroll("getVal", true),
                    selectedDay = new Date(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate(), dateFrom.getHours(), dateFrom.getMinutes(), dateFrom.getSeconds()),
                    dateTo = myMobiscrollDateTo.mobiscroll("getVal", true),
                    selectedDayTo = new Date(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate(), dateTo.getHours(), dateTo.getMinutes(), dateTo.getSeconds());
                    
                
            if (dateFrom.getTime() > dateNow.getTime() || dateTo.getTime() > dateNow.getTime() || dateFrom.getTime() > dateTo.getTime()){
                this.getMessageBox("Date", "Date", "Please check the date!", "CheckDate");
                return;
            }        
            this.setButtonsTimeRange(selectedDay, selectedDayTo);
            
            localStorage.setItem('TimeRangeFrom', selectedDay);
            localStorage.setItem('TimeRangeTo', selectedDayTo);
            localStorage.setItem("TimeRangeLastDate", dateNow);
            
            clickFrom = false;
            clickTo = false;
            
            var loadOverlay = true;
            this.createdChartList.forEach(function (chart){
                if(chart.createdChart !== null)
                    loadOverlay = false;
            });
            removeOverlays();
            this.setLive(false);
            
            if (loadOverlay) {
                $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                $("#GeneralOperation").addClass("ui-tabs-active");
                this.generalOperationOpen();
                this.createOverlayLoad();
                $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                $('.fileManager .emosbutton.load').addClass('active');
                $(".modalBg").fadeIn();
                $("#loadOverlay").show();
                this.prepareOverlayOpenSets();
            } else {
                this.setTimeRange();
            }
            
        }.bind(this));
        
        $("#setTime").find(".closeModal").click(function () {
            removeOverlays();
        }.bind(this));
        
        $("#From").click(function () {
            clickFrom = true;
            clickTo = false;
        }.bind(this));
        
        $("#Dur .timebutton.emosbutton.period").click(function (e) {
            var period = parseInt(e.target.getAttribute("data-period"));
            if(clickFrom){
                var dateFrom = myMobiscrollDateFrom.mobiscroll("getVal", true);
                myMobiscrollDateTo.mobiscroll('setValue', [dateFrom.getDate(), dateFrom.getMonth(), dateFrom.getFullYear(), dateFrom.getHours(), dateFrom.getMinutes() + period, dateFrom.getSeconds()]);
            } else if (clickTo){
                var dateTo = myMobiscrollDateTo.mobiscroll("getVal", true);
                myMobiscrollDateFrom.mobiscroll('setValue', [dateTo.getDate(), dateTo.getMonth(), dateTo.getFullYear(), dateTo.getHours(), dateTo.getMinutes() - period, dateTo.getSeconds()]);
            }
        }.bind(this));
        
        $("#To").click(function () {
            clickTo= true;
            clickFrom = false;
        }.bind(this));

        function removeOverlays() {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#setTime").remove();
            self.hideBridges();
        }

    };

    /**
     * Create and display Charts tab from toolbar 
     */
    TrendPage.prototype.generalChartsOpen = function () {
        var
                self = this,
                tbNewDiagramId = getElementGlobalID(),
                tbDeleteSingleId = getElementGlobalID(),
                headline = getElementGlobalID(),
                subHeadlineCharts1 = getElementGlobalID(),
                subHeadlineCharts2 = getElementGlobalID(),
                addChart = getElementGlobalID(),
                removeSelected = getElementGlobalID(),
                enableLiveData = getElementGlobalID(),
                zoomOut = getElementGlobalID(),
                sureText = getElementGlobalID(),
                s = '<div id="chartWrapper">\
                        <span id="' + headline + '" class="pagerHead pagerHeadLine">Charts</span>\
                        <div class="TrendGroupbox">\
                        <span id="' + subHeadlineCharts1 + '" class="timetext">Add and remove</span>\
                        <span id="' + tbNewDiagramId + '" class="ChartAdd emosbutton"></span>\
                        <span id="' + addChart + '" class="buttonDescription">Add chart</span><br>\
                        <span id="' + tbDeleteSingleId + '" class="ChartRemove emosbutton disabled"></span>\
                        <span id="' + removeSelected + '" class="buttonDescription">Remove selected charts</span>\
                        </div>\
                        <div class="TrendGroupbox">\
                        <span id="' + subHeadlineCharts2 + '" class="timetext">Data</span>\
                        <span id="Realtime" class="ChartLive emosbutton"></span>\
                        <span id="' + enableLiveData + '" class="buttonDescription">Live Data</span><br>\
                        <span id="ZoomOut" class="ChartZoom emosbutton"></span>\
                        <span id="' + zoomOut + '" class="buttonDescription">Zoom out</span>\
                        </div>\
                        </div>',
                $guiHTML = $(s);
        this.OperationEmpty();
        $("#operationWrapper").append($guiHTML);
        $("#" + tbNewDiagramId).click(function () {
            if (self.createdChartList.length < self.MAX_NUMBER_OF_CHARTS) {
                new TrendChart(self);
                self.refreshSize();
                self.updateChartsAddNewChartButton();
            }
        });
        var tmpIds = {};
        tmpIds[headline] = 'Charts';
        tmpIds[subHeadlineCharts1] = 'AddAndRemove';
        tmpIds[subHeadlineCharts2] = 'Data';
        tmpIds[addChart] = 'AddChart';
        tmpIds[removeSelected] = 'RemoveSelectedChart';
        tmpIds[enableLiveData] = 'LiveData';
        tmpIds[zoomOut] = 'ZoomOut';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        $("#" + tbDeleteSingleId).click(function () {
            self.deleteSelected(tbDeleteSingleId);
        });
        $("#Realtime").click(function () {
            var live = $("#Realtime").hasClass("ChartSelected");
            self.setLive(!live);
        });
        $("#ZoomOut").click(function () {
            self.showAllData();
        });
        this.updateChartsRemoveSelectedButton();
        this.updateChartsAddNewChartButton();
    };

    /**
     * Create and display graph tab
     */
    TrendPage.prototype.generalGraphOpen = function () {

        var
                self = this,
                tbNewGraphId = getElementGlobalID(),
                tbDeleteGraphId = getElementGlobalID(),
                headline = getElementGlobalID(),
                subHeadlineCharts1 = getElementGlobalID(),
                subHeadlineCharts2 = getElementGlobalID(),
                subHeadlineCharts3 = getElementGlobalID(),
                addGraph = getElementGlobalID(),
                removeGraph = getElementGlobalID(),
                sureText = getElementGlobalID(),
                setColor = getElementGlobalID(),
                setLegend = getElementGlobalID(),
                setLink = getElementGlobalID(),
                setMark = getElementGlobalID(),
                s = '<div id="propsWrapper">\
                        <span id="' + headline + '" class="pagerHead pagerHeadLine">Graphs</span>\
                        <div class="TrendGroupbox">\
                        <span id="' + subHeadlineCharts1 + '" class="timetext">Add and Remove</span>\
                        <span id="' + tbNewGraphId + '" class="GraphAdd emosbutton"></span>\
                        <span id="' + addGraph + '" class="buttonDescription">Add graph</span><br>\
                        <span id="' + tbDeleteGraphId + '" class="GraphRemove emosbutton"></span>\
                        <span id="' + removeGraph + '" class="buttonDescription">Remove deselected graphs</span>\
                        </div>\
                        <div class="TrendGroupbox">\
                        <span id="' + subHeadlineCharts2 + '" class="timetext">Line</span>\
                        <span class="propColor writebutton emosbutton setProp"></span><span id="' + setColor + '" class="propText">Color and thickness</span><span class="showLine"></span><br class="cl">\
                        <span class="propLegend writebutton emosbutton setProp"></span>\
                        <span id="' + setLegend + '" class="propText">Legend </span><span id="propLegend" class="setProp"></span><br class="cl">\
                        </div>\
                        <div class="TrendGroupbox">\
                        <span id="' + subHeadlineCharts3 + '" class="timetext">Data points</span>\
                        <span class="propLink steps emosbutton setProp"></span>\
                        <span id="' + setLink + '" class="propText">Steps</span><span id="propLink" class="setProp"></span><br class="cl">\
                        </div>',
                $guiHTML = $(s);
        //<span class="propMark mark emosbutton setProp"></span>\
        //<span id="' + setMark + '" class="propText">Mark</span><span id="propMark" class="setProp"></span><br class="cl">\
        this.OperationEmpty(); 
        $("#operationWrapper").append($guiHTML);
        var tmpIds = {};
        tmpIds[headline] = 'Graphs';
        tmpIds[subHeadlineCharts1] = 'AddGraph';
        tmpIds[subHeadlineCharts2] = 'Line';
        tmpIds[subHeadlineCharts3] = 'DataPoints';
        tmpIds[addGraph] = 'AddGraph';
        tmpIds[removeGraph] = 'RemoveGraph';
        tmpIds[setColor] = 'ColorThickness';
        tmpIds[setLegend] = 'Legend';
        tmpIds[setLink] = 'Steps';
        tmpIds[setMark] = 'Mark';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        $(".GraphAdd").click(function () {
            removeOverlays();
            this.createAddNewGraph(removeOverlays);
            $(".modalBg").fadeIn();
            $("#openNewGraph").show();
            scrollUpDownButton('.transLeft .scrollRow', null, null, 'scrollDown');
            scrollUpDownButton('.transLeft .scrollRow', null, null, 'scrollUp');
            $(".overlayClose").find(".closeModal").click(function () {
                removeOverlays();
            }.bind(this));
            this.updateGraphsAddNewGraphButton();
            $(".GraphAdd").addClass('active');
        }.bind(this));
        $(".propColor").click(function (e) {
            removeOverlays();
            $(e.target).addClass('active');
            this.createOverlayLineColor(removeOverlays);
            $(".modalBg").fadeIn();
            $("#lineColor").show();
            $(".overlayClose").find(".closeModal").click(function () {
                removeOverlays();
            }.bind(this));
        }.bind(this));
        $(".propLink").click(function (e) {
            removeOverlays();
            
            if ($(e.target).hasClass("ChartSelected")){
                $(e.target).removeClass("ChartSelected");
                this.setLink("line");
            } else {
                $(e.target).addClass("ChartSelected");
                this.setLink("step");
            }
        }.bind(this));
        $(".propLegend").click(function (e) {
            removeOverlays();
            $(e.target).addClass('active');
            this.createOverlayLine(removeOverlays);
            $(".modalBg").fadeIn();
            $("#lineLegend").show();
            $(".overlayClose").find(".closeModal").click(function () {
                removeOverlays();
            }.bind(this));
        }.bind(this));
        $(".propMark").click(function (e) {
            removeOverlays();
            
            if ($(e.target).hasClass("ChartSelected")){
                $(e.target).removeClass("ChartSelected");
                this.setMark(false);
            } else {
                $(e.target).addClass("ChartSelected");
                this.setMark(true);
            }
        }.bind(this));

        $("#" + tbDeleteGraphId).click(function () {
            this.removeHiddenGraphs();
        }.bind(this));

        function removeOverlays() {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#lineThickness").remove();
            $("#lineLegend").remove();
            $("#lineLink").remove();
            $("#lineMark").remove();
            self.hideBridges();
        }

        this.updateGraphsAddNewGraphButton();
        this.updateGraphsRemoveGraphButton();
    };

    /**
     * Create and display Y-Axis tab for selected trend chart
     * 
     * @param {TrendChart} selected trend chart
     */
    TrendPage.prototype.generalYaxisOpen = function (trendChart) {
        var
                chart = trendChart.createdChart,
                graphs = trendChart.getGraphs(),
                s = '<div id="propsWrapper">\
                        <span class="pagerHead pagerHeadLine">Y-Axis</span>\
                        <div class="TrendGroupbox">\
                        <span class="timetext">Scaled for</span>';

        chart.dataSets.forEach(function (set, index) {
            if (!graphs[index].hidden)
                s += '<input class="yaxis" style="color:' + set.color + '" type="text" data-index="' + index + '" value="' + set.plc + '" readonly>';
        });
        var inputDefault = 'none';
        emosWS.sendAdviseText("T04_" + inputDefault, "name", function (msg) {
            inputDefault = msg.value;
        }, this);
        s += '<input class="yaxis" type="text" data-index="-1" value="' + inputDefault + '" readonly>\
            </div>';
        $guiHTML = $(s);
        this.OperationEmpty();
        $("#operationWrapper").append($guiHTML);
        $('.yaxis').click(function (e) {
            trendChart.scaleFor(parseInt(e.target.dataset.index));
        });
        var yAxis = 'Y-Axis';
        emosWS.sendAdviseText("T04_" + yAxis, "name", function (msg) {
            yAxis = msg.value;
        }, this);

        $(".pagerHead.pagerHeadLine").text(
                "Y-Axis - Chart " +
                (this.createdChartList.indexOf(trendChart) + 1) + " : " +
                trendChart.config.title
                );
    };

    /**
     * Create and display Time Range tab from toolbar
     */
    TrendPage.prototype.generalOptionsOpen = function () {
        var
                self = this,
                tbHeadline = getElementGlobalID(),
                tbSubHead1 = getElementGlobalID(),
                tbSubHead2 = getElementGlobalID(),
                tbFrom = getElementGlobalID(),
                tbTo = getElementGlobalID(),
                tbSet = getElementGlobalID(),
                setSync = getElementGlobalID(),
                s = '<div id="dateWrapper">\
                        <span id="' + tbHeadline + '" class="pagerHead pagerHeadLine">Time range</span>\
                        <div class="TrendGroupbox">\
                            <span class="fromToButton emosbutton"></span>\
                            <div class="datetimeblock">\
                                <span id="' + tbFrom + '" class="datetimetext">From</span>\
                                <div class="setDate DateFrom"></div>\
                                <span id="' + tbTo + '" class="datetimetext">To</span>\
                                <div class="setDate DateTo" type="text" readonly></div>\
                            </div>\
                        </div>\
                        <div class="TrendGroupbox">\
                            <span id="' + tbSubHead2 + '" class="timetext">Synchronization</span>\
                            <span id="Synchronize" class="emosbutton synchronization"></span>\
                            <span id="' + setSync + '" class="buttonDescription">On all charts</span>\
                        </div>\
                    </div>',
                $guiHTML = $(s);


        this.OperationEmpty();
        $("#operationWrapper").append($guiHTML);
        $(".emosbutton.synchronization").click(function () {
            this.synchronize();
        }.bind(this));
        var tmpIds = {};
        tmpIds[tbHeadline] = 'TimeRange';
        tmpIds[tbSubHead1] = 'TimeRange';
        tmpIds[tbSubHead2] = 'Synchronization';
        tmpIds[tbFrom] = 'From';
        tmpIds[tbTo] = 'To';
        tmpIds[tbSet] = 'TimeRange';
        tmpIds[setSync] = 'OnAllCharts';

        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== ''&& text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });

        $(".fromToButton").click(function (e) {
            removeOverlays();
            $(e.target).addClass('active');
            this.createOverlaySetDateTime();
            $(".modalBg").fadeIn();
            $("#setTime").show();
            this.hideBridges();
            $(".overlayBridgeGraphs.set1").show();
            $(".overlayClose").find(".closeModal").click(function () {
                removeOverlays();
            }.bind(this));
        }.bind(this));

        $(".TrendGroupbox.firstbox").find(".timebutton").click(function (e) {
            $(".TrendGroupbox.firstbox").find(".timebutton").removeClass("pressed");
            $(e.target).addClass("pressed");
            self.loadDataBack(this.dataset.period);
            setTimeout(function () {
                $(e.target).removeClass("pressed");
            }, 2000);
        });

        $(".TrendGroupbox.lastbox").find(".timebutton").click(function (e) {
            $(".TrendGroupbox.lastbox").find(".timebutton").removeClass("pressed");
            $(e.target).addClass("pressed");
            self.loadDataNext(this.dataset.period);
            setTimeout(function () {
                $(e.target).removeClass("pressed");
            }, 2000);
        });

        function removeOverlays() {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#setTime").remove();
            self.hideBridges();
        }

        this.updateTimeRangeButton();
    };

    /**
     * Load historic data according to the selected time rage
     * 
     * @returns {undefined}
     */
    TrendPage.prototype.setTimeRange = function () {
        //clear current data and load the new one
        this.loadData(this.timeRange.from, this.timeRange.to, true);
    };

    /**
     * Load historic data
     * 
     * @param {Date} begin date to load
     * @param {Date} end data to load
     * @param {Boolean} determines whether the current data will be deleted
     */
    TrendPage.prototype.loadData = function (beginDate, endDate, deleteCurrentData) {
        this.forEachSelectedChart(function (chart) {
            chart.onFilterDateSelected(beginDate, endDate, deleteCurrentData);
        });
    };

    /**
     * Load previous historic data
     * 
     * @param {Number} number of minutes of previous historic data to load
     */
    TrendPage.prototype.loadDataBack = function (minute) {
        this.forEachSelectedChart(function (chart) {
            chart.loadDataBack(minute);
        });
    };

    /**
     * Load next historic data
     * 
     * @param {Number} number of minutes of next historic data to load
     */
    TrendPage.prototype.loadDataNext = function (minute) {
        this.forEachSelectedChart(function (chart) {
            chart.loadDataNext(minute);
        });
    };

    /**
     * Callback for every selected chart
     * 
     * @callback selectedCharCallback
     */
    /**
     * Iterate the selected chart to do the callback 
     * 
     * @param {selectedCharCallback} callback - A callback to run
     */
    TrendPage.prototype.forEachSelectedChart = function (callback) {
        this.createdChartList.forEach(function (chart, index) {
            if (chart.selected) {
                try {
                    callback(chart, index);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    };

    TrendPage.prototype.forEachNotSelectedChart = function (callback) {
        this.createdChartList.forEach(function (chart, index) {
            if (!chart.selected) {
                try {
                    callback(chart, index);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    };
    /**
     * Synchronize other charts with the current (only) selected chart
     */
    TrendPage.prototype.synchronize = function () {
        
        var numberOfSelectedChart = 0,
            targetChart = null;
        this.forEachSelectedChart(function (chart) {
            targetChart = chart;
            numberOfSelectedChart++;
        });
        if (numberOfSelectedChart === 1) {
            this.selectedChart = targetChart;
        }
        var selectedChart = this.selectedChart;
        
        if (!selectedChart)
            return;
        
        var startDate = selectedChart.getDataBeginDate(),
            endDate = selectedChart.getDataEndDate();
        this.createdChartList.forEach(function (chart) {
            if (chart !== selectedChart) {
                chart.synchronizedTimeRange.from = startDate;
                chart.synchronizedTimeRange.to = endDate;
                chart.loadData(startDate, endDate, true, true);
            }
        });
    };

    /**
     * Create and display the Settings and Summaries tab from the control
     */
    TrendPage.prototype.generalOperationOpen = function () {
        var
                self = this,
                tbHeadlineSettings = getElementGlobalID(),
                tbSubHead1 = getElementGlobalID(),
                tbSubHead2 = getElementGlobalID(),
                tbNewId = getElementGlobalID(),
                tbNewText = getElementGlobalID(),
                tbVariableDialogId = getElementGlobalID(),
                tbLoad = getElementGlobalID(),
                tbDeleteId = getElementGlobalID(),
                tbDelete = getElementGlobalID(),
                tbLoadMoreDataId = getElementGlobalID(),
                tbHundredId = getElementGlobalID(),
                tbDataInterpolatedId = getElementGlobalID(),
                tbDataPointId = getElementGlobalID(),
                tbFetchDiagramId = getElementGlobalID(),
                tbSaveDiagramId = getElementGlobalID(),
                tbDeleteDiagramId = getElementGlobalID(),
                tbPrintId = getElementGlobalID(),
                tbExportId = getElementGlobalID(),
                tbPrint = getElementGlobalID(),
                tbExport = getElementGlobalID(),
                tbSaveDataId = getElementGlobalID(),
                tbSave = getElementGlobalID(),
                tbRealtimeId = getElementGlobalID(),
                showExport = this.hasSystemAccessRight() ? "" : ' disabled',
                s = '<div class="fileManager">\
                        <span id="' + tbHeadlineSettings + '" class="pagerHead pagerHeadLine">Settings and summaries</span>\
                        <div class="TrendGroupbox">\
                        <span id="' + tbSubHead1 + '" class="timetext">Settings</span>\
                        <span id="' + tbNewId + '" class="emosbutton empty"></span>\
                        <span id="' + tbNewText + '" class="buttonDescription">New</span>\
                        <span id="' + tbVariableDialogId + '" class="emosbutton load"></span>\
                        <span id="' + tbLoad + '" class="buttonDescription">Load</span>\
                        <span id="' + tbSaveDataId + '" class="emosbutton save ' + (((typeof userloggedin === "undefined") || !userloggedin) ? "noAction" : "") + '"></span>\
                        <span id="' + tbSave + '" class="buttonDescription">Save</span>\
                        <span id="' + tbDeleteId + '" class="emosbutton delete ' + (((typeof userloggedin === "undefined") || !userloggedin) ? "noAction" : "") + '"></span>\
                        <span id="' + tbDelete + '" class="buttonDescription">Delete</span>\
                        </div>\
                        <div class="TrendGroupbox">\
                        <span id="' + tbSubHead2 + '" class="timetext">Summaries</span>\
                        <span id="' + tbPrintId + '" class="emosbutton print' + showExport + '"></span>\
                        <span id="' + tbPrint + '" class="buttonDescription">Print</span>\
                        <span id="' + tbExportId + '" class="emosbutton export' + showExport + '"></span>\
                        <span id="' + tbExport + '" class="buttonDescription">Export</span>\
                        </div>\
                        <div class="TrendGroupbox unknown">\
                        <button>Delete Variables in the Diagram</button>\
                        </div>\
                        <div class="TrendGroupbox historyManager unknown">\
                        <button id="' + tbLoadMoreDataId + '">Load more historic data</button>\
                        <input type="checkbox" id="' + tbRealtimeId + '"' + (this.useLive ? " checked" : "") + '><label for="' + tbRealtimeId + '" title="Real Time Trend">Live</label>\
                        <button id="' + tbHundredId + '">Show all data to a 100 %</button>\
                        </div>\
                        <div class="TrendGroupbox unknown">\
                        <input type="checkbox" id="' + tbDataInterpolatedId + '"' + (this.useDataInterpolated ? " checked" : "") + '><label for="' + tbDataInterpolatedId + '" title="Show data interpolated">Interpolated</label>\
                        <input type="checkbox" id="' + tbDataPointId + '"' + (this.usePoint ? " checked" : "") + '><label for="' + tbDataPointId + '" title="Show data points (Measuring point)">Point</label>\
                        </div>\
                        <div class="TrendGroupbox unknown">\
                        <button id="' + tbFetchDiagramId + '">Fetch Diagram settings</button>\
                        <button id="' + tbSaveDiagramId + '">Save Diagram settings</button>\
                        <button id="' + tbDeleteDiagramId + '">Delete Diagram settings</button>\
                        </div>\
                        </div>',
                $guiHTML = $(s);
        this.OperationEmpty();
        $("#operationWrapper").append($guiHTML);
        this.tbPrint = document.getElementById(tbPrintId);
        this.tbSaveData = document.getElementById(tbSaveDataId);
        this.tbDelete = document.getElementById(tbDeleteId);
        this.tbHundred = document.getElementById(tbHundredId);
        this.tbRealtime = document.getElementById(tbRealtimeId);
        this.tbDataInterpolated = document.getElementById(tbDataInterpolatedId);
        this.tbDataPoint = document.getElementById(tbDataPointId);
        this.tbSaveDiagram = document.getElementById(tbSaveDiagramId);
        this.tbDeleteDiagram = document.getElementById(tbDeleteDiagramId);
        this.tbFetchDiagram = document.getElementById(tbFetchDiagramId);
        var tmpIds = {};
        tmpIds[tbHeadlineSettings] = 'SettingsAndSummaries';
        tmpIds[tbSubHead1] = 'Settings';
        tmpIds[tbSubHead2] = 'Summaries';
        tmpIds[tbNewText] = 'New';
        tmpIds[tbLoad] = 'Load';
        tmpIds[tbSave] = 'Save';
        tmpIds[tbDelete] = 'Delete';
        tmpIds[tbPrint] = 'Print';
        tmpIds[tbExport] = 'Export';
        $.each(tmpIds, function (key, val) {
            var text = document.getElementById(key);
            emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
                if (msg && msg.value !== '' && text) {
                    text.innerHTML = msg.value;
                }
            }, this);
        });
        $("#" + tbVariableDialogId).click(function () {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $("#" + tbVariableDialogId).addClass('active');
            $(".modalBg").remove();
            this.createOverlayLoad();
            $(".modalBg").fadeIn();
            $("#loadOverlay").show();
        }.bind(this));
        $("#" + tbSaveDataId).click(function () {
            if ($("#" + tbSaveDataId).hasClass('noAction'))
                return;

            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $("#" + tbSaveDataId).addClass('active');
            $(".modalBg").remove();
            $("#openSets").remove();
            $("#openCharts").remove();
            this.createOverlaySave();
            $(".modalBg").fadeIn();
            $("#saveOverlay").show();
        }.bind(this));

        $("#" + tbPrintId).click(function () {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".TrendChart ").removeClass("noprint");
            $(".modalBg").remove();
            $("#" + tbPrintId).addClass('active');
            this.createOverlayPrint();
            $(".modalBg").fadeIn();
            $("#printOverlay").show();
            this.selectedChartFromDialog.forEach(function (chart, i) {
                $("#printChartText" + i).val(chart.title);
            });
            $(".overlayClose").find(".closeModal").click(function () {
                $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                $(".modalBg").remove();
                $("#printOverlay").remove();
            }.bind(this));
        }.bind(this));
        $("#" + tbExportId).click(function () {
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#" + tbExportId).addClass('active');
            this.createOverlayExport();
            $(".modalBg").fadeIn();
            $("#exportOverlay").show();
        }.bind(this));
        $(".empty").click(function () {
            self.setLive(false);
            self.reset();
        });
        $("#" + tbDeleteId).click(function () {
            if ($("#" + tbDeleteId).hasClass('noAction'))
                return;

            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $(".modalBg").remove();
            $("#openSets").remove();
            $("#openCharts").remove();
            $("#" + tbDeleteId).addClass('active');
            this.createOverlayDelete();
            $(".modalBg").fadeIn();
            $("#deleteOverlay").show();
        }.bind(this));

        $("#" + tbLoadMoreDataId).button({
            text: false,
            icons: {
                primary: "ui-icon-transferthick-e-w"
            }
        }).click(function () {
            self.loadMoreData();
        });
        $("#" + tbHundredId).button({
            text: false,
            icons: {
                primary: "ui-icon-image"
            }
        }).click(function () {
            self.showAllData();
        });
        $("#" + tbRealtimeId).button({
            text: false,
            icons: {
                primary: "ui-icon-clock"
            }
        });
        this.tbDataInterpolated.addEventListener("click", function () {
            self.setDataInterpolated(this.checked);
        }, false);
        $("#" + tbDataInterpolatedId).button({
            text: false,
            icons: {
                primary: "ui-icon-grip-diagonal-se"
            }
        });
        this.tbDataPoint.addEventListener("click", function () {
            self.setPoint(this.checked);
        }, false);
        $("#" + tbDataPointId).button({
            text: false,
            icons: {
                primary: "ui-icon-radio-off"
            }
        });
        $("#" + tbSaveDiagramId).button({
            text: false,
            icons: {
                primary: "ui-icon-disk"
            }
        }).click(function () {
            self.saveToLocalStorage();
        });
        $("#" + tbDeleteDiagramId).button({
            text: false,
            icons: {
                primary: "ui-icon-close"
            }
        }).click(function () {
            self.deleteTrend();
        });
        $("#" + tbFetchDiagramId).button({
            text: false,
            icons: {
                primary: "ui-icon-folder-open"
            }
        }).click(function () {
            self.trendListDialog.show(self);
        });
    };


    /**
     * Disable/enable the Tab_Charts.Button_RemoveSelected
     */
    TrendPage.prototype.updateChartsRemoveSelectedButton = function () {
        if ($("#chartWrapper").length > 0) {
            var selectedNone = true;
            var liveAvailable = false;
            for (var i = 0; i < this.createdChartList.length; i++) {
                var chart = this.createdChartList[i];
                if (chart.selected) {
                    selectedNone = false;
                    if (chart.useLive) {
                        liveAvailable = true;
                    }
                }
            }
            var buttons = [".ChartRemove.emosbutton", ".ChartLive.emosbutton", ".ChartZoom.emosbutton"];
            if (selectedNone) {
                buttons.forEach(function (name) {
                    $(name).addClass("disabled");
                });
                $(".ChartLive.emosbutton").removeClass("ChartSelected");
            } else {
                buttons.forEach(function (name) {
                    $(name).removeClass("disabled");
                });
                if (liveAvailable) {
                    $(".ChartLive.emosbutton").addClass("ChartSelected");
                } else {
                    $(".ChartLive.emosbutton").removeClass("ChartSelected");
                }
            }
        }
    };

    /**
     * Show From / To date according to the selected charts
     */
    TrendPage.prototype.updateTimeRangeButton = function () {
        if ($("#dateWrapper").length > 0) {
            var
                    endDate = new Date(),
                    beginDate = new Date(endDate);
            numberOfSelectedChart = 0;

            beginDate.setMinutes(endDate.getMinutes() - 5);

            this.forEachSelectedChart(function (chart, index) {
                numberOfSelectedChart++;
                var
                        dataBeginDate = chart.getDataBeginDate(),
                        dataEndDate = chart.getDataEndDate();
                if (dataBeginDate && dataEndDate) {
                    if (index === 0)
                        endDate = dataEndDate;
                    
                    beginDate = beginDate > dataBeginDate ? dataBeginDate : beginDate;
                    endDate = endDate < dataEndDate ? dataEndDate : endDate;
                } 
            });
            this.setButtonsTimeRange(beginDate, endDate);
            if (numberOfSelectedChart === 1) {
                $("#dateWrapper span.synchronization").removeClass("disabled");
            } else {
                $("#dateWrapper span.synchronization").addClass("disabled");
            }
        }
    };

    /**
     * Show control toolbar
     */
    TrendPage.prototype.showControl = function () {
        $("#TrendPageToolbar").css('display', 'flex');
        $(".TrendCharts").css('right', '390px');
        this.controlDisplayed = true;
    };

    /**
     * Hide control toolbar
     */
    TrendPage.prototype.closeControl = function () {
        $("#TrendPageToolbar").css('display', 'none');
        $(".TrendCharts").css('right', '0');
        this.controlDisplayed = false;
    };

    /**
     * Update the time range (from/to) in Time range tab
     * @param {Date} from date
     * @param {Date} to date
     */
    TrendPage.prototype.setButtonsTimeRange = function (from, to) {
        from = from ? from : this.timeRange.from;
        to = to ? to : this.timeRange.to;
        this.timeRange = {
            from: from,
            to: to
        };
        
        this.createdChartList.forEach(function (chart){
            
            if (!chart.createdChart)
                return;
            
            chart.createdChart.previousStartDate = chart.createdChart.startDate = chart.createdChart.firstDate = from ? from : this.timeRange.from; 
            chart.createdChart.previousEndDate = chart.createdChart.endDate = chart.createdChart.lastDate = to ? to : this.timeRange.to;  
        });
        
        $(".setDate.DateFrom").text(from.toLocaleString("de-DE"));
        $(".setDate.DateTo").text(to.toLocaleString("de-DE"));
    };

    /**
     * Update the buttons in Settings and Summaries tab
     */
    TrendPage.prototype.updateSummariesButtons = function () {
        if ($("#operationWrapper").length > 0) {
            var selectedNone = true;
            for (var i = 0; i < this.createdChartList.length; i++) {
                var chart = this.createdChartList[i];
                if (chart.selected) {
                    selectedNone = false;
                    break;
                }
            }
            var buttons = [".print.emosbutton", ".export.emosbutton"];
            if (selectedNone) {
                buttons.forEach(function (name) {
                    $(name).addClass("disabled");
                });
            } else {
                buttons.forEach(function (name) {
                    $(name).removeClass("disabled");
                });
            }
        }
    };

    /**
     * Disable/enable the Tab_Charts.Button_AddNewChart
     */
    TrendPage.prototype.updateChartsAddNewChartButton = function () {
        if ($("#chartWrapper").length > 0) {
            if (this.createdChartList.length >= this.MAX_NUMBER_OF_CHARTS) {
                $("#operationWrapper span.ChartAdd").addClass("disabled");
            } else {
                $("#operationWrapper span.ChartAdd").removeClass("disabled");
            }
        }
    };

    /**
     * Disable/enable the Tab_Graph.Button_AddNewGraph
     */
    TrendPage.prototype.updateGraphsAddNewGraphButton = function () {
        if ($("#propsWrapper").length > 0) {
            $("#propsWrapper span.GraphAdd").addClass("disabled");
            var
                    numberOfSelectedChart = 0,
                    targetChart = null,
                    selectedStep = false;
            this.forEachSelectedChart(function (chart) {
                targetChart = chart;
                numberOfSelectedChart++;
                
                chart.forEachSelectedGraph(function (graph) {
                    if (graph.compareGraphType === "step" || graph.type === "step")
                        selectedStep = true;
                });
            });
            if (numberOfSelectedChart === 1) {
                this.selectedChart = targetChart;
                if (targetChart.getNumberOfGraphs() < this.MAX_NUMBER_OF_GRAPHS_PER_CHART)
                    $("#propsWrapper span.GraphAdd").removeClass("disabled");
            }
            
            if (selectedStep)
                $("#propsWrapper span.propLink").addClass("ChartSelected");
            else 
                $("#propsWrapper span.propLink").removeClass("ChartSelected");
            
        }
    };

    /**
     * Disable/enable the Tab_Graph.Button_RemoveDeselectedGraphs
     */
    TrendPage.prototype.updateGraphsRemoveGraphButton = function () {
        if ($("#propsWrapper").length > 0) {
            $("#propsWrapper span.GraphRemove").addClass("disabled");
            $(".setProp").addClass("disabled");
            var hasHiddenGraph = false;
            var hasVisibleGraph = false;
            var noColorable = 0;
            var noSelected = 0;
            for (var i = 0, len = this.createdChartList.length; i < len; i++) {
                var chart = this.createdChartList[i];
                if (chart.selected) {
                    noSelected++;
                    if (chart.hasHiddenGraph()) {
                        hasHiddenGraph = true;
                    }
                    if (chart.hasVisibleGraph()) {
                        hasVisibleGraph = true;
                    }
                    if (chart.colorable()) {
                        noColorable++;
                    }
                }
            }
            if (hasHiddenGraph)
                $("#propsWrapper span.GraphRemove").removeClass("disabled");
            if (hasVisibleGraph) {
                $(".propLegend").removeClass("disabled");
                $(".propLink").removeClass("disabled");
                $(".propMark").removeClass("disabled");
                $(".propColor").removeClass("disabled");
            }
        }
    };

    /**
     * Register to server to open a trend channel to send and receive trend data
     */
    TrendPage.prototype.initializeMore = function () {
        emosWS.sendTrendRegister(function (msg) {
            switch (msg.type) {
                case "trendInfo":
                    this.trendId = msg.value;
                    this.variableDialog.setTrendId(this.trendId);
                    /**
                     * Here comes the Data request for each createdChart
                     */
                    this.createdChartList.forEach(function (diagram) {
                        diagram.onTrendRegistered();
                    });
                    break;
                case "trendPlantList":
                    this.variableDialog.onDataTrendPlantList(msg);
                    break;
                case "trendItemList":
                    this.variableDialog.onDataTrendItemList(msg);
                    break;
                    /**
                     * Get data from request "trendInfo" above
                     */
                case "trendItemValueList":
                    var data = JSON.parse(msg.data);

                    this.createdChartList.forEach(function (chart) {
                        /**
                         * The data for each createdChart is passed here to TrendChart.prototype.onDataTrendItemValueList
                         */
                        if (chart.selected || chart.synchronized[data.PLC + data.Tag])
                            chart.onDataTrendItemValueList(data);
                    });
                    break;
                default:
                    break;
            }
        }.bind(this));
    };

    /**
     * Create the trend chart according to the configuration
     */
    TrendPage.prototype.createAllCharts = function () {
        if (this.trendData.length === 0) {
            new TrendChart(this);
        } else {
            this.trendData.forEach(function (chartData, index) {
                if (index < this.MAX_NUMBER_OF_CHARTS)
                    new TrendChart(this, chartData);
            }.bind(this));
            this.refreshSize();
        }
    };

    /**
     * Show all data for every trend chart
     */
    TrendPage.prototype.showAllData = function () {
        this.forEachSelectedChart(function (chart) {
            chart.showAllData();
        });
    };

    /**
     * Load more data for every trend chart
     */
    TrendPage.prototype.loadMoreData = function () {
        this.createdChartList.forEach(function (chart) {
            chart.loadMoreData();
        });
    };

    /**
     * Set Data Interpolated for every trend chart
     * @param {Boolean} interpolated determines whether data interpolated is used
     */
    TrendPage.prototype.setDataInterpolated = function (interpolated) {
        this.useDataInterpolated = interpolated;
        this.createdChartList.forEach(function (chart) {
            chart.setDataInterpolated(interpolated);
        });
    };

    /**
     * Set/unset live data for every selected trend chart
     * 
     * @param {Boolean} live determines whether to set or unset the live data
     */
    TrendPage.prototype.setLive = function (live) {
        this.useLive = live;
        this.forEachSelectedChart(function (chart) {
            chart.setLive(live);
        });
    };

    /**
     * Set/unset point for every selected trend chart
     * 
     * @param {Boolean} live determines whether to set or unset the point
     */
    TrendPage.prototype.setPoint = function (point) {
        this.usePoint = point;
        this.createdChartList.forEach(function (chart) {
            chart.setPoint(point);
        });

    };

    /**
     * Save trend data to local storage
     */
    TrendPage.prototype.saveToLocalStorage = function () {
        var trendName = this.trendName || prompt("Please enter diagram name to save", "diagram_" + new Date().toLocaleString());
        if (trendName !== null) {
            this.storeTrend({name: trendName, setting: this.getSetting()});
            this.trendName = trendName;
        }
    };

    /**
     * Load trend data from local storage
     * @param {String} trendName Name of trend to load
     */
    TrendPage.prototype.openTrendFromLocalStorage = function (trendName) {
        var trend = this.retrieveTrends()[trendName];
        if (trend) {
            this.reset(true);
            this.trendData = [];
            trend.diagrams.forEach(function (diagramSetting) {
                this.usePoint = diagramSetting.usePoint;
                this.useDataInterpolated = diagramSetting.usePoint;
                var tagList = [];
                for (var tag in diagramSetting.tagDataIndex) {
                    tagList.push(tag);
                }
                this.trendData.push(tagList);
            }.bind(this));
            this.createCharts();
            $('#' + this.tbRealtimeId).prop('checked', this.useLive).button('refresh');
            $('#' + this.tbDataInterpolatedId).prop('checked', this.useDataInterpolated).button('refresh');
            $('#' + this.tbDataPointId).prop('checked', this.usPoint).button('refresh');
            this.trendName = trendName;
        }
    };

    /**
     * Get setting of the trend page
     * 
     * @returns {Map} Map which stores the array of diagram setting
     */
    TrendPage.prototype.getSetting = function () {
        var trendSetting = {diagrams: []};
        this.createdChartList.forEach(function (diagram) {
            trendSetting.diagrams.push(diagram.getSetting());
        });
        return trendSetting;
    };

    /**
     * Store a trend to the local storage
     * 
     * @param {Object} trend to store
     */
    TrendPage.prototype.storeTrend = function (trend) {
        var trends = this.retrieveTrends();
        if (typeof (Storage) !== "undefined") {
            trends[trend.name] = trend.setting;
        }
        this.storeTrends(trends);
    };

    /**
     * Store list of trends to local storage
     * 
     * @param {Object} trends to store
     */
    TrendPage.prototype.storeTrends = function (trends) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.trendListName, JSON.stringify(trends));
        }
    };

    /**
     * Delete trends from local storage
     */
    TrendPage.prototype.deleteTrend = function () {
        if (this.trendName) {
            if (confirm("Do you want to delete this trend from browser local storage?")) {
                var trends = this.retrieveTrends();
                if (typeof (Storage) !== "undefined") {
                    delete trends[this.trendName];
                    this.storeTrends(trends);
                }
                this.reset();
            }
        }
    };

    /**
     * Retrive trends from local storage
     * 
     * @returns {Object} trends data
     */
    TrendPage.prototype.retrieveTrends = function () {
        if (typeof (Storage) !== "undefined") {
            return JSON.parse(localStorage.getItem(this.trendListName)) || {};
        }
    };

    /**
     * Download trend
     */
    TrendPage.prototype.save = function () {
        var time = new Date().toLocaleString();
        var htmlFilePrefix = "trend_html_";
        var dataFilePrefix = "trend_data_";
        var saveFiles = [
            {name: htmlFilePrefix + time, ext: ".html", text: this.getExportSVG()},
            {name: dataFilePrefix + time, ext: ".txt", text: this.getExportData()}
        ];
        $.when($.get("/lib/css/c3.css"))
                .done(function (response) {
                    saveFiles.push({name: "c3", ext: ".css", text: response});
                    this.saveNext(saveFiles);
                }.bind(this));
    };

    /**
     * Download trend
     * 
     * @param {Object} saveFiles
     */
    TrendPage.prototype.saveNext = function (saveFiles) {
        saveFiles.forEach(function (item) {
            var blob = this.getBlob(item.text);
            saveAs(blob, item.name + item.ext);
        }.bind(this));
    };

    /**
     * Get svg string content of trend
     * @returns {String}
     */

    TrendPage.prototype.getExportSVG = function () {
        var svg = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="c3.css"></head><body>';
        this.createdChartList.forEach(function (diagram) {
            svg += (diagram.getExportSVG());
        });
        svg += '</body></html>';
        return svg;
    };

    /**
     * Get data
     * 
     * @returns {String}
     */
    TrendPage.prototype.getExportData = function () {
        var trend = {time: new Date(), diagrams: []};
        this.createdChartList.forEach(function (diagram) {
            trend.diagrams.push(diagram.getExportData());
        });
        return JSON.stringify(trend);
    };

    /**
     * Get Blob from text
     * 
     * @param {String} text
     * @returns {Blob}
     */
    TrendPage.prototype.getBlob = function (text) {
        return new Blob([text], {type: "text/plain;charset=utf-8"});
    };

    /**
     * Reset trend page
     * 
     * @param {type} emptyTrend determines whether to empty the trend page
     * @param {type} noConfirmation determines whether to require a confirmation dialog
     */
    TrendPage.prototype.reset = function (emptyTrend, noConfirmation) {
        var confimation = true;
        if (confimation) {
            this.config = this.getDefaultConfig();
            this.createdChartList.forEach(function (chart) {
                chart.reset();
                chart = null;
            });
            this.createdChartList = [];
            this.diagrams.empty();
            if (!emptyTrend)
                new TrendChart(this);
            this.refreshSize();
        }
    };

    /**
     * Delete selected charts
     */
    TrendPage.prototype.deleteSelected = function (tbDeleteSingleId) {
        for (var i = this.createdChartList.length - 1; i >= 0; i--) {
            var chart = this.createdChartList[i];
            if (chart.selected)
                this.deleteChart(chart);
        }
        this.refreshSize();
        this.updateChartsRemoveSelectedButton();
        this.updateChartsAddNewChartButton();
        this.updateTitleBar();
//        }
    };

    /**
     * Delete a chart
     * 
     * @param {TrendChart} chart to delete
     */
    TrendPage.prototype.deleteChart = function (chart) {
        var index = this.createdChartList.indexOf(chart);
        if (index > -1) {
            $("#" + chart.id).remove();
            chart.reset();
            chart = null;
            this.createdChartList.splice(index, 1);
        }
    };

    /**
     * Remove the hidden graphs
     */
    TrendPage.prototype.removeHiddenGraphs = function () {
        this.forEachSelectedChart(function (chart) {
            chart.removeHiddenGraphs();
        });
        this.updateGraphsAddNewGraphButton();
        this.updateGraphsRemoveGraphButton();
    };

    /**
     * Callback for remove overlays after finish.
     * 
     * @callback removeOverlays
     */
    /**
     * Set color for every selected graphs
     * 
     * @param {String} color to set
     * @param {removeOverlays} callback - A callback to run
     */
    TrendPage.prototype.setColor = function (color, removeOverlays) {
        this.forEachSelectedChart(function (chart) {
            chart.setColor(color);
        });
        removeOverlays();
    };

    /**
     * Callback for remove overlays after finish.
     * 
     * @callback removeOverlays
     */
    /**
     * Set thickness for every selected graphs
     * 
     * @param {Number} thickness to set
     * @param {removeOverlays} callback - A callback to run
     */
    TrendPage.prototype.setThickness = function (thickness, removeOverlays) {
        this.forEachSelectedChart(function (chart) {
            chart.setThickness(thickness);
        });
        removeOverlays();
    };

    /**
     * Callback for remove overlays after finish.
     * 
     * @callback removeOverlays
     */
    /**
     * Set lengend for every selected graphs
     * 
     * @param {String} type to set
     * @param {String} desc user selected option to show
     * @param {removeOverlays} callback - A callback to run
     */
    TrendPage.prototype.setLegend = function (type, desc, removeOverlays) {
        this.forEachSelectedChart(function (chart) {
            chart.setLegend(type);
        });
        removeOverlays();
    };
    TrendPage.prototype.setLink = function (linetype) {
        this.forEachSelectedChart(function (chart) {
            chart.setLink(linetype);
        });
    };
    TrendPage.prototype.setMark = function (linemark) {
        this.forEachSelectedChart(function (chart) {
            chart.setMark(linemark);
        });
    };
    TrendPage.prototype.getThickness = function () {
        if (this.selectedChart && this.selectedChart.createdChart) {
            var graphes = this.selectedChart.createdChart.panels[0].graphs;
            var thicknessSize = graphes[0].lineThickness;
            $("#propLine").text(thicknessSize + "px");
        }
    };
    /**
     * Get height of the ChartWrapper-Element and pass height to the refreshSize method of each TrendChart-Object in Array this.createdChartList
     */
    TrendPage.prototype.refreshSize = function () {
        /**
         * var height = 100 Percent divided through number of Charts
         * @type {Number}
         */
        var height = parseInt(100 / this.createdChartList.length);
        this.createdChartList.forEach(function (chart) {
            chart.refreshSize(height);
        });
    };
    
    TrendPage.prototype.refreshSizeSelectedCharts = function () {
        /**
         * var height = 100 Percent divided through number of Charts
         * @type {Number}
         */
        var height = parseInt(100 / this.getSelectedCharts().length);
        this.getSelectedCharts().forEach(function (chart) {
            chart.refreshSize(height);
        });
    };

    TrendPage.prototype.refresh = function () {
        this.createdChartList.forEach(function (chart) {
            console.log(chart.createdChart.dataSets);
            console.log(chart.testData);
            console.log(chart.tempData);
        });
    };

    TrendPage.prototype.updateAndGetConfiguration = function () {
        var
                config = this.config,
                charts = config.charts = [];
        this.createdChartList.forEach(function (chart) {
            charts.push(chart.updateAndGetConfiguration());
        });
        return config;
    };
    TrendPage.prototype.newFiles = function () {
    };

    TrendPage.prototype.updateTitleBar = function () {
        console.info("updateTitleBar");
        var
                config = this.updateAndGetConfiguration(),
                subTitle = [];
        if (config.title !== '')
            $("#diagnoseHeader").text(config.title);
        config.charts.forEach(function (chart) {
            subTitle.push(chart.title);
        });
        $("#diagnoseSubline").text(subTitle);
    };

    TrendPage.prototype.loadPrivateSet = function (myData) {
        this.config = myData;
        this.loadFiles(null, true);
    };

    TrendPage.prototype.loadFiles = function (close, isLoadingPrivateSet) {
        if (!isLoadingPrivateSet) {
            this.reset(this.RESET_TO_EMPTY_SET, this.LOAD_WITHOUT_CONFIRMATION);
            this.updateSelectedChartFromDialog();
        }

        $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
        if (close)
            close();

        if (this.config.charts.length === 0) {
            new TrendChart(this);
        } else {
            var createdChartList = [];
            this.config.charts.forEach(function (chartConfig, index) {
                if (index < this.MAX_NUMBER_OF_CHARTS)
                    createdChartList.push(new TrendChart(this, chartConfig));
            }.bind(this));
            this.refreshSize();
        }
        this.selectedSetFromDialog = null;
    };
    TrendPage.prototype.saveFiles = function (isPublic) {
        var
                config = this.updateAndGetConfiguration(),
                tempCharts = config.charts.slice(),
                charts = [] /*config.charts*/,
                setSelected = $("#saveSetText").prev().hasClass('ChartSelected');
        for (var i = 0; i < this.MAX_NUMBER_OF_CHARTS; i++) {
            var
                    chartSelected = $("#saveChartText" + i).prev().hasClass('ChartSelected'),
                    chart = tempCharts[i],
                    chartR = this.createdChartList[i];
            if (chartSelected) {
                chart.title = chartR.config.title = $("#saveChartText" + i).val();
                chart.isPublic = isPublic;
                charts.push(chart);
            }
        }
        var self = this;
        if (setSelected) {
            //save set & charts
            config.title = $("#saveSetText").val();
            config.isPublic = isPublic;
            emosWS.trendFileREST.saveSet(config, function (msg) {
                self.getMessageBox("Save", "Save", "Set is saved successfully.", "SaveSuccessful");
            }, function (msg) {
                self.getMessageBox("Save", "Save", "Sorry, unable to save, because: " + msg + ".", "SaveUnable");
            });
        } else {
            //save charts
            charts.forEach(function (chart) {
                emosWS.trendFileREST.saveChart(chart, function (msg) {
                    self.getMessageBox("Save", "Save", "Chart '" + chart.title + "' is saved successfully", "ChartSuccessful");
                }, function (msg) {
                    self.getMessageBox("Save", "Save", "Sorry, unable to save chart '" + chart.title + "', because: " + msg, "ChartUnable");
                });
            });
        }
    };


    TrendPage.prototype.deleteFiles = function () {
        emosWS.trendFileREST.deleteSet(this.updateAndGetConfiguration(), function (msg) {
            this.reset(this.RESET_TO_PRESET_SET, this.LOAD_WITHOUT_CONFIRMATION);
            this.getMessageBox("Delete", "Delete", "Delete successful.", "DeleteSuccessful");
        }.bind(this), function (msg) {
            this.getMessageBox("Delete", "Delete", "Sorry, unable to delete, because: " + msg + ".", "DeleteUnable");
        });
    };

    TrendPage.prototype.toGraphicFile = function (format) {
        try {
            if (["PNG", "SVG", "JPG"].indexOf(format) === -1)
                return;
            var
                    charts = this.createdChartList,
                    selection = {};

            $(".printBtn").each(function (i, e) {
                selection[e.dataset.chartindex] = $(e).hasClass("ChartSelected");
            });

            charts.forEach(function (chart, index) {
                if (selection[index] === true) {
                    var title = chart.config.title || ("Chart" + (index + 1));
                    // Capture current state of the chart
                    chart.createdChart["export"].capture({}, function () {
                        // Export to PNG                
                        this["to" + format]({
                            multiplier: 2
                        }, function (data) {
                            this.download(data, this.defaults.formats[format].mimeType, title + "." + format.toLowerCase());
                        });
                    });
                }
            });
        } catch (e) {
            console.error(e);
        }
    };
    TrendPage.prototype.toPDF = function () {
        try {
            var
                    self = this,
                    //images = 0,
                    layout = {
                        /*
                         ** Array of objects or strings which represents the output
                         */
                        content: [],
                        /*
                         ** Mapping object, holds the actual imagery
                         */
                        images: {}
                    };
            var
                    charts = this.createdChartList,
                    selection = {};
            
            $(".printBtn").each(function (i, e) {
                selection[e.dataset.chartindex] = $(e).hasClass("ChartSelected");
            });
            
            charts.forEach(function (chart, index) {
                if (selection[index] === true) {
                    var title = self.config.title || ("Chart" + (index + 1));
                    var content = [
                        {
                            text: title
                        },
                        {
                            image: "image_" + index,
                            fit: [515.28, 1000 / charts.length]    //A4 (595 x 842 points)
                        }
                    ];
                    
                    // Capture current state of the chart
                    chart.createdChart["export"].capture({}, function () {
                        // Export to PNG                
                        this.toPNG({
                            multiplier: 2 // pretend to be lossless

                                    // Add image to the layout reference
                        }, function (data) {
                            layout.images[ "image_" + index ] = data;
                            // Once all has been processed create the PDF
                                layout.content = content;
                                // Save as single PDF and offer as download
                                this.toPDF(layout, function (data) {
                                    this.download(data, this.defaults.formats.PDF.mimeType, title + ".pdf");
                                });
                        });
                    });
                }
            });
        } catch (e) {
            console.error(e);
        }
    };
    TrendPage.prototype.toPNG = function () {
        this.toGraphicFile("PNG");
    };
    TrendPage.prototype.toSVG = function () {
        this.toGraphicFile("SVG");
    };
    TrendPage.prototype.toJPG = function () {
        this.toGraphicFile("JPG");
    };
    TrendPage.prototype.getSelectedCharts = function () {
        var charts = [];
        this.forEachSelectedChart(function (chart) {
            charts.push(chart);
        });
        return charts;
    };
    TrendPage.prototype.toDataFile = function (format) {
        try {
            if (["JSON", "CSV", "XLSX"].indexOf(format) === -1)
                return;
            var
                    charts = this.createdChartList,
                    selection = [];
            this.refresh();

            $(".exportCheckbox").each(function (i, e) {
                if (e.checked) {
                    if (!selection[parseInt(e.dataset.chartindex)]) {
                        selection[parseInt(e.dataset.chartindex)] = [];
                    }
                    selection[parseInt(e.dataset.chartindex)]["selectedChartIndex"] = parseInt(e.dataset.chartindex);
                    selection[parseInt(e.dataset.chartindex)].push(parseInt(e.dataset.graphindex));
                }
            });
            
            $(".printBtn").each(function (i, e) {
                if ($(e).hasClass("ChartSelected")){
                    if (!selection[parseInt(e.dataset.chartindex)]) {
                        selection[parseInt(e.dataset.chartindex)] = [];
                    }
                    selection[parseInt(e.dataset.chartindex)]["selectedChartIndex"] = parseInt(e.dataset.chartindex);
                    selection[parseInt(e.dataset.chartindex)].push(parseInt(e.dataset.graphindex));
                }
            });

            selection.forEach(function (selectChart) {
                var mchart = charts[selectChart.selectedChartIndex].createdChart;

                var dataPoints = charts[selectChart.selectedChartIndex].getChartData(selectChart, selectChart[0]).data;

                dataPoints.forEach(function (item) {
                    item.date = new Date(item.date).toLocaleString() + ":" + new Date(item.date).getMilliseconds();
                });

                mchart.export["to" + format]({
                    data: dataPoints
                }, function (data) {
                    var title = charts[selectChart.selectedChartIndex].config.title === "" ? "Chart" + (selectChart.selectedChartIndex + 1) : charts[selectChart.selectedChartIndex].config.title;
                    this.download(data, this.defaults.formats[format].mimeType, title + "." + format.toLowerCase());
                });
            });
        } catch (e) {
            console.error(e);
        }
    };
    TrendPage.prototype.toJSON = function () {
        this.toDataFile("JSON");
    };
    TrendPage.prototype.toCSV = function () {
        this.toDataFile("CSV");
    };
    TrendPage.prototype.toXLSX = function () {
        this.toDataFile("XLSX");
    };
    TrendPage.prototype.checkIfMobile = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    TrendPage.prototype.terminate = function () {
        if (this.DOMRemoveObserve)
            this.DOMRemoveObserve.disconnect();

        var self = this;
        self.reset(self.RESET_TO_EMPTY_SET, self.LOAD_WITHOUT_CONFIRMATION);
        if (self.oldDataRemoval)
            self.oldDataRemoval.terminate();
        self = null;
    };

    TrendPage.prototype.hideBridges = function () {
        $('.overlayBridge , .overlayBridgeGraphs').hide();
    };

    TrendPage.prototype.getMessageBox = function (title, titleTextID, msg, msgTextID) {

        $("<div/>", {
            "class": 'dialogoverlay',
            "id": 'dialog'
        }).appendTo('#precenter');
        $('#dialog').empty();
        $('#dialog').append("<h4 id='titleMsg'>" + title + "</h4>");
        $('#dialog').append("<div id='textMsg' class='dialogtext'>" + msg + "</div>");
        $('#dialog').dialog({
            resizable: false,
            dialogClass: "dialogCorpus ",
            height: "auto",
            width: 400,
            modal: true,
            title: "Message",
            buttons: {}
        }).siblings('div.ui-dialog-titlebar').remove();
        $($('.dialogCorpus button')[0]).attr('class', "emosbutton savebutton");
        $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
        
        var text = document.getElementById('titleMsg');
        emosWS.sendAdviseText("T04_" + titleTextID, "name", function (msg) {
            if (msg && msg.value !== '' && text) {
                text.innerHTML = msg.value;
            }
        }, this);
        
        var textMsg = document.getElementById('textMsg');
        emosWS.sendAdviseText("T04_" + msgTextID, "name", function (msg) {
            if (msg && msg.value !== '' && text) {
                textMsg.innerHTML = msg.value;
            }
        }, this);

        setTimeout(function () {
            $('#dialog').dialog("destroy");
            $('#dialog').remove();
        }, 2000);
    };
    
    emosWS.TrendPage = TrendPage;

    

    

}));