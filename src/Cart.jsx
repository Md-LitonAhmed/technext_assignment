import { useNavigate } from "react-router-dom";

export default function Cart({ person }) {
  const { id,firstName, lastName, email, address, company, image } = person;
  const navigate=useNavigate()
  console.log(person)
  return (
    <>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={image}
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {firstName}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                {/* <p>Web Developer</p> */}
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      First Name
                    </td>
                    <td className="px-2 py-2 text-black font-bold">{firstName}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Last Name
                    </td>
                    <td className="px-2 py-2 text-black font-bold">{lastName}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2  text-black font-bold">{email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2  text-black font-bold">
                      {address.state}, {address.city}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Company Name
                    </td>
                    <td className="px-2 py-2  text-black font-bold">{company.name}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                 id={id}
                onClick={()=>navigate("/profile/" + id)}
               
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
