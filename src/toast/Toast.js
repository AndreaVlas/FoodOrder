import { ToastContainer, toast } from "react-toastify";

const Toast = (props) => {
  function notify() {
    toast.dark("Verifică email-ul pentru validare!");
  }

  return (
    <>
      <div className="App">
        <div className="btn-group">
          <button onClick={notify} id="animate.css"></button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Toast;
