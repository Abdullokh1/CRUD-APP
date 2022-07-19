import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import books from "../../../api/API";

function BookItems({ item, index }) {
  const { name, author, price, id } = item;

  const deleteData = (id) => {
    if (window.confirm("Are you sure")) {
      books.deleteBooks(id);
      toast.success("Removed successfully", {
        autoClose: 1000,
      });
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>
        <Link to={`/BookEdit/${id}`}>
          <button className="btn btn-primary me-3">Edit</button>
        </Link>
        <button onClick={() => deleteData(id)} className="btn btn-danger">
          Delete
        </button>
        <ToastContainer />
      </td>
    </tr>
  );
}

export default BookItems;
