import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      await fetch(
        "https://616f779f715a630017b39c8c.mockapi.io/asdfas" + id,
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
      src="https://www.bing.com/images/search?view=detailV2&ccid=pTneMT9O&id=9EFA9B336535BEFAB97FC405BCEBC494B81CD0CB&thid=OIP.pTneMT9O4U87p9sbv6H0qwHaHY&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a539de313f4ee14f3ba7db1bbfa1f4ab%3frik%3dy9AcuJTE67wFxA%26riu%3dhttp%253a%252f%252fwww.bianoti.com%252fwp-content%252fuploads%252f20150426_553ce2aa9fb2e.jpg%26ehk%3d535zrJ0bmLyLNMm8ctVK0bTRU0Ivf3%252b5b97HLKkMCJk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=763&expw=765&q=My+Nhan+Trung+Quoc&simid=608019802787282983&FORM=IRPRST&ck=AAEC61713261E21B777BAF5C4DE7F4B9&selectedIndex=3&ajaxhist=0&ajaxserp=0"
      style={{ width: 100 }}
      alt="Canvas Logo"
    /><tr>{product.name}</tr></Link>
              </td>
              <td>{product.price}<img 
      src="https://www.bing.com/images/search?view=detailV2&ccid=HntpS0vX&id=99552AE556E130B07DAC87648D4C644D3472B7AB&thid=OIP.HntpS0vXxYbNtCERtrl4wQHaHP&mediaurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F01%2F36%2F35%2F01363557cc4fe6a390c2e65513a0d089.jpg&exph=473&expw=484&q=My+Nhan+Trung+Quoc&simid=608028912413901439&form=IRPRST&ck=3C7152F1C3A348ACD5F6BF6DB86D3167&selectedindex=1&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.1e7b694b4bd7c586cdb42111b6b978c1%3Frik%3Dq7dyNE1kTI1khw%26pid%3DImgRaw%26r%3D0&pivotparams=insightsToken%3Dccid_pTneMT9O*cp_AAEC61713261E21B777BAF5C4DE7F4B9*mid_9EFA9B336535BEFAB97FC405BCEBC494B81CD0CB*simid_608019802787282983*thid_OIP.pTneMT9O4U87p9sbv6H0qwHaHY&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0"
      style={{ width: 15 }}
      alt="Canvas Logo"
    /></td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => removeProduct(product.id)}
                ><img 
                src="https://www.bing.com/images/search?view=detailV2&ccid=imrJ1g9Q&id=252EB45717D51F18228CB70D8477F227CFDA76D3&thid=OIP.imrJ1g9QD6YubTdx6yRK-QAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F93%2F2b%2Fe6%2F932be63bc42f89868f1b1f58c3f2d821.jpg&exph=369&expw=356&q=My+Nhan+Trung+Quoc&simid=608044799498930577&form=IRPRST&ck=6958CFBEAFAECA4F47AF1A991A354B25&selectedindex=8&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8a6ac9d60f500fa62e6d3771eb244af9%3Frik%3D03bazyfyd4QNtw%26pid%3DImgRaw%26r%3D0&pivotparams=insightsToken%3Dccid_HntpS0vX*cp_3C7152F1C3A348ACD5F6BF6DB86D3167*mid_99552AE556E130B07DAC87648D4C644D3472B7AB*simid_608028912413901439*thid_OIP.HntpS0vXxYbNtCERtrl4wQHaHP&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0"
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
                src="https://www.bing.com/images/search?view=detailV2&ccid=qjic4FFB&id=629A5EAF44CF1C312BBB8C07ACA07223EECCDB8D&thid=OIP.qjic4FFByJZtBmdvgRzuVAHaJ3&mediaurl=https%3A%2F%2F88razzi.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fimages%2F2018%2F08%2F29%2Fnode-4969%2F9b8510e5ly1fu2jxu5rtpj22c0340he1.jpg%3Fitok%3DcoCvi8ZA&exph=870&expw=653&q=My+Nhan+Trung+Quoc&simid=608055519729563610&form=IRPRST&ck=6AF4AF2DD50DF1B4416AFF7A9FC1C126&selectedindex=26&ajaxhist=0&ajaxserp=0&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.aa389ce05141c8966d06676f811cee54%3Frik%3DjdvM7iNyoKwHjA%26pid%3DImgRaw%26r%3D0&pivotparams=insightsToken%3Dccid_imrJ1g9Q*cp_6958CFBEAFAECA4F47AF1A991A354B25*mid_252EB45717D51F18228CB70D8477F227CFDA76D3*simid_608044799498930577*thid_OIP.imrJ1g9QD6YubTdx6yRK-QAAAA&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0"
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
