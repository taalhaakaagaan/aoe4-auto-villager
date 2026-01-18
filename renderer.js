const { ipcRenderer } = require('electron');
const { exec } = require('child_process');
const strategies = require('./strategies.js');

// Global State
let stopwatchInterval = null;
let seconds = 0;
let isRunning = false;
let activeCiv = null;
let activeStrategy = null;

// UI Elements (populated on load)
let closeBtn, civSelection, boSelection, gamePanel;
let civGrid, boList, selectedCivTitle, strategyName;
let instructionText, resFood, resWood, resGold, timerDisplay, startTimerBtn;

// --- Macro Logic (Persists for all strategies) ---
function runMacro() {
    const psCommand = "$w=New-Object -ComObject wscript.shell; $w.SendKeys('^h'); Start-Sleep -m 100; $w.SendKeys('q')";
    exec(`powershell -command "${psCommand}"`, (err, stdout, stderr) => {
        if (err) console.error("Macro failed:", err);
    });
}

function checkMacro(t) {
    // Every 20s starting at 9s: 9, 29, 49...
    if (t >= 9 && (t - 9) % 20 === 0) {
        if (startTimerBtn) {
            startTimerBtn.style.background = "#FFC107";
            setTimeout(() => startTimerBtn.style.background = "#4CAF50", 500);
        }
        runMacro();
        console.log(`Macro Triggered at ${t}s`);
    }
}

// --- Generic Strategy Logic ---
function updateGameState(t) {
    if (!activeStrategy) return;

    // Find the latest step that has passed
    let currentStep = activeStrategy.steps[0];
    for (let step of activeStrategy.steps) {
        if (t >= step.t) {
            currentStep = step;
        } else {
            break;
        }
    }

    if (instructionText) instructionText.innerText = currentStep.msg;
    if (resFood) resFood.innerText = currentStep.f;
    if (resWood) resWood.innerText = currentStep.w;
    if (resGold) resGold.innerText = currentStep.g;
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}.${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
        startTimerBtn.innerText = "START";
        return;
    }

    // Reset
    clearInterval(stopwatchInterval);
    seconds = 0;
    isRunning = true;
    startTimerBtn.innerText = "STOP";
    updateGameState(0);

    stopwatchInterval = setInterval(() => {
        seconds++;
        timerDisplay.innerText = formatTime(seconds);

        updateGameState(seconds);
        // Macro always runs regardless of civ/strategy as requested
        checkMacro(seconds);

    }, 1000);
}

// --- Navigation ---
function showCivSelection() {
    civSelection.classList.remove('hidden');
    boSelection.classList.add('hidden');
    gamePanel.classList.add('hidden');
    stopStopwatch();
}

function showBOSelection(civKey) {
    activeCiv = strategies[civKey];
    selectedCivTitle.innerText = activeCiv.name;

    // Populate List
    boList.innerHTML = '';
    activeCiv.builds.forEach((build, index) => {
        const btn = document.createElement('div');
        btn.className = 'bo-btn';
        btn.innerText = build.name;
        btn.onclick = () => showGamePanel(index);
        boList.appendChild(btn);
    });

    civSelection.classList.add('hidden');
    boSelection.classList.remove('hidden');
    gamePanel.classList.add('hidden');
}

function showGamePanel(buildIndex) {
    activeStrategy = activeCiv.builds[buildIndex];
    strategyName.innerText = `${activeCiv.name} - ${activeStrategy.name}`;

    // Reset state
    seconds = 0;
    timerDisplay.innerText = "00:00";
    startTimerBtn.innerText = "START";
    updateGameState(0);

    boSelection.classList.add('hidden');
    gamePanel.classList.remove('hidden');
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
    seconds = 0;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    // Grab Elements
    closeBtn = document.getElementById('closeBtn');
    civSelection = document.getElementById('civ-selection');
    boSelection = document.getElementById('bo-selection');
    gamePanel = document.getElementById('game-panel');
    civGrid = document.getElementById('civ-grid');
    boList = document.getElementById('bo-list');
    selectedCivTitle = document.getElementById('selected-civ-title');
    strategyName = document.getElementById('strategy-name');
    instructionText = document.getElementById('instruction-text');
    resFood = document.getElementById('res-food');
    resWood = document.getElementById('res-wood');
    resGold = document.getElementById('res-gold');
    timerDisplay = document.getElementById('timer');
    startTimerBtn = document.getElementById('startTimerBtn');

    // Populate Civ Grid
    Object.keys(strategies).forEach(key => {
        const civ = strategies[key];
        const btn = document.createElement('div');
        btn.className = 'civ-btn';
        btn.innerText = civ.name;
        btn.onclick = () => showBOSelection(key);
        civGrid.appendChild(btn);
    });

    // Event Listeners
    closeBtn.onclick = () => ipcRenderer.send('close-window');

    document.getElementById('backToCivBtn').onclick = showCivSelection;
    document.getElementById('backToBOBtn').onclick = () => {
        stopStopwatch();
        boSelection.classList.remove('hidden');
        gamePanel.classList.add('hidden');
    };

    startTimerBtn.onclick = startTimer;

    // Resize
    try {
        ipcRenderer.send('resize-window', { width: 440, height: 340 });
    } catch (e) { }
});
