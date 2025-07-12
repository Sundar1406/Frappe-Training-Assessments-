// Use DOMContentLoaded for plain HTML or frappe.ready for Frappe web pages
// This version will work for both
(function() {
    function onReady(fn) {
        if (window.frappe && frappe.ready) {
            frappe.ready(fn);
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    onReady(() => {
        const chart_div = document.getElementById("realtime-chart");
        if (!chart_div) return;

        // Generate initial random candlestick data
        function randomCandle(prevClose) {
            let open = prevClose;
            let close = +(open + (Math.random() - 0.5) * 2).toFixed(2);
            let high = Math.max(open, close) + +(Math.random() * 1.5).toFixed(2);
            let low = Math.min(open, close) - +(Math.random() * 1.5).toFixed(2);
            return { open, high, low, close };
        }

        let candles = [];
        let labels = [];
        let now = new Date();
        let prevClose = 100;
        for (let i = 0; i < 30; i++) {
            let candle = randomCandle(prevClose);
            candles.push([candle.open, candle.high, candle.low, candle.close]);
            labels.push(new Date(now.getTime() + i * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            prevClose = candle.close;
        }

        // Create the chart
        let chart = new frappe.Chart('#realtime-chart', {
            title: 'Real-time Trading Candles',
            data: {
                labels: labels,
                datasets: [
                    {
                        name: 'Candles',
                        values: candles
                    }
                ]
            },
            type: 'candlestick',
            height: 300,
            colors: ['#2196f3', '#e53935'] // blue for up, red for down
        });

        // Update the chart every 2 seconds
        setInterval(function () {
            let lastClose = candles[candles.length - 1][3];
            let candle = randomCandle(lastClose);
            candles.push([candle.open, candle.high, candle.low, candle.close]);
            candles.shift();
            let newLabel = new Date(new Date().getTime()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            labels.push(newLabel);
            labels.shift();
            chart.update_series([{ name: 'Candles', values: candles }]);
            chart.update_labels(labels);
        }, 2000);
    });
})();
