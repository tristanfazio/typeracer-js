import { Quote } from './types';
import { CharElement } from '../state/gameState/gameStateReducer';

const quotes = new Map<string, Quote>();

quotes.set('4510173a-2a20-4920-936b-291c4bef51e0', {
    id: '4510173a-2a20-4920-936b-291c4bef51e0',
    content:
        "Now, as a nation, we don't promise equal outcomes, but we were founded on the idea everybody should have an equal opportunity to succeed. No matter who you are, what you look like, where you come from, you can make it. That's an essential promise of America. Where you start should not determine where you end up.",
    author: 'Barack Obama',
    length: 313,
});

quotes.set('9e5a7e81-2688-4c94-bc21-858c9da72a89', {
    id: '9e5a7e81-2688-4c94-bc21-858c9da72a89',
    content:
        "You followed your conscience in the hope that others would follow theirs. You didn't do it for a reward, or a pat on the head. The universe never tells us if we did right or wrong. It's more important to try and help people, and to know that you did. More important that someone else's life gets better, than for you to feel good about yourself. You never know the effect you might have on someone, not really. Maybe one cruel thing you said haunts them forever. Maybe one moment of kindness gives them comfort or courage. Maybe you said the one thing they needed to hear. It doesn't matter if you ever know. You just have to try.",
    author: 'Naomi Nagata - The Expanse Season 6 Episode 6',
    length: 630,
});

export function getRandomQuote(): Quote {
    const list = Array.from(quotes.values());
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

export function parseInitialQuoteToWords(quote: string): CharElement[][] {
    return quote
        .split(/([^\s]+\s?)/g)
        .filter((word) => word)
        .map((word) => {
            return word.split('').map((charElement, index) => {
                return new CharElement(charElement, index);
            });
        });
}
