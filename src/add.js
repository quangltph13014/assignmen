import { propTypes } from "react-bootstrap/esm/Image";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
//hellooooo
export default function Add(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://615d43db12571a00172074e7.mockapi.io/use", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.onAdd(data);
        history.push("/product");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Tên</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Trường name không được bỏ trống</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Giá</label>
        <input type="number" className="form-control" {...register("price")} />
        {errors.price && <span>Trường price không được bỏ trống</span>}
      </div>
      <button type="submit" className="btn btn-info">
        Thêm sản phẩm
      </button>
    </form>
  );
}
