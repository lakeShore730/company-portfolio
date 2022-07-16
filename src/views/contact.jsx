import Container from "../components/ui/container";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import siteSettings from "../settings/site-settings";
import Button from "../components/ui/button";
import { MdPhone, MdAlternateEmail, MdLocationOn } from "react-icons/md";

const conatactFormSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .trim()
    .required("Email is required"),
  contactNumber: yup
    .string("Invalid conatact number")
    .length(10, "Conatact cumber should be 10 digits")
    .length(10, "Conatact cumber should be 10 digits"),
  message: yup.string().trim().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(conatactFormSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="min-h-[calc(100vh)]">
        <Container>
          <Navbar />
          <div className="py-16">
            <h1 className="capitalize font-semibold text-center text-2xl text-gray-600">
              Contact Us
            </h1>
            <p className="mt-3 text-md text-gray-600 text-center leading-6">
              Do you have any question ?
            </p>

            <div className="flex justify-center mt-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-[700px]"
              >
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg text-gray-700"
                />
                <p className="text-sm mt-1 text-red-700">
                  {errors?.name?.message || ""}
                </p>
                <input
                  {...register("email")}
                  placeholder="Your email"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg text-gray-700 mt-7"
                />
                <p className="text-sm mt-1 text-red-700">
                  {errors?.email?.message || ""}
                </p>
                <input
                  type="number"
                  {...register("contactNumber")}
                  placeholder="Your conatct"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg text-gray-700 mt-7"
                />
                <p className="text-sm mt-1 text-red-700">
                  {errors?.contactNumber?.message || ""}
                </p>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Your message"
                  className="w-full border border-gray-300 px-2 py-2
                 outline-none rounded-lg mt-7"
                />
                <p className="text-sm mt-1 text-red-700">
                  {errors?.message?.message || ""}
                </p>
                <Button
                  type="submit"
                  className="bg-primary text-slate-100 mt-7 hover:bg-[#61045f]"
                >
                  Submit Form
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <div className="pb-16">
        <Container>
          <h1 className="capitalize font-semibold text-center text-2xl text-gray-600">
            Contact Information
          </h1>
          <p className="mt-3 text-md text-gray-600 text-center leading-6">
            Our contact information
          </p>
          <div className="mt-8 text-gray-600 text-center flex justify-center">
            <div>
              <div className="flex items-center">
                <MdPhone className="text-primary" />
                <p className="ml-2">{siteSettings.contact}</p>
              </div>
              <div className="flex items-center mt-2">
                <MdAlternateEmail className="text-primary" />
                <p className="ml-2">{siteSettings.email}</p>
              </div>
              <div className="flex items-center mt-2">
                <MdLocationOn className="text-primary" />
                <p className="ml-2">{siteSettings.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-16 bg-[#fcfcfc]">
        <Container>
          <Footer className="py-8" />
        </Container>
      </div>
    </div>
  );
};

export default Contact;
