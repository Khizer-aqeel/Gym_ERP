/* Gym ERP - Mock Commercial Dataset
   Owners: Khizer & Ahad
*/

const GymData = {
    // Summary KPI Totals
    metrics: {
        totalMembers: 1248,
        totalMembersTrend: "+12.4%",
        activeMembers: 1085,
        activeRate: "87%",
        todayAttendance: 142,
        currentlyOnFloor: 18,
        expiringMemberships: 14,
        expiringSubtext: "Within 7 days",
        monthlyRevenue: 48650,
        revenueTrend: "+18.4%"
    },

    // Gym Members
    members: [
        { id: "MEM-8091", name: "Zain Malik", email: "zain.m@gmail.com", phone: "+1 555-0192", plan: "Platinum VIP", status: "active", checkins: 48, joinDate: "2024-01-15", expiryDate: "2026-12-31", trainer: "Alex Rivera", avatar: "ZM" },
        { id: "MEM-8092", name: "Sarah Jenkins", email: "sarah.j@outlook.com", phone: "+1 555-0341", plan: "Gold Fitness", status: "active", checkins: 32, joinDate: "2024-03-10", expiryDate: "2026-09-10", trainer: "Viktor Vance", avatar: "SJ" },
        { id: "MEM-8093", name: "Hamza Khan", email: "hamza.k@gmail.com", phone: "+1 555-0812", plan: "Basic Tier", status: "expiring", checkins: 19, joinDate: "2025-02-01", expiryDate: "2026-07-28", trainer: "None", avatar: "HK" },
        { id: "MEM-8094", name: "Emily Watson", email: "emily.w@yahoo.com", phone: "+1 555-0922", plan: "Corporate Elite", status: "active", checkins: 64, joinDate: "2023-11-20", expiryDate: "2027-01-15", trainer: "Elena Rostova", avatar: "EW" },
        { id: "MEM-8095", name: "David Chen", email: "dchen@techcorp.io", phone: "+1 555-0114", plan: "Platinum VIP", status: "active", checkins: 52, joinDate: "2024-05-04", expiryDate: "2026-11-04", trainer: "Alex Rivera", avatar: "DC" },
        { id: "MEM-8096", name: "Ayesha Ahmed", email: "ayesha.a@gmail.com", phone: "+1 555-0671", plan: "Gold Fitness", status: "inactive", checkins: 8, joinDate: "2024-08-12", expiryDate: "2026-05-12", trainer: "Viktor Vance", avatar: "AA" },
        { id: "MEM-8097", name: "Michael Chang", email: "mchang@fitness.net", phone: "+1 555-0441", plan: "Basic Tier", status: "active", checkins: 27, joinDate: "2025-01-10", expiryDate: "2027-01-10", trainer: "None", avatar: "MC" },
        { id: "MEM-8098", name: "Jessica Taylor", email: "jtaylor@design.co", phone: "+1 555-0992", plan: "Gold Fitness", status: "expiring", checkins: 41, joinDate: "2024-07-26", expiryDate: "2026-07-29", trainer: "Elena Rostova", avatar: "JT" }
    ],

    // Trainers
    trainers: [
        { id: "TRN-101", name: "Alex Rivera", specialty: "Bodybuilding & Strength", clients: 24, rating: 4.9, status: "Active", phone: "+1 555-7711", avatar: "AR" },
        { id: "TRN-102", name: "Elena Rostova", specialty: "CrossFit & High Intensity", clients: 19, rating: 4.95, status: "Active", phone: "+1 555-7722", avatar: "ER" },
        { id: "TRN-103", name: "Viktor Vance", specialty: "Mobility & Rehabilitation", clients: 16, rating: 4.8, status: "Active", phone: "+1 555-7733", avatar: "VV" },
        { id: "TRN-104", name: "Maya Lin", specialty: "Pilates & Core Conditioning", clients: 22, rating: 5.0, status: "Active", phone: "+1 555-7744", avatar: "ML" }
    ],

    // Live Attendance Log
    attendance: [
        { id: "ATT-901", memberId: "MEM-8091", name: "Zain Malik", plan: "Platinum VIP", time: "13:14 PM", type: "RFID Scan", status: "Inside" },
        { id: "ATT-902", memberId: "MEM-8094", name: "Emily Watson", plan: "Corporate Elite", time: "13:02 PM", type: "Mobile QR", status: "Inside" },
        { id: "ATT-903", memberId: "MEM-8095", name: "David Chen", plan: "Platinum VIP", time: "12:45 PM", type: "Manual Desk", status: "Inside" },
        { id: "ATT-904", memberId: "MEM-8092", name: "Sarah Jenkins", plan: "Gold Fitness", time: "11:30 AM", type: "RFID Scan", status: "Completed" },
        { id: "ATT-905", memberId: "MEM-8097", name: "Michael Chang", plan: "Basic Tier", time: "10:15 AM", type: "RFID Scan", status: "Completed" }
    ],

    // Membership Plans
    plans: [
        { id: "PLN-1", name: "Basic Tier", price: 49, interval: "Monthly", members: 412, features: ["Gym Floor Access", "Locker Room", "Free Wi-Fi"], badge: "Popular" },
        { id: "PLN-2", name: "Gold Fitness", price: 89, interval: "Monthly", members: 530, features: ["All Basic Features", "Sauna & Steam Bath", "Group Classes Included"], badge: "Best Value" },
        { id: "PLN-3", name: "Platinum VIP", price: 149, interval: "Monthly", members: 210, features: ["All Gold Features", "Personal Trainer (2x/wk)", "Nutrition Counseling", "Unlimited Guest Passes"], badge: "VIP" },
        { id: "PLN-4", name: "Corporate Elite", price: 119, interval: "Monthly", members: 96, features: ["Corporate Pass", "Priority Booking", "Custom Workout Plans"], badge: "Business" }
    ],

    // Recent Financial Transactions
    payments: [
        { invoice: "INV-2026-001", member: "Zain Malik", plan: "Platinum VIP", amount: 149.00, method: "Credit Card (Auto)", date: "2026-07-23", status: "Paid" },
        { invoice: "INV-2026-002", member: "David Chen", plan: "Platinum VIP", amount: 149.00, method: "Apple Pay", date: "2026-07-23", status: "Paid" },
        { invoice: "INV-2026-003", member: "Emily Watson", plan: "Corporate Elite", amount: 119.00, method: "Bank Transfer", date: "2026-07-22", status: "Paid" },
        { invoice: "INV-2026-004", member: "Sarah Jenkins", plan: "Gold Fitness", amount: 89.00, method: "Credit Card", date: "2026-07-21", status: "Paid" },
        { invoice: "INV-2026-005", member: "Hamza Khan", plan: "Basic Tier", amount: 49.00, method: "Pending Auto-Debit", date: "2026-07-20", status: "Pending" }
    ],

    // Equipment Inventory
    equipment: [
        { id: "EQ-101", name: "Rogue Olympic Power Rack #1", category: "Free Weights", status: "Operational", lastServiced: "2026-06-10" },
        { id: "EQ-102", name: "LifeFitness Treadmill Pro X4", category: "Cardio", status: "Operational", lastServiced: "2026-07-01" },
        { id: "EQ-103", name: "Concept2 Ergometer Rower", category: "Cardio", status: "Operational", lastServiced: "2026-05-18" },
        { id: "EQ-104", name: "Hammer Strength Smith Machine", category: "Machines", status: "Maintenance", lastServiced: "2026-07-22" },
        { id: "EQ-105", name: "Eleiko Bumper Plates Set (500kg)", category: "Free Weights", status: "Operational", lastServiced: "2026-04-12" }
    ],

    // Notifications
    notifications: [
        { id: 1, title: "14 Memberships Expiring", desc: "Send automated renewal reminders via SMS", time: "10m ago", icon: "⚠️" },
        { id: 2, title: "Equipment Maintenance Alert", desc: "Smith Machine #2 scheduled for service today", time: "1h ago", icon: "⚙️" },
        { id: 3, title: "Monthly Revenue Goal Reached", desc: "MRR hit $48,650 (108% of target)", time: "3h ago", icon: "🎉" }
    ]
};
