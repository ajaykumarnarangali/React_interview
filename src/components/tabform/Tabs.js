import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'

export const tabs = [
    {
        name: "Profile",
        component: Profile,
        validation: (data, setError) => {
            const err = {};
            if (!data.name || data.name.length < 3) {
                err.name = "enter valid name"
            }

            if (!data.age || data.age < 18) {
                err.age = "enter valid age"
            }

            if (!data.email) {
                err.email = "enter valid email"
            }
            setError(err);
            return err.name || err.age || err.email ? false : true;
        }
    },
    {
        name: "Interest",
        component: Interest,
        validation: (data, setError) => {
            const err = {};
            if (data.interest.length<=0) {
                err.interest = "select any of the values"
            }

            setError(err);
            return err.interest ? false : true;
        }
    },
    { name: "Setting", component: Settings,validation:()=>{return true;} }
]