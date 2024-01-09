import { useSelector } from "react-redux";

import { Wrapper, H1, H2, } from "./App.styled";

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

const App = () => {
  const filter = useSelector(state => state.filter)

  return (
    <Wrapper>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      <Filter value={filter}></Filter>
      <ContactList></ContactList>
    </Wrapper>
  );

}
export default App;


