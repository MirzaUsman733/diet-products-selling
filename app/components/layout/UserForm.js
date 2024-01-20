'use client';
import AddressInputs from "@/app/components/layout/AddressInputs";
import EditableImage from "@/app/components/layout/EditableImage";
import { useProfile } from "@/app/components/UseProfile";
import { useState } from "react";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
  const [postalCode, setPostalCode] = useState(user?.postalCode || '');
  const [city, setCity] = useState(user?.city || '');
  const [country, setCountry] = useState(user?.country || '');
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === 'phone') setPhone(value);
    if (propName === 'streetAddress') setStreetAddress(value);
    if (propName === 'postalCode') setPostalCode(value);
    if (propName === 'city') setCity(value);
    if (propName === 'country') setCountry(value);
  }

  return (
    <div className="md:flex gap-4">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={ev =>
          onSave(ev, {
            name: userName, image, phone, admin,
            streetAddress, city, country, postalCode,
          })
        }
      >
        <label className="block text-sm font-medium text-gray-700">
          First and last name
        </label>
        <input
          type="text" placeholder="First and last name"
          value={userName} onChange={ev => setUserName(ev.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={'email'}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
              <input
                id="adminCb" type="checkbox" className="form-checkbox"
                checked={admin}
                onChange={ev => setAdmin(ev.target.checked)}
              />
              <span className="ml-2">Admin</span>
            </label>
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Save</button>
      </form>
    </div>
  );
}