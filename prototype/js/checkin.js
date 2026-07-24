/* Gym ERP - Receptionist Quick Check-In Scanner Engine
   Owners: Khizer & Ahad
*/

const QuickCheckIn = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const modal = document.getElementById('modal-checkin');
        const triggerBtns = document.querySelectorAll('.trigger-quick-checkin');
        const closeBtn = document.getElementById('close-checkin-modal');
        const scanForm = document.getElementById('quick-checkin-form');

        if (triggerBtns) {
            triggerBtns.forEach(btn => {
                btn.addEventListener('click', () => this.openModal());
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (scanForm) {
            scanForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.processScan();
            });
        }

        // Demo preset scan buttons
        const demoScanBtns = document.querySelectorAll('.demo-scan-btn');
        demoScanBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                const input = document.getElementById('checkin-member-id');
                if (input) input.value = id;
                this.processScan();
            });
        });
    },

    openModal() {
        const modal = document.getElementById('modal-checkin');
        const input = document.getElementById('checkin-member-id');
        const card = document.getElementById('checkin-result-card');

        if (modal) modal.classList.add('active');
        if (card) card.classList.remove('active');
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 100);
        }
    },

    closeModal() {
        const modal = document.getElementById('modal-checkin');
        if (modal) modal.classList.remove('active');
    },

    processScan() {
        const input = document.getElementById('checkin-member-id');
        const card = document.getElementById('checkin-result-card');
        const detailsBox = document.getElementById('checkin-member-details');

        if (!input || !card || !detailsBox) return;

        const val = input.value.trim().toUpperCase() || "MEM-8091";
        const member = GymData.members.find(m => m.id === val || m.name.toLowerCase().includes(val.toLowerCase())) || GymData.members[0];

        // Synthesize audio feedback tone
        this.playBeepSound();

        // Populate Member Result Card
        detailsBox.innerHTML = `
            <div class="member-cell-flex">
                <div class="table-avatar">${member.avatar}</div>
                <div class="table-member-info">
                    <h4>${member.name} (${member.id})</h4>
                    <span>Plan: <strong>${member.plan}</strong> | Expiry: ${member.expiryDate}</span>
                </div>
            </div>
            <div style="margin-top: 10px; display: flex; align-items: center; justify-content: space-between;">
                <span class="status-pill active">✓ ACCESS GRANTED</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">Total Visits: ${member.checkins + 1}</span>
            </div>
        `;

        card.classList.add('active');

        // Add to live attendance dataset & feed
        const newLog = {
            id: `ATT-${Math.floor(100 + Math.random() * 900)}`,
            memberId: member.id,
            name: member.name,
            plan: member.plan,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "Reception RFID",
            status: "Inside"
        };

        GymData.attendance.unshift(newLog);
        GymData.metrics.todayAttendance += 1;

        // Update Today's Attendance counters in DOM
        const todayCountEl = document.getElementById('kpi-today-attendance');
        if (todayCountEl) todayCountEl.textContent = GymData.metrics.todayAttendance;

        // Refresh feed list if app router supports it
        if (window.GymApp && window.GymApp.renderAttendanceFeed) {
            window.GymApp.renderAttendanceFeed();
        }
    },

    playBeepSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime); // High pitch success beep
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {
            console.log('Audio not allowed without interaction');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    QuickCheckIn.init();
});
