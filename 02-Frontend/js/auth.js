/* Gym ERP - Authentication & Session Engine
   Owners: Khizer & Ahad
*/

const Auth = {
    // Current Active User
    currentUser: {
        name: "Khizer",
        role: "Owner & Admin",
        email: "khizer@gymerp.com",
        avatar: "K",
        owners: "Khizer & Ahad"
    },

    // Predefined quick logins for demo
    presets: {
        khizer: {
            username: "khizer@gymerp.com",
            password: "password123",
            name: "Khizer",
            role: "Owner & Super Admin",
            avatar: "K"
        },
        ahad: {
            username: "ahad@gymerp.com",
            password: "password123",
            name: "Ahad",
            role: "General Manager",
            avatar: "A"
        },
        receptionist: {
            username: "desk@gymerp.com",
            password: "password123",
            name: "Sarah Frontdesk",
            role: "Receptionist",
            avatar: "SF"
        }
    },

    init() {
        this.bindEvents();
    },

    bindEvents() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
    },

    fillPreset(roleKey) {
        const preset = this.presets[roleKey];
        if (!preset) return;

        const emailInput = document.getElementById('login-email');
        const passInput = document.getElementById('login-password');

        if (emailInput) emailInput.value = preset.username;
        if (passInput) passInput.value = preset.password;

        // Visual highlight feedback
        emailInput.style.borderColor = 'var(--primary)';
        passInput.style.borderColor = 'var(--primary)';
        setTimeout(() => {
            emailInput.style.borderColor = '';
            passInput.style.borderColor = '';
        }, 1000);
    },

    handleLogin() {
        const emailInput = document.getElementById('login-email');
        const submitBtn = document.getElementById('submit-login-btn');

        if (!emailInput || !submitBtn) return;

        const val = emailInput.value.toLowerCase().trim();

        // Show spinner state
        submitBtn.innerHTML = `<span>Connecting...</span> <div class="live-dot"></div>`;
        submitBtn.disabled = true;

        setTimeout(() => {
            if (val.includes('ahad')) {
                this.currentUser = { ...this.presets.ahad };
            } else if (val.includes('desk') || val.includes('reception')) {
                this.currentUser = { ...this.presets.receptionist };
            } else {
                this.currentUser = { ...this.presets.khizer };
            }

            this.updateHeaderProfile();

            // Transition from Login view to Main App layout
            document.getElementById('view-login').classList.remove('active');
            document.getElementById('view-app').classList.add('active');

            submitBtn.innerHTML = `<span>Sign In to Gym ERP</span> <span>→</span>`;
            submitBtn.disabled = false;

            // Trigger chart initialization
            if (window.GymCharts) {
                window.GymCharts.init();
            }
        }, 600);
    },

    handleLogout() {
        document.getElementById('view-app').classList.remove('active');
        document.getElementById('view-login').classList.add('active');
    },

    updateHeaderProfile() {
        const nameEl = document.getElementById('nav-user-name');
        const roleEl = document.getElementById('nav-user-role');
        const avatarEl = document.getElementById('nav-user-avatar');

        if (nameEl) nameEl.textContent = this.currentUser.name;
        if (roleEl) roleEl.textContent = this.currentUser.role;
        if (avatarEl) avatarEl.textContent = this.currentUser.avatar;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
});
