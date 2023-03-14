import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"

export const LayOut = () => {
    return (
        <>
              <header> <Navigation/> </header>
            <main>
                <Outlet/>
            </main>   
        </>
   
    )
}