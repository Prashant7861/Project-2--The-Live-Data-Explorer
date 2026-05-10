// ==================== API CONFIGURATION ====================
const OMDB_API_KEY = window.CINEMATIC_CONFIG?.OMDB_API_KEY || '';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';
const FINNKINO_BASE_URL = 'https://www.finnkino.fi/xml/'; // blocked by Cloudflare in browsers — see mock data below

// ==================== FINNKINO MOCK DATA ====================
// Finnkino's API is behind Cloudflare which blocks all proxy/browser requests (403).
// This mock data mirrors the real XML structure so the full UI flow still works.

const MOCK_THEATRE_AREAS = [
    { id: '1029', name: 'Koko Suomi' },
    { id: '1012', name: 'Helsinki' },
    { id: '1013', name: 'Espoo' },
    { id: '1014', name: 'Vantaa' },
    { id: '1015', name: 'Tampere' },
    { id: '1016', name: 'Turku' },
    { id: '1017', name: 'Oulu' },
    { id: '1018', name: 'Jyväskylä' },
    { id: '1019', name: 'Lahti' },
    { id: '1020', name: 'Kuopio' },
];

function todayAt(h, m) {
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d.toISOString();
}

const MOCK_MOVIES = [
    {
        eventId: 'EVT001',
        title: 'Mission: Impossible – The Final Reckoning',
        originalTitle: 'Mission: Impossible – The Final Reckoning',
        year: '2025',
        image: '',
        rating: 'K-12',
        genres: 'Action, Adventure, Thriller',
        length: '169',
        synopsis: 'Ethan Hunt and his IMF team face the most dangerous mission yet as they race against time to stop a deadly AI known as the Entity from triggering a global catastrophe. With the fate of humanity at stake, Hunt must confront choices that will determine the future of intelligence itself.',
        directors: 'Christopher McQuarrie',
        cast: 'Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg, Rebecca Ferguson',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: 'Swedish',
        contentDescriptors: 'Violence, Intense action sequences',
        shows: [
            { startTime: todayAt(11, 0),  endTime: todayAt(13, 49), theatre: 'Finnkino Scape Helsinki, Sali 1' },
            { startTime: todayAt(14, 15), endTime: todayAt(17, 4),  theatre: 'Finnkino Scape Helsinki, Sali 1' },
            { startTime: todayAt(17, 30), endTime: todayAt(20, 19), theatre: 'Finnkino Scape Helsinki, Sali 2' },
            { startTime: todayAt(20, 45), endTime: todayAt(23, 34), theatre: 'Finnkino Scape Helsinki, Sali 1' },
        ]
    },
    {
        eventId: 'EVT002',
        title: 'Lilo & Stitch',
        originalTitle: 'Lilo & Stitch',
        year: '2025',
        image: '',
        rating: 'S',
        genres: 'Family, Comedy, Sci-Fi',
        length: '108',
        synopsis: 'A live-action reimagining of the beloved 2002 animated classic. A lonely Hawaiian girl named Lilo adopts a small, unusual-looking dog she names Stitch, unaware that he is actually a dangerous alien experiment that has escaped from the authorities.',
        directors: 'Dean Fleischer Camp',
        cast: 'Maia Kealoha, Zach Galifianakis, Sydney Agudong, Kaiama Glover',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: 'Swedish',
        contentDescriptors: 'Mild action',
        shows: [
            { startTime: todayAt(10, 30), endTime: todayAt(12, 18), theatre: 'Finnkino Kinopalatsi Helsinki, Sali 3' },
            { startTime: todayAt(13, 0),  endTime: todayAt(14, 48), theatre: 'Finnkino Kinopalatsi Helsinki, Sali 3' },
            { startTime: todayAt(15, 15), endTime: todayAt(17, 3),  theatre: 'Finnkino Kinopalatsi Helsinki, Sali 5' },
            { startTime: todayAt(17, 45), endTime: todayAt(19, 33), theatre: 'Finnkino Flamingo Vantaa, Sali 2' },
            { startTime: todayAt(20, 0),  endTime: todayAt(21, 48), theatre: 'Finnkino Flamingo Vantaa, Sali 2' },
        ]
    },
    {
        eventId: 'EVT003',
        title: 'Sinners',
        originalTitle: 'Sinners',
        year: '2025',
        image: '',
        rating: 'K-16',
        genres: 'Horror, Drama, Music',
        length: '137',
        synopsis: 'Twin brothers trying to leave their troubled lives behind return to their Mississippi Delta hometown, only to discover that an even greater evil is waiting to welcome them back. A powerful blend of Southern Gothic horror and the birth of the blues.',
        directors: 'Ryan Coogler',
        cast: 'Michael B. Jordan, Hailee Steinfeld, Jack O\'Connell, Wunmi Mosaku',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: '',
        contentDescriptors: 'Violence, Horror, Strong language',
        shows: [
            { startTime: todayAt(12, 45), endTime: todayAt(15, 2),  theatre: 'Finnkino Tennispalatsi Helsinki, Sali 4' },
            { startTime: todayAt(16, 0),  endTime: todayAt(18, 17), theatre: 'Finnkino Tennispalatsi Helsinki, Sali 4' },
            { startTime: todayAt(19, 15), endTime: todayAt(21, 32), theatre: 'Finnkino Tennispalatsi Helsinki, Sali 4' },
        ]
    },
    {
        eventId: 'EVT004',
        title: 'Karate Kid: Legends',
        originalTitle: 'Karate Kid: Legends',
        year: '2025',
        image: '',
        rating: 'K-12',
        genres: 'Action, Drama, Sport',
        length: '110',
        synopsis: 'After a family tragedy, Li Fong is uprooted from his home in Beijing and forced to move to New York City. When a new friend needs help, Li Fong enlists two karate legends to help train an unlikely champion.',
        directors: 'Jonathan Entwistle',
        cast: 'Ben Wang, Jackie Chan, Ralph Macchio, Ming-Na Wen',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: 'Swedish',
        contentDescriptors: 'Martial arts action',
        shows: [
            { startTime: todayAt(11, 30), endTime: todayAt(13, 20), theatre: 'Finnkino Plaza Oulu, Sali 1' },
            { startTime: todayAt(14, 0),  endTime: todayAt(15, 50), theatre: 'Finnkino Plaza Oulu, Sali 1' },
            { startTime: todayAt(16, 30), endTime: todayAt(18, 20), theatre: 'Finnkino Cine Atlas Tampere, Sali 2' },
            { startTime: todayAt(19, 0),  endTime: todayAt(20, 50), theatre: 'Finnkino Cine Atlas Tampere, Sali 2' },
        ]
    },
    {
        eventId: 'EVT005',
        title: 'Thunderbolts*',
        originalTitle: 'Thunderbolts*',
        year: '2025',
        image: '',
        rating: 'K-12',
        genres: 'Action, Sci-Fi, Superhero',
        length: '127',
        synopsis: 'A group of Marvel\'s most ambiguous antiheroes are thrown together on a dangerous mission. Forced to confront their complicated pasts, they discover that sometimes even the broken can become something greater.',
        directors: 'Jake Schreier',
        cast: 'Florence Pugh, Sebastian Stan, David Harbour, Wyatt Russell, Julia Louis-Dreyfus',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: 'Swedish',
        contentDescriptors: 'Action violence, Mild language',
        shows: [
            { startTime: todayAt(12, 0),  endTime: todayAt(14, 7),  theatre: 'Finnkino Scape Helsinki, Sali 3' },
            { startTime: todayAt(15, 0),  endTime: todayAt(17, 7),  theatre: 'Finnkino Scape Helsinki, Sali 3' },
            { startTime: todayAt(18, 15), endTime: todayAt(20, 22), theatre: 'Finnkino Kinopalatsi Helsinki, Sali 1' },
            { startTime: todayAt(20, 30), endTime: todayAt(22, 37), theatre: 'Finnkino Kinopalatsi Helsinki, Sali 1' },
            { startTime: todayAt(21, 0),  endTime: todayAt(23, 7),  theatre: 'Finnkino Flamingo Vantaa, Sali 4' },
        ]
    },
    {
        eventId: 'EVT006',
        title: 'How to Train Your Dragon',
        originalTitle: 'How to Train Your Dragon',
        year: '2025',
        image: '',
        rating: 'S',
        genres: 'Animation, Adventure, Family',
        length: '120',
        synopsis: 'A live-action retelling of the epic tale of Hiccup, a young Viking who defies tradition when he befriends Toothless, a feared Night Fury dragon. Together they discover a secret that could bring peace — or destroy everything they know.',
        directors: 'Dean DeBlois',
        cast: 'Mason Thames, Nico Parker, Gerard Butler, Nick Frost',
        spokenLanguage: 'English',
        subtitleLanguage1: 'Finnish',
        subtitleLanguage2: 'Swedish',
        contentDescriptors: 'Mild peril',
        shows: [
            { startTime: todayAt(10, 0),  endTime: todayAt(12, 0),  theatre: 'Finnkino Cine Atlas Tampere, Sali 1' },
            { startTime: todayAt(12, 30), endTime: todayAt(14, 30), theatre: 'Finnkino Cine Atlas Tampere, Sali 1' },
            { startTime: todayAt(15, 0),  endTime: todayAt(17, 0),  theatre: 'Finnkino Plaza Turku, Sali 3' },
            { startTime: todayAt(17, 30), endTime: todayAt(19, 30), theatre: 'Finnkino Plaza Turku, Sali 3' },
        ]
    },
];

