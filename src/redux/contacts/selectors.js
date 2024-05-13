import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, textFilter) => {
    console.log(selectFilteredContacts);
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
