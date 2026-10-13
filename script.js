// Dataset 23 Kabupaten/Kota Aceh
const dataTKA = {
    sd: [
        { no: 1, name: "Kota Banda Aceh", indo: 64.40, math: 42.19 },
        { no: 2, name: "Kota Sabang", indo: 61.71, math: 38.77 },
        { no: 3, name: "Kota Lhokseumawe", indo: 57.87, math: 39.70 },
        { no: 4, name: "Kota Langsa", indo: 58.48, math: 38.82 },
        { no: 5, name: "Kota Subulussalam", indo: 52.18, math: 36.99 },
        { no: 6, name: "Kabupaten Aceh Besar", indo: 54.37, math: 37.67 },
        { no: 7, name: "Kabupaten Pidie", indo: 51.14, math: 37.29 },
        { no: 8, name: "Kabupaten Pidie Jaya", indo: 51.27, math: 36.83 },
        { no: 9, name: "Kabupaten Bireuen", indo: 53.38, math: 36.88 },
        { no: 10, name: "Kabupaten Aceh Tengah", indo: 54.47, math: 37.00 },
        { no: 11, name: "Kabupaten Bener Meriah", indo: 54.39, math: 36.23 },
        { no: 12, name: "Kabupaten Aceh Utara", indo: 50.91, math: 37.69 },
        { no: 13, name: "Kabupaten Aceh Timur", indo: 48.97, math: 36.44 },
        { no: 14, name: "Kabupaten Aceh Tamiang", indo: 55.80, math: 38.34 },
        { no: 15, name: "Kabupaten Aceh Singkil", indo: 51.84, math: 37.32 },
        { no: 16, name: "Kabupaten Aceh Jaya", indo: 55.14, math: 39.84 },
        { no: 17, name: "Kabupaten Aceh Barat", indo: 53.30, math: 36.65 },
        { no: 18, name: "Kabupaten Nagan Raya", indo: 52.36, math: 36.23 },
        { no: 19, name: "Kabupaten Simeulue", indo: 51.77, math: 37.09 },
        { no: 20, name: "Kabupaten Aceh Barat Daya", indo: 52.56, math: 36.53 },
        { no: 21, name: "Kabupaten Aceh Selatan", indo: 51.70, math: 36.45 },
        { no: 22, name: "Kabupaten Aceh Tenggara", indo: 49.64, math: 36.80 },
        { no: 23, name: "Kabupaten Gayo Lues", indo: 52.32, math: 38.74 }
    ],
    smp: [
        { no: 1, name: "Kota Banda Aceh", indo: 64.88, math: 41.85 },
        { no: 2, name: "Kota Sabang", indo: 60.74, math: 39.57 },
        { no: 3, name: "Kota Lhokseumawe", indo: 56.15, math: 38.02 },
        { no: 4, name: "Kota Langsa", indo: 57.89, math: 37.95 },
        { no: 5, name: "Kota Subulussalam", indo: 51.56, math: 35.87 },
        { no: 6, name: "Kabupaten Aceh Besar", indo: 54.57, math: 37.60 },
        { no: 7, name: "Kabupaten Pidie", indo: 50.22, math: 36.87 },
        { no: 8, name: "Kabupaten Pidie Jaya", indo: 47.59, math: 35.76 },
        { no: 9, name: "Kabupaten Bireuen", indo: 51.99, math: 37.19 },
        { no: 10, name: "Kabupaten Aceh Tengah", indo: 54.09, math: 36.91 },
        { no: 11, name: "Kabupaten Bener Meriah", indo: 53.27, math: 37.00 },
        { no: 12, name: "Kabupaten Aceh Utara", indo: 47.34, math: 36.68 },
        { no: 13, name: "Kabupaten Aceh Timur", indo: 48.02, math: 35.75 },
        { no: 14, name: "Kabupaten Aceh Tamiang", indo: 54.65, math: 37.18 },
        { no: 15, name: "Kabupaten Aceh Singkil", indo: 51.05, math: 34.85 },
        { no: 16, name: "Kabupaten Aceh Jaya", indo: 51.74, math: 40.38 },
        { no: 17, name: "Kabupaten Aceh Barat", indo: 50.62, math: 36.13 },
        { no: 18, name: "Kabupaten Nagan Raya", indo: 51.97, math: 36.54 },
        { no: 19, name: "Kabupaten Simeulue", indo: 53.92, math: 37.38 },
        { no: 20, name: "Kabupaten Aceh Barat Daya", indo: 50.79, math: 35.65 },
        { no: 21, name: "Kabupaten Aceh Selatan", indo: 51.01, math: 36.24 },
        { no: 22, name: "Kabupaten Aceh Tenggara", indo: 51.52, math: 38.23 },
        { no: 23, name: "Kabupaten Gayo Lues", indo: 52.81, math: 41.80 }
    ]
};

// Tab Switching
function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Initialize Overview Chart
window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('overviewChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SD - Bahasa Indonesia', 'SD - Matematika', 'SMP - Bahasa Indonesia', 'SMP - Matematika'],
            datasets: [
                {
                    label: 'Provinsi Aceh',
                    data: [53.26, 37.59, 52.46, 37.29],
                    backgroundColor: '#0d9488',
                    borderRadius: 6
                },
                {
                    label: 'Nasional',
                    data: [60.35, 43.61, 62.05, 40.93],
                    backgroundColor: '#1e293b',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                y: { beginAtZero: true, max: 70 }
            }
        }
    });

    populateDropdowns();
    updateExplorer();
});

// Populate Regency Dropdown and Table
function populateDropdowns() {
    const level = document.getElementById('select-level').value;
    const selectReg = document.getElementById('select-regency');
    selectReg.innerHTML = '';

    dataTKA[level].forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.name;
        selectReg.appendChild(option);
    });
}

function updateExplorer() {
    const level = document.getElementById('select-level').value;
    populateDropdowns(); // refresh dropdown items matching level
    
    const regIndex = document.getElementById('select-regency').value || 0;
    const selectedData = dataTKA[level][regIndex];

    // Update detail card
    document.getElementById('detail-title').textContent = selectedData.name;
    document.getElementById('val-indo').textContent = selectedData.indo;
    document.getElementById('val-math').textContent = selectedData.math;
    
    const provAvgIndo = level === 'sd' ? 53.26 : 52.46;
    if(selectedData.indo >= provAvgIndo) {
        document.getElementById('val-status').textContent = "Di Atas Rerata Provinsi";
        document.getElementById('val-status').style.color = "#166534";
    } else {
        document.getElementById('val-status').textContent = "Di Bawah Rerata Provinsi";
        document.getElementById('val-status').style.color = "#991b1b";
    }

    // Update table
    document.getElementById('table-title').textContent = `Daftar Lengkap Capaian 23 Kabupaten/Kota (${level.toUpperCase()})`;
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    dataTKA[level].forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.no}</td>
            <td><strong>${row.name}</strong></td>
            <td>${row.indo}</td>
            <td>${row.math}</td>
        `;
        tbody.appendChild(tr);
    });
}