import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";

// Form Validation
const AddContacts = () => {
  const [startDate, setStartDate] = useState(new Date());

  const schema = yup
    .object({
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name required"),
      email: yup.string().email().required("Emaill Address is required"),
      dateOfBirth: yup.date().required("Date of birth is required"),
      phone: yup.string().required("Phone number is required"),
      gender: yup.string().nullable(),
      url: yup.string().url().nullable().required("Profile url is required"),
      profession: yup.string().required("Profession is required"),
      messages: yup.string().required("bio is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="container mx-auto my-20 w-1/3 bg-white">
        <div className="space-y-5 ">
          <h4 className="text-center text-3xl text-red-500">Contact Us</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
              <div>
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="First Name"
                  {...register("firstName")}
                />
                {errors && (
                  <p className="text-red-600 text-xs">
                    {errors?.firstName?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 "
                  placeholder="Last Name"
                  {...register("lastName")}
                />

                {errors && (
                  <p className="text-red-600 text-xs">
                    {errors?.lastName?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors && (
                  <p className="text-red-600 text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 "
                  placeholder="Phone"
                  {...register("phone")}
                />
                {errors && (
                  <p className="text-red-600 text-xs">
                    {errors?.phone?.message}
                  </p>
                )}
              </div>
              <div>
                <DatePicker
                  selected={startDate}
                  placeholderText="Choose birthday"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  {...register("date")}
                  maxDate={new Date()}
                  showYearDropdown
                  onChange={(date) => setStartDate(date)}
                />
                {errors && (
                  <p className="text-red-600 text-xs">
                    {errors?.date?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="url"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 "
                  placeholder="Profile picture url"
                  {...register("url")}
                />
                {errors && (
                  <p className="text-red-600 text-xs">{errors?.url?.message}</p>
                )}
              </div>
              <div className="grid grid-cols-3">
                <h2 className="font-semibold"> Gender : </h2>
                <div className="">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 "
                    {...register("gender")}
                  />

                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    defaultChecked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 "
                    {...register("gender")}
                  />

                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Female
                  </label>
                  {errors && (
                    <p className="text-red-600 text-xs">
                      {errors?.gender?.message}
                    </p>
                  )}
                </div>
              </div>
              <select
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                {...register("profession")}
              >
                <option disabled>Choose Profession</option>
                <option>Graphics Designer</option>
                <option>Web Designer</option>
                <option>Web Developer</option>
                <option>Software Developer</option>
              </select>

              {errors && (
                <p className="text-red-600 text-xs">
                  {errors?.profession?.message}
                </p>
              )}

              <textarea
                cols="10"
                rows="5"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
                {...register("messages")}
              ></textarea>
              {errors && (
                <p className="text-red-600 text-xs">
                  {errors?.messages?.message}
                </p>
              )}
            </div>
            <input
              type="submit"
              value="Send Message"
              className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full cursor-pointer "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContacts;
