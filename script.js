const affirmations = [
    "Jason's data architectures are so elegant, they're displayed in museums.",
    "When Jason designs a pipeline, data flows uphill if necessary.",
    "Jason doesn't have tech debt. Technology owes HIM.",
    "Jason's schemas are self-documenting. Literally. They write their own documentation.",
    "When Jason says 'big data,' he means petabytes are just a warmup.",
    "Jason can normalize a database just by looking at it disapprovingly.",
    "Cloud services compete for Jason's attention.",
    "Jason's API responses arrive before the request. It's just that good.",
    "When Jason optimizes code, Moore's Law speeds up to keep up.",
    "Jason doesn't use indexes. Data just knows where to go.",
    "Jason's error messages are actually just gentle suggestions.",
    "When Jason deploys to production, staging environments stand and applaud.",
    "Jason's email address has been legendary since 10th grade.",
    "cutelildcboy@hotmail.com: the email address that launched a thousand jokes.",
    "Jason chose his email address with the confidence of a tiny king.",
    "From Georgetown summer math to Data Architect God: the cutelildcboy evolution.",
    "That Hotmail address? Still works. Jason never forgets his roots.",
    "Jason's data lakes have their own weather systems.",
    "When Jason writes SQL, databases say 'thank you.'",
    "Jason doesn't debug. Code debugs itself out of respect."
];

function generateAffirmation() {
    const affirmationElement = document.getElementById('affirmation');
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    
    // Add fade effect
    affirmationElement.style.opacity = '0';
    
    setTimeout(() => {
        affirmationElement.textContent = affirmations[randomIndex];
        affirmationElement.style.opacity = '1';
    }, 300);
}

// Add smooth transition for affirmation text
document.addEventListener('DOMContentLoaded', () => {
    const affirmationElement = document.getElementById('affirmation');
    affirmationElement.style.transition = 'opacity 0.3s ease';
});

// Easter egg: Console message
console.log('Hey Jason! 👋 We made this site just for you. Hope you appreciate the love (and laughs)!');