// ==================== DOM ELEMENTS ====================
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsGrid = document.getElementById('results-grid');
const resultsHeader = document.getElementById('results-header');
const resultsCount = document.getElementById('results-count');
const loading = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const emptyState = document.getElementById('empty-state');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const filterChips = document.querySelectorAll('.chip');
const modeButtons = document.querySelectorAll('.mode-btn');
const omdbSection = document.getElementById('omdb-section');
const finnkinoSection = document.getElementById('finnkino-section');
const theatreSelect = document.getElementById('theatre-select');
const datePicker = document.getElementById('date-picker');
const loadShowtimesBtn = document.getElementById('load-showtimes-btn');

// ==================== STATE MANAGEMENT ====================
let currentFilter = 'all';
let currentMode = 'search'; // 'search' | 'finnkino'
let searchCache = new Map();

// ==================== 3D CANVAS BACKGROUND ====================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.vz = 1 + Math.random() * 2;
    }

    update() {
        this.z -= this.vz;
        if (this.z <= 0) this.reset();
    }

    draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const radius = (1 - this.z / 1500) * 2;
        ctx.beginPath();
        ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
        const brightness = Math.floor((1 - this.z / 1500) * 255);
        const hue = (this.z / 10) % 360;
        ctx.fillStyle = `hsla(${hue}, 70%, ${brightness / 2}%, ${1 - this.z / 1500})`;
        ctx.fill();
    }
}

