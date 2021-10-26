export function sortLanguages(data) {
  let languages = data?.items?.reduce(
    (acc, item) => ((acc[item.language] = (acc[item.language] || 0) + 1), acc),
    {}
  );
  let sortedLanguages = [];
  for (let lang in languages) {
    if (lang !== "null") {
      sortedLanguages.push({ label: lang, count: languages[lang] });
    }
  }

  sortedLanguages
    .sort((a, b) => {
      return a.count - b.count;
    })
    .reverse();

  return sortedLanguages;
}
