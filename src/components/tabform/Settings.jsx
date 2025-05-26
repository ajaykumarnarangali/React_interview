
function Settings({ formData, setFormData }) {

  const { setting } = formData;

  const handleChangeSetting = (e)=>{
      setFormData(prev=>{
        return {...prev,setting:{theme:e.target.value}}
      })
  }

  return (
    <div className="w-full h-full p-2">
      <div className="flex gap-6 items-center">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="light"
            checked={setting.theme === "light"}
            onChange={handleChangeSetting}
          />
          Light
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={setting.theme === "dark"}
            onChange={handleChangeSetting}
          />
          Dark
        </label>
      </div>
    </div>
  )
}

export default Settings