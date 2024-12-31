export const fetchOpenAISummary = async (data) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
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
  