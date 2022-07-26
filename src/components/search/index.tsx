import React from 'react';
import { SearchMain } from 'components/search/styles';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = (props: any) => (
  <SearchMain
    InputProps={{
      startAdornment: <SearchIcon style={{ marginRight: 10 }} />,
      style: { backgroundColor: '#fff' },
    }}
    placeholder="Search..."
    color="primary"
    variant="outlined"
    {...props}
  />
);

export default Search;
