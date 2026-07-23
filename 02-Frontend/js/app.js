/* Gym ERP - Core Application Router & View Renderer
   Owners: Khizer & Ahad
*/

const GymApp = {
    currentTab: 'dashboard',

    init() {
        this.bindEvents();
        this.renderAllViews();
    },

    bindEvents() {
        // Sidebar Navigation Tab Switching
        const navItems = document.querySelectorAll('.nav-item[data-tab]');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const tabKey = item.getAttribute('data-tab');
                this.switchTab(tabKey);
            });
        });

        // Sidebar Collapse Toggle
        const toggleBtn = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('main-sidebar');
        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
            });
        }

        // Notification Popover Toggle
        const notifBtn = document.getElementById('btn-notifications');
        const notifPopover = document.getElementById('notifications-popover');
        if (notifBtn && notifPopover) {
            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                notifPopover.classList.toggle('active');
            });
            document.addEventListener('click', () => {
                notifPopover.classList.remove('active');
            });
        }

        // Theme Toggle Switcher
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                themeBtn.textContent = newTheme === 'light' ? '🌙' : '☀️';
            });
        }

        // Global Search Input Keyboard Shortcut Ctrl+K
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('global-search-input');
                if (searchInput) searchInput.focus();
            }
        });

        // Global Search Filter Handler
        const globalSearch = document.getElementById('global-search-input');
        if (globalSearch) {
            globalSearch.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                this.handleGlobalSearch(query);
            });
        }

        // Logout button
        const logoutBtn = document.getElementById('nav-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                Auth.handleLogout();
            });
        }
    },

    switchTab(tabKey) {
        this.currentTab = tabKey;

        // Update Nav Link Active States
        const navItems = document.querySelectorAll('.nav-item[data-tab]');
        navItems.forEach(item => {
            if (item.getAttribute('data-tab') === tabKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update View Sub-Containers
        const subViews = document.querySelectorAll('.app-subview');
        subViews.forEach(view => {
            if (view.id === `subview-${tabKey}`) {
                view.style.display = 'block';
                view.classList.add('fadeIn');
            } else {
                view.style.display = 'none';
            }
        });

        // Re-render chart if switching to dashboard
        if (tabKey === 'dashboard' && window.GymCharts) {
            setTimeout(() => window.GymCharts.init(), 50);
        }
    },

    renderAllViews() {
        this.renderMembersTable();
        this.renderTrainersGrid();
        this.renderAttendanceFeed();
        this.renderPlansGrid();
        this.renderPaymentsTable();
        this.renderEquipmentTable();
    },

    // 1. Members Module Table
    renderMembersTable() {
        const tbody = document.getElementById('members-table-body');
        if (!tbody) return;

        tbody.innerHTML = GymData.members.map(m => `
            <tr>
                <td>
                    <div class="member-cell-flex">
                        <div class="table-avatar">${m.avatar}</div>
                        <div class="table-member-info">
                            <h4>${m.name}</h4>
                            <span>${m.email}</span>
                        </div>
                    </div>
                </td>
                <td><strong>${m.id}</strong></td>
                <td>${m.plan}</td>
                <td><span class="status-pill ${m.status}">${m.status.toUpperCase()}</span></td>
                <td>${m.checkins} visits</td>
                <td>${m.expiryDate}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn-icon-action" title="View Profile">👁️</button>
                        <button class="btn-icon-action" title="Renew Plan">💳</button>
                        <button class="btn-icon-action" title="More Options">⋮</button>
                    </div>
                </td>
            </tr>
        `).join('');
    },

    // 2. Trainers Module Grid
    renderTrainersGrid() {
        const container = document.getElementById('trainers-grid-container');
        if (!container) return;

        container.innerHTML = GymData.trainers.map(t => `
            <div class="summary-card" style="padding: 24px;">
                <div class="member-cell-flex" style="margin-bottom: 16px;">
                    <div class="table-avatar" style="width: 48px; height: 48px; font-size: 1.1rem; background: linear-gradient(135deg, var(--primary), var(--accent-cyan));">${t.avatar}</div>
                    <div class="table-member-info">
                        <h4>${t.name}</h4>
                        <span style="color: var(--primary); font-weight: 600;">${t.specialty}</span>
                    </div>
                </div>
                <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px;">
                    <div>👥 Active Clients: <strong style="color: var(--text-main);">${t.clients} members</strong></div>
                    <div>⭐ Rating: <strong style="color: var(--accent-amber);">${t.rating} / 5.0</strong></div>
                    <div>📞 Contact: <strong style="color: var(--text-main);">${t.phone}</strong></div>
                </div>
                <button class="action-btn-secondary" style="width: 100%; justify-content: center;">View Trainer Schedule</button>
            </div>
        `).join('');
    },

    // 3. Attendance Module Feed
    renderAttendanceFeed() {
        const list = document.getElementById('dashboard-activity-list');
        const fullTable = document.getElementById('attendance-table-body');

        if (list) {
            list.innerHTML = GymData.attendance.slice(0, 5).map(a => `
                <div class="activity-item">
                    <div class="activity-user-img">${a.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div class="activity-details">
                        <div class="activity-title">${a.name}</div>
                        <div class="activity-sub">${a.plan} • ${a.type}</div>
                    </div>
                    <div class="activity-time-badge">${a.time}</div>
                </div>
            `).join('');
        }

        if (fullTable) {
            fullTable.innerHTML = GymData.attendance.map(a => `
                <tr>
                    <td><strong>${a.id}</strong></td>
                    <td>${a.name}</td>
                    <td>${a.plan}</td>
                    <td>${a.time}</td>
                    <td><span class="status-pill pending">${a.type}</span></td>
                    <td><span class="status-pill active">${a.status}</span></td>
                </tr>
            `).join('');
        }
    },

    // 4. Membership Plans Grid
    renderPlansGrid() {
        const container = document.getElementById('plans-grid-container');
        if (!container) return;

        container.innerHTML = GymData.plans.map(p => `
            <div class="summary-card" style="padding: 28px; border-color: ${p.name.includes('VIP') ? 'var(--accent-purple)' : 'var(--border-color)'}">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span class="status-pill ${p.name.includes('VIP') ? 'vip' : 'active'}">${p.badge}</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${p.members} Active Members</span>
                </div>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">${p.name}</h3>
                <div style="font-size: 2.2rem; font-weight: 800; color: var(--primary); margin-bottom: 18px;">$${p.price} <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/${p.interval}</span></div>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px;">
                    ${p.features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                <button class="action-btn-primary" style="width: 100%; justify-content: center;">Edit Plan Details</button>
            </div>
        `).join('');
    },

    // 5. Payments Table
    renderPaymentsTable() {
        const tbody = document.getElementById('payments-table-body');
        if (!tbody) return;

        tbody.innerHTML = GymData.payments.map(p => `
            <tr>
                <td><strong>${p.invoice}</strong></td>
                <td>${p.member}</td>
                <td>${p.plan}</td>
                <td><strong style="color: var(--primary);">$${p.amount.toFixed(2)}</strong></td>
                <td>${p.method}</td>
                <td>${p.date}</td>
                <td><span class="status-pill ${p.status === 'Paid' ? 'active' : 'expiring'}">${p.status}</span></td>
            </tr>
        `).join('');
    },

    // 6. Equipment Table
    renderEquipmentTable() {
        const tbody = document.getElementById('equipment-table-body');
        if (!tbody) return;

        tbody.innerHTML = GymData.equipment.map(e => `
            <tr>
                <td><strong>${e.id}</strong></td>
                <td>${e.name}</td>
                <td>${e.category}</td>
                <td><span class="status-pill ${e.status === 'Operational' ? 'active' : 'inactive'}">${e.status}</span></td>
                <td>${e.lastServiced}</td>
                <td><button class="action-btn-secondary" style="padding: 4px 10px; font-size: 0.76rem;">Schedule Maintenance</button></td>
            </tr>
        `).join('');
    },

    handleGlobalSearch(query) {
        if (!query) return;

        const match = GymData.members.find(m => m.name.toLowerCase().includes(query) || m.id.toLowerCase().includes(query));
        if (match) {
            this.switchTab('members');
        }
    }
};

window.GymApp = GymApp;
document.addEventListener('DOMContentLoaded', () => {
    GymApp.init();
});
