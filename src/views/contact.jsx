import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MapPin, Phone } from "react-feather";
import siteSettings from "../settings/site-settings";
import Container from "../components/ui/container";
import Button from "../components/ui/button";
import Typography from "../components/ui/typography";

const contactFormSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address.")
    .trim()
    .required("Email is required."),
  contactNumber: yup
    .string("Invalid contact number.")
    .length(10, "Contact cumber should be 10 digits.")
    .length(10, "Contact cumber should be 10 digits."),
  message: yup.string().trim().required("Message is required."),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Container className="mt-16">
        <Typography size="header" className="capitalize text-center text-2x">
          Contact Us
        </Typography>
        <Typography typ="paragraph" className="mt-3 text-center leading-6">
          Do you have any question?
        </Typography>

        <div className="lg:flex lg:space-x-20 mt-10">
          <div>
            <div className="grow-0 max-w-[700px] mx-auto p-10 rounded-md shadow">
              <div className="text-center flex justify-center">
                <div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-gray-900" />
                    <Typography className="ml-2">
                      {siteSettings.contact}
                    </Typography>
                  </div>
                  <div className="flex items-center mt-7">
                    <Mail size={18} className="text-gray-900" />
                    <Typography className="ml-2">
                      {siteSettings.email}
                    </Typography>
                  </div>
                  <div className="flex items-center mt-7">
                    <MapPin size={18} className="text-gray-900" />
                    <Typography className="ml-2">
                      {siteSettings.location}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grow mt-10 lg:mt-0">
            <div className="flex justify-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-[700px]"
              >
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg active:border-primary focus:border-primary text-gray-700"
                />
                <p className="text-sm mt-1 text-error">
                  {errors?.name?.message || ""}
                </p>
                <input
                  {...register("email")}
                  placeholder="Your email"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg active:border-primary focus:border-primary text-gray-700 mt-7"
                />
                <p className="text-sm mt-1 text-error">
                  {errors?.email?.message || ""}
                </p>
                <input
                  type="number"
                  {...register("contactNumber")}
                  placeholder="Your contact"
                  className="w-full border border-gray-300 px-2 py-2 outline-none rounded-lg active:border-primary focus:border-primary text-gray-700 mt-7"
                />
                <p className="text-sm mt-1 text-error">
                  {errors?.contactNumber?.message || ""}
                </p>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Your message"
                  className="w-full border border-gray-300 px-2 py-2
                 outline-none rounded-lg mt-7 active:border-primary focus:border-primary"
                />
                <p className="text-sm mt-1 text-error">
                  {errors?.message?.message || ""}
                </p>
                <Button
                  type="submit"
                  className="bg-primary text-slate-100 mt-7 hover:bg-darkPrimary"
                >
                  Submit Form
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
