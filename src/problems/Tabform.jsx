
import { useState } from "react"

import { tabs } from "../components/tabform/Tabs";

function Tabform() {

    const [activeTab, setActiveTab] = useState(0);
    const ActiveTabComponent = tabs[activeTab].component;
    const [error, setError] = useState({})

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        interest: [],
        setting: { theme: "light" }
    });

    const handleNextClick = () => {
        if (tabs[activeTab].validation(formData, setError)) {
            setActiveTab(prev => prev + 1);
        }
    }

    const handlePrevClick = () => {
        if (tabs[activeTab].validation(formData, setError)) {
            setActiveTab(prev => prev - 1);
        }
    }

    return (
        <div className='w-full h-screen bg-green-200 flex items-center justify-center p-4'>
            <div className="w-full max-w-2xl h-[70%] flex flex-col">
                <div className="flex items-end flex-1">
                    {
                        tabs.map((tab, index) => (
                            <div key={index}
                                className={`bg-gray-300 p-3 font-semibold hover:shadow-md border hover:border-green-400 cursor-pointer ${activeTab == index ? 'border-gray-400' : ''}`}
                                onClick={() => { setActiveTab(index) }}
                            >
                                {tab.name}
                            </div>
                        ))
                    }
                </div>
                <div className="bg-gray-200 border h-[75%]">
                    <ActiveTabComponent formData={formData} setFormData={setFormData} error={error} />
                </div>
                <div className="bg-gray-300 border flex-1 flex items-center justify-between px-3">

                    <div className="flex gap-3">
                        {activeTab > 0 && (
                            <div className="bg-gray-400 p-2 border rounded-lg cursor-pointer">
                                <button onClick={handlePrevClick}>Prev</button>
                            </div>
                        )}
                        {activeTab >= 0 && activeTab < tabs.length - 1 && (
                            <div className="bg-gray-400 p-2 border rounded-lg cursor-pointer">
                                <button onClick={handleNextClick}>Next</button>
                            </div>
                        )}
                    </div>

                    {activeTab === tabs.length - 1 && (
                        <div className="bg-gray-400 p-2 border rounded-lg cursor-pointer">
                            <button onClick={()=>{alert("value submited")}}>Submit</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Tabform