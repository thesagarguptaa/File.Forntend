import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const API = "https://my-project-ihdl.onrender.com/api/v1/imageUpload";

  const createNew = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("image", data.files[0]);
    formData.append("email", data.email);
    formData.append("imageName", data.imageName);
    formData.append("imageDescription", data.imageDescription);

    try {
      await axios.post(API, formData).then((res) => {
        console.log(res);
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(createNew)}>
        <div className=" spcae-y-5 ">
          <div>
            <label
              htmlFor="imageName"
              className=" text-base font-medium text-gray-900  "
            >
              Image Name
            </label>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter in Image Name"
              className="flex h-10 w-full rounded-md border  border-gray-300  bg-transparent py-2 px-3 text-sm "
              {...register("imageName")}
            ></input>
          </div>
        </div>
        <div className=" spcae-y-5 ">
          <div>
            <label
              htmlFor="imageDescription"
              className=" text-base font-medium text-gray-900  "
            >
              Image Name
            </label>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter in Image Description"
              className="flex h-10 w-full rounded-md border  border-gray-300  bg-transparent py-2 px-3 text-sm "
              {...register("imageDescription")}
            ></input>
          </div>
        </div>

        <div className=" spcae-y-5 ">
          <div>
            <label
              htmlFor="email"
              className=" text-base font-medium text-gray-900  "
            >
              Email
            </label>
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Your email"
              className="flex h-10 w-full rounded-md border  border-gray-300  bg-transparent py-2 px-3 text-sm "
              {...register("email")}
            ></input>
          </div>
        </div>

        <div className=" spcae-y-5 ">
          <div>
            <label
              htmlFor="files"
              className=" text-base font-medium text-gray-900  "
            >
              Image
            </label>
          </div>

          <div>
            <input
              type="file"
              className="flex h-10 w-full rounded-md border  border-gray-300  bg-transparent py-2 px-3 text-sm "
              {...register("files")}
            ></input>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
