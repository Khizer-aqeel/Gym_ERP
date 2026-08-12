/* IRON CORE ERP — Interactive Canvas Charts Engine
   Refined Rationalism Standard
*/

const GymCharts = {
    init() {
        this.renderRevenueYTDChart();
    },

    // Revenue Trajectory YTD Bar Chart (June highlighted in Signal Red #E63946 per PRD)
    renderRevenueYTDChart() {
        const canvas = document.getElementById('chart-revenue-ytd');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.parentElement.clientWidth;
        const height = canvas.height = canvas.parentElement.clientHeight || 230;

        ctx.clearRect(0, 0, width, height);

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun (Active)'];
        const values = [32400, 36800, 41200, 43500, 45200, 48650];
        const maxVal = 55000;

        const paddingLeft = 40;
        const paddingBottom = 30;
        const paddingTop = 25;
        const paddingRight = 20;

        const chartWidth = width - paddingLeft - paddingRight;
        const chartHeight = height - paddingTop - paddingBottom;
        const barWidth = Math.min(chartWidth / months.length - 20, 36);

        // Draw Gridlines
        ctx.strokeStyle = '#e1e3e4';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = paddingTop + (chartHeight / 4) * i;
            ctx.beginPath();
            ctx.moveTo(paddingLeft, y);
            ctx.lineTo(width - paddingRight, y);
            ctx.stroke();

            // Y-axis Labels
            ctx.fillStyle = '#565e55';
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.textAlign = 'right';
            const valLabel = '$' + Math.round((maxVal - (maxVal / 4) * i) / 1000) + 'k';
            ctx.fillText(valLabel, paddingLeft - 8, y + 3);
        }

        // Draw Bars
        months.forEach((m, i) => {
            const val = values[i];
            const barHeight = (val / maxVal) * chartHeight;
            const step = chartWidth / months.length;
            const x = paddingLeft + i * step + (step - barWidth) / 2;
            const y = paddingTop + chartHeight - barHeight;

            const isCurrentMonth = i === 5; // June active month
            const barColor = isCurrentMonth ? '#e63946' : '#485f84';

            ctx.fillStyle = barColor;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
            } else {
                ctx.rect(x, y, barWidth, barHeight);
            }
            ctx.fill();

            // Value text above bar
            ctx.fillStyle = isCurrentMonth ? '#e63946' : '#191c1d';
            ctx.font = isCurrentMonth ? 'bold 11px "Hanken Grotesk"' : '10px "Hanken Grotesk"';
            ctx.textAlign = 'center';
            ctx.fillText('$' + (val / 1000).toFixed(1) + 'k', x + barWidth / 2, y - 6);

            // Month Label text below bar
            ctx.fillStyle = isCurrentMonth ? '#e63946' : '#565e55';
            ctx.font = isCurrentMonth ? 'bold 11px "Hanken Grotesk"' : '11px "Hanken Grotesk"';
            ctx.fillText(m, x + barWidth / 2, height - 8);
        });
    }
};

window.GymCharts = GymCharts;
window.addEventListener('resize', () => {
    if (window.GymCharts) window.GymCharts.init();
});
setTimeout(() => GymCharts.init(), 100);
