import moment from "moment";
import { useState, useCallback, useEffect } from "react";
import {
  DatePickerModal,
  ru,
  registerTranslation,
} from "react-native-paper-dates";
import { useControlTask } from "../../store/controlTask.store";
import { getTasksByDate } from "../../service/getTasksByDate";

registerTranslation("ru", ru);

const Calendar = ({ open, setOpen }) => {
  const { setCurrentDate, setTasks, currentDate } = useControlTask();
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

  useEffect(() => {
    if (!date) return;
    setCurrentDate(date);

    async function getTasks() {
      const formatDate = moment(date).format("DD-MM-YYYY");
      const tasks = await getTasksByDate(formatDate);
      setTasks(tasks);
    }
    getTasks();
  }, [date]);

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
