import { Button, Image } from "@/uiCore";
import { useEffect } from "react";

export const UploadMultiImage = (props) => {
  const { images, setImages, label, view } = props;
  const onChange = (e) => {
    const files = e.target.files;
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
      imagesArray.push(files[i]);
      if (imagesArray.length === files.length) {
        setImages([...images, ...imagesArray]);
      }
    }
  };

  const removeImg = (i, item) => {
    const files = images;
    setImages(files.filter((f) => f !== item));
  };

  const removeAll = () => {
    setImages([]);
  };

  return (
    <div className="mb-3 px-2">
      <label className="font-medium">{label || "Chọn hình ảnh"}</label>
      <div className={!view ? "card mt-2" : "mt-2"}>
        {!view && (
          <div className="flex justify-content-end align-items-center mb-3">
            <div className="flex align-items-center gap-2">
              {!view && (
                <Button
                  icon="pi pi-times"
                  disabled={!(images && images[0])}
                  onClick={removeAll}
                  severity="danger"
                  label="Bỏ chọn"
                  type="button"
                />
              )}
              {!view && (
                <label
                  className="p-button p-fileupload-choose p-component"
                  style={{ minHeight: "40px" }}
                >
                  <i className="pi pi-images mr-2"></i>
                  <span className="p-button-text p-clickable">Chọn</span>
                  <input
                    type="file"
                    onChange={onChange}
                    multiple
                    accept="image/jpeg, image/png, image/gif"
                    className="p-inputtext p-component"
                  />
                </label>
              )}
            </div>
          </div>
        )}

        <div
          style={{ overflowX: "scroll" }}
          className="card bg-color flex gap-4"
        >
          {images &&
            images[0] &&
            images.map((item, index) => {
              return (
                item && (
                  <div key={index} className="flex flex-column">
                    <Image
                      src={typeof item === "string" ? item : item.preview}
                      alt="Image"
                      width="150"
                      height="120"
                      preview
                    />
                    {!view && (
                      <div className="text-center mt-2">
                        <Button
                          onClick={(i) => removeImg(i, item)}
                          type="button"
                          icon="pi pi-times"
                        />
                      </div>
                    )}
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export const UploadImg = (props) => {
  const { image, setImage = () => {}, title, view, width, height } = props;

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const clearImg = () => {
    setImage("");
  };

  return (
    <div className="w-full flex flex-column justify-content-center text-center">
      <h5 className="mb-2 ml-2 text-center">{title}</h5>
      {image ? (
        <Image
          src={
            typeof image === "string"
              ? image || "/assets/img/imgIcon.png"
              : image.preview || "/assets/img/imgIcon.png"
          }
          alt="Image"
          width={width ? width : "150"}
          height={height ? height : "130"}
          preview
        />
      ) : (
        ""
      )}
      {!image && (
        <Image
          src="/assets/img/imgIcon.png"
          alt="Image"
          width="150"
          height="130"
        />
      )}
      {!view && (
        <div className="flex align-items-center justify-content-center gap-2">
          {clearImg && (
            <Button
              onClick={clearImg}
              type="button"
              icon="pi pi-times"
              style={{ width: "40px", height: "40px", padding: "0 auto" }}
            />
          )}
          <label
            className="p-button p-fileupload-choose p-component text-center"
            style={{ height: "40px" }}
          >
            <span className="p-button-text p-clickable">Chọn</span>
            <input
              type="file"
              onChange={handleAvatar}
              multiple
              accept="image/jpeg, image/png, image/gif"
              className="p-inputtext p-component"
            />
          </label>
        </div>
      )}
    </div>
  );
};
