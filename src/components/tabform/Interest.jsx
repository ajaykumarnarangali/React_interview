
function Interest({ formData, setFormData,error }) {
  const interests = ["Coding", "Music", "Data Structure"];

  const { interest } = formData;
  let newArray = [...interest];

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    let index = newArray.indexOf(value);
    if (index == -1) {
      newArray.push(e.target.value);
    } else {
      newArray.splice(index, 1);
    }
    setFormData(prev => {
      return { ...prev, interest: newArray }
    })
  }

  return (
    <div className="w-full h-full p-4 space-y-3">
      <h2 className="text-lg font-semibold">Select Interests:</h2>
      {interests.map((interest) => (
        <label key={interest} className="flex items-center gap-2">
          <input
            type="checkbox"
            value={interest}
            checked={formData.interest.includes(interest)}
            onChange={handleCheckboxChange}
          />
          {interest}
        </label>
      ))}
       {error.interest && <p className="text-red-500">{error.interest}</p>}
    </div>
  )
}

export default Interest