export default function sortByHealthLevel(characters) {
  return characters.sort((a, b) => b.health - a.health);
}
