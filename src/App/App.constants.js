/**
 * App Actions Go Here.
 */
export const actions = {
    SET_BACKGROUND_COLOR: 'SET_BACKGROUND_COLOR'
};

// This is just a quick and dirty way to get a hex color.
// Please, don't copy this pattern.
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};
