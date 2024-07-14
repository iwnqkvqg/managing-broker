import { entities } from "@/data/entities";
import { Entity } from "@/components/EntityInfo";

const knownEntities = [...entities];
const mockDelay = 100;

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
        knownEntities.filter((entity) =>
          entity.name.toLowerCase().startsWith(query.toLowerCase()),
        ),
      );
    }, mockDelay);
  });
};

const addEntity = async (entity: Entity): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      knownEntities.push(entity);
      resolve();
    }, mockDelay);
  });
};

export { addEntity, getSearchSuggestions };
