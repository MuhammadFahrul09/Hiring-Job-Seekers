import React from "react";
import SearchButton from "../../components/SearchButton";
import CardInfo from "../../components/CardInfo";

const HomeSection = () => {
    return(
        <div className="h-full py-10 bg-Grey1">
            <SearchButton />
            <CardInfo />
        </div>
    )
}

export default HomeSection