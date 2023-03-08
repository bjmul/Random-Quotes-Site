let quotesArr = [
    "<q>Don't waste your time looking back. You're not going that way</q>",
    "<q>I think, therefore I am</q>",
    "<q>We suffer more often in imagination than in reality</q>",
    "<q>The more we value things outside our control, the less control we have.</q>",
    "<q>He with the most who is content with the least.</q>",
    "<q>The way to get started is to quit talking and begin doing.</q>",
    "<q>When you reach the end of your rope, tie a knot in it and hang on.</q>",
    "<q>Don't judge each day by the harvest you reap but by the seeds that you plant.</q>",
    "<q>Always remember that you are absolutely unique. Just like everyone else.</q>",
    "<q>Tell me and I forget. Teach me and I remember. Involve me and I learn.</q>",
    "<q>It is during our darkest moments that we must focus to see the light.</q>",
    "<q>You will face many defeats in life, but never let yourself be defeated.</q>",
    "<q>In the end, it's not the years in your life that count. It's the life in your years.</q>",
    "<q>The only impossible journey is the one you never begin.</q>",
    "<q>You only live once, but if you do it right, once is enough.</q>",
    "<q>Life is really simple, but we insist on making it complicated.</q>",
    "<q>Success is not final; failure is not fatal: It is the courage to continue that counts.</q>",
    "<q>You miss 100% of the shots you don't take.</q>",
    "<q>Believe you can and you're halfway there.</q>",
    "<q>The only person you are destined to become is the person you decide to be.</q>",
    "<q>The question isn't who is going to let me; it's who is going to stop me.</q>",
    "<q>It does not matter how slowly you go as long as you do not stop.</q>",
    "<q>I didn't fail the test. I just found 100 ways to do it wrong.</q>",
    "<q>I would never die for my beliefs because I might be wrong</q>",
    "<q>The only thing I know is that I know nothing</q>",
    "<q>Wise men speak because they have something to say; Fools because they have to say something.</q>",
    "<q>No one is more hated than he who speaks the truth.</q>",
    "<q>Knowing yourself is the beginning of all wisdom.</q>",
    "<q>It is the mark of an educated mind to be able to entertain a thought without accepting it.</q>",
    "<q>Happiness depends upon ourselves.</q>",
    "<q>Patience is bitter, but its fruit is sweet.</q>",
    "<q>The best argument against democracy is a five-minute conversation with the average voter.</q>",
    "<q>Everyone sees what you appear to be, few experience what you really are.</q>",
];
let i = 0;
let randomString = Math.floor(Math.random()*quotesArr.length);

function changeQuote(){
    document.getElementById('quote').innerHTML = quotesArr[i];
    if (i == (quotesArr.length - 1)) {
        i=0;
    } else {
        i++;
    }
};