export function formatProjectTools(tools) {
  const NUM_VISIBLE_TOOLS = 2;
  return tools?.slice(0, NUM_VISIBLE_TOOLS).join(" / ") ?? null;
}