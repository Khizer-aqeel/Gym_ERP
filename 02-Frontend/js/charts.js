/* Gym ERP - Interactive Canvas Charts Engine
   Owners: Khizer & Ahad
*/

const GymCharts = {
    init() {
        this.renderAttendanceChart();
        this.renderMembershipGrowthChart();
    },

    // 1. Attendance Peak Hours & Weekly Trend Chart
    renderAttendanceChart() {
        const canvas = document.getElementById('chart-attendance');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.parentElement.clientWidth;
        const height = canvas.height = canvas.parentElement.clientHeight || 260;

        ctx.clearRect(0, 0, width, height);

        // Data Points (6 AM to 10 PM peak hourly gym attendance)
        const hours = ['6AM', '8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM', '10PM'];
        const values = [25, 68, 45, 38, 52, 84, 142, 115, 40];
        const maxVal = 160;

        const paddingLeft = 40;
        const paddingBottom = 30;
        const paddingTop = 20;
        const paddingRight = 20;

        const chartWidth = width - paddingLeft - paddingRight;
        const chartHeight = height - paddingTop - paddingBottom;

        // Draw Gridlines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = paddingTop + (chartHeight / 4) * i;
            ctx.beginPath();
            ctx.moveTo(paddingLeft, y);
            ctx.lineTo(width - paddingRight, y);
            ctx.stroke();

            // Y-axis Labels
            ctx.fillStyle = '#64748B';
            ctx.font = '11px Plus Jakarta Sans';
            ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), 10, y + 4);
        }

        // Calculate Points
        const stepX = chartWidth / (hours.length - 1);
        const points = values.map((val, i) => {
            const x = paddingLeft + i * stepX;
            const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
            return { x, y, val, label: hours[i] };
        });

        // Draw Area Gradient
        const gradient = ctx.createLinearGradient(0, paddingTop, 0, height - paddingBottom);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

        ctx.beginPath();
        ctx.moveTo(points[0].x, height - paddingBottom);
        points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(points[points.length - 1].x, height - paddingBottom);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw Smooth Curve Line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw Data Dots & X Labels
        points.forEach(p => {
            // Circle glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#10B981';
            ctx.shadowColor = '#10B981';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#080C14';
            ctx.fill();

            // X Label
            ctx.fillStyle = '#94A3B8';
            ctx.font = '11px Plus Jakarta Sans';
            ctx.textAlign = 'center';
            ctx.fillText(p.label, p.x, height - 8);
        });
    },

    // 2. Membership Tier Distribution Chart (Bar Chart)
    renderMembershipGrowthChart() {
        const canvas = document.getElementById('chart-growth');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.parentElement.clientWidth;
        const height = canvas.height = canvas.parentElement.clientHeight || 260;

        ctx.clearRect(0, 0, width, height);

        const tiers = ['Basic', 'Gold', 'Platinum VIP', 'Corporate'];
        const values = [412, 530, 210, 96];
        const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#06B6D4'];

        const paddingLeft = 40;
        const paddingBottom = 30;
        const paddingTop = 20;
        const paddingRight = 20;

        const chartWidth = width - paddingLeft - paddingRight;
        const chartHeight = height - paddingTop - paddingBottom;
        const barWidth = chartWidth / tiers.length - 30;

        values.forEach((val, i) => {
            const barHeight = (val / 600) * chartHeight;
            const x = paddingLeft + i * (chartWidth / tiers.length) + 15;
            const y = paddingTop + chartHeight - barHeight;

            // Bar Gradient
            const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
            grad.addColorStop(0, colors[i]);
            grad.addColorStop(1, 'rgba(15, 23, 42, 0.4)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, barHeight, [6, 6, 0, 0]);
            ctx.fill();

            // Value text above bar
            ctx.fillStyle = '#F8FAFC';
            ctx.font = 'bold 12px Plus Jakarta Sans';
            ctx.textAlign = 'center';
            ctx.fillText(val, x + barWidth / 2, y - 8);

            // Label text below bar
            ctx.fillStyle = '#94A3B8';
            ctx.font = '11px Plus Jakarta Sans';
            ctx.fillText(tiers[i], x + barWidth / 2, height - 8);
        });
    }
};

window.GymCharts = GymCharts;
window.addEventListener('resize', () => {
    if (window.GymCharts) window.GymCharts.init();
});
