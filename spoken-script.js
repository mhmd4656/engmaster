// قاعدة بيانات النطق
const pronunciationData = [
    {
        word: "running",
        phonetic: "/ˈrʌn.ɪŋ/",
        stressPattern: "● ○",
        syllables: "run-ning"
    },
    {
        word: "beautiful",
        phonetic: "/ˈbjuː.tɪ.fəl/",
        stressPattern: "● ○ ○",
        syllables: "beau-ti-ful"
    },
    {
        word: "international",
        phonetic: "/ˌɪn.təˈnæʃ.ən.əl/",
        stressPattern: "○ ● ○ ○",
        syllables: "in-ter-na-tion-al"
    }
];

// عناصر DOM
const searchInput = document.getElementById('spokenSearch');
const searchButton = document.getElementById('spokenSearchBtn');
const resultsDiv = document.getElementById('spokenResults');

// دالة البحث
function searchPronunciation() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        showError("Please enter a word to search");
        return;
    }

    const matchedWords = pronunciationData.filter(item => 
        item.word.toLowerCase().includes(searchTerm)
    );

    if (matchedWords.length > 0) {
        displayResults(matchedWords);
    } else {
        showError(`No pronunciation data found for "${searchTerm}"`);
    }
}

// عرض النتائج
function displayResults(words) {
    let html = '';
    
    words.forEach(word => {
        html += `
            <div class="pronunciation-card">
                <h2 class="word-title">${word.word}</h2>
                
                <div class="phonetic-section">
                    <span class="phonetic-label">Phonetic:</span>
                    <span class="phonetic-value">${word.phonetic}</span>
                </div>
                
                <div class="stress-section">
                    <div class="stress-label">Stress Pattern:</div>
                    <div class="stress-pattern">${word.stressPattern}</div>
                    <div class="syllables">Syllables: ${word.syllables}</div>
                </div>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
}

// عرض رسالة الخطأ
function showError(message) {
    resultsDiv.innerHTML = `<div class="error">${message}</div>`;
}

// مستمعو الأحداث
searchButton.addEventListener('click', searchPronunciation);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchPronunciation();
});

// التهيئة الأولية
resultsDiv.innerHTML = `
    <div class="placeholder">
        <p>Search for English words to see their pronunciation</p>
        <p>Examples: running, beautiful, international</p>
    </div>
`;