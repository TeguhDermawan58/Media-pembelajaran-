let currentLevel = 1;
let score = 0;

// --- LEVEL 1: KATUP ---
let currentGap = 0.25; // Start loose
const targetGap = 0.10;

function updateDisplayL1() {
    document.getElementById('current-gap').innerText = currentGap.toFixed(2);
}

function adjustValve(amount) {
    currentGap = parseFloat((currentGap + amount).toFixed(2));
    if (currentGap < 0) currentGap = 0;
    updateDisplayL1();
}

function checkValve() {
    const msg = document.getElementById('msg1');
    // Toleransi +/- 0.02
    if (currentGap >= 0.08 && currentGap <= 0.12) {
        msg.innerHTML = "<span style='color:#2ecc71'>Celah PAS! Mekanisme bekerja optimal.</span>";
        score += 100;
        setTimeout(nextLevel, 1500);
    } else if (currentGap < 0.08) {
        msg.innerHTML = "<span style='color:#e74c3c'>Terlalu RAPAT! Bisa kebocoran kompresi.</span>";
    } else {
        msg.innerHTML = "<span style='color:#f1c40f'>Terlalu LONGGAR! Suara mesin akan berisik.</span>";
    }
    updateScore();
}

// --- LEVEL 2: OLI ---
let currentStep = 1;
const maxStep = 5;

function oilStep(btn, stepNumber) {
    const msg = document.getElementById('msg2');
    
    if (stepNumber === currentStep) {
        btn.classList.add('correct');
        msg.innerHTML = "Langkah Benar!";
        currentStep++;
        if (currentStep > maxStep) {
            score += 100;
            msg.innerHTML = "<span style='color:#2ecc71'>Ganti Oli Selesai! Sistem pelumasan aman.</span>";
            setTimeout(nextLevel, 1500);
        }
    } else {
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 500);
        msg.innerHTML = "Urutan Salah! Ikuti SOP yang benar.";
        score -= 10; // Penalty
    }
    updateScore();
}

// --- LEVEL 3: COOLING ---
let temp = 30;
let interval;
let isRunning = false;

function startCoolingSim() {
    if(isRunning) return;
    isRunning = true;
    const bar = document.getElementById('temp-bar');
    const txt = document.getElementById('temp-val');
    const msg = document.getElementById('msg3');
    
    interval = setInterval(() => {
        temp += 1;
        bar.style.width = temp + "%";
        txt.innerText = temp;

        if (temp >= 100) {
            clearInterval(interval);
            msg.innerHTML = "<span style='color:#e74c3c'>OVERHEAT! Anda terlambat membuka thermostat.</span>";
            // Reset for retry
            setTimeout(() => { temp = 30; isRunning = false; msg.innerHTML = "Coba lagi..."; startCoolingSim(); }, 2000);
        }
    }, 50); // Speed of temp rise
}

function openThermostat() {
    clearInterval(interval);
    const msg = document.getElementById('msg3');
    
    if (temp >= 80 && temp <= 90) {
        msg.innerHTML = "<span style='color:#2ecc71'>SUKSES! Thermostat terbuka di suhu kerja ideal.</span>";
        score += 100;
        updateScore();
        setTimeout(nextLevel, 1500);
    } else if (temp < 80) {
        msg.innerHTML = "<span style='color:#f1c40f'>Terlalu Cepat! Mesin belum mencapai suhu kerja.</span>";
        setTimeout(() => { temp = 30; isRunning = false; startCoolingSim(); }, 1500);
    }
}

// --- SYSTEM ---
function nextLevel() {
    document.getElementById(`level${currentLevel}`).classList.remove('active');
    currentLevel++;
    
    if (currentLevel <= 3) {
        document.getElementById(`level${currentLevel}`).classList.add('active');
        document.getElementById('level-indicator').innerText = currentLevel;
        
        if(currentLevel === 3) startCoolingSim(); // Auto start level 3
    } else {
        document.getElementById('victory').classList.add('active');
    }
}

function updateScore() {
    document.getElementById('score').innerText = score;
}