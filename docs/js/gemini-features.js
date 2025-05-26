// docs/js/gemini-features.js

// This function will be called when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const futureButton = document.getElementById('gemini-future-button');
    if (futureButton) {
        futureButton.addEventListener('click', async () => {
            const existingResearchPoints = `- Intensive Study of L7.
- Refining TCT Applications.
- Exploring Group-Theoretic Equivalence.
- New Constructive Techniques.
- Identifying "Forbidden Substructures".
- Investigating Problem Variations.`;
            const prompt = `Considering the Finite Lattice Representation Problem (FLRP) and the following known potential avenues for future research:\n${existingResearchPoints}\n\nSuggest 3-4 novel or less-explored research angles or interdisciplinary approaches that could provide new insights or breakthroughs for the FLRP. Think creatively beyond standard algebraic or lattice-theoretic techniques, perhaps touching on areas like theoretical computer science, combinatorics, or model theory.`;

            const outputEl = document.getElementById('gemini-future-output');
            const loadingEl = document.getElementById('gemini-future-output-loading');

            await callGeminiAPI(prompt, outputEl, loadingEl);
        });
    }
});

async function callGeminiAPI(prompt, outputElement, loadingElement) {
    if (loadingElement) loadingElement.style.display = 'block';
    if (outputElement) {
        outputElement.style.display = 'none';
        outputElement.textContent = '';
    }

    // NOTE: An API key is required for this to work.
    // For a public site, this should ideally be handled via a secure backend/serverless function.
    // For this demonstration, we are assuming the key is available.
    const apiKey = ""; // IMPORTANT: Add your Google AI API key here.
    if (!apiKey) {
        outputElement.textContent = "API Key not provided in docs/js/gemini-features.js. This feature is disabled.";
        outputElement.style.display = 'block';
        loadingElement.style.display = 'none';
        return;
    }

    let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = { contents: chatHistory };
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const result = await response.json();

        if (result.candidates && result.candidates[0]?.content?.parts[0]) {
            const text = result.candidates[0].content.parts[0].text;
            outputElement.textContent = text;
        } else {
            outputElement.textContent = 'Error: Could not retrieve a valid response from the API.';
        }
    } catch (error) {
        console.error("Gemini API call error:", error);
        outputElement.textContent = `Error: ${error.message}. The API key might be invalid or missing.`;
    } finally {
        if (loadingElement) loadingElement.style.display = 'none';
        if (outputElement) outputElement.style.display = 'block';
    }
}

// Basic CSS for the Gemini feature button and output, in case it's needed.
const style = document.createElement('style');
style.textContent = `
  .gemini-output { margin-top: 1rem; padding: 1rem; background-color: #f0f4f8; border-left: 4px solid #42a5f5; border-radius: 4px; white-space: pre-wrap; }
  .loading-spinner { border: 4px solid #f3f3f3; border-top: 4px solid #42a5f5; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite; margin: 1rem 0; }
  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`;
document.head.append(style);
