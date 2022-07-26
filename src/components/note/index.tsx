import React from 'react';
import { NoteMain } from 'components/note/styles';

const Note = ({ children, ...props }: any) => (
  <NoteMain {...props}>{children}</NoteMain>
);

export default Note;
