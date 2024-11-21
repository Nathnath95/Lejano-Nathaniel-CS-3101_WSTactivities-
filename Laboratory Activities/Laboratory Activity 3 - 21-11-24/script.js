const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const sentenceCountDisplay = document.getElementById("sentenceCount");

const countWords = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
};

const countSentences = (text) => {
    const sentences = text.trim().split(/[.!?]\s+/).filter(sentence => sentence.length > 0);
    return sentences.length;
};

textInput.addEventListener("input", () => {
    const text = textInput.value;
    const wordCount = countWords(text);
    const sentenceCount = countSentences(text);
    wordCountDisplay.textContent = `Words: ${wordCount}`;
    sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
});
