export function getLeastUsedRandomItem<T extends { id: string }>(
  items: T[],
  usageMap: Record<string, number>
): T {
  const minUsed = Math.min(...items.map(item => usageMap[item.id] || 0));
  const leastUsedItems = items.filter(item => (usageMap[item.id] || 0) === minUsed);
  const chosen = leastUsedItems[Math.floor(Math.random() * leastUsedItems.length)];
  return chosen;
}