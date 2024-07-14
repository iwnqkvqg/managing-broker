import { useEffect, useRef } from "react";

import { getSearchSuggestions } from "@/services/managingBrokerApi";
import { setSearchSuggestions } from "@/store/managingBrokerSlice";
import { useDispatch } from "@/store";

const useSuggestions = async (query: string) => {
  const dispatch = useDispatch();
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    (async () => {
      if (controller.current) {
        controller.current.abort("Abort ongoing request");
      }
      if (query.trim()) {
        controller.current = new AbortController();
        await getSearchSuggestions(query, controller.current.signal)
          .then((suggestions) => {
            dispatch(setSearchSuggestions(suggestions || []));
          })
          .catch(console.warn);
        controller.current = null;
      } else {
        dispatch(setSearchSuggestions([]));
      }
    })();
  }, [query, dispatch]);
};

export default useSuggestions;
