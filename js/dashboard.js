/**
 * Interactive Live Dashboard Widget - Powered by Chart.js
 * Dark Cyan Theme (#1f242d, #323946, #0ef) matching the screenshot palette
 */

let activeChartInstance = null;

const DASHBOARD_PRESETS = {
    heart_disease_roc: {
        title: "Heart Disease Prediction: ROC-AUC Evaluation Curves",
        subtitle: "Benchmarking Logistic Regression (0.88 AUC) vs Random Forest (0.94 AUC)",
        type: "line",
        data: () => {
            return {
                labels: ["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0 (FPR)"],
                datasets: [
                    {
                        label: "Random Forest (AUC = 0.94, Accuracy = 88%)",
                        data: [0.0, 0.42, 0.68, 0.81, 0.89, 0.93, 0.96, 0.98, 0.99, 1.0, 1.0],
                        borderColor: "#0ef",
                        backgroundColor: "rgba(0, 238, 255, 0.12)",
                        tension: 0.3,
                        fill: true,
                        borderWidth: 3,
                        pointBackgroundColor: "#0ef"
                    },
                    {
                        label: "Logistic Regression (AUC = 0.88, Accuracy = 83%)",
                        data: [0.0, 0.31, 0.52, 0.66, 0.76, 0.84, 0.89, 0.93, 0.96, 0.98, 1.0],
                        borderColor: "#ffffff",
                        backgroundColor: "transparent",
                        borderDash: [4, 4],
                        tension: 0.3,
                        fill: false,
                        borderWidth: 2,
                        pointBackgroundColor: "#ffffff"
                    },
                    {
                        label: "Random Baseline (AUC = 0.50)",
                        data: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        backgroundColor: "transparent",
                        borderDash: [2, 3],
                        tension: 0,
                        fill: false,
                        borderWidth: 1.5
                    }
                ]
            };
        },
        options: () => ({
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: {
                    labels: { color: "#ffffff", font: { family: "Plus Jakarta Sans, sans-serif", weight: 600 } }
                },
                tooltip: {
                    backgroundColor: "#1f242d",
                    titleColor: "#0ef",
                    bodyColor: "#ffffff",
                    borderColor: "#0ef",
                    borderWidth: 1,
                    callbacks: {
                        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw} TPR`
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: "False Positive Rate (FPR)", color: "#94a3b8" },
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: { color: "#cbd5e1" }
                },
                y: {
                    title: { display: true, text: "True Positive Rate (TPR)", color: "#94a3b8" },
                    min: 0,
                    max: 1.0,
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: { color: "#cbd5e1" }
                }
            }
        })
    },

    airbnb_analytics: {
        title: "Airbnb Analytics: City Wise Average Price vs Occupancy (Power BI & DAX)",
        subtitle: "Analyzing listing distributions, pricing trends, and review patterns across metropolitan regions",
        type: "bar",
        data: () => {
            return {
                labels: ["New York", "London", "Paris", "Tokyo", "Rome", "Berlin", "Sydney"],
                datasets: [
                    {
                        label: "Average Nightly Rate ($)",
                        data: [185, 168, 155, 142, 128, 115, 150],
                        backgroundColor: "rgba(0, 238, 255, 0.85)",
                        borderColor: "#0ef",
                        borderWidth: 1,
                        borderRadius: 6,
                        yAxisID: "y"
                    },
                    {
                        label: "Estimated Occupancy Rate (%)",
                        data: [78, 82, 85, 88, 74, 76, 80],
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        borderColor: "#ffffff",
                        borderWidth: 1,
                        borderRadius: 6,
                        yAxisID: "y1"
                    }
                ]
            };
        },
        options: () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: "#ffffff", font: { weight: 600 } }
                },
                tooltip: {
                    backgroundColor: "#1f242d",
                    titleColor: "#0ef",
                    bodyColor: "#ffffff",
                    borderColor: "#0ef",
                    borderWidth: 1,
                    callbacks: {
                        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}${ctx.datasetIndex === 0 ? '$' : '%'}`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: { color: "#cbd5e1" }
                },
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    title: { display: true, text: "Nightly Price in USD", color: "#94a3b8" },
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: { color: "#0ef", callback: (v) => `$${v}` }
                },
                y1: {
                    type: "linear",
                    display: true,
                    position: "right",
                    min: 50,
                    max: 100,
                    title: { display: true, text: "Occupancy Rate (%)", color: "#94a3b8" },
                    grid: { drawOnChartArea: false },
                    ticks: { color: "#ffffff", callback: (v) => `${v}%` }
                }
            }
        })
    },

    habit_tracker_stats: {
        title: "Habit Tracker: Client Side Streak & Consistency Rate (React & Vite)",
        subtitle: "Weekly habit completion percentages tracked with localStorage state management",
        type: "line",
        data: () => {
            const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            return {
                labels: days,
                datasets: [
                    {
                        label: "Coding & DSA Practice",
                        data: [100, 100, 85, 100, 100, 90, 100],
                        borderColor: "#0ef",
                        backgroundColor: "rgba(0, 238, 255, 0.1)",
                        tension: 0.3,
                        fill: true,
                        borderWidth: 3,
                        pointBackgroundColor: "#0ef"
                    },
                    {
                        label: "ML Research & EDA",
                        data: [80, 90, 100, 75, 95, 85, 90],
                        borderColor: "#ffffff",
                        backgroundColor: "transparent",
                        borderDash: [4, 4],
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: "#ffffff"
                    },
                    {
                        label: "Reading & Technical Prep",
                        data: [70, 80, 85, 90, 80, 100, 95],
                        borderColor: "rgba(0, 238, 255, 0.5)",
                        backgroundColor: "transparent",
                        tension: 0.3,
                        borderWidth: 1.5
                    }
                ]
            };
        },
        options: () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: "#ffffff", font: { weight: 600 } }
                },
                tooltip: {
                    backgroundColor: "#1f242d",
                    titleColor: "#0ef",
                    bodyColor: "#ffffff",
                    borderColor: "#0ef",
                    borderWidth: 1,
                    callbacks: {
                        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}% Completed`
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: { color: "#cbd5e1" }
                },
                y: {
                    min: 50,
                    max: 100,
                    grid: { color: "rgba(255, 255, 255, 0.06)" },
                    ticks: {
                        color: "#0ef",
                        callback: (val) => `${val}%`
                    }
                }
            }
        })
    }
};

function renderDashboardChart(presetKey = "heart_disease_roc") {
    const canvas = document.getElementById("interactiveChartCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const preset = DASHBOARD_PRESETS[presetKey];
    if (!preset) return;

    const titleEl = document.getElementById("chartTitle");
    const subtitleEl = document.getElementById("chartSubtitle");
    if (titleEl) titleEl.textContent = preset.title;
    if (subtitleEl) subtitleEl.textContent = preset.subtitle;

    if (activeChartInstance) {
        activeChartInstance.destroy();
    }

    activeChartInstance = new Chart(ctx, {
        type: preset.type,
        data: preset.data(),
        options: preset.options()
    });

    document.querySelectorAll("[data-chart-tab]").forEach(btn => {
        if (btn.getAttribute("data-chart-tab") === presetKey) {
            btn.style.backgroundColor = "#0ef";
            btn.style.color = "#1f242d";
            btn.style.boxShadow = "0 0 15px rgba(0, 238, 255, 0.5)";
            btn.style.fontWeight = "700";
        } else {
            btn.style.backgroundColor = "transparent";
            btn.style.color = "#cbd5e1";
            btn.style.boxShadow = "none";
            btn.style.fontWeight = "500";
        }
    });
}

window.refreshActiveChart = function() {
    renderDashboardChart("heart_disease_roc");
};

window.initDashboardWidget = function() {
    renderDashboardChart("heart_disease_roc");

    document.querySelectorAll("[data-chart-tab]").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-chart-tab");
            renderDashboardChart(key);
        });
    });
};
