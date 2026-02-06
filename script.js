const affirmations = [
    "Jason believes in himself... most of the time.",
    "Today, Jason will find a Metro train that's actually on time (unlikely, but let's be optimistic).",
    "Jason's opinions about local politics are definitely more informed than yours.",
    "Jason knows all the best happy hour spots in DC (all 47 of them).",
    "Jason's weekend brunch game is unmatched.",
    "Jason can parallel park in Georgetown... eventually.",
    "Jason's knowledge of DC neighborhoods is encyclopedic (and he'll tell you about it).",
    "Jason survived another DC summer without melting.",
    "Jason's ability to complain about traffic is truly inspiring.",
    "Jason thinks the cherry blossoms are overrated but goes every year anyway.",
    "Jason knows the best shortcuts to avoid tourists on the National Mall.",
    "Jason's collection of political podcasts is probably excessive.",
    "Jason has strong feelings about the best mumbo sauce.",
    "Jason can navigate Dupont Circle without getting confused (most days).",
    "Jason believes this is his year to finally visit all the Smithsonians.",
    "Jason's Metro SmarTrip card has seen things you wouldn't believe.",
    "Jason is DC's most adorable resident, and he knows it.",
    "Jason's brunch reservation game is stronger than most people's career goals.",
    "Jason could write a dissertation on which rooftop bars have the best views.",
    "Jason believes the Nationals will win it all this year (again).",
    "Jason's email address has been legendary since 10th grade.",
    "cutelildcboy@hotmail.com: the email address that launched a thousand jokes.",
    "Jason chose his email address with the confidence of a tiny king.",
    "From Georgetown summer math to Data God: the cutelildcboy evolution.",
    "That Hotmail address? Still works. Jason never forgets his roots."
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
