import { useState, useEffect } from "react";
import { removePropObject, removeUndefinedProps } from "@/utils";
// import {
//   InputForm,
//   CalendarForm,
//   FormUpdateDialog,
//   UploadImg,
// } from "@/components";
import { useSelector } from "react-redux";
import { databaseDate } from "@/lib";
import { FormUpdateDialog } from "@/components/data_table/FormUpdate";

const UpdateUser = (props) => {
  const { visible, setVisible } = props;
  const userDetail = useSelector((state) => state.userInfo);
  const [avatar, setAvatar] = useState(null);
  const [infos, setInfos] = useState({});
  // const exchanges = useGetApi(listExchangeV2Api, {}, []);
  // const groups = useGetApi(listGroupV2Api, {}, []);

  useEffect(() => {
    if (userDetail.id)
      setInfos(
        removeUndefinedProps({
          ...infos,
          ...userDetail,
          birthday: userDetail.birthday ? new Date(userDetail.birthday) : "",
        })
      );
    if (userDetail.avatar) setAvatar(userDetail.avatar);
  }, [userDetail]);
  const handleData = () => {
    let info = {
      ...infos,
      birthday: infos.birthday ? databaseDate(infos.birthday) : undefined,
    };
    if (avatar) info.avatar = avatar;
    info = { ...removePropObject(info, userDetail), id: userDetail.user_id };
    return info;
  };
  return (
    <FormUpdateDialog
      checkId={true}
      handleData={handleData}
      title="Thông tin người dùng"
      visible={visible}
      setVisible={setVisible}
      handleAfterCallApi={() => window.location.reload()}
    >
      <div className="grid grid-form">
        {/* <div className="col-12 lg:col-3">
          <div className="card bg-color">
            <UploadImg
              image={avatar}
              setImage={setAvatar}
              title="Ảnh đại diện"
            />
          </div>
        </div> */}
        {/* <div className="col-12 lg:col-9 ">
          <div className="card bg-color">
            <div className="grid grid-form">
              <div className="col-12 lg:col-6">
                <InputForm
                  id="full_name"
                  value={infos.full_name}
                  onChange={(e) =>
                    setInfos({ ...infos, full_name: e.target.value })
                  }
                  label="Tên nhân viên (*)"
                  required
                />
                <InputForm
                  id="code"
                  value={infos.code}
                  onChange={(e) => setInfos({ ...infos, code: e.target.value })}
                  label="Mã nhân viên (*)"
                  required
                />
                <InputForm
                  id="email"
                  value={infos.email_contact}
                  label="Email (*)"
                  disabled
                />
                <InputForm
                  id="phone"
                  value={infos.phone_contact}
                  label="Số điện thoại (*)"
                  disabled
                />
                <CalendarForm
                  id="birthday"
                  label="Ngày sinh"
                  value={infos.birthday}
                  onChange={(e) =>
                    setInfos({ ...infos, birthday: e.target.value })
                  }
                />
              </div>
              <div className="col-12 lg:col-6">
                <InputForm
                  id="address"
                  value={infos.address}
                  onChange={(e) =>
                    setInfos({ ...infos, address: e.target.value })
                  }
                  label="Địa chỉ"
                />
                <InputForm
                  id="cmt_number"
                  value={infos.cmt_number}
                  onChange={(e) =>
                    setInfos({ ...infos, cmt_number: e.target.value })
                  }
                  label="Số chứng minh thư"
                  type="number"
                />
                <InputForm
                  id="cmt_address"
                  value={infos.cmt_address}
                  onChange={(e) =>
                    setInfos({ ...infos, cmt_address: e.target.value })
                  }
                  label="Nơi cấp"
                />
                <DropdownForm
                  id="department_id"
                  value={infos.department_id}
                  onChange={(e) =>
                    setInfos({
                      ...infos,
                      department_id: e.target.value,
                      group_id: undefined,
                    })
                  }
                  options={exchanges}
                  label="Phòng ban (*)"
                  disabled
                />
                <DropdownForm
                  id="group_id"
                  value={infos.group_id}
                  onChange={(e) =>
                    setInfos({ ...infos, group_id: e.target.value })
                  }
                  options={groups}
                  label="Nhóm (*)"
                  disabled
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </FormUpdateDialog>
  );
};

export default UpdateUser;