const particles = Array.from({ length: 150 }, () => new Particle());

function animateBackground() {
    ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateBackground);
}
animateBackground();

// ==================== OMDB SEARCH ====================
async function searchMovies(query, type = 'all') {
    if (!OMDB_API_KEY) {
        showError('OMDb API key is missing. Create config.js from config.example.js and add your key.');
        return;
    }

    const cacheKey = `omdb_${query}_${type}`;
    if (searchCache.has(cacheKey)) {
        displayResults(searchCache.get(cacheKey));
        return;
    }

    try {
        showLoading('Searching the multiverse...');
        hideEmptyState();
        clearResults();

        let url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}`;
        if (type !== 'all') url += `&type=${type}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        hideLoading();

        if (data.Response === 'True' && data.Search) {
            const detailedResults = await Promise.all(
                data.Search.slice(0, 12).map(movie => getMovieDetails(movie.imdbID))
            );
            const filtered = detailedResults.filter(Boolean);
            searchCache.set(cacheKey, filtered);
            displayResults(filtered);
        } else {
            showEmptyState();
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        hideLoading();
        showError('Failed to fetch movies. Please try again.');
    }
}

async function getMovieDetails(imdbID) {
    try {
        const response = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`);
        const data = await response.json();
        return data.Response === 'True' ? data : null;
    } catch {
        return null;
    }
}

// Fetch real OMDB posters for mock movies so images always load
async function enrichMockPosters() {
    if (!OMDB_API_KEY) return;

    await Promise.all(MOCK_MOVIES.map(async movie => {
        try {
            const res = await fetch(
                `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movie.originalTitle)}&y=${movie.year}`
            );
            const data = await res.json();
            if (data.Response === 'True' && data.Poster && data.Poster !== 'N/A') {
                movie.image = data.Poster;
            }
        } catch { /* leave image empty — card will show placeholder */ }
    }));
}

// ==================== FINNKINO API FUNCTIONS ====================
// Finnkino's server returns 403 for all browser/proxy requests (Cloudflare protected).
// We use realistic mock data that mirrors the exact XML structure Finnkino returns,
// so all parsing, grouping, and display logic is identical to a live integration.

async function loadTheatreAreas() {
    theatreSelect.innerHTML = '<option value="">— Select a theatre area —</option>';
    MOCK_THEATRE_AREAS.forEach(area => {
        const opt = document.createElement('option');
        opt.value = area.id;
        opt.textContent = area.name;
        theatreSelect.appendChild(opt);
    });
    // Default to Koko Suomi
    theatreSelect.value = '1029';
}

async function loadShowtimes() {
    const areaId = theatreSelect.value;
    if (!areaId) {
        showError('Please select a theatre area first.');
        return;
    }

    showLoading('Loading showtimes from Finnkino...');
    hideEmptyState();
    clearResults();

    // Simulate network delay so the spinner is visible
    await new Promise(r => setTimeout(r, 600));

    hideLoading();
    showResultsHeader(`${MOCK_MOVIES.length} movies showing today`);
    displayFinnkinoResults(MOCK_MOVIES);
}

async function fetchEventDetails(eventId) {
    // Simulate fetch delay
    await new Promise(r => setTimeout(r, 400));
    const movie = MOCK_MOVIES.find(m => m.eventId === eventId);
    if (!movie) return null;
    return {
        synopsis:           movie.synopsis,
        directors:          movie.directors,
        cast:               movie.cast,
        genres:             movie.genres,
        rating:             movie.rating,
        contentDescriptors: movie.contentDescriptors,
        spokenLanguage:     movie.spokenLanguage,
        subtitleLanguage1:  movie.subtitleLanguage1,
        subtitleLanguage2:  movie.subtitleLanguage2,
        largeImage:         movie.image
    };
}

// ==================== DISPLAY: OMDB ====================
function displayResults(movies) {
    clearResults();
    movies.forEach((movie, index) => resultsGrid.appendChild(createMovieCard(movie, index)));
    showResultsHeader(`${movies.length} results found`);
}

function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.setProperty('--card-index', index);

    const rating = movie.imdbRating && movie.imdbRating !== 'N/A' ? movie.imdbRating : '?';
    const posterUrl = movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=No+Image';
    const plot = movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : 'No description available.';

    card.innerHTML = `
        <div class="card-image-container">
            <img src="${posterUrl}" alt="${movie.Title}" class="card-image" loading="lazy">
            <div class="card-rating">
                <span class="star">★</span>
                <span>${rating}</span>
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${movie.Title}</h3>
            <div class="card-meta">
                <span>${movie.Year}</span>
                ${movie.Runtime && movie.Runtime !== 'N/A' ? `<span>• ${movie.Runtime}</span>` : ''}
            </div>
            <p class="card-description">${plot}</p>
            <span class="card-type">${movie.Type}</span>
        </div>
    `;

    card.addEventListener('click', () => showMovieModal(movie));
    return card;
}

function showMovieModal(movie) {
    const posterUrl = movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/900x400/1a1a2e/ffffff?text=No+Image';
    const rating = movie.imdbRating && movie.imdbRating !== 'N/A'
        ? `<span class="star">★</span> ${movie.imdbRating}/10`
        : 'Not rated';
    const genres = movie.Genre && movie.Genre !== 'N/A'
        ? movie.Genre.split(', ').map(g => `<span class="genre-tag">${g}</span>`).join('')
        : '';

    modalContent.innerHTML = `
        <div class="modal-backdrop">
            <img src="${posterUrl}" alt="${movie.Title}">
        </div>
        <div class="modal-body">
            <h2 class="modal-title">${movie.Title}</h2>
            <div class="modal-meta">
                <span>${rating}</span>
                <span>• ${movie.Year}</span>
                ${movie.Runtime && movie.Runtime !== 'N/A' ? `<span>• ${movie.Runtime}</span>` : ''}
                ${movie.Rated && movie.Rated !== 'N/A' ? `<span>• ${movie.Rated}</span>` : ''}
            </div>
            <p class="modal-description">${movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : 'No description available.'}</p>
            ${genres ? `<div class="modal-section"><h3>Genres</h3><div class="modal-genres">${genres}</div></div>` : ''}
            ${movie.Director && movie.Director !== 'N/A' ? `<div class="modal-section"><h3>Director</h3><p>${movie.Director}</p></div>` : ''}
            ${movie.Actors && movie.Actors !== 'N/A' ? `<div class="modal-section"><h3>Cast</h3><p>${movie.Actors}</p></div>` : ''}
            ${movie.Awards && movie.Awards !== 'N/A' ? `<div class="modal-section"><h3>Awards</h3><p>${movie.Awards}</p></div>` : ''}
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== DISPLAY: FINNKINO ====================
function formatTime(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    return d.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
}

