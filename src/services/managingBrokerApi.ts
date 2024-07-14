import { entities } from "@/data/entities";
import { Entity } from "@/components/EntityInfo";

const mockDelay = 3000;

const getSearchSuggestions = async (
  query: string,
  signal: AbortSignal,
): Promise<Entity[]> => {
  return new Promise((resolve, reject) => {
    signal.addEventListener(
      "abort",
      (event: Event) => {
        const target = event.target as AbortSignal;
        reject(target.reason);
      },
      { once: true },
    );

    setTimeout(() => {
      resolve(
        entities.filter((entity) =>
          entity.name.toLowerCase().startsWith(query.toLowerCase()),
        ),
      );
    }, mockDelay);
  });
};

export { getSearchSuggestions };
