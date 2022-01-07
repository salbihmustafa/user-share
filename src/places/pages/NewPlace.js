import "./NewPlace.css";
import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/util/validators";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {
    //to avoid infinite loop, useCallback is used with no dependencies
  }, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {
    //to avoid infinite loop, useCallback is used with no dependencies
  }, []);
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={descriptionInputHandler}
      />
      <div></div>
    </form>
  );
};

export default NewPlace;