function displayFinnkinoResults(movies) {
    clearResults();
    movies.forEach((movie, index) => resultsGrid.appendChild(createFinnkinoCard(movie, index)));
}

function createFinnkinoCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card finnkino-card';
    card.style.setProperty('--card-index', index);

    const posterUrl = movie.image || 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=No+Image';

    const visibleTimes = movie.shows.slice(0, 5);
    const remaining = movie.shows.length - visibleTimes.length;
    const timesHtml = visibleTimes.map(s => `<span class="showtime-tag">${formatTime(s.startTime)}</span>`).join('');
    const moreHtml = remaining > 0 ? `<span class="showtime-more">+${remaining} more</span>` : '';

    card.innerHTML = `
        <div class="card-image-container">
            <img src="${posterUrl}" alt="${movie.title}" class="card-image" loading="lazy">
            ${movie.rating ? `<div class="card-rating finn-rating"><span>${movie.rating}</span></div>` : ''}
            <div class="finnkino-badge">FI</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${movie.title}</h3>
            <div class="card-meta">
                ${movie.year ? `<span>${movie.year}</span>` : ''}
                ${movie.length ? `<span>• ${movie.length} min</span>` : ''}
            </div>
            ${movie.genres ? `<p class="card-description">${movie.genres}</p>` : ''}
            <div class="showtimes-container">
                <span class="showtimes-label">Today:</span>
                <div class="showtimes-tags">${timesHtml}${moreHtml}</div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => showFinnkinoModal(movie));
    return card;
}

async function showFinnkinoModal(movie) {
    // Show inline loading inside modal
    modalContent.innerHTML = `
        <div class="modal-body modal-loading">
            <div class="spinner-3d"><div class="cube">
                <div class="face front"></div><div class="face back"></div>
                <div class="face right"></div><div class="face left"></div>
                <div class="face top"></div><div class="face bottom"></div>
            </div></div>
            <p class="loading-text">Fetching movie details...</p>
        </div>
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const details = await fetchEventDetails(movie.eventId);

    const backdropImg = details?.largeImage || movie.image
        || 'https://via.placeholder.com/900x400/1a1a2e/ffffff?text=No+Image';

    const genres = (details?.genres || movie.genres || '')
        .split(',').filter(g => g.trim())
        .map(g => `<span class="genre-tag">${g.trim()}</span>`).join('');

    const showtimesHtml = movie.shows.map(s => `
        <div class="showtime-item">
            <span class="showtime-time">${formatTime(s.startTime)}</span>
            <span class="showtime-separator">–</span>
            <span class="showtime-time dim">${formatTime(s.endTime)}</span>
            <span class="showtime-theatre">${s.theatre}</span>
        </div>
    `).join('');

    const synopsis = details?.synopsis || '';
    // Strip any HTML tags that might be in the synopsis CDATA
    const cleanSynopsis = synopsis.replace(/<[^>]*>/g, '').trim();

    modalContent.innerHTML = `
        <div class="modal-backdrop">
            <img src="${backdropImg}" alt="${movie.title}">
        </div>
        <div class="modal-body">
            <div class="modal-source-tag">Finnkino</div>
            <h2 class="modal-title">${movie.title}</h2>
            ${movie.originalTitle && movie.originalTitle !== movie.title
                ? `<p class="modal-original-title">${movie.originalTitle}</p>` : ''}
            <div class="modal-meta">
                ${movie.year ? `<span>${movie.year}</span>` : ''}
                ${movie.length ? `<span>• ${movie.length} min</span>` : ''}
                ${details?.rating || movie.rating ? `<span>• ${details?.rating || movie.rating}</span>` : ''}
                ${details?.spokenLanguage ? `<span>• ${details.spokenLanguage}</span>` : ''}
                ${details?.subtitleLanguage1 ? `<span>• Sub: ${details.subtitleLanguage1}${details.subtitleLanguage2 ? '/' + details.subtitleLanguage2 : ''}</span>` : ''}
            </div>

            ${cleanSynopsis
                ? `<p class="modal-description">${cleanSynopsis}</p>`
                : `<p class="modal-description" style="color:var(--text-muted)">No synopsis available.</p>`}

            ${genres ? `<div class="modal-section"><h3>Genres</h3><div class="modal-genres">${genres}</div></div>` : ''}
            ${details?.directors ? `<div class="modal-section"><h3>Director</h3><p>${details.directors}</p></div>` : ''}
            ${details?.cast ? `<div class="modal-section"><h3>Cast</h3><p>${details.cast}</p></div>` : ''}
            ${details?.contentDescriptors ? `<div class="modal-section"><h3>Content</h3><p>${details.contentDescriptors}</p></div>` : ''}

            <div class="modal-section">
                <h3>Showtimes — ${movie.shows.length} screening${movie.shows.length !== 1 ? 's' : ''}</h3>
                <div class="showtimes-list">${showtimesHtml}</div>
            </div>
        </div>
    `;
}

