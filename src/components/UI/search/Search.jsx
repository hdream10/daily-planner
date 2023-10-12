import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { searchStyles } from "./searchStyles";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
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
