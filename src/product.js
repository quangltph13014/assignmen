import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      await fetch(
        "https://615d43db12571a00172074e7.mockapi.io/use/" + id,
        {
          method: "DELETE",
        }
      );
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Xóa</th>
            <th>Cập nhập mới</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index} >
              <td >{product.id} </td >
              <td>
                <Link to={"/product/detail/" + product.id}><img 
      src="https://cuoixastress.com/wp-content/uploads/2021/06/anh-hot-girl-lanh-lung-9.gif"
      style={{ width: 100 }}
      alt="Canvas Logo"
    /><tr>{product.name}</tr></Link>
              </td>
              <td>{product.price}<img 
      src="https://travelgear.vn/blog/wp-content/uploads/2019/06/ky-hieu-tien-te-cac-nuoc-7.jpg"
      style={{ width: 15 }}
      alt="Canvas Logo"
    /></td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => removeProduct(product.id)}
                ><img 
                src="https://icon-library.com/images/icon-recycle-bin/icon-recycle-bin-23.jpg"
                style={{ width: 100 }}
                alt="Canvas Logo"
              />
                 Xóa
                </button>
              </td>
              <td>
                <div className="btn-group">
                  <Link
                    role="button"
                    className="btn btn-success"
                    to={"/product/edit/" + product.id}
                  >
                    <img 
                src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171119673/89598010-update-refresh-icon-isolated-on-green-round-button-abstract-illustration.jpg"
                style={{ width: 50 }, {height: 100}}
                alt="Canvas Logo"
              />
                    Cập nhập sản phẩm
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
