import { useState, useCallback } from "react";
import {
  DatePickerModal,
  ru,
  registerTranslation,
} from "react-native-paper-dates";

registerTranslation("ru", ru);

const Calendar = ({ open, setOpen }) => {
  const [date, setDate] = useState(undefined);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <DatePickerModal
      locale="ru"
      mode="single"
      visible={open}
      onDismiss={onDismissSingle}
      date={date}
      onConfirm={onConfirmSingle}
    />
  );
};

export default Calendar;
