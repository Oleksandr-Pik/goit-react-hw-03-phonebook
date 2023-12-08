import React from 'react';
import { Input, Label } from './Filter.styled';

const Filter = ({filter, onChange}) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;
