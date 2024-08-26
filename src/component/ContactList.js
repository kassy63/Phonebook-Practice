import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  // const contactList = useSelector((state) => state.contactList);
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  // useEffect(() => {
  //   if (keyword !== "") {
  //     let list = contactList.filter((item) => item.name.includes(keyword));

  //     setFilteredList(list);
  //   } else {
  //     setFilteredList(contactList);
  //   }
  // }, [keyword, contactList]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter(
        (item) =>
          item.name.includes(keyword) || item.phoneNumber.includes(keyword)
      );
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      {/* <ContactItem /> */}
      {/* {contactList.map((item) => (
        <ContactItem item={item} />
      ))} */}
      <div>
        전체: {filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
