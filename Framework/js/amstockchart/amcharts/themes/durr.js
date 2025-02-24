AmCharts.themes.durr = {
    themeName: "durr",
    AmStockChart: {
        //colors: ["#00488e", "#bf1175", "#24b2ea", "#70889b", "#70a9fc", "#8d52ff", "#00abaa", "#d16f80", "#680b6b", "#f344fc", "#73896b", "#ddb300", "#8e6032", "#605d06", "#b53300", "#5e5e5e"]
        colors: ["#00488E", "#00ABAA", "#24B2EA", "#70889B", "#70A9FC", "#8D52FF", "#BF1175", "#D16F80", "#680B6B", "#F344FC", "#73896B", "#DDB300", "#8E6032", "#605D06", "#B53300", "#5E5E5E"]
    },
    AmRectangularChart: {
        zoomOutButtonColor: '#FFFFFF',
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: "lensWhite"
    },
    AxisBase: {
        gridThickness: 2,
        fillColor: "#FFFFFF",
        fillAlpha: 0,
        axisColor: "#FFFFFF",
        axisAlpha: 0,
        gridAlpha: 0.6,
        gridColor: "#FFFFFF",
        dashLength: 0,
        markPeriodChange: false
    },
    //graphType: line, column, step, smoothedLine, candlestick, ohlc.
    ChartScrollbar: {
        enabled: true,
        autoGridCount: false,
        backgroundColor: "#003254",
        backgroundAlpha: 0.7,
        graphFillAlpha: 0.3,
        graphType: "line",
        graphFillColor: "#FFFFFF",
        selectedGraphFillColor: "#FFFFFF",
        selectedGraphFillAlpha: 0.8,
        selectedGraphLineColor: "#FFFFFF",
        selectedBackgroundColor: "#003254",
        selectedBackgroundAlpha: 0.9,
        gridColor: "#FFFFFF",
        gridAlpha: 0.50,
        color: "#FFFFFF",
        graph: "g0",
        oppositeAxis: false,
        offset: 30,
        scrollbarHeight: 20,
        autoGridCount: false
    },
    ChartCursor: {
        cursorColor: "#FFFFFF",
        color: "#FFFFFF",
        cursorAlpha: 0.5
    },
    AmLegend: {
        color: "#003254"
    },
    AmGraph: {
        lineThickness: 2
    },
    PeriodSelector: {
        color: "#000"
    },
    PeriodButton: {
        color: "#000",
        background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
        opacity: 1.0,
        border: "2px solid rgba(200, 200, 200, 1)",
        MozBorderRadius: "0",
        borderRadius: "0",
        margin: "1px",
        outline: "none",
        boxSizing: "border-box"
    },
    /*
     PeriodButtonSelected: {
     color: "#e7e7e7",
     backgroundColor: "rgba(255, 255, 255, 0.1)",
     border: "1px solid rgba(255, 255, 255, .3)",
     MozBorderRadius: "5px",
     borderRadius: "5px",
     margin: "1px",
     outline: "none",
     opacity: 1,
     boxSizing: "border-box"
     },
     
     PeriodInputField: {
     color: "#e7e7e7",
     background: "transparent",
     border: "1px solid rgba(255, 255, 255, .15)",
     outline: "none"
     },
     
     DataSetSelector: {
     color: "#e7e7e7",
     selectedBackgroundColor: "rgba(255, 255, 255, .25)",
     rollOverBackgroundColor: "rgba(255, 255, 255, .15)"
     },
     
     DataSetCompareList: {
     color: "#e7e7e7",
     lineHeight: "100%",
     boxSizing: "initial",
     webkitBoxSizing: "initial",
     border: "1px solid rgba(255, 255, 255, .15)"
     },
     */
    DataSetSelect: {
        border: "1px solid rgba(255, 255, 255, .15)",
        outline: "none"
    }

};