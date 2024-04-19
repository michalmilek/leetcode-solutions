const isValid = (s: string): boolean => {
	const bracketMap = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	let stack: string[] = [];

	for (let char of s) {
		if (char in bracketMap) {
			if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
				return false;
			}
		} else {
			stack.push(char);
		}
	}
	return stack.length === 0;
};
