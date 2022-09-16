function solution(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (weight1 <= maxW && weight2 <= maxW) {
        return Math.max(value1, value2);
    }
    if (weight1 <= maxW) {
        return value1;
    }
    if (weight2 <= maxW) {
        return value2;
    }
    return 0;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test knapsackLight2

// alternative solution
