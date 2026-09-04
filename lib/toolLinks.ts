// Curated map of real, named external tools that show up inside
// LearnContent.tools strings. Only entries that match here are ever
// surfaced on a stage's Tools & Resources panel: everything else in
// those strings is exercise or worksheet language, not an actual tool,
// and is intentionally dropped rather than shown.
type ToolLink = {
  label: string;
  url: string;
  /** Case-sensitive names/phrases that identify this tool inside a tools string. */
  match: string[];
};

export const TOOL_LINKS: ToolLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/", match: ["LinkedIn"] },
  { label: "Glassdoor", url: "https://www.glassdoor.com/", match: ["Glassdoor"] },
  { label: "Indeed", url: "https://www.indeed.com/", match: ["Indeed"] },
  { label: "Handshake", url: "https://joinhandshake.com/", match: ["Handshake"] },
  { label: "AngelList", url: "https://wellfound.com/", match: ["AngelList"] },
  { label: "Blind", url: "https://www.teamblind.com/", match: ["Blind"] },
  { label: "Payscale", url: "https://www.payscale.com/", match: ["Payscale"] },
  { label: "Levels.fyi", url: "https://www.levels.fyi/", match: ["Levels.fyi"] },
  { label: "Salary.com", url: "https://www.salary.com/", match: ["Salary.com"] },
  { label: "NerdWallet", url: "https://www.nerdwallet.com/", match: ["NerdWallet"] },
  { label: "Numbeo", url: "https://www.numbeo.com/", match: ["Numbeo"] },
  { label: "Bureau of Labor Statistics", url: "https://www.bls.gov/", match: ["Bureau of Labor Statistics"] },
  { label: "O*NET", url: "https://www.onetonline.org/", match: ["O*NET"] },
  { label: "Idealist.org", url: "https://www.idealist.org/", match: ["Idealist.org"] },
  { label: "Catchafire.org", url: "https://www.catchafire.org/", match: ["Catchafire.org"] },
  { label: "Coursera", url: "https://www.coursera.org/", match: ["Coursera"] },
  { label: "Udemy", url: "https://www.udemy.com/", match: ["Udemy"] },
  { label: "Skillshare", url: "https://www.skillshare.com/", match: ["Skillshare"] },
  { label: "Codecademy", url: "https://www.codecademy.com/", match: ["Codecademy"] },
  { label: "freeCodeCamp", url: "https://www.freecodecamp.org/", match: ["freeCodeCamp"] },
  { label: "LeetCode", url: "https://leetcode.com/", match: ["LeetCode"] },
  { label: "HubSpot Academy", url: "https://academy.hubspot.com/", match: ["HubSpot Academy"] },
  { label: "HubSpot", url: "https://www.hubspot.com/", match: ["HubSpot"] },
  { label: "Google Skillshop", url: "https://skillshop.withgoogle.com/", match: ["Google Skillshop"] },
  { label: "Notion", url: "https://www.notion.so/", match: ["Notion"] },
  { label: "Trello", url: "https://trello.com/", match: ["Trello"] },
  { label: "Asana", url: "https://asana.com/", match: ["Asana"] },
  { label: "Monday.com", url: "https://monday.com/", match: ["Monday.com"] },
  { label: "Jira", url: "https://www.atlassian.com/software/jira", match: ["Jira"] },
  { label: "Slack", url: "https://slack.com/", match: ["Slack"] },
  { label: "Microsoft Teams", url: "https://www.microsoft.com/microsoft-teams", match: ["Microsoft Teams"] },
  { label: "Zoom", url: "https://zoom.us/", match: ["Zoom"] },
  { label: "Confluence", url: "https://www.atlassian.com/software/confluence", match: ["Confluence"] },
  { label: "OneNote", url: "https://www.onenote.com/", match: ["OneNote"] },
  { label: "Evernote", url: "https://evernote.com/", match: ["Evernote"] },
  { label: "Todoist", url: "https://todoist.com/", match: ["Todoist"] },
  { label: "Airtable", url: "https://www.airtable.com/", match: ["Airtable"] },
  { label: "Google Sheets", url: "https://www.google.com/sheets/about/", match: ["Google Sheets"] },
  { label: "Google Docs", url: "https://www.google.com/docs/about/", match: ["Google Docs"] },
  { label: "Google Slides", url: "https://www.google.com/slides/about/", match: ["Google Slides"] },
  { label: "Google Forms", url: "https://www.google.com/forms/about/", match: ["Google Forms"] },
  { label: "Google Calendar", url: "https://calendar.google.com/", match: ["Google Calendar"] },
  { label: "Google Drive", url: "https://www.google.com/drive/", match: ["Google Drive"] },
  { label: "Google Workspace", url: "https://workspace.google.com/", match: ["Google Workspace"] },
  { label: "Google Analytics", url: "https://analytics.google.com/", match: ["Google Analytics"] },
  { label: "Google Alerts", url: "https://www.google.com/alerts", match: ["Google Alerts"] },
  { label: "Excel", url: "https://www.microsoft.com/microsoft-365/excel", match: ["Excel"] },
  { label: "Microsoft Word", url: "https://www.microsoft.com/microsoft-365/word", match: ["Microsoft Word"] },
  { label: "PowerPoint", url: "https://www.microsoft.com/microsoft-365/powerpoint", match: ["PowerPoint"] },
  { label: "Microsoft 365", url: "https://www.microsoft.com/microsoft-365", match: ["Microsoft 365", "Microsoft Office"] },
  { label: "Outlook", url: "https://www.microsoft.com/microsoft-365/outlook", match: ["Outlook"] },
  { label: "OneDrive", url: "https://www.microsoft.com/microsoft-365/onedrive", match: ["OneDrive"] },
  { label: "Dropbox", url: "https://www.dropbox.com/", match: ["Dropbox"] },
  { label: "Canva", url: "https://www.canva.com/", match: ["Canva"] },
  { label: "Grammarly", url: "https://www.grammarly.com/", match: ["Grammarly"] },
  { label: "Hemingway Editor", url: "https://hemingwayapp.com/", match: ["Hemingway Editor", "Hemingway"] },
  { label: "Figma", url: "https://www.figma.com/", match: ["Figma"] },
  { label: "Lucidchart", url: "https://www.lucidchart.com/", match: ["Lucidchart"] },
  { label: "Google Drawings", url: "https://docs.google.com/drawings/", match: ["Google Drawings"] },
  { label: "MindMeister", url: "https://www.mindmeister.com/", match: ["MindMeister"] },
  { label: "Loom", url: "https://www.loom.com/", match: ["Loom"] },
  { label: "Power BI", url: "https://powerbi.microsoft.com/", match: ["Power BI"] },
  { label: "Tableau", url: "https://www.tableau.com/", match: ["Tableau"] },
  { label: "Salesforce", url: "https://www.salesforce.com/", match: ["Salesforce"] },
  { label: "CliftonStrengths", url: "https://www.gallup.com/cliftonstrengths/", match: ["CliftonStrengths", "StrengthsFinder"] },
  { label: "Myers-Briggs", url: "https://www.myersbriggs.org/", match: ["Myers-Briggs", "MBTI"] },
  { label: "16personalities.com", url: "https://www.16personalities.com/", match: ["16personalities.com"] },
  { label: "Holland Code", url: "https://www.self-directed-search.com/", match: ["Holland Code"] },
  { label: "Harvard Business Review", url: "https://hbr.org/", match: ["Harvard Business Review"] },
  { label: "VirtualSpeech", url: "https://virtualspeech.com/", match: ["VirtualSpeech"] },
  { label: "GitHub", url: "https://github.com/", match: ["GitHub"] },
  { label: "Teal", url: "https://www.tealhq.com/", match: ["Teal"] },
  { label: "Huntr", url: "https://huntr.co/", match: ["Huntr"] },
  { label: "Bitwarden", url: "https://bitwarden.com/", match: ["Bitwarden"] },
  { label: "1Password", url: "https://1password.com/", match: ["1Password"] },
  { label: "Wix", url: "https://www.wix.com/", match: ["Wix"] },
  { label: "Carrd", url: "https://carrd.co/", match: ["Carrd"] },
  { label: "Typeform", url: "https://www.typeform.com/", match: ["Typeform"] },
  { label: "Zapier", url: "https://zapier.com/", match: ["Zapier"] },
  { label: "Toggl", url: "https://toggl.com/", match: ["Toggl"] },
  { label: "Behance", url: "https://www.behance.net/", match: ["Behance"] },
  { label: "Farnam Street", url: "https://fs.blog/", match: ["Farnam Street"] },
];

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildMatcher(name: string): RegExp {
  const hasSpecialChars = /[^a-zA-Z0-9 -]/.test(name);
  return hasSpecialChars
    ? new RegExp(escapeRegExp(name))
    : new RegExp(`\\b${escapeRegExp(name)}\\b`);
}

const MATCHERS = TOOL_LINKS.map((tool) => ({
  tool,
  patterns: tool.match.map(buildMatcher),
}));

/** Scan a First's raw `tools` strings and return the real, linkable tools mentioned. */
export function findRealTools(rawTools: string[]): ToolLink[] {
  const found: ToolLink[] = [];
  const seen = new Set<string>();
  for (const raw of rawTools) {
    for (const { tool, patterns } of MATCHERS) {
      if (seen.has(tool.label)) continue;
      if (patterns.some((p) => p.test(raw))) {
        found.push(tool);
        seen.add(tool.label);
      }
    }
  }
  return found;
}
