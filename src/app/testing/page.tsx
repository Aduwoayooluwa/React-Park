"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Test() {
    const url = "https://api.balldontlie.io/v1/players?per_page=100"
    const [players, setPlayers] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [playerO, setPlayerO] = useState([])
    const [search, searchPlayer ] = useState("")
    const token = "047a664a-0234-41e4-abc4-d8cc40356e9f"

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(url, {
                headers: {
                    Authorization: "047a664a-0234-41e4-abc4-d8cc40356e9f"
                }
            })
                console.log(response?.data?.data)
                setPlayers(response?.data?.data)
            return response?.data
            
            }
            catch (error) {
                
            }
            finally {
                setLoading(false)
            }
        }

        fetchPlayers();
    }, [url])


    const getPlayersForaTeam = () => players?.filter((player: any) => {
        if (player?.team?.name === "Bucks") {
            return player
        }
    })

    function handlePlayerSearch(e) {
        console.log(e.target.value)
        searchPlayer(e.target.value)
    }  
    
    const filterSearch = () => getPlayersForaTeam()?.filter((player: any) => player?.first_name.trim().toLowerCase().includes(search.trim().toLowerCase()))
    console.log(filterSearch())



    if (loading) return <p>Loading....</p>

    return (
        <div className="w-full space-y-5 p-5">
            <div>
                <input placeholder="search me" className="p-3 text-black rounded-xl" onChange={ handlePlayerSearch} />
            </div>

            {
                filterSearch()?.map((pl: any) => (
                    <div className="bg-red-200 p-4 text-black w-full font-medium rounded-xl" key={pl?.id}>
                        <p>{pl.first_name} {' '} {pl.last_name}</p>
                        <p>Country: { pl?.country}</p>
                        <p>Team : {pl?.team?.name}</p>
                    </div>

                ))
            }
        </div>
    )
}