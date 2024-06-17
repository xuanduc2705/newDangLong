import React, { useEffect, useState } from "react";
import {
  useListAllForm,
  useListAllPage,
  useListAllProject,
  useListCampaign,
  useListDepartment,
  useListFormPage,
  useListProjectForm,
} from "../utils";
import { assignDateSingle, updatePage } from "../api";
import { Button, Panel } from "@/uiCore";
import Calendar from "@/components/data_table/Calendar";
import { useLocation } from "react-router-dom";
import { useGetParams } from "@/hooks";

const {
  FormUpdateDialog,
  InputForm,
  DropdownForm,
  FormUpdate,
} = require("@/components/data_table/FormUpdate");

const UpdatePage = (props) => {
  const location = useLocation();
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const id = location.pathname.charAt(location.pathname.length - 1);
  const data = useListAllPage();
  const list_campaign = useListCampaign();
  const [dates, setDates] = useState(params);
  useEffect(() => {
    if (list_campaign && list_campaign?.[0]) {
      setDates({
        ...dates,
        id_form: list_campaign?.filter((e) => e.id == id)?.[0]?.id_form,
      });
    }
  }, [list_campaign]);
  const [infos, setInfos] = useState(params);
  const list_department = useListDepartment({
    status: undefined,
  });
  const handleDataDate = () => {
    return dates;
  };
  const handleData = () => {
    if (!infos?.category_id) return "Bạn chưa chọn dự án";
    return infos;
  };
  const list_form = useListAllForm({
    project_id_ad: data?.filter((e) => e?.id == id)?.[0]?.project_id_ad,
    token: data?.filter((e) => e?.id == id)?.[0]?.short_token,
  });
  console.log(data);
  useEffect(() => {
    if (data && data?.[0]) {
      const findData = data?.filter((e) => e?.id == id)?.[0];
      setInfos({ ...infos, id: id, page_id: findData?.project_id_ad });
    }
  }, [data]);
  const [date, setDate] = useState({});
  const getDate = (a) => {
    let date = new Date(a);
    let formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    return formattedDate;
  };
  const [showDetail, setShowDetail] = useState(false);

  const handleHide = () => {
    setDates({
      id_form: list_campaign?.filter((e) => e.id == id)?.[0]?.id_form,
    });
    setShowDetail(false);
  };
  return (
    <>
      {showDetail && (
        <FormUpdateDialog
          width="1000px"
          visible={showDetail}
          setVisible={setShowDetail}
          title="Chi tiết lịch phân bổ theo ngày"
          refreshObjects={[setDates]}
          handleData={handleDataDate}
          actions={{ update: assignDateSingle }}
          checkId={Number(showDetail)}
          setParams={setParams}
          onHide={handleHide}
        >
          <InputForm
            label="Ngày"
            value={date && getDate(date?.toString())}
            readOnly
          />
          <DropdownForm
            value={dates?.pb_id}
            onChange={(e) => setDates({ ...dates, pb_id: e.target.value })}
            options={list_department}
            optionLabel="gb_title"
            optionValue="gb_id"
            label="Phòng ban"
          />
          <div style={{ height: "25vh" }}></div>
        </FormUpdateDialog>
      )}
      {list_form?.map((item, index) => (
        <FormUpdate
          checkId={Number(id)}
          handleData={handleData}
          route="/page_list"
          title="lịch phân bổ "
        >
          <div className="grid grid-form">
            <div className="col-11 mx-auto">
              <Calendar
                setDate={setDate}
                date={date}
                setDates={setDates}
                dates={dates}
                setShowDetail={setShowDetail}
                id_form={item?.id}
                params={params}
              />
            </div>
          </div>
        </FormUpdate>
      ))}
    </>
  );
};
export default UpdatePage;
