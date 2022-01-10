import { RadioGroup, Stack, Radio ,Checkbox,CheckboxGroup} from "@chakra-ui/react";
import React from "react";
import _ from "lodash";

const RadioType = ({ question, direction, response, handleChange }) => {
  //   const { response } = useSelector((state) => state.slideQnaState);

  return (
    <CheckboxGroup
      name={question?._id}
      defaultValue={!_.isEmpty(response) ? response[question?._id] : ""}
      isDisabled={!_.isEmpty(response)}
    >
      <Stack direction={direction} spacing={4} wrap="wrap">
        {question?.choices.map((choice, index) => (
          <Checkbox
            key={choice._id ? choice._id : index}
            value={choice._id ? choice._id : choice}
            onChange={(e) => handleChange(e, choice?.choiceText)}
            checked={true}
          >
            {choice?.choiceText ? choice?.choiceText : choice}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default RadioType;
