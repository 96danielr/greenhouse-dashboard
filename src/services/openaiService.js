

export const fetchOpenAISummary = async (data) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk-Xxeu9Kaz6VZQXPHByw3R1xLrXG6hi71HMiocP8Z3fPT3BlbkFJIsDsY4qcix8v_D-nn8UMYv4XHGXZcrrGLFkp-KQcoA",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a concise and friendly assistant. Summarize the dashboard data in 3 short lines, including a friendly greeting and one key actionable insight. Make it brief and impactful (with emojis too).",
          },
          {
            role: "user",
            content: `Summarize the following data: ${JSON.stringify(data)}`,
          },
        ],
      }),
    });

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error;
  }
};
