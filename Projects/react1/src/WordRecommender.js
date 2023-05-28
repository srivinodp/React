import React, { useState } from 'react';

// TrieNode class represents a node in the trie
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [wordRecommendations, setWordRecommendations] = useState([]);

  // Build the trie with the words
  const trie = new TrieNode();
  const words = ['hey', 'hello', 'help', 'hang', 'hinge'];

  const insertWord = (word) => {
    let node = trie;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char);
    }

    node.isWord = true;
  };
  
  words.forEach((word) => {
    insertWord(word);
  });

  // Handle search input
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Get word recommendations based on the search input
    const recommendations = getWordRecommendations(value);
    setWordRecommendations(recommendations);
  };

  // Inserts a word into the trie
  

  // Get word recommendations based on the search input
  const getWordRecommendations = (query) => {
    let node = trie;
    const recommendations = [];

    for (let i = 0; i < query.length; i++) {
      const char = query[i];

      if (!node.children.has(char)) {
        return recommendations;
      }

      node = node.children.get(char);
    }

    findAllWords(node, query, recommendations);

    return recommendations;
  };

  // Recursive function to find all words starting from the given node
  const findAllWords = (node, prefix, recommendations) => {
    if (node.isWord) {
      recommendations.push(prefix);
    }

    for (const [char, child] of node.children) {
      findAllWords(child, prefix + char, recommendations);
    }
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearch} />
      <ul>
        {wordRecommendations.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
