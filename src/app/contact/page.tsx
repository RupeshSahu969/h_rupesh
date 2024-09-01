import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full h-26 bg-[#032049] flex items-center justify-center py-4">
        s
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around w-full bg-[#577297] p-8 gap-8">
        <div className="flex flex-col items-center text-white text-center gap-2">
          <FontAwesomeIcon
            icon={faPhone}
            size="2x"
            style={{ width: "30px", height: "30px" }}
          />
          <h3 className="text-xl">Pratmesh Helpline</h3>
          <p className="mt-2">
            Can be dialed irrespective of the
            <br />
            telecom operator and location in India.
          </p>
          <h3 className="text-[#FFBE9D] text-xl mt-5">2243 5573 8890</h3>
        </div>
        <div className="flex flex-col text-white items-center text-center gap-2">
          <FontAwesomeIcon
            icon={faPhone}
            size="2x"
            style={{ width: "30px", height: "30px" }}
          />
          <h3 className="text-xl">Hospital Location</h3>
          <p className="mt-2">
            We have been a pioneer in
            <br />
            bringing world-class healthcare <br />
            to the doorsteps of every Indian.
          </p>
          <h3 className="text-[#FFBE9D] text-xl mt-5">Find Location</h3>
        </div>
        <div className="flex flex-col items-center text-white text-center gap-2">
          <FontAwesomeIcon
            icon={faPhone}
            size="2x"
            style={{ width: "30px", height: "30px" }}
          />
          <h3 className="text-xl">Book Appointment Online</h3>
          <p className="mt-2">
            Combining the best specialties
            <br />
            and equipment to provide you the best in healthcare.
          </p>
          <h3 className="text-[#FFBE9D] text-xl mt-5">Book Now</h3>
        </div>
      </div>
      <h2 className="text-3xl font-bold my-4">Contact Us</h2>
      <p className="text-lg text-center max-w-3xl mb-8 px-4">
        Rupesh Hospitals is always looking to make things easier for you. Our
        aim is to provide our customers with the best medical facilities,
        constant care, and reliable support. If you would like to get in touch
        with a doctor from a specific department, would like some specific
        information about the services we provide, or just have a question for
        us, please fill up the form given below and we will get back to you.
      </p>
      <div className="flex justify-center mb-5 gap-6">
        <h3 className=" text-blue-300">
          <u>Enquiry</u>
        </h3>
        <h3>
          <u>Complaint</u>
        </h3>
        <h3>
          <u>Feedback</u>
        </h3>
      </div>
      <form className="flex flex-col items-center w-full max-w-xl gap-4 px-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
          />
          <select className="w-full md:w-1/2 p-2 border border-gray-300 rounded">
            <option>India</option>
            {/* Add other countries as needed */}
          </select>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <select className="w-full md:w-1/2 p-2 border border-gray-300 rounded">
            <option>Select Specialty</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
            <option>Gynecology</option>
            {/* Add other specialties as needed */}
          </select>
          <select className="w-full md:w-1/2 p-2 border border-gray-300 rounded">
            <option>Select Doctor</option>
            <option>Dr. John Doe</option>
            <option>Dr. Jane Smith</option>
            <option>Dr. Alan Brown</option>
            <option>Dr. Emily White</option>
            {/* Add other doctors as needed */}
          </select>
        </div>
        <textarea
          placeholder="Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-[#022E58] text-white py-2 px-4 w-40 rounded mt-4"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
