import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { View } from './App.styled';
import { addContact, isFilter, removeContact } from 'redux/phonebookSlice';

export function App() {
  const dispatch = useDispatch();
  const formHandlerSubmit = submitData => {
    dispatch(addContact(submitData));
  };

  const contactsGallery = useSelector(state => state.book.contacts);
  const filter = useSelector(state => state.book.filter);

  const onSearchContact = filterName => {
    dispatch(isFilter(filterName));
  };

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  let renderList = [];
  const normolizedFilter = filter.toLowerCase().trim();
  const filterContacts = contactsGallery.filter(cont =>
    cont.name.toLowerCase().includes(normolizedFilter)
  );

  filter.length === 0
    ? (renderList = contactsGallery)
    : (renderList = filterContacts);

  return (
    <View>
      <Contacts addSubmitForm={formHandlerSubmit} />
      <Filter filterList={onSearchContact} />
      <ContactsList contacts={renderList} contDelete={onDeleteContact} />
    </View>
  );
}
