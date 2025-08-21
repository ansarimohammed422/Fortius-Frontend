import React, { useState, useContext } from "react";
import Button from "../Button";
import { TestSelection } from "../../Context/Context";
import { OfferPriceContext } from "../../Context/Context";

const SearchBar = (props) => {
  const { offerPrice } = useContext(OfferPriceContext);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const values = useContext(TestSelection);
  const [catetests, setcatetests] = useState([]);
  let total_price = 0;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const dataset =
      catetests && catetests.length > 0 ? catetests : props.alltests;

    if (value.trim() === "") {
      setSuggestions(dataset);
      setShowAll(true);
    } else {
      const filtered = dataset.filter((test) =>
        test.name.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filtered);
      setShowAll(false);
    }
  };
  const handleFocus = () => {
    setShowAll(true);
    setSuggestions(props.alltests);
    console.log("PkgPrice:-" + props.offerPrice);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setShowAll(false);
      setSuggestions([]);
    }, 200);
  };

  const handleSuggestionClick = (test) => {
    values.setSelectedTest([...values.selectedTest, test]);

    setQuery(test.name);
    setShowAll(false);
    setSuggestions([]);
  };

  const deleteTests = (index) => {
    const updatedTests = values.selectedTest.filter((_, i) => i !== index);
    values.setSelectedTest(updatedTests);
  };

  return (
    <div className="w-full">
      {/* Search Input */ console.log(props.alltests)}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search tests..."
        className="w-full p-4 border border-teal-400 rounded-full text-xl focus:outline-none
                   focus:ring-2 focus:ring-teal-400 focus:shadow-lg focus:bg-white focus:shadow-teal-400
                   transition-all ease-linear duration-500"
      />

      {/* Suggestions Table */}
      {suggestions.length > 0 && (
        <div
          className="w-full bg-white border border-gray-300 rounded-xl shadow-md mt-3
                        max-h-60 overflow-y-auto transition-all ease-linear duration-500"
        >
          <table className="w-full text-left border-collapse bg-teal-50">
            <thead>
              <tr className="bg-blue-950 border-b text-teal-400">
                <th className="p-3">ID</th>
                <th className="p-3">Test Name</th>
                <th className="p-3">Original Price</th>
                <th className="p-3">Membership Discounted</th>
                <th className="p-3">General Discounted</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((test) => (
                <tr
                  key={test.id}
                  className="hover:bg-teal-100 cursor-pointer transition-all ease-linear duration-500"
                  onClick={() => handleSuggestionClick(test)}
                >
                  <td className="p-3 font-semibold text-blue-950 ">
                    {test.id}
                  </td>
                  <td className="p-3 font-semibold text-blue-950">
                    {test.name}
                  </td>
                  <td className="p-3 font-semibold text-blue-950">
                    Rs. {test.price}
                  </td>
                  {test.membership_price && (
                    <td className="p-3 font-bold text-teal-400">
                      {test.membership_price == test.price
                        ? null
                        : "Rs." + test.membership_price}
                    </td>
                  )}

                  {test.general_offer_price && (
                    <td className="p-3 font-bold text-teal-400">
                      {test.general_offer_price == test.price
                        ? null
                        : "Rs." + test.general_offer_price}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Selected Tests */}
      {values.selectedTest.length > 0 && (
        <div className="mt-4 text-teal-500 bg-gray-50 border border-teal-400 p-3 rounded-xl">
          <h1 className="mb-5 text-lg">Selected Tests</h1>
          <div className="grid grid-cols-4 gap-5">
            {values.selectedTest.map((test, index) => {
              total_price += test.discounted_price ?? test.price;
              return (
                <div
                  key={test.id}
                  className="bg-white p-3 rounded-xl border border-teal-400
                             flex flex-col gap-3 items-start shadow-xl"
                >
                  <h1 className="text-base text-blue-950 font-semibold">
                    {test.name}
                  </h1>
                  <h1 className="text-blue-950 m-0">
                    Price: Rs. {test.discounted_price ?? test.price}
                  </h1>
                  <Button
                    bname="Delete"
                    customClass="text-sm"
                    bifunc={() => deleteTests(index)}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-between items-center">
            <h1 className="text-xl flex justify-between w-full">
              <div>
                <span className="text-blue-950 font-bold">Total Price:</span>
                <span className="font-bold drop-shadow-2xl">
                  {" "}
                  Rs.{props.offerPrice ?? total_price}
                </span>
              </div>
              <div>
                <span className="text-blue-950 font-bold">Offer Price:</span>
                <span className="font-bold drop-shadow-2xl">
                  {" "}
                  Rs.
                  {offerPrice && offerPrice !== totalPrice ? offerPrice : null}
                </span>
              </div>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
