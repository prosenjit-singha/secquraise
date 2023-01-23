import React, { useState, useEffect, createContext, useContext } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../features/firebase";
import { Event } from "../../types/event.type";
import dayjs, { Dayjs } from "dayjs";
import filterEvents from "../../utils/filterEvents";
import { useSearchParams } from "react-router-dom";

type FilterOpt = {
  location: string;
  gender: string;
  date: null | Dayjs;
};

type Value = {
  data: Event[];
  filterOpt: FilterOpt;
  setFilterOpt: React.Dispatch<React.SetStateAction<FilterOpt>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventsContext = createContext({} as Value);

function EventsProvider({ children }: { children: React.ReactNode }) {
  const eventsRef = ref(database, "events");
  const [searchParams, setSearchParam] = useSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [filterOpt, setFilterOpt] = useState<FilterOpt>({
    location: "",
    gender: "",
    date: null,
  });

  const value = {
    data: events,
    filterOpt,
    setFilterOpt,
    isLoading,
    setLoading,
  };

  useEffect(() => {
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      setEvents(data);
      setLoading(false);
    });

    const sp = Object.fromEntries([...searchParams]);
    const filterData: FilterOpt = {
      location: sp.location || "",
      gender: sp.gender || "",
      date: dayjs(sp.date) || null,
    };
    setFilterOpt(filterData);
  }, []);

  // filter side effects
  useEffect(() => {
    setEvents((prev) =>
      filterEvents(prev, {
        location: filterOpt.location,
        gender: filterOpt.gender,
        date: searchParams.get("date") || "",
      })
    );
  }, []);

  // console.info(filterOpt);

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}

export const useEvents = () => useContext(EventsContext);

export default EventsProvider;
