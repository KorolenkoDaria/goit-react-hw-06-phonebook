import { Label } from "../ContactForm/ContactForm.styled";
import { Wrapper, Field, Input, } from "./Filter.styled";

import { useDispatch } from "react-redux";

import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = (evt) => {
        dispatch(setFilter(evt.currentTarget.value.toLowerCase()));
    }

    return (
        <Wrapper>
            <Field>
                <Label htmlFor='filter'> Find contacts by name </Label>
                <Input onChange={handleFilter} id='filter' type="text" name="filter" required />
            </Field>
        </Wrapper>
    )

}

export default Filter;
