export async function reactToPost(postId, reaction) {
  const url = `/api/reactions?postId=${postId}&type=${reaction}`;

  storePostReaction(postId, reaction);

  await fetch(url, { method: "POST" }).then((res) => res.json());
}

export function storePostReaction(postId, reaction) {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage) {
      const current = JSON.parse(
        window.localStorage.getItem("reactions") ?? "{}"
      );

      current[postId] = current[postId] ?? [];
      if (!current[postId].includes(reaction)) current[postId].push(reaction);

      window.localStorage.setItem("reactions", JSON.stringify(current));
    }
  } catch {}
}

export function getHasPostBeenReactedTo(postId, reaction) {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage) {
      const current = JSON.parse(
        window.localStorage.getItem("reactions") ?? "{}"
      );

      current[postId] = current[postId] ?? [];
      if (!current[postId].includes(reaction)) return false;

      return true;
    }
  } catch {
    return false;
  }
}
