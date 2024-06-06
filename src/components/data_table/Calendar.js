import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useListAssignDate, useListDepartment } from "@/modules/project/utils";

const formatDate = (date) => {
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
  return formattedDate;
};
const getMonthYear = (time) => {
  const a = time?.split("/");
  return `${a?.[1]}-${a?.[2]}`;
};
function fakeFetch(date, { signal }, daysToHighlightData, date1) {
  return new Promise((resolve, reject) => {
    const daysToHighlight = daysToHighlightData
      ?.filter((e) => e.month == getMonthYear(formatDate(date1?.toDate())))
      ?.map((item) => item.date);
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      resolve({ daysToHighlight });
    }, 500);
    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}
const today1 = dayjs().format("YYYY-MM-DD");
const initialValue = dayjs(today1);

function ServerDay(props) {
  const {
    highlightedDays = [],
    day,
    outsideCurrentMonth,
    id_form,
    listDate,
    list_department,
    ...other
  } = props;
  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;
  const pb = listDate
    ?.filter(
      (e) =>
        e.date == day?.$D && e.month == getMonthYear(formatDate(day?.toDate()))
    )
    ?.map((i) => i.pb_id)?.[0];
  return (
    <div style={{ position: "relative" }}>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
      {isSelected && (
        <span
          className="text-center"
          style={{
            position: "absolute",
            bottom: "10%",
            zIndex: "10",
            fontSize: "15px",
            fontWeight: "600",
            width: "90%",
            left: "5%",
            color: "white",
            background: "#4db6ac",
            borderRadius: "10px",
            minHeight: "40px",
            maxHeight: "80px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            padding: "4px",
          }}
        >
          {pb && (
            <span>
              {list_department?.filter((e) => e?.gb_id == pb)?.[0]?.gb_title}
            </span>
          )}
        </span>
      )}
    </div>
  );
}
const Calendar = (props) => {
  const { setDate, date, setDates, dates, setShowDetail, id_form, params } =
    props;
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const today = new Date();
  const formatDate = (date) => {
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    return formattedDate;
  };
  const getMonthYear = (time) => {
    const a = time?.split("/");
    return `${a?.[1]}-${a?.[2]}`;
  };
  const [monthYear, setMonthYear] = React.useState(
    getMonthYear(formatDate(today))
  );
  const list_department = useListDepartment({
    status: undefined,
  });
  const [listDate, setListDate] = React.useState();
  const dataAssignDate = useListAssignDate({
    id_form: id_form,
    ...params,
  });
  React.useEffect(() => {
    setListDate(dataAssignDate);
  }, [dataAssignDate, monthYear, id_form]);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    const defaultdate = listDate
      ?.filter((e) => e.month === monthYear)
      ?.map((item) => item?.date);
    setHighlightedDays(defaultdate || []);
  }, [listDate, load]);
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(
      date,
      {
        signal: controller.signal,
      },
      listDate,
      date
    )
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    requestAbortController.current = controller;
  };
  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
    setMonthYear(getMonthYear(formatDate(date?.toDate())));
    setLoad(false);
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };
  const HandleSelect = (e) => {
    setDates({
      ...dates,
      pb_id: listDate?.filter(
        (item) =>
          item.date == e?.$D &&
          item.month == getMonthYear(formatDate(e?.toDate()))
      )?.[0]?.pb_id,
      month: getMonthYear(formatDate(e?.toDate())),
      date: e?.$D,
    });
    setDate(e?.toDate().toString());
    setShowDetail(true);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        shouldDisableYear={() => {}}
        defaultValue={initialValue}
        style={{ width: "100%" }}
        onMonthChange={handleMonthChange}
        onChange={(e) => HandleSelect(e)}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: (props) => (
            <ServerDay
              {...props}
              id_form={id_form}
              listDate={listDate}
              list_department={list_department}
            />
          ),
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
};
export default Calendar;
