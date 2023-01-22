import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function EventsProvider({ children }: { children: React.ReactNode }) {
  const { data = [], isLoading } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () =>
      axios
        .get("https://secquraise-pj-default-rtdb.firebaseio.com/events.json")
        .then((res) => res.data),
  });

  return <div>{children}</div>;
}

export default EventsProvider;