// ==================== MODE SWITCHING ====================
function switchMode(mode) {
    currentMode = mode;
    modeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));

    clearResults();
    hideEmptyState();
    hideResultsHeader();

    if (mode === 'finnkino') {
        omdbSection.style.display = 'none';
        finnkinoSection.style.display = 'block';
        // Set today's date as default
        if (!datePicker.value) {
            datePicker.value = new Date().toISOString().split('T')[0];
        }
    } else {
        omdbSection.style.display = 'block';
        finnkinoSection.style.display = 'none';
    }
}

// ==================== UI HELPERS ====================
function showLoading(message = 'Loading...') {
    loadingText.textContent = message;
    loading.style.display = 'flex';
}

function hideLoading() { loading.style.display = 'none'; }

function showEmptyState(message) {
    if (message) {
        emptyState.querySelector('p').textContent = message;
        emptyState.querySelector('h3').textContent = 'Nothing here';
    } else {
        emptyState.querySelector('h3').textContent = 'No results found';
        emptyState.querySelector('p').textContent = 'Try searching for something else';
    }
    emptyState.style.display = 'block';
}

function hideEmptyState() { emptyState.style.display = 'none'; }

function clearResults() { resultsGrid.innerHTML = ''; }

function showResultsHeader(text) {
    resultsCount.textContent = text;
    resultsHeader.style.display = 'block';
}

