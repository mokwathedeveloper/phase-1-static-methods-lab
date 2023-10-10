class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  // Static method to titleize a string
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}

// Example usages
console.log(Formatter.capitalize('hello'));  // Outputs: Hello
console.log(Formatter.sanitize('Hello, world!'));  // Outputs: Hello world
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog'));  // Outputs: The Quick Brown Fox Jumps over the Lazy Dog
