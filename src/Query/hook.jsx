import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const fetchUsers = async (method, data) => {
    const response = await axios("http://localhost:2000/users", {
        method: method,
        data
    });
    return response.data;
};

export const useUserList = () => {

    // const [isDisplay, setIsdisplay] = useState(false);
    // const { data, isLoading, error, isSuccess } =useQuery({...})
    //for fetching data ---->useQuery
    return useQuery({
        queryKey: ["users"],
        queryFn: () => {
           return fetchUsers("GET", null)
        },
        // enabled: isDisplay,
        staleTime: 1000 * 60 * 5,
        retry: 7,
        refetchOnWindowFocus: false
    })
}

export const useUserMutaionList = () => {

    //when stale time exeeded react query refetches the data when window on focus

    const queryclient = useQueryClient();//can then use it to read or update cached data, invalidate queries, etc

    //for posting --->useMutaion
    // const { mutate } = useMutation({...})

    return useMutation({
        mutationFn: () => {
           return fetchUsers("POST", { id: 5, name: "ajay kumar n" })
        },
        onSuccess: (response) => {
            // queryclient.setQueryData(["users"], (old) => [...old, response.data]) it update the existing data
            queryclient.invalidateQueries({
                queryKey: ["users"]
            })
        }
    })
}