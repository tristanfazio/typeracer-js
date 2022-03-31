import { Quote } from './types';
import { CharElement } from '../state/gameState/gameStateReducer';

const quotes = new Map<string, Quote>();

quotes.set('0d315cf1-ee4d-4980-8407-b1be160ba7c0291c4bef51e0', {
    id: '0d315cf1-ee4d-4980-8407-b1be160ba7c0',
    content:
        'And so, my fellow Americans: Ask not what your country can do for you — ask what you can do for your country. My fellow citizens of the world: Ask not what America will do for you, but what together we can do for the freedom of man.',
    author: 'John F. Kennedy',
    length: 233,
});

quotes.set('e7eea959-81b1-42ee-8a0a-adef3b4722c1', {
    id: 'e7eea959-81b1-42ee-8a0a-adef3b4722c1',
    content:
        'We shall go on to the end, we shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.',
    author: 'Winston Churchill',
    length: 391,
});

quotes.set('fcb1f3a8-a0e1-44a8-95e8-4dcaa47f16ca', {
    id: 'fcb1f3a8-a0e1-44a8-95e8-4dcaa47f16ca',
    content:
        'I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream. I have a dream that one day this nation will rise up and live out the true meaning of its creed, We hold these truths to be self-evident, that all men are created equal... I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
    author: 'Martin Luther King, Jr',
    length: 509,
});

quotes.set('2db47a63-09e3-4b1b-a66f-f5112631fa8c', {
    id: '2db47a63-09e3-4b1b-a66f-f5112631fa8c',
    content:
        "Now, as a nation, we don't promise equal outcomes, but we were founded on the idea everybody should have an equal opportunity to succeed. No matter who you are, what you look like, where you come from, you can make it. That's an essential promise of America. Where you start should not determine where you end up.",
    author: 'Barack Obama',
    length: 313,
});

quotes.set('0e55357f-935f-499f-98bb-bbde11b821f6', {
    id: '0e55357f-935f-499f-98bb-bbde11b821f6',
    content:
        'There’s not a liberal America and a conservative America; there’s the United States of America. There’s not a Black America and white America and Latino America and Asian America; there’s the United States of America... We are one people, all of us pledging allegiance to the stars and stripes, all of us defending the United States of America. In the end, that’s what this election is about. Do we participate in a politics of cynicism, or do we participate in a politics of hope?',
    author: 'Barack Obama',
    length: 481,
});

quotes.set('05b70fe5-9b3d-4590-b538-cd1f6e34abc8', {
    id: '05b70fe5-9b3d-4590-b538-cd1f6e34abc8',
    content:
        'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',
    author: 'Frank Herbert, Dune',
    length: 304,
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
