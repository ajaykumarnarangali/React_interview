

function Profile({ formData, setFormData, error }) {

  const { name, age, email } = formData;

  const handleOnchange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="w-full h-full flex flex-col py-3 gap-3">
      <div className="flex gap-2 items-center">
        <label className="w-14">Name :</label>
        <input type="text" placeholder="Enter Name" name="name" className=" outline-none p-2" value={name} onChange={handleOnchange} />
        {error.name && <p className="text-red-500">{error.name}</p>}
      </div>
      <div className="flex gap-2 items-center">
        <label className="w-14">Age :</label>
        <input type="number" placeholder="Enter Age" name="age" className=" outline-none p-2" value={age} onChange={handleOnchange} />
         {error.age && <p className="text-red-500">{error.age}</p>}
      </div>
      <div className="flex gap-2 items-center">
        <label className="w-14">Email :</label>
        <input type="text" placeholder="Enter Email" name="email" className=" outline-none p-2" value={email} onChange={handleOnchange} />
         {error.email && <p className="text-red-500">{error.email}</p>}
      </div>
    </div>
  )
}

export default Profile