const VAGUE_WORDS = ["growth", "success", "passionate", "hardworking", "balance", "happy"];

const FOLLOW_UPS = [
  "Good, now make it concrete. What's a specific moment, in the last year, where that value actually cost you something?",
  "Would this value survive a bad week? What would a manager have to do, specifically, before you'd call it a violation?",
  "If two people on your team both claimed to hold this value but acted completely differently, what would tell them apart?",
  "Where does this value bump into one of your other top values? Which one wins when they conflict?",
];

let followUpIndex = 0;

export function coachRespond(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  const isVague =
    userMessage.trim().length < 28 ||
    VAGUE_WORDS.some((w) => lower.includes(w));

  if (isVague) {
    return "That's a common starting point, but it's still a little general. The manual calls this out directly: words like “growth” or “success” mean something different to everyone. What does it look like on an ordinary Tuesday, specifically for you?";
  }

  const reply = FOLLOW_UPS[followUpIndex % FOLLOW_UPS.length];
  followUpIndex += 1;
  return reply;
}

export function explainMessage(title: string, definition: string): string {
  return `${title} is about ${definition.charAt(0).toLowerCase()}${definition.slice(1)} I'll push you toward specifics the whole way through. I won't hand you a finished answer.`;
}

export const STUCK_MESSAGE =
  "No problem, let's start smaller. Think of a moment at work, school, or home when you felt genuinely frustrated or disrespected. What was actually happening in that moment? That reaction is usually a value talking.";
