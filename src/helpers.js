const generateRandom = ((arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
});

export default generateRandom;