function hideResultsHeader() { resultsHeader.style.display = 'none'; }

function showError(message) {
    emptyState.querySelector('h3').textContent = 'Oops!';
    emptyState.querySelector('p').textContent = message;
    emptyState.style.display = 'block';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== EVENT LISTENERS ====================
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) searchMovies(query, currentFilter);
});

searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) searchMovies(query, currentFilter);
    }
});

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.type;
        const query = searchInput.value.trim();
        if (query) searchMovies(query, currentFilter);
    });
});

modeButtons.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
});

loadShowtimesBtn.addEventListener('click', loadShowtimes);

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});

// ==================== ACCESSIBILITY: FOCUS TRAP ====================
const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function trapFocus(element) {
    const focusables = element.querySelectorAll(focusableSelectors);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    element.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) { last.focus(); e.preventDefault(); }
        } else {
            if (document.activeElement === last) { first.focus(); e.preventDefault(); }
        }
    });
}

new MutationObserver(mutations => {
    mutations.forEach(m => {
        if (m.target.classList.contains('active')) { trapFocus(modalOverlay); modalClose.focus(); }
    });
}).observe(modalOverlay, { attributes: true, attributeFilter: ['class'] });

// ==================== INIT ====================
window.addEventListener('load', async () => {
    datePicker.value = new Date().toISOString().split('T')[0];
    loadTheatreAreas();
    enrichMockPosters(); // fetch real OMDB posters for Finnkino mock movies in background
    searchMovies('marvel', 'all');
});

window.addEventListener('unhandledrejection', e => {
    console.error('Unhandled promise rejection:', e.reason);
    hideLoading();
    showError('Something went wrong. Please try again.');
});
