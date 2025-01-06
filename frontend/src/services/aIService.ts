import { GoogleGenerativeAI } from '@google/generative-ai';

export const generateUserName = async (
  preference: string,
  firstName: string,
  lastName: string,
): Promise<string> => {
  const apiKey = process.env.REACT_APP_AI_API_KEY;

  if (!apiKey) {
    throw new Error(
      'Gemini API key is missing. Please set REACT_APP_AI_API_KEY in your environment variables.',
    );
  }

  try {
    // Initialize Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create the prompt
    const prompt = `Generame solo un nombre de usuario, basándote en lo siguiente, recuerda solo quiero el nombre de usuario, utiliza toda tu imaginación, para que sea un nombre de usuario copado:
      Preference: ${preference}, 
      First Name: ${firstName}, 
      Last Name: ${lastName}`;

    // Generate content
    const result = await model.generateContent(prompt);

    if (!result?.response?.text()) {
      throw new Error('No valid response received from the Gemini API.');
    }

    // Extract username (remove any extra whitespace or formatting)
    const username = result.response.text().trim();

    if (!username) {
      throw new Error('No username generated. Please try again.');
    }

    return username;
  } catch (error) {
    console.error(
      'Error generating username:',
      error.message || 'Unknown error occurred.',
    );
    throw new Error('Failed to generate username. Please try again later.');
  }
};
