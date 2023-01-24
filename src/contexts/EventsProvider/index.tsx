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
  filteredData: Event[];
  filterOpt: FilterOpt;
  setFilterOpt: React.Dispatch<React.SetStateAction<FilterOpt>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventsContext = createContext({} as Value);

function EventsProvider({ children }: { children: React.ReactNode }) {
  const eventsRef = ref(database, "events");
  const [searchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [filterOpt, setFilterOpt] = useState<FilterOpt>({
    location: "",
    gender: "",
    date: null,
  });

  const value = {
    data: events,
    filteredData: filteredEvents,
    filterOpt,
    setFilterOpt,
    isLoading,
    setLoading,
  };

  // filter side effects
  useEffect(() => {
    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      const sp = Object.fromEntries([...searchParams]);
      const filterData: FilterOpt = {
        location: sp.location || "",
        gender: sp.gender || "",
        date: sp.date ? dayjs(sp.date) : null,
      };

      setFilterOpt(filterData);
      setEvents(data);
      setFilteredEvents(
        filterEvents(data, {
          location: filterData.location,
          gender: filterData.gender,
          date: filterData.date
            ? filterData.date.format("D-MMM-YY")
            : undefined,
        })
      );
      setLoading(false);
    });
  }, [eventsRef]);

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
}

export const useEvents = () => useContext(EventsContext);

export default EventsProvider;
