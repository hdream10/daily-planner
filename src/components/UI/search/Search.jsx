import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { searchStyles } from "./searchStyles";
import { useControlTask } from "../../../store/controlTask.store";
import { searchUtil } from "../../../utils/searchUtil";

const Search = () => {
  const { currentDate, setTasks, setSearchQueryStore, searchQueryStore } =
    useControlTask();
  const [searchQuery, setSearchQuery] = useState(searchQueryStore);

  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    setSearchQueryStore(query);
    const tasks = await searchUtil(query, currentDate);
    setTasks(tasks);
  };

  useEffect(() => {
    setSearchQuery(searchQueryStore);
  }, [searchQueryStore]);

  return (
    <Searchbar
      placeholder="Поиск"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={searchStyles.container}
    />
  );
};

export default Search;
