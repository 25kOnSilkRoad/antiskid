document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.key === 's' || e.key === 'S')) || 
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || 
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
        e.key === 'F12') {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

const sparklesEnabled = true;
const sparkles = 250;
const sparkleLifetime = 30;
const sparkleDistance = 30;
const stars = [];
const tinies = [];
const docHeight = document.documentElement.scrollHeight;
const docWidth = document.documentElement.scrollWidth;

function detectDevTools() {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
        document.body.innerHTML = '';
        window.location.replace('about:blank');
    }
}

setInterval(() => {
    console.clear();
    console.log('%c', 'font-size:0;');
}, 100);

setInterval(() => {
    debugger;
}, 100);

if (window.location.href.includes('view-source:')) {
    window.location.href = 'about:blank';
}

document.addEventListener('keydown', function(e) {
    if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        (e.metaKey && (e.key === 'u' || e.key === 'U')) ||
        (e.altKey && e.key === 'v') ||
        (e.metaKey && e.altKey && e.key === 'u')
    ) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
});

window.onload = () => {
    initSparkles();
    if (sparklesEnabled) {
        animateSparkles();
    }

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && ['s', 'S', 'u', 'U', 'p', 'P'].includes(e.key) || e.key === 'F12') {
            e.preventDefault();
        }
    });
    document.addEventListener('selectstart', e => e.preventDefault());

    window.addEventListener('resize', detectDevTools);
    setInterval(detectDevTools, 1000);

    document.addEventListener('keydown', e => {
        if (
            e.ctrlKey && ['s', 'S', 'u', 'U', 'p', 'P', 'i', 'I'].includes(e.key) || 
            e.key === 'F12' ||
            (e.shiftKey && e.ctrlKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(e.key))
        ) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('mousedown', e => {
        if(e.button === 2) e.preventDefault();
    });

    window.console.log = () => {};
    window.console.info = () => {};
    window.console.warn = () => {};
    window.console.error = () => {};

    setInterval(() => {
        if (window.location.href.includes('view-source:')) {
            window.location.href = 'about:blank';
        }
    }, 1000);
};

if (window.self !== window.top) {
    window.top.location.href = window.self.location.href;
}
